// Progressive enhancement: content stays visible without JS or observer support.
export function enhanceScrollPresentation(main) {
  if (!main) return () => {};
  const root = document.documentElement;
  const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)");
  const targets = [
    ...main.querySelectorAll(
      ".section-heading, .solution-example, .machine-stage, .approach-steps > li",
    ),
  ];
  const seen = new WeakSet();
  let observer;

  const update = () => {
    observer?.disconnect();
    root.classList.toggle("block-scroll", !reduced?.matches);
    if (reduced?.matches) {
      targets.forEach((target) => target.classList.remove("reveal-arrived"));
      return;
    }
    if (!window.IntersectionObserver) return;
    observer = new window.IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || seen.has(entry.target)) continue;
          seen.add(entry.target);
          entry.target.classList.add("reveal-arrived");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -24px 0px" },
    );
    targets
      .filter((target) => !seen.has(target))
      .forEach((target) => observer.observe(target));
  };
  update();
  reduced?.addEventListener("change", update);
  return () => {
    observer?.disconnect();
    reduced?.removeEventListener("change", update);
    root.classList.remove("block-scroll");
    targets.forEach((target) => target.classList.remove("reveal-arrived"));
  };
}
