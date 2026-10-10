export const EVENT_NAMES = Object.freeze([
  "page_view",
  "section_view",
  "domain_view",
  "domain_explore",
  "demo_start",
  "demo_scenario_select",
  "demo_step_reached",
  "demo_complete",
  "demo_reset",
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
    "connected-operations",
    "solutions",
    "machine",
    "approach",
    "contact",
  ],
  domain: ["manufacturing", "quality", "apqp", "warehouse"],
  scenario: ["normal", "failure"],
  stage: [
    "work_order",
    "identification",
    "test",
    "validation",
    "disposition",
    "traceability",
  ],
  location: ["header", "hero", "demo", "contact", "footer"],
  error: ["network", "service"],
  reason: ["restart", "scenario_change"],
  demo_scenarios: ["none", "normal", "failure", "both"],
};

export function sanitizeProperties(properties = {}) {
  const safe = { schema_version: "1" };
  for (const [key, allowed] of Object.entries(enums)) {
    if (allowed.includes(properties[key])) safe[key] = properties[key];
  }
  if (typeof properties.demo_explored === "boolean")
    safe.demo_explored = properties.demo_explored;
  if (
    Number.isInteger(properties.demo_max_stage) &&
    properties.demo_max_stage >= 0 &&
    properties.demo_max_stage <= 6
  )
    safe.demo_max_stage = properties.demo_max_stage;
  return safe;
}

// No queue, visitor ID or persistent demo state. Disabled events are discarded.
export function createAnalytics({
  adapter = () => {},
  enabled = false,
  language = "en",
} = {}) {
  let allowed = enabled;
  let explored = false;
  let maxStage = 0;
  const scenarios = new Set();
  const once = new Set();
  const context = () => ({
    demo_explored: explored,
    demo_max_stage: maxStage,
    demo_scenarios: scenarios.size === 2 ? "both" : [...scenarios][0] || "none",
  });
  function track(name, properties = {}, key) {
    if (!allowed || !EVENT_NAMES.includes(name) || (key && once.has(key)))
      return false;
    if (key) once.add(key);
    const contact = name.startsWith("contact_") || name.startsWith("form_");
    const safe = sanitizeProperties({
      ...properties,
      language,
      ...(contact ? context() : {}),
    });
    try {
      Promise.resolve(adapter(name, safe)).catch(() => {});
    } catch {
      /* Analytics must never break an interaction. */
    }
    return true;
  }
  return {
    track,
    context,
    isEnabled: () => allowed,
    setEnabled(value) {
      allowed = Boolean(value);
      if (!allowed) {
        explored = false;
        maxStage = 0;
        scenarios.clear();
      }
    },
    recordDemo(scenario, stage = 0) {
      if (!allowed) return;
      explored = true;
      if (enums.scenario.includes(scenario)) scenarios.add(scenario);
      maxStage = Math.max(maxStage, Math.min(6, Math.max(0, stage)));
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
