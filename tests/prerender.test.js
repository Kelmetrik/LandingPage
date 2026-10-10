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

test("solutions preserve the approved Spanish paragraphs once, without duplicate explanations", async () => {
  const approved = [
    "Conectamos estaciones, equipos y sistemas de producción para registrar lo que ocurre durante cada etapa de manufactura. Desde la identificación de componentes hasta los resultados de prueba, construimos trazabilidad que permite controlar procesos, detectar desviaciones y entender qué ocurrió con cada producto.",
    "Digitalizamos inspecciones, validaciones y procesos de contención para que cada resultado tenga un seguimiento claro. Conectamos evidencia, defectos, responsables y decisiones de calidad, reduciendo la dependencia de registros dispersos y facilitando el control de nuevos lanzamientos.",
    "Conectamos la planeación de proyectos con su ejecución real. Centralizamos actividades, entregables, responsables y evidencia para identificar retrasos, visualizar dependencias y asegurar que los hitos avancen respaldados por resultados verificables.",
    "Conectamos los movimientos físicos de materiales con los sistemas que administran la operación. Diseñamos procesos de recibo, almacenamiento, picking e inventario con validaciones y trazabilidad, eliminando capturas duplicadas y mejorando el control sobre cada movimiento.",
  ];
  const titles = [
    "Manufacturing Execution & Traceability",
    "Quality Management & Safe Launch",
    "APQP & Industrial Project Management",
    "Warehouse & Material Management",
  ];
  for (const path of ["es/index.html", "index.html"]) {
    const { document } = new JSDOM(await readFile(`dist/${path}`, "utf8"))
      .window;
    const rows = [...document.querySelectorAll(".solution-row")];
    assert.equal(rows.length, 4);
    rows.forEach((row, i) => {
      assert.equal(row.querySelector("h3").textContent, titles[i]);
      assert.equal(row.querySelectorAll(".solution-copy p").length, 1);
      assert.equal(
        row.querySelector(".solution-contact").getAttribute("href"),
        "#contact",
      );
      assert.ok(document.querySelector(`.solution-jump a[href="#${row.id}"]`));
      assert.ok(row.querySelector(".solution-example .concept-label"));
      assert.equal(
        row.querySelector(
          ".solution-description, .solution-benefit, .example-annotation",
        ),
        null,
      );
      if (path.startsWith("es/")) {
        assert.equal(
          row.querySelector(".solution-summary").textContent,
          approved[i],
        );
        assert.equal(
          document.body.textContent.split(approved[i]).length - 1,
          1,
        );
      }
    });
  }
});
