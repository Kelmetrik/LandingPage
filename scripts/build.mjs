import { build, loadEnv } from "vite";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { pathToFileURL } from "node:url";
const env = { ...loadEnv("production", process.cwd(), ""), ...process.env };
await build({ build: { manifest: true } });
await build({ build: { ssr: "src/entry-server.jsx", outDir: "dist-ssr" } });
const { renderPage } = await import(
  pathToFileURL(resolve("dist-ssr/entry-server.js")).href
);
const template = await readFile("dist/index.html", "utf8");
const origin = "https://www.kelmetrik.com";
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
const routes = [
  { path: "/", lang: "en", alternate: "/es/", privacy: false },
  { path: "/es/", lang: "es", alternate: "/", privacy: false },
  {
    path: "/privacy/",
    lang: "en",
    alternate: "/es/privacidad/",
    privacy: true,
  },
  {
    path: "/es/privacidad/",
    lang: "es",
    alternate: "/privacy/",
    privacy: true,
  },
];
for (const route of routes) {
  const page = renderPage(route.lang, route.privacy);
  const enPath = route.lang === "en" ? route.path : route.alternate;
  const esPath = route.lang === "es" ? route.path : route.alternate;
  const verification = /^[a-zA-Z0-9_-]+$/.test(
    env.VITE_GOOGLE_SITE_VERIFICATION || "",
  )
    ? `<meta name="google-site-verification" content="${env.VITE_GOOGLE_SITE_VERIFICATION}" />`
    : "";
  const seo = `<title>${escape(page.title)}</title>
    <meta name="description" content="${escape(page.description)}" />
    <link rel="canonical" href="${origin}${route.path}" />
    <link rel="alternate" hreflang="en" href="${origin}${enPath}" />
    <link rel="alternate" hreflang="es" href="${origin}${esPath}" />
    <link rel="alternate" hreflang="x-default" href="${origin}${enPath}" />
    <meta property="og:title" content="${escape(page.title)}" />
    <meta property="og:description" content="${escape(page.description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${origin}${route.path}" />
    <meta property="og:locale" content="${route.lang === "en" ? "en_US" : "es_MX"}" />
    <meta property="og:site_name" content="Kelmetrik" />
    <meta property="og:image" content="${origin}/social-card${route.lang === "es" ? "-es" : ""}.png" />
    <meta property="og:image:alt" content="${route.lang === "en" ? "Kelmetrik — Connected operations. Better decisions." : "Kelmetrik — Operaciones conectadas. Mejores decisiones."}" />
    <meta name="twitter:card" content="summary_large_image" />
    ${env.VERCEL_ENV === "preview" ? '<meta name="robots" content="noindex,nofollow" />' : ""}
    ${verification}`;
  const html = template
    .replace('<html lang="en">', `<html lang="${route.lang}">`)
    .replace("<title>Kelmetrik</title>", seo)
    .replace(
      '<div id="root"></div>',
      () => `<div id="root">${page.html}</div>`,
    );
  const file = `dist${route.path}index.html`;
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}
await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>${origin}${route.path}</loc></url>`).join("")}</urlset>`,
);
await writeFile(
  "dist/robots.txt",
  env.VERCEL_ENV === "preview"
    ? "User-agent: *\nDisallow: /\n"
    : `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
);
console.log("Prerendered EN/ES landing and privacy routes.");
