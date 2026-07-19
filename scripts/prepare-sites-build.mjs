import { cp, mkdir, readdir, rename, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const distDir = "dist";
const clientDir = join(distDir, "client");
const serverDir = join(distDir, "server");
const hostingConfig = join(".openai", "hosting.json");
const packagedHostingConfig = join(distDir, ".openai", "hosting.json");

await rm(clientDir, { recursive: true, force: true });
await rm(serverDir, { recursive: true, force: true });

await mkdir(clientDir, { recursive: true });
await mkdir(serverDir, { recursive: true });

const entries = await readdir(distDir, { withFileTypes: true });

for (const entry of entries) {
  if (entry.name === "client" || entry.name === "server" || entry.name === ".openai") {
    continue;
  }

  await rename(join(distDir, entry.name), join(clientDir, entry.name));
}

await writeFile(
  join(serverDir, "index.js"),
  `export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const assetResponse = await env.ASSETS.fetch(request);

    if (assetResponse.status !== 404) {
      return assetResponse;
    }

    const acceptsHtml = request.headers.get("accept")?.includes("text/html");

    if (acceptsHtml && !url.pathname.includes(".")) {
      return env.ASSETS.fetch(new Request(new URL("/index.html", url), request));
    }

    return assetResponse;
  },
};
`,
);

try {
  await cp(hostingConfig, packagedHostingConfig);
} catch (error) {
  if (error.code !== "ENOENT") {
    throw error;
  }
}
