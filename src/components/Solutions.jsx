import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDot,
  ClipboardCheck,
  FileSearch,
  Link2,
  ScanLine,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import Observed from "./Observed";
import { track } from "../lib/runtime";

function Facts({ facts }) {
  return (
    <dl className="solution-facts">
      {facts.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
function Example({ item, copy }) {
  return (
    <figure
      className={`solution-example example-${item.id}`}
      aria-labelledby={`example-${item.id}`}
    >
      <figcaption>
        <span className="concept-label">
          <CircleDot size={13} />
          {copy.example}
        </span>
        <h4 id={`example-${item.id}`}>{item.visualTitle}</h4>
      </figcaption>
      {item.nodes && (
        <ol className="record-connections">
          {item.nodes.map(([name, detail], i) => (
            <li key={name}>
              <span className="mono">{name}</span>
              <strong>{detail}</strong>
              {i < 2 && <ArrowRight size={16} aria-hidden="true" />}
            </li>
          ))}
        </ol>
      )}
      <div className="example-record">
        <div className="example-record-title">
          <span>{item.recordTitle}</span>
          {item.id === "manufacturing" ? (
            <FileSearch size={18} />
          ) : item.id === "quality" ? (
            <ShieldCheck size={18} />
          ) : item.id === "apqp" ? (
            <ClipboardCheck size={18} />
          ) : (
            <ScanLine size={18} />
          )}
        </div>
        {item.finding && <p className="example-finding">{item.finding}</p>}
        {item.milestone && <p className="example-finding">{item.milestone}</p>}
        {item.id === "apqp" && (
          <ul className="milestone-list">
            {item.rows.map(([name, state], i) => (
              <li key={name}>
                {i === 0 ? (
                  <Check size={16} aria-hidden="true" />
                ) : (
                  <CircleDot size={16} aria-hidden="true" />
                )}
                <span>{name}</span>
                <strong>{state}</strong>
              </li>
            ))}
          </ul>
        )}
        {item.id === "warehouse" && (
          <table className="material-comparison">
            <caption className="sr-only">{item.recordTitle}</caption>
            <thead>
              <tr>
                <td></td>
                {item.columns.map((col) => (
                  <th scope="col" key={col}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {item.rows.map(([label, wanted, scanned], i) => (
                <tr key={label} className={i === 0 ? "material-mismatch" : ""}>
                  <th scope="row">{label}</th>
                  <td>{wanted}</td>
                  <td>{scanned}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {item.facts && <Facts facts={item.facts} />}
        {item.evidence && (
          <div className="linked-evidence">
            <Link2 size={17} />
            <div>
              <strong>{item.evidence}</strong>
              <p>{item.evidenceText}</p>
            </div>
          </div>
        )}
        {item.steps && (
          <ol className="quality-path">
            {item.steps.map((step, i) => (
              <li key={step}>
                <span className="mono">0{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        )}
        {item.status && (
          <p className="example-status">
            <TriangleAlert size={16} aria-hidden="true" />
            {item.status}
          </p>
        )}
        <p className="example-outcome">{item.outcome}</p>
      </div>
      <p className="example-caption">{copy.caption}</p>
    </figure>
  );
}
export default function Solutions({ c }) {
  const d = c.domains;
  return (
    <section id="solutions" className="section solutions-section">
      <span
        id="connected-operations"
        className="anchor-alias"
        aria-hidden="true"
      />
      <span id="capabilities" className="anchor-alias" aria-hidden="true" />
      <span id="analytics" className="anchor-alias" aria-hidden="true" />
      <div className="container">
        <Observed value="solutions" className="section-heading">
          <p className="eyebrow">{d.eyebrow}</p>
          <h2>{d.title}</h2>
          <p className="section-intro">{d.intro}</p>
        </Observed>
        <div className="platform-overview">
          <h3>{d.platformTitle}</h3>
          <div className="platform-grid">
            {d.platforms.map(([name, label, body]) => (
              <div className="platform-item" key={name}>
                <div className="platform-name">
                  <strong>{name}</strong>
                  <span>{d.custom}</span>
                </div>
                <h4>{label}</h4>
                <p>{body}</p>
              </div>
            ))}
          </div>
          <p className="platform-note">{d.platformNote}</p>
        </div>
        <nav className="solution-jump" aria-label={d.navigate}>
          {d.items.map((item, i) => (
            <a key={item.id} href={`#solution-${item.id}`}>
              <span className="mono">0{i + 1}</span>
              {item.short}
              <ArrowRight size={16} />
            </a>
          ))}
        </nav>
        <div className="solution-list">
          {d.items.map((item, i) => (
            <article
              className="solution-row"
              id={`solution-${item.id}`}
              key={item.id}
            >
              <div className="solution-copy">
                <Observed event="domain_view" value={item.id}>
                  <div className="solution-kicker">
                    <span className="solution-number mono">0{i + 1}</span>
                    <span className="solution-platform">{item.platform}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p className="solution-summary">{item.summary}</p>
                </Observed>
                <a
                  className="text-link solution-contact"
                  href="#contact"
                  onClick={() =>
                    track("contact_click", {
                      location: "solution",
                      domain: item.id,
                    })
                  }
                >
                  {d.contact}
                  <ArrowUpRight size={17} />
                  <span className="sr-only"> — {item.title}</span>
                </a>
              </div>
              <Example item={item} copy={d} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
