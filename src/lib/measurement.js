import { createAnalytics } from "./analytics.js";
export const PREFERENCE_KEY = "kelmetrik-measurement-v2";
export const INITIAL_MEASUREMENT = {
  configured: false,
  environment: "preview",
  privacySignal: false,
  choice: "unset",
  enabled: false,
  status: "idle",
};

// Dependency injection keeps the consent lifecycle testable without a real provider.
export function createMeasurement({
  language = "en",
  configured = false,
  environment = "preview",
  storage,
  privacy = () => false,
  load = async () => () => {},
  notify = () => {},
} = {}) {
  let choice = "unset",
    status = "idle",
    generation = 0,
    sender;
  try {
    const saved = storage?.getItem(PREFERENCE_KEY);
    if (["on", "off"].includes(saved)) choice = saved;
  } catch {
    /* Use memory only. */
  }
  const permitted = () =>
    configured && environment === "production" && !privacy() && choice === "on";
  const analytics = createAnalytics({
    language,
    adapter: (name, props) => {
      if (!permitted() || !sender) return;
      return Promise.resolve()
        .then(() => {
          if (permitted()) return sender(name, props);
        })
        .catch(() => {
          status = "unavailable";
          analytics.setEnabled(false);
          notify();
        });
    },
  });
  const state = () => ({
    configured,
    environment,
    privacySignal: privacy(),
    choice,
    enabled: analytics.isEnabled() && permitted(),
    status,
  });
  async function sync() {
    const ticket = ++generation;
    analytics.setEnabled(false);
    if (!permitted()) {
      status = "idle";
      notify();
      return;
    }
    status = "loading";
    notify();
    try {
      const send = await load(permitted);
      if (ticket !== generation || !permitted()) return;
      sender = send;
      status = "ready";
      analytics.setEnabled(true);
      analytics.track("page_view", {}, "page");
      notify();
    } catch {
      if (ticket === generation) {
        status = "unavailable";
        notify();
      }
    }
  }
  function choose(value) {
    choice = value === "on" ? "on" : "off";
    try {
      storage?.setItem(PREFERENCE_KEY, choice);
    } catch {
      /* Preference still applies in memory. */
    }
    return sync();
  }
  return { analytics, state, choose, start: sync };
}
