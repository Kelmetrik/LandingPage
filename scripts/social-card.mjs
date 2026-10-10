import { Resvg } from "@resvg/resvg-js";
import { readFile, writeFile } from "node:fs/promises";
const logo = (await readFile("src/assets/logo.png")).toString("base64");
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="white"/><path d="M0 560H1200" stroke="#dce5f0"/>
<image href="data:image/png;base64,${logo}" x="70" y="55" width="280" height="41"/>
<text x="70" y="174" fill="#1e40af" font-size="14" font-family="Arial" letter-spacing="3">INDUSTRIAL SOFTWARE &amp; SYSTEMS INTEGRATION</text>
<text x="65" y="275" fill="#14233c" font-size="70" font-weight="bold" font-family="Arial">Connected operations.</text>
<text x="65" y="360" fill="#1e40af" font-size="70" font-weight="bold" font-family="Arial">Better decisions.</text>
<g fill="white" stroke="#adc5eb"><rect x="70" y="430" width="210" height="55" rx="6"/><rect x="420" y="430" width="210" height="55" rx="6"/><rect x="770" y="430" width="270" height="55" rx="6"/><path d="M280 458H420M630 458H770"/></g>
<g fill="#1e40af" font-size="17" font-family="Arial"><text x="100" y="465">Equipment &amp; data</text><text x="453" y="465">Operational context</text><text x="803" y="465">Traceable decisions</text></g>
<text x="70" y="601" fill="#566780" font-size="17" font-family="Arial">kelmetrik.com</text></svg>`;
await writeFile("public/social-card.svg", svg);
await writeFile(
  "public/social-card.png",
  new Resvg(svg, {
    font: { loadSystemFonts: true, defaultFontFamily: "Arial" },
  })
    .render()
    .asPng(),
);
const spanish = svg
  .replace(
    "INDUSTRIAL SOFTWARE &amp; SYSTEMS INTEGRATION",
    "SOFTWARE INDUSTRIAL E INTEGRACIÓN DE SISTEMAS",
  )
  .replace("Connected operations.", "Operaciones conectadas.")
  .replace("Better decisions.", "Mejores decisiones.")
  .replaceAll('font-size="70"', 'font-size="67"')
  .replace("Equipment &amp; data", "Equipos y datos")
  .replace("Operational context", "Contexto operativo")
  .replace("Traceable decisions", "Decisiones trazables");
await writeFile("public/social-card-es.svg", spanish);
await writeFile(
  "public/social-card-es.png",
  new Resvg(spanish, {
    font: { loadSystemFonts: true, defaultFontFamily: "Arial" },
  })
    .render()
    .asPng(),
);
