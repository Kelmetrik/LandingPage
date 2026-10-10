import test, { afterEach } from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
import React, { act } from "react";
const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "https://example.test/",
});
for (const key of [
  "window",
  "document",
  "HTMLElement",
  "HTMLInputElement",
  "Node",
  "FormData",
  "Event",
  "CustomEvent",
])
  globalThis[key] = dom.window[key];
Object.defineProperty(globalThis, "navigator", {
  value: dom.window.navigator,
  configurable: true,
});
globalThis.requestAnimationFrame = (callback) => setTimeout(callback, 0);
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
const { render, fireEvent, cleanup, waitFor } =
  await import("@testing-library/react");
const {
  App,
  Preferences,
  AnimatedBackgroundChart,
  ContactForm,
  content,
  analytics,
} = await import("../.test-build/component-entry.js");
const originalTrack = analytics.track;
afterEach(() => {
  cleanup();
  analytics.track = originalTrack;
});

function fillContact(ui) {
  fireEvent.change(ui.getByLabelText("Full name *"), {
    target: { value: "Synthetic QA" },
  });
  fireEvent.change(ui.getByLabelText("Company *"), {
    target: { value: "Kelmetrik test" },
  });
  fireEvent.change(ui.getByLabelText("Business email *"), {
    target: { value: "qa@example.com" },
  });
}
test("contact: service and network errors retain input; retry succeeds once", async () => {
  const events = [];
  analytics.track = (name) => events.push(name);
  let calls = 0;
  globalThis.fetch = async () => {
    calls++;
    if (calls === 1) return { ok: false };
    if (calls === 2) throw new Error("offline");
    return { ok: true };
  };
  const ui = render(
    React.createElement(ContactForm, {
      copy: content.en.contact,
      lang: "en",
      privacyUrl: "/privacy/",
    }),
  );
  fillContact(ui);
  fireEvent.click(ui.getByRole("button", { name: "Send project details" }));
  await ui.findByRole("alert");
  assert.equal(ui.getByLabelText("Full name *").value, "Synthetic QA");
  fireEvent.click(ui.getByRole("button", { name: "Send project details" }));
  await waitFor(() =>
    assert.equal(events.filter((e) => e === "form_submit_error").length, 2),
  );
  fireEvent.click(ui.getByRole("button", { name: "Send project details" }));
  await ui.findByRole("status");
  assert.equal(events.filter((e) => e === "form_start").length, 1);
  assert.equal(events.filter((e) => e === "form_submit_success").length, 1);
  assert.equal(calls, 3);
  assert.equal(
    ui.queryByRole("button", { name: "Send project details" }),
    null,
  );
});
test("contact: in-flight lock prevents duplicate submissions", async () => {
  let calls = 0,
    complete;
  globalThis.fetch = () => {
    calls++;
    return new Promise((resolve) => {
      complete = resolve;
    });
  };
  const ui = render(
    React.createElement(ContactForm, {
      copy: content.en.contact,
      lang: "en",
      privacyUrl: "/privacy/",
    }),
  );
  fillContact(ui);
  const form = ui.container.querySelector("form");
  fireEvent.submit(form);
  fireEvent.submit(form);
  assert.equal(calls, 1);
  await act(async () => complete({ ok: true }));
  assert.ok(ui.getByRole("status"));
});
test("contact: native validation blocks empty forms", () => {
  let calls = 0;
  globalThis.fetch = () => {
    calls++;
  };
  const ui = render(
    React.createElement(ContactForm, {
      copy: content.en.contact,
      lang: "en",
      privacyUrl: "/privacy/",
    }),
  );
  fireEvent.submit(ui.container.querySelector("form"));
  assert.equal(calls, 0);
});
test("Spanish page: six sections, bilingual navigation, accessible menu and four visible examples", async () => {
  const ui = render(React.createElement(App, { lang: "es" }));
  assert.match(
    ui.getByRole("heading", { level: 1 }).textContent,
    /Operaciones conectadas/,
  );
  assert.equal(ui.container.querySelectorAll("main>section").length, 6);
  const toggle = ui.getByRole("button", { name: "Menú" });
  fireEvent.click(toggle);
  assert.equal(toggle.getAttribute("aria-expanded"), "true");
  fireEvent.keyDown(ui.getByRole("navigation", { name: "Menú" }), {
    key: "Escape",
  });
  assert.equal(toggle.getAttribute("aria-expanded"), "false");
  assert.equal(ui.getByLabelText("Correo empresarial *").type, "email");
  assert.equal(ui.container.querySelectorAll(".solution-example").length, 4);
  assert.ok(ui.getByText("Los campos con * son obligatorios."));
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 20));
  });
});

// JSDOM has no top-layer implementation. Real keyboard trapping remains browser QA.
dom.window.HTMLDialogElement.prototype.showModal = function () {
  this.setAttribute("open", "");
  this.querySelector("button")?.focus();
};
dom.window.HTMLDialogElement.prototype.close = function () {
  this.removeAttribute("open");
};

test("preferences opens from the footer, explains preview, closes and restores focus", async () => {
  const ui = render(React.createElement(App, { lang: "es" }));
  const button = ui.getByRole("button", { name: "Preferencias de analítica" });
  button.focus();
  fireEvent.click(button);
  const panel = ui.getByRole("dialog", {
    name: "Medición opcional de audiencia",
  });
  assert.match(panel.textContent, /Esta vista previa no envía estadísticas/);
  assert.equal(ui.queryByRole("button", { name: "Permitir analítica" }), null);
  fireEvent.click(ui.getByRole("button", { name: "Cerrar preferencias" }));
  assert.equal(ui.queryByRole("dialog"), null);
  assert.equal(document.activeElement, button);
  await act(async () => {
    await new Promise((r) => setTimeout(r, 20));
  });
});
test("preferences distinguishes unconfigured, permitted, unavailable and privacy-signal states", () => {
  let current = {
    configured: true,
    environment: "production",
    privacySignal: false,
    choice: "unset",
    enabled: false,
    status: "idle",
  };
  const changes = [];
  let notify;
  const source = {
    subscribe: (cb) => {
      notify = cb;
      return () => {};
    },
    snapshot: () => JSON.stringify(current),
    serverSnapshot: () => JSON.stringify(current),
    choose: (value) => {
      changes.push(value);
      current = {
        ...current,
        choice: value,
        enabled: value === "on",
        status: value === "on" ? "ready" : "idle",
      };
      notify();
    },
  };
  const ui = render(
    React.createElement(Preferences, { c: content.en, source }),
  );
  assert.ok(ui.getByRole("dialog"));
  fireEvent.click(ui.getByRole("button", { name: "Reject analytics" }));
  assert.deepEqual(changes, ["off"]);
  assert.equal(ui.queryByRole("dialog"), null);
  act(() => window.dispatchEvent(new Event("kelmetrik:preferences")));
  fireEvent.click(ui.getByRole("button", { name: "Allow analytics" }));
  assert.deepEqual(changes, ["off", "on"]);
  act(() => window.dispatchEvent(new Event("kelmetrik:preferences")));
  assert.ok(ui.getByText(content.en.consent.on));
  act(() => {
    current = { ...current, status: "unavailable", enabled: false };
    notify();
  });
  assert.ok(ui.getByText(content.en.consent.unavailable));
  act(() => {
    current = { ...current, privacySignal: true };
    notify();
  });
  assert.ok(ui.getByText(content.en.consent.protected));
  assert.equal(ui.queryByRole("button", { name: "Allow analytics" }), null);
  act(() => {
    current = { ...current, privacySignal: false, configured: false };
    notify();
  });
  assert.ok(ui.getByText(content.en.consent.disabled));
  fireEvent(
    ui.getByRole("dialog"),
    new Event("cancel", { bubbles: true, cancelable: true }),
  );
  assert.equal(ui.queryByRole("dialog"), null);
});
test("solution contact links report a controlled domain and no demo events", async () => {
  const events = [];
  analytics.track = (...args) => events.push(args);
  const ui = render(React.createElement(App, { lang: "en" }));
  const links = ui.getAllByRole("link", { name: /Let’s discuss this process/ });
  assert.equal(links.length, 4);
  for (const link of links) fireEvent.click(link);
  assert.deepEqual(
    events.map((e) => e[1].domain),
    ["manufacturing", "quality", "apqp", "warehouse"],
  );
  assert.ok(
    events.every(
      (e) => e[0] === "contact_click" && e[1].location === "solution",
    ),
  );
  assert.equal(
    ui.container.querySelectorAll(
      ".solution-example details, .solution-example button",
    ).length,
    0,
  );
  await act(async () => {
    await new Promise((r) => setTimeout(r, 20));
  });
});
test("background chart pauses outside the viewport, on hidden tabs and on reduced motion", () => {
  let observerCallback, onMotion, nextFrame;
  let cancelled = 0;
  window.requestAnimationFrame = (callback) => {
    nextFrame = callback;
    return 1;
  };
  window.cancelAnimationFrame = () => {
    cancelled++;
    nextFrame = undefined;
  };
  const reduced = {
    matches: false,
    addEventListener: (_, cb) => {
      onMotion = cb;
    },
    removeEventListener: () => {},
  };
  window.matchMedia = () => reduced;
  globalThis.IntersectionObserver = class {
    constructor(cb) {
      observerCallback = cb;
    }
    observe() {}
    disconnect() {}
  };
  const ui = render(React.createElement(AnimatedBackgroundChart));
  const chart = ui.container.firstChild;
  assert.equal(chart.getAttribute("aria-hidden"), "true");
  assert.equal(chart.querySelectorAll(".chart-bars rect").length, 12);
  const visibility = (value) =>
    Object.defineProperty(document, "visibilityState", {
      value,
      configurable: true,
    });
  visibility("visible");
  observerCallback([{ isIntersecting: true }]);
  assert.ok(chart.classList.contains("chart-running"));
  const originalValues = [...chart.querySelectorAll(".chart-value")].map(
    (el) => el.textContent,
  );
  const originalHighlights = [...chart.querySelectorAll(".chart-bar")].map(
    (el) => el.classList.contains("chart-highlight"),
  );
  for (let now = 0; now <= 4000; now += 50) nextFrame(now);
  assert.notDeepEqual(
    [...chart.querySelectorAll(".chart-value")].map((el) => el.textContent),
    originalValues,
  );
  assert.notDeepEqual(
    [...chart.querySelectorAll(".chart-bar")].map((el) =>
      el.classList.contains("chart-highlight"),
    ),
    originalHighlights,
  );
  visibility("hidden");
  document.dispatchEvent(new Event("visibilitychange"));
  assert.ok(!chart.classList.contains("chart-running"));
  visibility("visible");
  document.dispatchEvent(new Event("visibilitychange"));
  reduced.matches = true;
  onMotion();
  assert.ok(!chart.classList.contains("chart-running"));
  reduced.matches = false;
  onMotion();
  observerCallback([{ isIntersecting: false }]);
  assert.ok(!chart.classList.contains("chart-running"));
  cleanup();
  delete globalThis.IntersectionObserver;
  delete window.matchMedia;
  assert.ok(cancelled > 0);
  assert.equal(nextFrame, undefined);
  delete window.requestAnimationFrame;
  delete window.cancelAnimationFrame;
});
