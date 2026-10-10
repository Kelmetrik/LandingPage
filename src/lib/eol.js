export const STEP_IDS = [
  "work_order",
  "identification",
  "test",
  "validation",
  "disposition",
  "traceability",
];
export const SPEC = Object.freeze({
  lower: 2.4,
  upper: 2.6,
  unit: "V",
  rule: "DEMO-EOL-v1",
});
export const MEASUREMENTS = Object.freeze({ normal: 2.51, failure: 2.72 });

export function evaluateSignal(value, spec = SPEC) {
  if (!Number.isFinite(value)) return "invalid";
  return value >= spec.lower && value <= spec.upper ? "pass" : "fail";
}

export function initialRun(scenario = "normal", run = 0) {
  return { scenario, run, step: -1, reached: [], events: [] };
}

export function recordFor(scenario) {
  const measurement = MEASUREMENTS[scenario];
  if (measurement === undefined)
    throw new Error("Unknown demonstration scenario");
  const result = evaluateSignal(measurement);
  return {
    order: "DEMO-WO-2048",
    model: "DEMO-SENSOR-01",
    serial: "DEMO-SN-0042",
    components: ["DEMO-PCB-031", "DEMO-LOT-008"],
    station: "DEMO-EOL-01",
    condition: "DEMO-REF-01",
    measurement,
    ...SPEC,
    result,
    disposition: result === "pass" ? "test_accepted" : "quality_hold",
  };
}

function reach(state, step) {
  const first = !state.reached.includes(step);
  return {
    ...state,
    step,
    reached: first ? [...state.reached, step] : state.reached,
    events: first
      ? [
          ...state.events,
          {
            sequence: step + 1,
            type: STEP_IDS[step],
            record: recordFor(state.scenario),
          },
        ]
      : state.events,
  };
}

export function transition(state, action) {
  switch (action.type) {
    case "SELECT_SCENARIO":
      return Object.hasOwn(MEASUREMENTS, action.scenario) &&
        action.scenario !== state.scenario
        ? initialRun(action.scenario, state.run + 1)
        : state;
    case "START":
      return state.step === -1 ? reach(state, 0) : state;
    case "NEXT":
      return state.step >= 0 && state.step < 5
        ? reach(state, state.step + 1)
        : state;
    case "PREVIOUS":
      return state.step > 0 ? { ...state, step: state.step - 1 } : state;
    case "RESET":
      return initialRun(state.scenario, state.run + 1);
    default:
      return state;
  }
}
