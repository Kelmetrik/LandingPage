import test from "node:test";
import assert from "node:assert/strict";
import {
  evaluateSignal,
  initialRun,
  transition,
  recordFor,
} from "../src/lib/eol.js";

test("the illustrative limits are inclusive and invalid signals cannot pass", () => {
  for (const value of [2.4, 2.51, 2.6])
    assert.equal(evaluateSignal(value), "pass");
  for (const value of [2.3999, 2.6001, 2.72])
    assert.equal(evaluateSignal(value), "fail");
  for (const value of [NaN, Infinity, null, "2.51"])
    assert.equal(evaluateSignal(value), "invalid");
});
for (const scenario of ["normal", "failure"])
  test(`${scenario}: a six-stage history retains the product and quality relationships`, () => {
    let state = transition(initialRun(scenario), { type: "START" });
    for (let i = 0; i < 5; i++) state = transition(state, { type: "NEXT" });
    assert.equal(state.step, 5);
    assert.equal(state.events.length, 6);
    const record = state.events[5].record;
    assert.equal(record.order, "DEMO-WO-2048");
    assert.equal(record.serial, "DEMO-SN-0042");
    assert.equal(record.components.length, 2);
    assert.equal(record.station, "DEMO-EOL-01");
    assert.equal(record.rule, "DEMO-EOL-v1");
    assert.equal(
      record.disposition,
      scenario === "failure" ? "quality_hold" : "test_accepted",
    );
    const previous = transition(state, { type: "PREVIOUS" });
    const replay = transition(previous, { type: "NEXT" });
    assert.deepEqual(replay.events, state.events);
    assert.strictEqual(transition(state, { type: "NEXT" }), state);
  });
test("scenario changes and restarts discard the old run without releasing held products", () => {
  let state = initialRun("failure");
  state = transition(state, { type: "START" });
  for (let i = 0; i < 5; i++) state = transition(state, { type: "NEXT" });
  const old = state;
  const reset = transition(state, { type: "RESET" });
  assert.equal(reset.step, -1);
  assert.deepEqual(reset.events, []);
  assert.equal(reset.scenario, "failure");
  assert.equal(old.events.at(-1).record.disposition, "quality_hold");
  const switched = transition(state, {
    type: "SELECT_SCENARIO",
    scenario: "normal",
  });
  assert.equal(switched.step, -1);
  assert.deepEqual(switched.reached, []);
  assert.equal(switched.run, old.run + 1);
  assert.equal(recordFor(switched.scenario).measurement, 2.51);
  assert.strictEqual(
    transition(switched, { type: "SELECT_SCENARIO", scenario: "invalid" }),
    switched,
  );
  assert.strictEqual(transition(initialRun(), { type: "PREVIOUS" }).step, -1);
});
