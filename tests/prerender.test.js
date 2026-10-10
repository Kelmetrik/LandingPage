import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { JSDOM } from "jsdom";
for (const [path, lang, title] of [
  ["index.html", "en", "Connected operations."],
  ["es/index.html", "es", "Operaciones conectadas."],
  ["privacy/index.html", "en", "Privacy"],
  ["es/privacidad/index.html", "es", "Privacidad"],
]) {
  test(`static HTML: ${path} has content, correct language, reciprocal SEO and working anchors`, async () => {
    const html = await readFile(`dist/${path}`, "utf8");
    const { document } = new JSDOM(html).window;
    assert.equal(document.documentElement.lang, lang);
    assert.match(document.querySelector("h1").textContent, new RegExp(title));
    assert.equal(document.querySelectorAll("h1").length, 1);
    assert.equal(document.querySelectorAll("link[rel=canonical]").length, 1);
    assert.equal(document.querySelectorAll("link[hreflang]").length, 3);
    assert.ok(
      document
        .querySelector('meta[property="og:image"]')
        .content.endsWith(
          lang === "es" ? "/social-card-es.png" : "/social-card.png",
        ),
    );
    const ids = [...document.querySelectorAll("[id]")].map((el) => el.id);
    assert.equal(new Set(ids).size, ids.length);
    for (const a of document.querySelectorAll('a[href^="#"]'))
      assert.ok(document.getElementById(a.hash.slice(1)), a.href);
    if (!path.includes("privacy") && !path.includes("privacidad")) {
      assert.equal(document.querySelectorAll("main>section").length, 6);
      assert.equal(document.querySelectorAll(".solution-example").length, 4);
      assert.equal(document.querySelectorAll(".chart-bars rect").length, 12);
      assert.equal(document.querySelectorAll('script[src*="umami"]').length, 0);
      assert.ok(!html.includes("Start simulation"));
      assert.equal(
        document.querySelector("form").action,
        "https://formspree.io/f/mdkwrdok",
      );
    }
  });
}
