import { useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { track } from "../lib/runtime";
export default function ContactForm({ copy, privacyUrl, lang }) {
  const [status, setStatus] = useState("idle");
  const lock = useRef(false);
  const formStarted = useRef(false);
  const message = useRef(null);
  function start() {
    if (!formStarted.current) {
      formStarted.current = true;
      track("form_start");
    }
  }
  async function submit(event) {
    event.preventDefault();
    if (lock.current || status === "success") return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    if (data.get("_gotcha")) return;
    lock.current = true;
    setStatus("sending");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch("https://formspree.io/f/mdkwrdok", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      if (!response.ok) {
        track("form_submit_error", { error: "service" });
        setStatus("error");
      } else {
        track("form_submit_success");
        setStatus("success");
      }
    } catch {
      track("form_submit_error", { error: "network" });
      setStatus("error");
    } finally {
      clearTimeout(timeout);
      lock.current = false;
      requestAnimationFrame(() =>
        message.current?.focus({ preventScroll: true }),
      );
    }
  }
  if (status === "success")
    return (
      <div className="form-success" ref={message} tabIndex="-1" role="status">
        <CheckCircle2 size={36} />
        <h3>{copy.success}</h3>
      </div>
    );
  return (
    <form
      className="contact-form"
      onSubmit={submit}
      onChange={start}
      action="https://formspree.io/f/mdkwrdok"
      method="POST"
      aria-busy={status === "sending"}
    >
      <p className="form-note">{copy.required}</p>
      <input type="hidden" name="language" value={lang} />
      <div className="form-pair">
        <label htmlFor="fullName">
          {copy.name} *
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            maxLength="120"
            required
            disabled={status === "sending"}
          />
        </label>
        <label htmlFor="company">
          {copy.company} *
          <input
            id="company"
            name="companyName"
            autoComplete="organization"
            maxLength="160"
            required
            disabled={status === "sending"}
          />
        </label>
      </div>
      <label htmlFor="email">
        {copy.email} *
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength="254"
          required
          disabled={status === "sending"}
        />
      </label>
      <label htmlFor="challenge">
        {copy.challenge} <span>({copy.optional})</span>
        <textarea
          id="challenge"
          name="challenges"
          rows="4"
          maxLength="3000"
          placeholder={copy.placeholder}
          disabled={status === "sending"}
        />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">
          {copy.honeypot}
          <input id="website" name="_gotcha" tabIndex="-1" autoComplete="off" />
        </label>
      </div>
      <p className="form-note">
        {copy.notice} <a href={privacyUrl}>{copy.privacy}</a>.
      </p>
      {status === "error" && (
        <p ref={message} tabIndex="-1" role="alert" className="form-error">
          {copy.error}
        </p>
      )}
      <button
        type="submit"
        className="button primary"
        disabled={status === "sending"}
      >
        {status === "sending" ? copy.submitting : copy.submit}
        <ArrowUpRight size={18} />
      </button>
    </form>
  );
}
