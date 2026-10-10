import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Check,
  AlertTriangle,
  ScanLine,
  Activity,
  Layers,
  Network,
  ClipboardCheck,
  FileSearch,
} from "lucide-react";
import { initialRun, transition, recordFor, STEP_IDS } from "../lib/eol";
import { analytics, track } from "../lib/runtime";

const icons = [
  Layers,
  ScanLine,
  Activity,
  ClipboardCheck,
  AlertTriangle,
  FileSearch,
];
export default function Demo({ copy }) {
  const [state, setState] = useState(initialRun);
  const current = useRef(state);
  const heading = useRef(null);
  const c = copy;
  const record = recordFor(state.scenario);
  const started = state.step >= 0;
  const passed = record.result === "pass";
  const isFinal = state.step === 5;
  function act(action) {
    const old = current.current;
    if (action.type === "SELECT_SCENARIO")
      track("demo_scenario_select", { scenario: action.scenario });
    const next = transition(old, action);
    if (next === old) return;
    if (action.type === "START") {
      analytics.recordDemo(next.scenario, 1);
      track("demo_start", { scenario: next.scenario });
    }
    if (
      action.type === "RESET" ||
      (action.type === "SELECT_SCENARIO" && old.step >= 0)
    )
      track("demo_reset", {
        scenario: old.scenario,
        reason: action.type === "RESET" ? "restart" : "scenario_change",
      });
    if (next.step >= 0 && !old.reached.includes(next.step)) {
      analytics.recordDemo(next.scenario, next.step + 1);
      track("demo_step_reached", {
        scenario: next.scenario,
        stage: STEP_IDS[next.step],
      });
      if (next.step === 5) track("demo_complete", { scenario: next.scenario });
    }
    current.current = next;
    setState(next);
    if (action.type !== "SELECT_SCENARIO")
      requestAnimationFrame(() =>
        heading.current?.focus({ preventScroll: true }),
      );
  }
  const rows = started
    ? [
        [c.fields.order, record.order],
        [c.fields.model, record.model],
        [c.fields.operation, "EOL"],
      ]
    : [];
  if (state.step >= 1)
    rows.push(
      [c.fields.serial, record.serial],
      [c.fields.component, record.components[0]],
      [c.fields.lot, record.components[1]],
    );
  if (state.step >= 2)
    rows.push(
      [c.fields.station, record.station],
      [c.fields.condition, record.condition],
      [c.fields.signal, `${record.measurement.toFixed(2)} V`],
    );
  if (state.step >= 3)
    rows.push(
      [c.fields.limits, "2.40–2.60 V"],
      [c.fields.rule, record.rule],
      [c.fields.result, passed ? c.pass : c.fail],
    );
  if (state.step >= 4)
    rows.push(
      [c.fields.disposition, passed ? c.accepted : c.hold],
      [c.fields.reason, passed ? c.passReason : c.failReason],
    );
  return (
    <div className="demo-console">
      <div className="console-header">
        <div>
          <span className="mono micro">{c.station}</span>
          <h3>{c.name}</h3>
        </div>
        <span className="synthetic">
          <span />
          {c.badge}
        </span>
      </div>
      <fieldset className="scenario-switch">
        <legend className="sr-only">{c.scenarioLabel}</legend>
        {["normal", "failure"].map((scenario) => (
          <label
            key={scenario}
            className={state.scenario === scenario ? "selected" : ""}
          >
            <input
              type="radio"
              name="scenario"
              value={scenario}
              checked={state.scenario === scenario}
              onChange={() => act({ type: "SELECT_SCENARIO", scenario })}
            />
            {scenario === "normal" ? (
              <Check size={16} />
            ) : (
              <AlertTriangle size={16} />
            )}
            {c[scenario]}
          </label>
        ))}
      </fieldset>
      <ol className="workflow-rail" aria-label={c.name}>
        {c.steps.map((step, i) => {
          const Icon = icons[i];
          return (
            <li
              key={step}
              className={`${state.step === i ? "current" : ""} ${state.reached.includes(i) ? "reached" : ""}`}
              aria-current={state.step === i ? "step" : undefined}
            >
              <span className="rail-icon">
                <Icon size={19} />
              </span>
              <span className="rail-label">
                <small className="mono">0{i + 1}</small>
                {step}
              </span>
            </li>
          );
        })}
      </ol>
      <div className="demo-workspace">
        <div className="demo-narrative">
          <div className="mono micro stage-count">
            {started ? `${c.step} ${state.step + 1} ${c.of} 6` : c.ready}
          </div>
          <h4 tabIndex="-1" ref={heading}>
            {started ? c.titles[state.step] : c.readyTitle}
          </h4>
          <p>{started ? c.bodies[state.step] : c.readyText}</p>
          <div
            className={`signal-view ${state.step >= 3 && !passed ? "signal-failure" : ""}`}
          >
            <span className="mono micro">
              {started ? c.transfers[state.step] : "ERP → MES → EOL → QUALITY"}
            </span>
            <div className="signal-diagram" aria-hidden="true">
              <Network size={26} />
              <span className="signal-path" />
              <span className="signal-number mono">
                {state.step >= 2 ? `${record.measurement.toFixed(2)} V` : "···"}
              </span>
              <span className="signal-path" />
              {state.step >= 3 ? (
                passed ? (
                  <Check size={26} />
                ) : (
                  <AlertTriangle size={26} />
                )
              ) : (
                <Layers size={26} />
              )}
            </div>
            <span className="signal-caption">
              {started ? c.payloads[state.step] : c.station}
            </span>
          </div>
          {state.step >= 4 && (
            <div className={`disposition ${passed ? "accepted" : "hold"}`}>
              <strong>{passed ? c.accepted : c.hold}</strong>
              <p>{passed ? c.acceptance : c.holdNote}</p>
            </div>
          )}
          <div className="demo-controls">
            {!started ? (
              <button
                className="button primary"
                onClick={() => act({ type: "START" })}
              >
                {c.start}
                <ArrowRight size={17} />
              </button>
            ) : (
              <>
                <button
                  className="button quiet"
                  disabled={state.step === 0}
                  onClick={() => act({ type: "PREVIOUS" })}
                >
                  <ArrowLeft size={16} />
                  {c.previous}
                </button>
                {!isFinal && (
                  <button
                    className="button primary"
                    onClick={() => act({ type: "NEXT" })}
                  >
                    {c.next}
                    <ArrowRight size={16} />
                  </button>
                )}
                <button
                  className="button reset"
                  onClick={() => act({ type: "RESET" })}
                >
                  <RotateCcw size={15} />
                  {c.reset}
                </button>
              </>
            )}
          </div>
        </div>
        <aside className="evidence-panel" aria-label={c.evidence}>
          <div className="evidence-heading">
            <FileSearch size={17} />
            <h4>{c.evidence}</h4>
          </div>
          {!started ? (
            <div className="evidence-empty">
              <ScanLine size={40} strokeWidth={1} />
              <p>{c.empty}</p>
              <span className="mono">DEMO-SN-0042</span>
            </div>
          ) : (
            <dl>
              {rows.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </aside>
      </div>
      <div className="sr-only" role="status" aria-live="polite">
        {started
          ? `${c.step} ${state.step + 1}: ${c.steps[state.step]}`
          : c.ready}
      </div>
      {isFinal && (
        <div className="demo-complete">
          <div>
            <h4>{c.finalTitle}</h4>
            <p>{c.finalText}</p>
          </div>
          <a
            href="#contact"
            className="button primary"
            onClick={() => track("contact_click", { location: "demo" })}
          >
            {c.contact}
            <ArrowRight size={16} />
          </a>
        </div>
      )}
      {started && (
        <details className="event-log">
          <summary>
            {c.log} <span className="mono">{state.events.length}/6</span>
          </summary>
          <p>{c.eventNote}</p>
          <ol>
            {state.events.map((event) => (
              <li key={event.type}>
                <span className="mono">0{event.sequence}</span>
                {c.steps[event.sequence - 1]}
                <span className="mono">{record.serial}</span>
              </li>
            ))}
          </ol>
        </details>
      )}
      <p className="demo-disclaimer">{c.disclaimer}</p>
    </div>
  );
}
