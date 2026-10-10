import test from "node:test";
import assert from "node:assert/strict";
import {
  createAnalytics,
  sanitizeProperties,
  observeExposure,
} from "../src/lib/analytics.js";
import {
  createPlausibleAdapter,
  safePageUrl,
  safeReferrer,
} from "../src/lib/plausible.js";

test("disabled events and demo context are discarded, never replayed after permission", () => {
  const events = [];
  const a = createAnalytics({
    adapter: (...e) => events.push(e),
    language: "es",
  });
  a.track("demo_start", { scenario: "failure" });
  a.recordDemo("failure", 4);
  a.setEnabled(true);
  a.track("contact_click", { location: "hero" });
  assert.equal(events.length, 1);
  assert.equal(events[0][1].demo_explored, false);
  a.recordDemo("normal", 2);
  a.recordDemo("failure", 6);
  a.track("form_submit_success");
  assert.equal(events[1][1].demo_scenarios, "both");
  assert.equal(events[1][1].demo_max_stage, 6);
  a.setEnabled(false);
  a.setEnabled(true);
  a.track("contact_click");
  assert.equal(events.at(-1)[1].demo_explored, false);
});
test("deduplication prevents duplicate page and exposure events", () => {
  const events = [];
  const a = createAnalytics({ enabled: true, adapter: (n) => events.push(n) });
  a.track("page_view", {}, "page");
  a.track("page_view", {}, "page");
  a.track("section_view", { section: "hero" }, "hero");
  a.track("section_view", { section: "hero" }, "hero");
  a.setEnabled(false);
  a.setEnabled(true);
  a.track("page_view", {}, "page");
  assert.deepEqual(events, ["page_view", "section_view"]);
});
test("property allowlists exclude form fields, arbitrary strings and identifiers", () => {
  assert.deepEqual(
    sanitizeProperties({
      email: "person@example.com",
      serial: "DEMO-SN-0042",
      challenge: "secret",
      scenario: "invented",
      language: "es",
      domain: "quality",
      demo_max_stage: 999,
    }),
    { schema_version: "1", language: "es", domain: "quality" },
  );
});
test("provider failures cannot break interactions", async () => {
  const a = createAnalytics({
    enabled: true,
    adapter: () => {
      throw new Error("blocked");
    },
  });
  assert.doesNotThrow(() => a.track("demo_start"));
  const b = createAnalytics({
    enabled: true,
    adapter: () => Promise.reject(new Error("offline")),
  });
  assert.doesNotThrow(() => b.track("demo_start"));
  await new Promise((r) => setTimeout(r, 0));
});
test("Plausible receives one explicit pageview and strips unsafe URLs and referrers", async () => {
  const calls = [];
  const a = createPlausibleAdapter({
    domain: "kelmetrik.com",
    href: "https://www.kelmetrik.com/es/?email=secret@example.com&utm_source=linkedin&utm_term=secret&utm_campaign=contact@example.com#contact",
    referrer: "https://example.com/private?email=secret",
    fetcher: (...args) => {
      calls.push(args);
      return Promise.resolve();
    },
  });
  await a("page_view", { language: "es" });
  const body = JSON.parse(calls[0][1].body);
  assert.equal(body.name, "pageview");
  assert.equal(body.url, "https://www.kelmetrik.com/es/?utm_source=linkedin");
  assert.equal(body.referrer, "https://example.com");
  assert.equal(calls[0][1].credentials, "omit");
  assert.equal(safeReferrer("javascript:alert(1)"), "");
  assert.equal(
    safePageUrl("https://kelmetrik.com/?utm_source=hello%40test.com"),
    "https://kelmetrik.com/",
  );
});
test("exposure requires two uninterrupted visible seconds and is cancelled on hide", async () => {
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
    addEventListener: (_, fn) => {
      onVisibility = fn;
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
