// Direct browser Events API adapter: no provider script or automatic pageviews.
// https://plausible.io/docs/events-api
export function safePageUrl(href) {
  const source = new URL(href);
  const page = new URL(source.pathname, source.origin);
  for (const key of ["utm_source", "utm_medium", "utm_campaign"]) {
    const value = source.searchParams.get(key);
    if (value && /^[a-z][a-z0-9_-]{0,63}$/i.test(value))
      page.searchParams.set(key, value);
  }
  return page.href;
}
export function safeReferrer(referrer) {
  try {
    const url = new URL(referrer);
    return /^https?:$/.test(url.protocol) ? url.origin : "";
  } catch {
    return "";
  }
}
export function createPlausibleAdapter({
  domain,
  href,
  referrer = "",
  fetcher = globalThis.fetch,
}) {
  return (name, props) =>
    fetcher("https://plausible.io/api/event", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      credentials: "omit",
      keepalive: true,
      body: JSON.stringify({
        name: name === "page_view" ? "pageview" : name,
        domain,
        url: safePageUrl(href),
        referrer: safeReferrer(referrer),
        props,
        interactive: !["section_view", "domain_view"].includes(name),
      }),
    });
}
