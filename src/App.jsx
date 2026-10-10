import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Menu,
  X,
  Factory,
  Cpu,
  Users,
  Network,
  Check,
  Layers,
  Workflow,
  CircleDot,
  Mail,
} from "lucide-react";
import logo from "./assets/logo.png";
import { content } from "./content";
import { storyboards } from "./storyboards";
import Observed from "./components/Observed";
import LazyDemo from "./components/LazyDemo";
import ContactForm from "./components/ContactForm";
import { track, measurementState, chooseMeasurement } from "./lib/runtime";
import "./App.css";

function Motion({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    let visible = false;
    const update = () =>
      ref.current?.classList.toggle(
        "motion-visible",
        visible && document.visibilityState === "visible",
      );
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    observer.observe(ref.current);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return (
    <div ref={ref} className={`motion ${className}`}>
      {children}
    </div>
  );
}
function Heading({ eyebrow, title, intro, section, className = "" }) {
  return (
    <Observed value={section} className={`section-heading ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </Observed>
  );
}
function Header({ c, privacy }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const links = ["solutions", "connected-operations", "approach", "contact"];
  return (
    <header className="header">
      <div className="header-inner">
        <a className="brand" href={c.home} aria-label="Kelmetrik">
          <img src={logo} alt="Kelmetrik" width="220" height="32" />
        </a>
        <div className="header-right">
          <nav
            id="main-navigation"
            className={`navigation ${open ? "open" : ""}`}
            aria-label={c.menu}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setOpen(false);
                toggle.current?.focus();
              }
            }}
          >
            {c.nav.map((label, i) => (
              <a
                key={label}
                href={`${privacy ? c.home : ""}#${links[i]}`}
                onClick={() => {
                  setOpen(false);
                  if (i === 3) track("contact_click", { location: "header" });
                }}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            className="language-link mono"
            href={
              privacy
                ? c.lang === "en"
                  ? "/es/privacidad/"
                  : "/privacy/"
                : c.otherUrl
            }
            hrefLang={c.lang === "en" ? "es" : "en"}
            lang={c.lang === "en" ? "es" : "en"}
          >
            {c.other}
            <ArrowUpRight size={13} />
          </a>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-navigation"
            aria-label={open ? c.close : c.menu}
            onClick={() => {
              const next = !open;
              setOpen(next);
              if (next)
                requestAnimationFrame(() =>
                  document.querySelector("#main-navigation a")?.focus(),
                );
            }}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <noscript>
        <nav className="nojs-nav" aria-label={c.menu}>
          {c.nav.map((label, i) => (
            <a key={label} href={`${privacy ? c.home : ""}#${links[i]}`}>
              {label}
            </a>
          ))}
        </nav>
      </noscript>
    </header>
  );
}
function HeroNetwork({ c }) {
  const icons = [Layers, Cpu, Users];
  return (
    <Motion className="hero-network">
      <div className="network-grid" aria-hidden="true" />
      <div className="network-inputs">
        {c.network.map((label, i) => {
          const Icon = icons[i];
          return (
            <div className={`network-node network-node-${i}`} key={label}>
              <Icon size={22} strokeWidth={1.5} />
              <div>
                <strong>{label}</strong>
                <small>{c.networkLabels[i]}</small>
              </div>
              <span className="node-port" aria-hidden="true" />
            </div>
          );
        })}
      </div>
      <svg
        className="network-connections"
        viewBox="0 0 400 260"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 35H70Q95 35 95 60V105Q95 130 125 130H400M0 130H400M0 225H70Q95 225 95 200V155Q95 130 125 130H400" />
        <path
          className="travelling"
          d="M0 35H70Q95 35 95 60V105Q95 130 125 130H400M0 130H400M0 225H70Q95 225 95 200V155Q95 130 125 130H400"
        />
      </svg>
      <div className="context-node">
        <span className="context-orbit" aria-hidden="true" />
        <Network size={30} strokeWidth={1.5} />
        <strong>{c.networkCenter}</strong>
        <span className="mono">KELMETRIK</span>
      </div>
      <div className="network-output">
        <div className="output-line" aria-hidden="true" />
        <span className="output-symbol">
          <Check size={24} />
        </span>
        <p>{c.networkCaption}</p>
      </div>
    </Motion>
  );
}
function Disconnect({ c }) {
  const d = c.disconnect;
  return (
    <section id="disconnect" className="section disconnect">
      <div className="container">
        <div className="split-heading">
          <Heading {...d} section="disconnect" />
          <ul className="problem-list">
            {d.problems.map((p) => (
              <li key={p}>
                <span />
                <p>{p}</p>
              </li>
            ))}
          </ul>
        </div>
        <Motion className="comparison">
          <div className="flow-row fragmented">
            <span className="flow-label">{d.fragmented}</span>
            <ol>
              {d.before.map((label, i) => (
                <li key={label}>
                  <span className="mono">0{i + 1}</span>
                  {label}
                </li>
              ))}
            </ol>
          </div>
          <div className="flow-row connected">
            <span className="flow-label">
              <CircleDot size={15} />
              {d.connected}
            </span>
            <ol>
              {d.after.map((label, i) => (
                <li key={label}>
                  <span className="mono">0{i + 1}</span>
                  {label}
                  {i < 3 && <ArrowRight className="flow-arrow" size={18} />}
                </li>
              ))}
            </ol>
          </div>
        </Motion>
        <p className="section-footnote">{d.foot}</p>
      </div>
    </section>
  );
}
function Domains({ c }) {
  const icons = [Factory, Check, Workflow, Layers];
  const d = c.domains;
  return (
    <section id="solutions" className="section domains">
      <div className="container">
        <Heading {...d} section="solutions" />
        <div className="domain-list">
          {d.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <article key={item.id} className="domain-row">
                <div className="domain-index mono">
                  0{i + 1}
                  <Icon size={27} strokeWidth={1.4} />
                </div>
                <div className="domain-content">
                  <Observed event="domain_view" value={item.id}>
                    <h3>{item.title}</h3>
                    <p className="domain-problem">{item.problem}</p>
                  </Observed>
                  <div className="domain-description">
                    <div>
                      <span className="eyebrow small">{d.flow}</span>
                      <p>{item.flow}</p>
                    </div>
                    <div>
                      <span className="eyebrow small">{d.result}</span>
                      <p>{item.result}</p>
                    </div>
                  </div>
                  {i === 0 ? (
                    <a
                      className="text-link"
                      href="#connected-operations"
                      onClick={() =>
                        track("domain_explore", { domain: item.id })
                      }
                    >
                      {d.viewDemo}
                      <ArrowUpRight size={18} />
                    </a>
                  ) : (
                    <details
                      className="storyboard"
                      onToggle={(e) => {
                        if (e.currentTarget.open)
                          track("domain_explore", { domain: item.id });
                      }}
                    >
                      <summary>
                        {d.explore}
                        <ArrowDown size={17} />
                      </summary>
                      <div>
                        <p className="micro">{d.example}</p>
                        <ol>
                          {item.steps.map((step, j) => (
                            <li key={step}>
                              <span className="mono">0{j + 1}</span>
                              <strong>{step}</strong>
                            </li>
                          ))}
                        </ol>
                        <dl className="story-facts">
                          {storyboards[c.lang][item.id].map(
                            ([label, value]) => (
                              <div key={label}>
                                <dt>{label}</dt>
                                <dd>{value}</dd>
                              </div>
                            ),
                          )}
                        </dl>
                      </div>
                    </details>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function BeyondMachine({ c }) {
  const m = c.machine;
  return (
    <section id="machine" className="section machine">
      <div className="container">
        <Heading {...m} section="machine" />
        <div className="machine-flow">
          {m.labels.map((label, i) => (
            <div className="machine-stage" key={label}>
              <span className="mono">0{i + 1}</span>
              {i === 0 ? (
                <ActivityGraphic />
              ) : i === 1 ? (
                <ScanGraphic />
              ) : i === 2 ? (
                <ClipboardGraphic />
              ) : (
                <Users size={44} strokeWidth={1} />
              )}
              <h3>{label}</h3>
              <p>{m.details[i]}</p>
              {i < 3 && <ArrowRight className="machine-arrow" size={20} />}
            </div>
          ))}
        </div>
        <div className="machine-foot">
          <strong>{m.caption}</strong>
          <p>{m.note}</p>
        </div>
      </div>
    </section>
  );
}
function ActivityGraphic() {
  return (
    <svg
      width="68"
      height="44"
      viewBox="0 0 68 44"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 25H12L17 9L25 36L33 16L40 25H68"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M0 42H68M0 2H68" stroke="currentColor" opacity=".15" />
    </svg>
  );
}
function ScanGraphic() {
  return (
    <svg
      width="68"
      height="44"
      viewBox="0 0 68 44"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 0H0V44H7M61 0H68V44H61M12 10V34M18 10V34M27 10V34M33 10V34M37 10V34M47 10V34M56 10V34"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
function ClipboardGraphic() {
  return (
    <svg
      width="68"
      height="44"
      viewBox="0 0 68 44"
      fill="none"
      aria-hidden="true"
    >
      <rect x="10" y="1" width="48" height="42" rx="3" stroke="currentColor" />
      <path
        d="M19 13L23 17L29 10M35 14H49M19 28L23 32L29 25M35 29H49"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
function Approach({ c }) {
  const a = c.approach;
  return (
    <section id="approach" className="section approach">
      <div className="container">
        <Heading {...a} section="approach" />
        <ol className="approach-steps">
          {a.steps.map(([name, body, deliverable], i) => (
            <li key={name}>
              <div className="method-number mono">0{i + 1}</div>
              <h3>{name}</h3>
              <p>{body}</p>
              <div className="deliverable">
                <span className="eyebrow small">{a.deliverable}</span>
                <strong>{deliverable}</strong>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
const serverMeasurement = JSON.stringify({
  configured: false,
  privacySignal: false,
  choice: "off",
  enabled: false,
});
function subscribeMeasurement(callback) {
  window.addEventListener("kelmetrik:measurement", callback);
  return () => window.removeEventListener("kelmetrik:measurement", callback);
}
function Preferences({ c, inline = false }) {
  const [open, setOpen] = useState(false);
  const serialized = useSyncExternalStore(
    subscribeMeasurement,
    () => JSON.stringify(measurementState()),
    () => serverMeasurement,
  );
  const state = JSON.parse(serialized);
  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener("kelmetrik:preferences", show);
    return () => window.removeEventListener("kelmetrik:preferences", show);
  }, []);
  const visible =
    inline ||
    open ||
    (state.configured && !state.privacySignal && state.choice === "unset");
  if (!visible) return null;
  return (
    <section
      className={`preferences ${inline ? "inline-preferences" : ""}`}
      aria-label={c.consent.title}
    >
      <h3>{c.consent.title}</h3>
      <p>
        {!state.configured
          ? c.consent.disabled
          : state.privacySignal
            ? c.consent.protected
            : c.consent.text}
      </p>
      {state.configured && !state.privacySignal && (
        <>
          <p className="micro">
            {state.enabled ? c.consent.on : c.consent.off}
          </p>
          <div className="preference-actions">
            <button
              className="button quiet"
              onClick={() => {
                chooseMeasurement("off");
                setOpen(false);
              }}
            >
              {c.consent.reject}
            </button>
            <button
              className="button primary"
              onClick={() => {
                chooseMeasurement("on");
                setOpen(false);
              }}
            >
              {c.consent.allow}
            </button>
          </div>
        </>
      )}
      {!inline &&
        (state.choice !== "unset" ||
          !state.configured ||
          state.privacySignal) && (
          <button className="text-link" onClick={() => setOpen(false)}>
            {c.consent.close}
            <X size={16} />
          </button>
        )}
      <a className="micro" href={c.privacyUrl}>
        {c.privacy}
      </a>
    </section>
  );
}
function Privacy({ c }) {
  const p = c.privacyContent;
  const responsible =
    import.meta.env.VITE_PRIVACY_RESPONSIBLE?.trim() || "Kelmetrik";
  const address =
    "Miguel Alemán Valdez 3110, Oficina 1B, Colonia Gabilondo, 22044 Tijuana, B.C.";
  return (
    <main id="main" className="privacy-page container">
      <a className="text-link" href={c.home}>
        ← {p.back}
      </a>
      <h1>{p.title}</h1>
      <p className="lead">{p.intro}</p>
      <dl>
        <dt>{p.responsible}</dt>
        <dd>{responsible}</dd>
        <dt>{p.address}</dt>
        <dd>{address}</dd>
      </dl>
      <h2>{p.contactTitle}</h2>
      <p>{p.contactText}</p>
      <h2>{p.analyticsTitle}</h2>
      <p>{p.analyticsText}</p>
      <h2>{p.choicesTitle}</h2>
      <p>{p.choicesText}</p>
      <Preferences c={c} inline />
      <h2>{p.rightsTitle}</h2>
      <p>
        {p.rightsText}{" "}
        <a href="mailto:contact@kelmetrik.com">contact@kelmetrik.com</a>.
      </p>
      <p>{p.providerText}</p>
      <ul>
        <li>
          <a href="https://formspree.io/legal/privacy-policy/">{p.formspree}</a>
        </li>
        <li>
          <a href="https://plausible.io/data-policy">{p.plausible}</a>
        </li>
        <li>
          <a href="https://vercel.com/legal/privacy-policy">{p.vercel}</a>
        </li>
      </ul>
    </main>
  );
}
export default function App({ lang = "en", privacy = false }) {
  const c = content[lang];
  return (
    <>
      <a className="skip-link" href="#main">
        {c.skip}
      </a>
      <Header c={c} privacy={privacy} />
      {privacy ? (
        <Privacy c={c} />
      ) : (
        <main id="main">
          <section id="hero" className="hero">
            <div className="container">
              <Observed value="hero" className="hero-copy">
                <p className="eyebrow">
                  <span className="brand-dot" />
                  {c.eyebrow}
                </p>
                <h1>
                  {c.hero[0]}
                  <br />
                  <span>{c.hero[1]}</span>
                </h1>
                <p className="hero-intro">{c.intro}</p>
              </Observed>
              <div className="hero-actions">
                <a
                  href="#contact"
                  className="button primary"
                  onClick={() => track("contact_click", { location: "hero" })}
                >
                  {c.primary}
                  <ArrowUpRight size={18} />
                </a>
                <a href="#connected-operations" className="button quiet">
                  {c.secondary}
                  <ArrowDown size={17} />
                </a>
              </div>
              <HeroNetwork c={c} />
              <div className="hero-baseline">
                <span>{c.heroNote}</span>
                <span className="mono">IT / OT / SOFTWARE</span>
              </div>
            </div>
          </section>
          <Disconnect c={c} />
          <section id="connected-operations" className="section demo-section">
            <div className="container">
              <Heading {...c.demo} section="connected-operations" />
              <LazyDemo copy={c.demo} />
            </div>
          </section>
          <Domains c={c} />
          <BeyondMachine c={c} />
          <Approach c={c} />
          <section id="contact" className="section contact">
            <div className="container contact-grid">
              <div>
                <Heading {...c.contact} section="contact" />
                <div className="email-contact">
                  <span>{c.contact.emailLabel}</span>
                  <a
                    href="mailto:eduardo@kelmetrik.com"
                    onClick={() =>
                      track("contact_click", { location: "contact" })
                    }
                  >
                    <Mail size={19} />
                    eduardo@kelmetrik.com
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
              <ContactForm
                copy={c.contact}
                privacyUrl={c.privacyUrl}
                lang={lang}
              />
            </div>
          </section>
        </main>
      )}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <a className="brand" href={c.home}>
              <img src={logo} width="190" height="28" alt="Kelmetrik" />
            </a>
            <p>{c.footer}</p>
            <a
              className="text-link"
              href={`${privacy ? c.home : ""}#contact`}
              onClick={() => track("contact_click", { location: "footer" })}
            >
              {c.primary}
              <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {c.rights}
            </span>
            <div>
              <a href={c.privacyUrl}>{c.privacy}</a>
              <button
                onClick={() =>
                  window.dispatchEvent(new Event("kelmetrik:preferences"))
                }
              >
                {c.preferences}
              </button>
              <a href={c.otherUrl} hrefLang={lang === "en" ? "es" : "en"}>
                {c.other}
              </a>
            </div>
          </div>
        </div>
      </footer>
      {!privacy && <Preferences c={c} />}
    </>
  );
}
