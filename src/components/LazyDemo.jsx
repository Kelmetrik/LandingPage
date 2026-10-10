import { Component, lazy, Suspense, useEffect, useRef, useState } from "react";
const Demo = lazy(() => import("./Demo"));
class DemoBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <p className="demo-load" role="status">
        {this.props.message}
      </p>
    ) : (
      this.props.children
    );
  }
}
export default function LazyDemo({ copy }) {
  const root = useRef(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      const timer = setTimeout(() => setReady(true), 0);
      return () => clearTimeout(timer);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(root.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={root}>
      <DemoBoundary message={copy.fallback}>
        {ready ? (
          <Suspense
            fallback={
              <p className="demo-load" role="status">
                {copy.loading}
              </p>
            }
          >
            <Demo copy={copy} />
          </Suspense>
        ) : (
          <div className="demo-load">
            <span className="synthetic">{copy.badge}</span>
            <h3>{copy.name}</h3>
            <p>{copy.readyText}</p>
          </div>
        )}
      </DemoBoundary>
      <details className="static-demo">
        <summary>{copy.staticTitle}</summary>
        <p>{copy.staticText}</p>
        <ol>
          {copy.steps.map((step, i) => (
            <li key={step}>
              <strong>{step}</strong>
              <p>{copy.bodies[i]}</p>
            </li>
          ))}
        </ol>
        <p>{copy.disclaimer}</p>
      </details>
    </div>
  );
}
