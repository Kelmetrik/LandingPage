import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { JSDOM } from "jsdom";
import React, { act } from "react";
test("prerendered Spanish HTML hydrates without recovery or losing content", async () => {
  const html = await readFile("dist/es/index.html", "utf8");
  const dom = new JSDOM(html, {
    url: "https://example.test/es/",
    runScripts: "outside-only",
  });
  for (const key of [
    "window",
    "document",
    "HTMLElement",
    "Node",
    "FormData",
    "Event",
  ])
    globalThis[key] = dom.window[key];
  Object.defineProperty(globalThis, "navigator", {
    value: dom.window.navigator,
    configurable: true,
  });
  globalThis.requestAnimationFrame = (callback) => setTimeout(callback, 0);
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  const { hydrateRoot } = await import("react-dom/client");
  const { App } = await import("../.test-build/component-entry.js");
  const errors = [];
  let root;
  await act(async () => {
    root = hydrateRoot(
      document.getElementById("root"),
      React.createElement(App, { lang: "es" }),
      { onRecoverableError: (error) => errors.push(error.message) },
    );
    await new Promise((resolve) => setTimeout(resolve, 50));
  });
  assert.deepEqual(errors, []);
  assert.equal(document.querySelectorAll("main>section").length, 7);
  await act(async () => root.unmount());
  dom.window.close();
});
