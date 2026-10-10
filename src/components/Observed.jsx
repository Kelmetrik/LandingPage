import { useEffect, useRef } from "react";
import { observeExposure } from "../lib/analytics";
import { track } from "../lib/runtime";

export default function Observed({
  children,
  event = "section_view",
  value,
  className = "",
}) {
  const ref = useRef(null);
  useEffect(() => {
    const start = () =>
      observeExposure(ref.current, () =>
        track(
          event,
          { [event === "section_view" ? "section" : "domain"]: value },
          `${event}:${value}`,
        ),
      );
    let stop = start();
    const restart = () => {
      stop();
      stop = start();
    };
    window.addEventListener("kelmetrik:measurement", restart);
    return () => {
      stop();
      window.removeEventListener("kelmetrik:measurement", restart);
    };
  }, [event, value]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
