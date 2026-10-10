import test from "node:test";
import assert from "node:assert/strict";
import {
  createAnalytics,
  sanitizeProperties,
  observeExposure,
} from "../src/lib/analytics.js";
import { createMeasurement, PREFERENCE_KEY } from "../src/lib/measurement.js";
import {
  createUmamiLoader,
  safePageUrl,
  safeReferrer,
} from "../src/lib/umami.js";
import { JSDOM } from "jsdom";
const tick = () => new Promise((r) => setTimeout(r, 0));
const websiteId = "11111111-1111-4111-8111-111111111111";

test("schema v2 excludes demo events, form content and uncontrolled properties", () => {
  const events = [];
  const a = createAnalytics({
    enabled: true,
    adapter: (...e) => events.push(e),
  });
  a.track("demo_start", { scenario: "normal" });
  a.track("contact_click", {
    domain: "quality",
    location: "solution",
    email: "secret@example.com",
    demo_explored: true,
  });
  assert.equal(events.length, 1);
  assert.deepEqual(events[0][1], {
    schema_version: "2",
    language: "en",
    domain: "quality",
    location: "solution",
  });
  assert.deepEqual(
    sanitizeProperties({
      domain: "arbitrary",
      stage: "test",
      serial: "ABC",
      language: "es",
    }),
    { schema_version: "2", language: "es" },
  );
});
test("page/exposure deduplication survives revocation and reacceptance", () => {
  const events = [];
  const a = createAnalytics({ enabled: true, adapter: (n) => events.push(n) });
  for (let i = 0; i < 2; i++) {
    a.track("page_view", {}, "page");
    a.track("domain_view", { domain: "apqp" }, "apqp");
  }
  a.setEnabled(false);
  a.track("contact_click");
  a.setEnabled(true);
  a.track("page_view", {}, "page");
  assert.deepEqual(events, ["page_view", "domain_view"]);
});
test("permission gates provider loading; rejected and loading-period events never replay", async () => {
  let loads = 0,
    complete;
  const events = [];
  const m = createMeasurement({
    configured: true,
    environment: "production",
    load: () => {
      loads++;
      return new Promise((r) => {
        complete = r;
      });
    },
  });
  await m.start();
  m.analytics.track("form_start");
  assert.equal(loads, 0);
  const ready = m.choose("on");
  m.analytics.track("contact_click");
  assert.equal(loads, 1);
  complete((...e) => events.push(e));
  await ready;
  await tick();
  assert.deepEqual(
    events.map((e) => e[0]),
    ["page_view"],
  );
  m.analytics.track("contact_click", {
    domain: "manufacturing",
    location: "solution",
  });
  await tick();
  assert.equal(events.length, 2);
  await m.choose("off");
  m.analytics.track("form_submit_success");
  await tick();
  assert.equal(events.length, 2);
});
test("revoking while provider loads prevents late enable and any event", async () => {
  let complete;
  const events = [];
  const m = createMeasurement({
    configured: true,
    environment: "production",
    load: () =>
      new Promise((r) => {
        complete = r;
      }),
  });
  const pending = m.choose("on");
  await m.choose("off");
  complete((...e) => events.push(e));
  await pending;
  await tick();
  assert.equal(m.state().enabled, false);
  assert.equal(events.length, 0);
});
test("preview, no account, privacy signals and legacy preferences never load provider", async () => {
  for (const options of [
    { environment: "preview", configured: true },
    { environment: "production", configured: false },
    { environment: "production", configured: true, privacy: () => true },
  ]) {
    let calls = 0;
    const m = createMeasurement({
      ...options,
      load: () => {
        calls++;
      },
      storage: { getItem: (key) => (key === PREFERENCE_KEY ? "on" : null) },
    });
    await m.start();
    await m.choose("on");
    assert.equal(calls, 0);
    assert.equal(m.state().enabled, false);
  }
  const m = createMeasurement({
    configured: true,
    environment: "production",
    storage: {
      getItem: (key) => (key === "kelmetrik-measurement-v1" ? "on" : null),
    },
  });
  await m.start();
  assert.equal(m.state().choice, "unset");
});
test("storage denial and blocked or failing providers leave interaction safe", async () => {
  const m = createMeasurement({
    configured: true,
    environment: "production",
    storage: {
      getItem() {
        throw Error();
      },
      setItem() {
        throw Error();
      },
    },
    load: async () => {
      throw Error("blocked");
    },
  });
  await m.choose("on");
  assert.equal(m.state().status, "unavailable");
  assert.equal(m.state().enabled, false);
  const n = createMeasurement({
    configured: true,
    environment: "production",
    load: async () => () => Promise.reject(Error("offline")),
  });
  await n.choose("on");
  await tick();
  assert.equal(n.state().status, "unavailable");
  const a = createAnalytics({
    enabled: true,
    adapter: () => {
      throw Error("blocked");
    },
  });
  assert.doesNotThrow(() => a.track("contact_click"));
});
test("Umami loader disables auto tracking and sends only sanitized manual payloads", async () => {
  const dom = new JSDOM("<!doctype html><title>Kelmetrik</title>", {
    url: "https://www.kelmetrik.com/es/?email=secret&utm_source=linkedin&utm_campaign=private@email#contact",
    referrer: "https://example.com/private?email=secret",
  });
  let allowed = true;
  const calls = [];
  const loader = createUmamiLoader({
    websiteId,
    win: dom.window,
    doc: dom.window.document,
    canSend: () => allowed,
  });
  assert.equal(dom.window.document.querySelectorAll("script").length, 0);
  const promise = loader();
  const script = dom.window.document.querySelector("script");
  assert.equal(script.dataset.autoTrack, "false");
  assert.equal(script.dataset.beforeSend, "kelmetrikBeforeSend");
  assert.equal(script.dataset.distinctId, undefined);
  dom.window.umami = {
    track: (callback) => calls.push(callback({ id: "secret", url: "unsafe" })),
  };
  script.dispatchEvent(new dom.window.Event("load"));
  const send = await promise;
  send("page_view", { language: "es" });
  send("contact_click", {
    email: "secret",
    domain: "quality",
    location: "solution",
  });
  assert.equal(calls[0].name, undefined);
  assert.equal(calls[0].url, "/es/?utm_source=linkedin");
  assert.equal(calls[0].referrer, "https://example.com");
  assert.equal(calls[0].id, undefined);
  assert.equal(calls[1].data.email, undefined);
  allowed = false;
  send("contact_click", {});
  assert.equal(calls.length, 2);
  assert.equal(dom.window.kelmetrikBeforeSend("event", calls[1]), false);
  assert.equal(safeReferrer("javascript:alert(1)"), "");
  assert.equal(
    safePageUrl("https://kelmetrik.com/?utm_source=hello%40test.com"),
    "/",
  );
  dom.window.close();
});
test("Umami script load failure is bounded and recoverable", async () => {
  const dom = new JSDOM("", { url: "https://kelmetrik.com/" });
  const loader = createUmamiLoader({
    websiteId,
    win: dom.window,
    doc: dom.window.document,
    canSend: () => true,
    timeoutMs: 5,
  });
  await assert.rejects(loader(), /unavailable/);
  assert.equal(dom.window.document.querySelectorAll("script").length, 0);
  dom.window.close();
});
test("exposure requires uninterrupted visibility and cancels when tab hides", async () => {
  let callback,
    observed = 0,
    onVisibility;
  class Observer {
    constructor(cb) {
      callback = cb;
    }
    observe() {}
    disconnect() {}
  }
  const doc = {
    visibilityState: "visible",
    addEventListener: (_, cb) => {
      onVisibility = cb;
    },
    removeEventListener() {},
  };
  const stop = observeExposure(
    {},
    () => {
      observed++;
    },
    { Observer, doc, delay: 20 },
  );
  callback([{ isIntersecting: true, intersectionRatio: 1 }]);
  doc.visibilityState = "hidden";
  onVisibility();
  await new Promise((r) => setTimeout(r, 30));
  assert.equal(observed, 0);
  doc.visibilityState = "visible";
  onVisibility();
  await new Promise((r) => setTimeout(r, 30));
  assert.equal(observed, 1);
  callback([{ isIntersecting: true, intersectionRatio: 1 }]);
  await new Promise((r) => setTimeout(r, 30));
  assert.equal(observed, 1);
  stop();
});
