import { EVENT_NAMES, sanitizeProperties } from "./analytics.js";

export function safePageUrl(href) {
  const source = new URL(href);
  const page = new URL(source.pathname, source.origin);
  for (const key of ["utm_source", "utm_medium", "utm_campaign"]) {
    const value = source.searchParams.get(key);
    if (value && /^[a-z][a-z0-9_-]{0,63}$/i.test(value))
      page.searchParams.set(key, value);
  }
  return page.pathname + page.search;
}
export function safeReferrer(value) {
  try {
    const url = new URL(value);
    return /^https?:$/.test(url.protocol) ? url.origin : "";
  } catch {
    return "";
  }
}

// Only invoked after explicit permission. No automatic tracking or identity calls.
export function createUmamiLoader({
  websiteId,
  win = window,
  doc = document,
  canSend = () => false,
  timeoutMs = 10000,
}) {
  let loading;
  const payload = (name, props = {}) => ({
    website: websiteId,
    hostname: win.location.hostname,
    screen: `${win.screen.width}x${win.screen.height}`,
    language: win.navigator.language,
    title: doc.title,
    url: safePageUrl(win.location.href),
    referrer: safeReferrer(doc.referrer),
    ...(name === "page_view" ? {} : { name }),
    data: sanitizeProperties(props),
  });
  return function load() {
    if (loading) return loading;
    // Umami's hook also rechecks permission immediately before provider sends.
    win.kelmetrikBeforeSend = (type, data) => {
      if (!canSend() || type !== "event") return false;
      const name = data.name || "page_view";
      return EVENT_NAMES.includes(name) ? payload(name, data.data) : false;
    };
    loading = new Promise((resolve, reject) => {
      const script = doc.createElement("script");
      script.src = "https://cloud.umami.is/script.js";
      script.async = true;
      script.dataset.websiteId = websiteId;
      script.dataset.hostUrl = "https://gateway.umami.is";
      script.dataset.autoTrack = "false";
      script.dataset.doNotTrack = "true";
      script.dataset.excludeHash = "true";
      script.dataset.beforeSend = "kelmetrikBeforeSend";
      script.dataset.domains = "kelmetrik.com,www.kelmetrik.com";
      const fail = () => {
        clearTimeout(timer);
        script.remove();
        loading = undefined;
        reject(new Error("Measurement unavailable"));
      };
      const timer = setTimeout(fail, timeoutMs);
      script.onerror = fail;
      script.onload = () => {
        clearTimeout(timer);
        if (typeof win.umami?.track !== "function") {
          fail();
          return;
        }
        resolve((name, props) => {
          if (!canSend()) return false;
          return win.umami.track(() => payload(name, props));
        });
      };
      doc.head.append(script);
    });
    return loading;
  };
}
