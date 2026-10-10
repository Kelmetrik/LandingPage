import { useEffect, useRef } from "react";

// Synthetic values recreate the original hero's moving bars, color wave and labels.
// Update only this decorative SVG, at most 25 fps; never rerender the page per frame.
function sample(time, index) {
  return {
    height:
      48 +
      Math.sin(time + index * 0.5) * 24 +
      Math.sin(time * 0.7 + index * 0.3) * 10,
    highlight: Math.cos(time * 1.45 - index * 0.6) > 0.45,
  };
}
export default function AnimatedBackgroundChart() {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const bars = [...node.querySelectorAll(".chart-bar")];
    const labels = [...node.querySelectorAll(".chart-value")];
    const particles = [...node.querySelectorAll(".chart-particles circle")];
    const rings = [...node.querySelectorAll(".chart-rings circle")];
    const trend = node.querySelector(".chart-trend");
    let visible = false,
      frameId,
      last,
      time = 0;
    function paint() {
      bars.forEach((bar, i) => {
        const { height, highlight } = sample(time, i);
        bar.setAttribute("height", height.toFixed(2));
        bar.setAttribute("y", (350 - height).toFixed(2));
        bar.classList.toggle("chart-highlight", highlight);
        labels[i].setAttribute("y", (341 - height).toFixed(2));
        labels[i].classList.toggle("chart-highlight", highlight);
        const value = String(Math.round(height));
        if (labels[i].textContent !== value) labels[i].textContent = value;
      });
      trend.setAttribute(
        "d",
        `M 45 ${305 + Math.sin(time) * 16} Q 205 ${250 + Math.sin(time + 1) * 22} 400 ${222 + Math.sin(time + 2) * 18} T 755 ${212 + Math.sin(time + 3) * 22}`,
      );
      particles.forEach((particle, i) =>
        particle.setAttribute(
          "cy",
          String(65 + ((i * 61) % 310) + Math.sin(time * 0.7 + i) * 9),
        ),
      );
      rings.forEach((ring, i) =>
        ring.setAttribute(
          "r",
          String(50 + i * 48 + Math.sin(time * 0.6 + i) * 12),
        ),
      );
    }
    function frame(now) {
      frameId = undefined;
      if (!node.classList.contains("chart-running")) return;
      if (last === undefined) last = now;
      if (now - last >= 40) {
        time += Math.min(now - last, 80) * 0.00065;
        last = now;
        paint();
      }
      frameId = window.requestAnimationFrame?.(frame);
    }
    function update() {
      const running =
        visible && document.visibilityState === "visible" && !reduced?.matches;
      node.classList.toggle("chart-running", running);
      if (!running) {
        if (frameId !== undefined) window.cancelAnimationFrame?.(frameId);
        frameId = undefined;
        last = undefined;
      } else if (frameId === undefined)
        frameId = window.requestAnimationFrame?.(frame);
    }
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
      if (frameId !== undefined) window.cancelAnimationFrame?.(frameId);
    };
  }, []);
  return (
    <div ref={ref} className="background-chart" aria-hidden="true">
      <svg viewBox="0 0 800 400" preserveAspectRatio="none" focusable="false">
        <defs>
          <linearGradient id="hero-bar-blue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity=".75" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity=".13" />
          </linearGradient>
          <linearGradient
            id="hero-bar-orange"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ff9556" stopOpacity=".9" />
            <stop offset="100%" stopColor="#ff9556" stopOpacity=".17" />
          </linearGradient>
        </defs>
        <g className="chart-grid">
          {Array.from({ length: 8 }, (_, i) => (
            <line key={i} x1="20" x2="780" y1={50 + i * 40} y2={50 + i * 40} />
          ))}
        </g>
        <g className="chart-rings">
          {[50, 98, 146, 194].map((r) => (
            <circle key={r} cx="400" cy="190" r={r} />
          ))}
        </g>
        <path className="chart-trend" d="M45 305 Q205 268 400 238 T755 215" />
        <g className="chart-bars">
          {Array.from({ length: 12 }, (_, i) => {
            const { height, highlight } = sample(0, i);
            return (
              <g key={i}>
                <rect
                  className={`chart-bar${highlight ? " chart-highlight" : ""}`}
                  x={50 + i * 60}
                  y={350 - height}
                  width="20"
                  height={height}
                  rx="2"
                />
                <text
                  className={`chart-value${highlight ? " chart-highlight" : ""}`}
                  x={60 + i * 60}
                  y={341 - height}
                  textAnchor="middle"
                >
                  {Math.round(height)}
                </text>
              </g>
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
