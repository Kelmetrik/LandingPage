export const EVENT_NAMES = Object.freeze([
  "page_view",
  "section_view",
  "domain_view",
  "contact_click",
  "form_start",
  "form_submit_success",
  "form_submit_error",
]);
const enums = {
  language: ["en", "es"],
  section: [
    "hero",
    "disconnect",
    "solutions",
    "machine",
    "approach",
    "contact",
  ],
  domain: ["manufacturing", "quality", "apqp", "warehouse"],
  location: ["header", "hero", "solution", "contact", "footer"],
  error: ["network", "service"],
};
export function sanitizeProperties(properties = {}) {
  const safe = { schema_version: "2" };
  for (const [key, allowed] of Object.entries(enums)) {
    if (allowed.includes(properties[key])) safe[key] = properties[key];
  }
  return safe;
}
// Events rejected before consent/readiness are discarded, never queued.
export function createAnalytics({
  adapter = () => {},
  enabled = false,
  language = "en",
} = {}) {
  let allowed = enabled;
  const once = new Set();
  return {
    isEnabled: () => allowed,
    setEnabled(value) {
      allowed = Boolean(value);
    },
    track(name, properties = {}, key) {
      if (!allowed || !EVENT_NAMES.includes(name) || (key && once.has(key)))
        return false;
      if (key) once.add(key);
      try {
        Promise.resolve(
          adapter(name, sanitizeProperties({ ...properties, language })),
        ).catch(() => {});
      } catch {
        /* A provider must never break navigation or contact. */
      }
      return true;
    },
  };
}

export function observeExposure(
  element,
  callback,
  {
    Observer = globalThis.IntersectionObserver,
    doc = globalThis.document,
    delay = 2000,
  } = {},
) {
  if (!Observer || !element || !doc) return () => {};
  let timer,
    visible = false,
    complete = false;
  const cancel = () => {
    clearTimeout(timer);
    timer = undefined;
  };
  function update() {
    cancel();
    if (!complete && visible && doc.visibilityState === "visible")
      timer = setTimeout(() => {
        if (callback() !== false) {
          complete = true;
          observer.disconnect();
        }
      }, delay);
  }
  const observer = new Observer(
    ([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.6;
      update();
    },
    { threshold: [0, 0.6] },
  );
  observer.observe(element);
  doc.addEventListener("visibilitychange", update);
  return () => {
    cancel();
    observer.disconnect();
    doc.removeEventListener("visibilitychange", update);
  };
}
