import { createAnalytics } from "./analytics";
import { createPlausibleAdapter } from "./plausible";

const preferenceKey = "kelmetrik-measurement-v1";
export let analytics = createAnalytics();
let configured = false;
let privacySignal = false;
let choice = "off";
export function measurementState() {
  return { configured, privacySignal, choice, enabled: analytics.isEnabled() };
}
export function initializeAnalytics(language) {
  const env = import.meta.env;
  configured =
    env.VITE_ANALYTICS_ENABLED === "true" &&
    Boolean(env.VITE_PLAUSIBLE_DOMAIN) &&
    ["www.kelmetrik.com", "kelmetrik.com"].includes(window.location.hostname);
  privacySignal =
    navigator.globalPrivacyControl === true || navigator.doNotTrack === "1";
  try {
    choice = localStorage.getItem(preferenceKey) || "unset";
  } catch {
    choice = "unset";
  }
  analytics = createAnalytics({
    language,
    enabled: configured && !privacySignal && choice === "on",
    adapter: createPlausibleAdapter({
      domain: env.VITE_PLAUSIBLE_DOMAIN,
      href: window.location.href,
      referrer: document.referrer,
    }),
  });
  analytics.track("page_view", {}, "page");
}
export function chooseMeasurement(value) {
  choice = value === "on" ? "on" : "off";
  try {
    localStorage.setItem(preferenceKey, choice);
  } catch {
    /* Memory preference remains effective. */
  }
  analytics.setEnabled(configured && !privacySignal && choice === "on");
  analytics.track("page_view", {}, "page");
  window.dispatchEvent(new Event("kelmetrik:measurement"));
}
export const track = (name, props, key) => analytics.track(name, props, key);
