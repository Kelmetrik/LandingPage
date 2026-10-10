import { createMeasurement } from "./measurement.js";
import { createUmamiLoader } from "./umami.js";
let measurement = createMeasurement();
export let analytics = measurement.analytics;
export const measurementState = () => measurement.state();
export const chooseMeasurement = (value) => measurement.choose(value);
export function initializeAnalytics(language) {
  const env = import.meta.env;
  const production = ["www.kelmetrik.com", "kelmetrik.com"].includes(
    window.location.hostname,
  );
  let storage;
  try {
    storage = window.localStorage;
  } catch {
    /* Memory preference only. */
  }
  let loader;
  measurement = createMeasurement({
    language,
    configured:
      env.VITE_ANALYTICS_ENABLED === "true" &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
        env.VITE_UMAMI_WEBSITE_ID || "",
      ),
    environment: production ? "production" : "preview",
    storage,
    privacy: () =>
      navigator.globalPrivacyControl === true || navigator.doNotTrack === "1",
    load: (canSend) => {
      loader ||= createUmamiLoader({
        websiteId: env.VITE_UMAMI_WEBSITE_ID,
        canSend,
      });
      return loader();
    },
    notify: () => window.dispatchEvent(new Event("kelmetrik:measurement")),
  });
  analytics = measurement.analytics;
  void measurement.start();
}
export const track = (name, properties, key) =>
  analytics.track(name, properties, key);
