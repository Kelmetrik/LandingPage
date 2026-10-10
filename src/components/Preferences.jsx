import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { X } from "lucide-react";
import { measurementState, chooseMeasurement } from "../lib/runtime";
import { INITIAL_MEASUREMENT } from "../lib/measurement";
const serverState = JSON.stringify(INITIAL_MEASUREMENT);
const subscribe = (callback) => {
  window.addEventListener("kelmetrik:measurement", callback);
  return () => window.removeEventListener("kelmetrik:measurement", callback);
};
const browserSnapshot = () => JSON.stringify(measurementState());
const serverSnapshot = () => serverState;
export default function Preferences({
  c,
  source = {
    subscribe,
    snapshot: browserSnapshot,
    serverSnapshot,
    choose: chooseMeasurement,
  },
}) {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const dialog = useRef(null);
  const previousFocus = useRef(null);
  const state = JSON.parse(
    useSyncExternalStore(
      source.subscribe,
      source.snapshot,
      source.serverSnapshot,
    ),
  );
  const available =
    state.configured &&
    state.environment === "production" &&
    !state.privacySignal;
  const visible = open || (available && state.choice === "unset" && !dismissed);
  useEffect(() => {
    const show = () => {
      previousFocus.current = document.activeElement;
      setOpen(true);
    };
    window.addEventListener("kelmetrik:preferences", show);
    return () => window.removeEventListener("kelmetrik:preferences", show);
  }, []);
  useEffect(() => {
    const node = dialog.current;
    if (visible && !node.open) {
      previousFocus.current ||= document.activeElement;
      node.showModal();
    } else if (!visible && node.open) {
      node.close();
      if (previousFocus.current?.isConnected) previousFocus.current.focus();
      previousFocus.current = null;
    }
  }, [visible]);
  function close() {
    setOpen(false);
    setDismissed(true);
  }
  function choose(value) {
    void source.choose(value);
    close();
  }
  const message =
    state.environment === "preview"
      ? c.consent.preview
      : !state.configured
        ? c.consent.disabled
        : state.privacySignal
          ? c.consent.protected
          : c.consent.text;
  return (
    <dialog
      ref={dialog}
      className="measurement-dialog"
      aria-labelledby="measurement-title"
      aria-describedby="measurement-description"
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
    >
      <div className="measurement-heading">
        <h2 id="measurement-title">{c.consent.title}</h2>
        <button
          className="measurement-close"
          type="button"
          aria-label={c.consent.close}
          onClick={close}
        >
          <X size={20} />
        </button>
      </div>
      <p id="measurement-description">{message}</p>
      {available && (
        <>
          <p className="measurement-status" role="status">
            {state.status === "loading"
              ? c.consent.loading
              : state.status === "unavailable"
                ? c.consent.unavailable
                : state.enabled
                  ? c.consent.on
                  : c.consent.off}
          </p>
          <div className="preference-actions">
            <button className="button quiet" onClick={() => choose("off")}>
              {c.consent.reject}
            </button>
            <button className="button primary" onClick={() => choose("on")}>
              {c.consent.allow}
            </button>
          </div>
        </>
      )}
      <a className="text-link" href={c.privacyUrl}>
        {c.contact.privacy}
      </a>
    </dialog>
  );
}
