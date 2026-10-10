import { useEffect, useRef } from "react";

// Original hero geometry, animated with transforms instead of React timer renders.
// This is decorative artwork, never operational data or a performance claim.
export default function AnimatedBackgroundChart() {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    let visible = false;
    const update = () =>
      node.classList.toggle(
        "chart-running",
        visible && document.visibilityState === "visible" && !reduced?.matches,
      );
    const observer =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            update();
          })
        : null;
    observer?.observe(node);
    document.addEventListener("visibilitychange", update);
    reduced?.addEventListener("change", update);
    return () => {
      observer?.disconnect();
      document.removeEventListener("visibilitychange", update);
      reduced?.removeEventListener("change", update);
    };
  }, []);
  return (
    <div ref={ref} className="background-chart" aria-hidden="true">
      <svg viewBox="0 0 800 400" preserveAspectRatio="none" focusable="false">
        <defs>
          <linearGradient id="hero-bar-blue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity=".6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity=".12" />
          </linearGradient>
        </defs>
        <g className="chart-grid">
          {Array.from({ length: 8 }, (_, i) => (
            <line key={i} x1="20" x2="780" y1={50 + i * 40} y2={50 + i * 40} />
          ))}
        </g>
        <g className="chart-rings">
          {[50, 100, 150, 195].map((r) => (
            <circle key={r} cx="400" cy="190" r={r} />
          ))}
        </g>
        <path
          className="chart-trend"
          d="M 50 325 Q 205 245 400 225 T 750 190"
        />
        <g className="chart-bars">
          {Array.from({ length: 12 }, (_, i) => {
            const height = 40 + Math.sin(i * 0.5) * 20;
            return (
              <rect
                key={i}
                x={50 + i * 60}
                y={350 - height}
                width="20"
                height={height}
                rx="2"
              />
            );
          })}
        </g>
        <g className="chart-particles">
          {Array.from({ length: 15 }, (_, i) => (
            <circle
              key={i}
              cx={35 + ((i * 83) % 740)}
              cy={65 + ((i * 61) % 310)}
              r={2 + Math.sin(i)}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
