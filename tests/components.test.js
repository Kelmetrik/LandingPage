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
const { App, Demo, ContactForm, content, analytics } =
  await import("../.test-build/component-entry.js");
const originalTrack = analytics.track;
afterEach(() => {
  cleanup();
  analytics.track = originalTrack;
});

test("EOL UI: completing and revisiting stages does not duplicate analytics", () => {
  const events = [];
  analytics.track = (name, props) => events.push({ name, props });
  const ui = render(React.createElement(Demo, { copy: content.en.demo }));
  fireEvent.click(ui.getByRole("button", { name: "Start simulation" }));
  for (let i = 0; i < 5; i++)
    fireEvent.click(ui.getByRole("button", { name: "Next step" }));
  assert.equal(events.filter((e) => e.name === "demo_start").length, 1);
  assert.equal(events.filter((e) => e.name === "demo_step_reached").length, 6);
  assert.equal(events.filter((e) => e.name === "demo_complete").length, 1);
  assert.ok(ui.getAllByText("Test accepted").length);
  fireEvent.click(ui.getByRole("button", { name: "Previous" }));
  fireEvent.click(ui.getByRole("button", { name: "Next step" }));
  assert.equal(events.filter((e) => e.name === "demo_step_reached").length, 6);
  assert.equal(events.filter((e) => e.name === "demo_complete").length, 1);
  fireEvent.click(ui.getByRole("radio", { name: "Failed test" }));
  assert.ok(ui.getByRole("button", { name: "Start simulation" }));
  assert.equal(ui.queryByText("Test accepted"), null);
  fireEvent.click(ui.getByRole("button", { name: "Start simulation" }));
  for (let i = 0; i < 5; i++)
    fireEvent.click(ui.getByRole("button", { name: "Next step" }));
  assert.ok(ui.getAllByText("Quality Hold").length);
  assert.ok(ui.getByText(/does not release, repair or approve/));
  assert.equal(events.filter((e) => e.name === "demo_complete").length, 2);
  fireEvent.click(ui.getByRole("button", { name: "Restart" }));
  assert.equal(ui.queryByText("Quality Hold"), null);
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
test("Spanish page: all seven sections, bilingual navigation, accessible menu and storyboard", async () => {
  const ui = render(React.createElement(App, { lang: "es" }));
  assert.match(
    ui.getByRole("heading", { level: 1 }).textContent,
    /Operaciones conectadas/,
  );
  assert.equal(ui.container.querySelectorAll("main>section").length, 7);
  const toggle = ui.getByRole("button", { name: "Menú" });
  fireEvent.click(toggle);
  assert.equal(toggle.getAttribute("aria-expanded"), "true");
  fireEvent.keyDown(ui.getByRole("navigation"), { key: "Escape" });
  assert.equal(toggle.getAttribute("aria-expanded"), "false");
  assert.equal(ui.getByLabelText("Correo empresarial *").type, "email");
  assert.equal(ui.container.querySelectorAll(".storyboard").length, 3);
  assert.ok(ui.getByText("Los campos con * son obligatorios."));
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 20));
  });
});
