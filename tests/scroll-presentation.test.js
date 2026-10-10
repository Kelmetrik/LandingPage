import test from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
import { enhanceScrollPresentation } from "../src/lib/scrollPresentation.js";

test("scroll presentation: reveals once, respects preference changes and cleans up", () => {
  const dom = new JSDOM(
    '<main><div class="section-heading">Visible content</div><figure class="solution-example">Example</figure></main>',
  );
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  let preferenceChange;
  const preference = {
    matches: false,
    addEventListener: (_event, callback) => {
      preferenceChange = callback;
    },
    removeEventListener: (_event, callback) => {
      assert.equal(callback, preferenceChange);
    },
  };
  window.matchMedia = () => preference;
  const observers = [];
  window.IntersectionObserver = class {
    constructor(callback) {
      this.callback = callback;
      this.targets = new Set();
      observers.push(this);
    }
    observe(target) {
      this.targets.add(target);
    }
    unobserve(target) {
      this.targets.delete(target);
    }
    disconnect() {
      this.targets.clear();
    }
  };
  const main = document.querySelector("main");
  const heading = main.firstElementChild;
  const example = main.lastElementChild;
  const stop = enhanceScrollPresentation(main);
  assert.ok(document.documentElement.classList.contains("block-scroll"));
  assert.equal(heading.classList.contains("reveal-arrived"), false);
  assert.equal(observers[0].targets.size, 2);
  observers[0].callback([{ target: heading, isIntersecting: true }]);
  assert.ok(heading.classList.contains("reveal-arrived"));
  assert.equal(observers[0].targets.has(heading), false);
  preference.matches = true;
  preferenceChange();
  assert.equal(
    document.documentElement.classList.contains("block-scroll"),
    false,
  );
  assert.equal(heading.classList.contains("reveal-arrived"), false);
  assert.equal(observers[0].targets.size, 0);
  preference.matches = false;
  preferenceChange();
  assert.equal(observers[1].targets.has(heading), false);
  assert.ok(observers[1].targets.has(example));
  stop();
  assert.equal(
    document.documentElement.classList.contains("block-scroll"),
    false,
  );
  assert.equal(observers[1].targets.size, 0);
  dom.window.close();
});

test("scroll presentation: content remains available without observer support", () => {
  const dom = new JSDOM(
    '<main><div class="section-heading">Always readable</div></main>',
  );
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  const stop = enhanceScrollPresentation(document.querySelector("main"));
  assert.equal(
    document.querySelector(".section-heading").textContent,
    "Always readable",
  );
  assert.equal(document.querySelector(".reveal-arrived"), null);
  stop();
  dom.window.close();
});
