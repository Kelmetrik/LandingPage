import {
  ArrowRight,
  Barcode,
  Boxes,
  Check,
  ClipboardList,
  Cpu,
  Database,
  Factory,
  Layers,
  Mail,
  Menu,
  Monitor,
  Package,
  Phone,
  Plug,
  Printer,
  Search,
  Server,
  Settings,
  ShieldCheck,
  Smartphone,
  Truck,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import logoImage from "./assets/logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Industries", href: "#industries" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Contact", href: "#contact" },
];

const problems = [
  {
    icon: ClipboardList,
    title: "Manual Processes",
    description:
      "Paper forms, repetitive data entry and workflows that depend on individual knowledge.",
  },
  {
    icon: Plug,
    title: "Disconnected Systems",
    description:
      "ERP, equipment, databases and operational applications working independently.",
  },
  {
    icon: Monitor,
    title: "Limited Visibility",
    description:
      "Critical information arrives late, is incomplete or requires manual reporting.",
  },
  {
    icon: Settings,
    title: "Generic Software",
    description:
      "Standard platforms often force the operation to adapt to the software instead of solving the real process.",
  },
];

const capabilities = [
  {
    icon: Wrench,
    title: "Custom Industrial Software",
    description:
      "Web and mobile applications designed for your workflows, users and operational requirements.",
    points: [
      "Operational web applications",
      "Mobile and handheld workflows",
      "Administrative platforms",
    ],
  },
  {
    icon: Boxes,
    title: "Warehouse & Logistics Solutions",
    description:
      "Digital workflows for receiving, inventory, locations, picking, movements and shipping validation.",
    points: [
      "Inventory by location",
      "Barcode validation",
      "Guided picking workflows",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing Solutions",
    description:
      "Production, quality and traceability tools that provide visibility from the shop floor to management.",
    points: ["Production tracking", "Quality workflows", "Material traceability"],
  },
  {
    icon: Database,
    title: "Systems Integration",
    description:
      "Connect modern applications with ERP, legacy databases, APIs and industrial equipment.",
    points: [
      "ERP and database integration",
      "ODBC and API connectivity",
      "Equipment and device integration",
    ],
  },
  {
    icon: Monitor,
    title: "Operational Analytics",
    description:
      "Transform operational data into dashboards, alerts and information that supports faster decisions.",
    points: ["Real-time dashboards", "Operational KPIs", "Alerts and event history"],
  },
  {
    icon: Barcode,
    title: "Barcode & Labeling",
    description:
      "Implement barcode-driven workflows, industrial labeling and product identification.",
    points: [
      "Zebra label printing",
      "Barcode and Data Matrix",
      "Pallet and container identification",
    ],
  },
];

const operationalAreas = [
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Connect production processes, operators, materials, quality information and equipment.",
    items: [
      "Production tracking",
      "Quality management",
      "Downtime visibility",
      "Operator applications",
      "Traceability",
      "Machine connectivity",
    ],
  },
  {
    icon: Boxes,
    title: "Warehousing",
    description:
      "Control the physical movement and location of inventory throughout the warehouse.",
    items: [
      "Receiving",
      "Putaway",
      "Inventory by location",
      "Picking",
      "Internal movements",
      "Cycle counting",
    ],
  },
  {
    icon: Truck,
    title: "Distribution",
    description:
      "Improve order preparation, validation, packing and shipping visibility.",
    items: [
      "Order preparation",
      "Packing validation",
      "Shipping labels",
      "Destination control",
      "Inventory visibility",
      "ERP synchronization",
    ],
  },
  {
    icon: Server,
    title: "Data & Integration",
    description:
      "Create reliable information flows between operational tools and existing systems.",
    items: [
      "ERP integration",
      "Legacy databases",
      "ODBC gateways",
      "API development",
      "Data synchronization",
      "Operational dashboards",
    ],
  },
];

const processSteps = [
  {
    title: "Understand",
    description:
      "We analyze the current process, users, systems, data sources and operational constraints.",
  },
  {
    title: "Design",
    description:
      "We define workflows, interfaces, integrations and the appropriate technical architecture.",
  },
  {
    title: "Build",
    description:
      "We develop the solution in controlled phases, prioritizing the most critical operational processes.",
  },
  {
    title: "Integrate",
    description:
      "We connect the platform with ERP, databases, devices or industrial equipment.",
  },
  {
    title: "Deploy & Improve",
    description:
      "We support implementation, user adoption and continuous improvement based on real operation.",
  },
];

const solutionExamples = [
  {
    title: "Warehouse Management",
    description:
      "Digital receiving, location-based inventory, handheld picking, movements and barcode traceability.",
    tags: ["Receiving", "Inventory", "Picking", "Handheld"],
  },
  {
    title: "Production Traceability",
    description:
      "Track materials, production orders, operators, process events and quality results.",
    tags: ["Production", "Materials", "Quality", "Traceability"],
  },
  {
    title: "Legacy ERP Integration",
    description:
      "Connect modern operational applications with existing databases and administrative systems.",
    tags: ["ERP", "ODBC", "APIs", "Synchronization"],
  },
  {
    title: "Operator Applications",
    description:
      "Create clear, guided interfaces for operators using tablets, mobile devices or industrial handhelds.",
    tags: ["Mobile", "Handheld", "Scanning", "Guided workflows"],
  },
  {
    title: "Industrial Dashboards",
    description:
      "Provide real-time visibility of production, inventory, quality and operational events.",
    tags: ["Dashboards", "Alerts", "KPIs", "History"],
  },
];

const differentiators = [
  {
    title: "Designed for the operation",
    description:
      "Interfaces and workflows are created around real users, processes and operating conditions.",
  },
  {
    title: "Works with existing systems",
    description:
      "We integrate with ERP, databases, equipment and legacy infrastructure instead of requiring a complete replacement.",
  },
  {
    title: "Implemented in practical phases",
    description:
      "We prioritize critical workflows first and expand the solution as the operation gains control and visibility.",
  },
  {
    title: "Industrial and technical experience",
    description:
      "We combine software development with experience in manufacturing, automation, data and operational processes.",
  },
  {
    title: "Traceability by design",
    description:
      "Critical events can record who performed an action, when it happened and what information changed.",
  },
];

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Production, quality, traceability and shop-floor digitalization.",
  },
  {
    icon: Package,
    title: "Food Distribution",
    description:
      "Inventory, expiration dates, receiving, picking and operational control.",
  },
  {
    icon: Boxes,
    title: "Warehousing",
    description: "Location management, scanning, movements and inventory visibility.",
  },
  {
    icon: Truck,
    title: "Logistics & Distribution",
    description: "Order preparation, packing, shipping and system integration.",
  },
  {
    icon: ShieldCheck,
    title: "Automotive Suppliers",
    description:
      "Traceability, quality workflows, production visibility and labeling.",
  },
  {
    icon: Settings,
    title: "Industrial Services",
    description:
      "Custom applications, field workflows and operational data integration.",
  },
];

const footerLinks = {
  Capabilities: [
    ["Custom Software", "#capabilities"],
    ["Warehouse Solutions", "#capabilities"],
    ["Manufacturing Solutions", "#capabilities"],
    ["Systems Integration", "#capabilities"],
    ["Operational Analytics", "#capabilities"],
  ],
  Solutions: [
    ["Production Traceability", "#solution-examples"],
    ["Inventory Visibility", "#solution-examples"],
    ["Operator Applications", "#solution-examples"],
    ["ERP Integration", "#solution-examples"],
    ["Barcode & Labeling", "#solution-examples"],
  ],
  Company: [
    ["How We Work", "#how-we-work"],
    ["Industries", "#industries"],
    ["Contact", "#contact"],
    ["Client Access", "#"],
  ],
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#home" onClick={closeMenu}>
          <img src={logoImage} alt="Kelmetrik" className="brand__logo" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="client-link" href="#">
            Client Access
          </a>
          <a className="button button--primary" href="#contact">
            Discuss Your Project
          </a>
          <button
            ref={menuButtonRef}
            className="menu-button"
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="mobile-client-link" href="#" onClick={closeMenu}>
            Client Access
          </a>
          <a className="button button--primary" href="#contact" onClick={closeMenu}>
            Discuss Your Project
          </a>
        </nav>
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function ConnectedVisual({ compact = false }) {
  const nodes = [
    { icon: Server, label: "ERP", state: "Synced" },
    { icon: Smartphone, label: "Handheld", state: "Active" },
    { icon: Monitor, label: "Operations", state: "Connected" },
    { icon: Cpu, label: "Equipment", state: "Live" },
    { icon: Printer, label: "Labels", state: "Ready" },
    { icon: Database, label: "Analytics", state: "Real-time" },
  ];

  return (
    <div className={`connected-visual ${compact ? "connected-visual--compact" : ""}`}>
      <div className="visual-grid" aria-hidden="true" />
      <div className="integration-core">
        <Layers aria-hidden="true" />
        <span>Integration Layer</span>
      </div>
      <div className="visual-nodes">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <div className={`visual-node visual-node--${index + 1}`} key={node.label}>
              <div className="visual-node__icon">
                <Icon aria-hidden="true" />
              </div>
              <div>
                <strong>{node.label}</strong>
                <span>{node.state}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flow-line flow-line--one" aria-hidden="true" />
      <div className="flow-line flow-line--two" aria-hidden="true" />
      <div className="flow-line flow-line--three" aria-hidden="true" />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero section-dark" id="home">
      <div className="container hero__grid">
        <div className="hero__content reveal">
          <p className="eyebrow">Custom Industrial Software & Integration</p>
          <h1>Transform Manual Processes into Connected Operations</h1>
          <div className="hero__copy">
            <p>
              Kelmetrik develops custom software, integrations and automation
              solutions for manufacturing, warehouse and industrial operations.
            </p>
            <p>
              Replace spreadsheets, paper-based workflows and disconnected systems
              with technology designed around the way your operation actually works.
            </p>
          </div>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              Discuss Your Project
              <ArrowRight aria-hidden="true" />
            </a>
            <a className="button button--secondary" href="#capabilities">
              Explore Our Capabilities
            </a>
          </div>
        </div>
        <div className="hero__visual reveal" aria-label="Connected operation diagram">
          <ConnectedVisual />
        </div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section className="section section-soft" id="solutions">
      <div className="container">
        <SectionHeading
          eyebrow="The Operational Challenge"
          title="Industrial operations should not depend on disconnected tools."
          description="Many operations still rely on spreadsheets, paper, repetitive data entry and systems that were never designed to communicate with each other."
          align="center"
        />
        <div className="problem-grid">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <article className="problem-card reveal" key={problem.title}>
                <Icon aria-hidden="true" />
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section className="section" id="capabilities">
      <div className="container capabilities-layout">
        <div className="capabilities-intro reveal">
          <SectionHeading
            eyebrow="What We Build"
            title="Technology designed around your operation."
            description="We combine industrial experience, software development, data integration and automation to build solutions that work in real operating environments."
          />
          <div className="capability-panel">
            <Search aria-hidden="true" />
            <p>
              MES and WMS capabilities are available when the project needs them,
              but every solution starts with the real process and constraints.
            </p>
          </div>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <article className="capability-card reveal" key={capability.title}>
                <div className="card-icon">
                  <Icon aria-hidden="true" />
                </div>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <ul>
                    {capability.points.map((point) => (
                      <li key={point}>
                        <Check aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OperationalAreasSection() {
  const [activeArea, setActiveArea] = useState(operationalAreas[0].title);
  const selectedArea =
    operationalAreas.find((area) => area.title === activeArea) || operationalAreas[0];
  const SelectedIcon = selectedArea.icon;

  const onTabKeyDown = (event, index) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;

    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % operationalAreas.length;
    if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + operationalAreas.length) % operationalAreas.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = operationalAreas.length - 1;
    setActiveArea(operationalAreas[nextIndex].title);
  };

  return (
    <section className="section section-ink">
      <div className="container">
        <SectionHeading
          eyebrow="Where We Create Value"
          title="Solutions for the areas where operations happen."
          align="center"
        />
        <div className="areas-shell reveal">
          <div className="area-tabs" role="tablist" aria-label="Operational areas">
            {operationalAreas.map((area, index) => {
              const Icon = area.icon;
              const isActive = area.title === activeArea;
              return (
                <button
                  key={area.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="area-panel"
                  id={`area-tab-${index}`}
                  tabIndex={isActive ? 0 : -1}
                  className={isActive ? "active" : ""}
                  onClick={() => setActiveArea(area.title)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                >
                  <Icon aria-hidden="true" />
                  {area.title}
                </button>
              );
            })}
          </div>
          <article
            className="area-panel"
            role="tabpanel"
            id="area-panel"
            aria-labelledby={`area-tab-${operationalAreas.findIndex(
              (area) => area.title === activeArea,
            )}`}
          >
            <div className="area-panel__header">
              <SelectedIcon aria-hidden="true" />
              <div>
                <h3>{selectedArea.title}</h3>
                <p>{selectedArea.description}</p>
              </div>
            </div>
            <ul className="pill-list">
              {selectedArea.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function ConnectedOperationsSection() {
  const flow = [
    "ERP / Legacy Systems",
    "Integration Layer",
    "Industrial Applications",
    "Operators & Supervisors",
    "Operational Data",
  ];

  return (
    <section className="section connected-section">
      <div className="container connected-layout">
        <div className="reveal">
          <SectionHeading
            eyebrow="Connected Operations"
            title="One operational flow, even when your systems were built separately."
            description="Kelmetrik creates the software and integration layer that allows people, devices, equipment and existing systems to work together."
          />
          <p className="section-note">
            Each solution is designed according to the operation, existing
            infrastructure and implementation priorities.
          </p>
        </div>
        <div className="flow-card reveal">
          <div className="flow-steps">
            {flow.map((item) => (
              <div className="flow-step" key={item}>
                {item}
              </div>
            ))}
          </div>
          <div className="mini-components">
            {[
              "Database",
              "API",
              "ODBC Gateway",
              "Web Platform",
              "Handheld",
              "Zebra Printer",
              "Equipment",
              "Dashboard",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section section-soft" id="how-we-work">
      <div className="container">
        <SectionHeading
          eyebrow="Our Approach"
          title="We start with the operation, not the software."
          description="Every project begins by understanding how the process works today, where information is generated and what prevents the operation from moving faster."
          align="center"
        />
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-step reveal" key={step.title}>
              <span className="process-step__number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionExamplesSection() {
  return (
    <section className="section" id="solution-examples">
      <div className="container">
        <SectionHeading
          eyebrow="Solution Examples"
          title="Built for specific operational challenges."
          description="Our capabilities can be combined into focused solutions according to the needs of each operation."
          align="center"
        />
        <div className="examples-grid">
          {solutionExamples.map((solution) => (
            <article className="example-card reveal" key={solution.title}>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <div className="tag-list">
                {solution.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferentiatorsSection() {
  return (
    <section className="section section-ink">
      <div className="container differentiators-layout">
        <SectionHeading
          eyebrow="Why Kelmetrik"
          title="Built for real industrial environments."
        />
        <div className="differentiator-list">
          {differentiators.map((item) => (
            <article className="differentiator-item reveal" key={item.title}>
              <Check aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="section" id="industries">
      <div className="container">
        <SectionHeading
          eyebrow="Industries"
          title="Industrial technology adapted to different operating environments."
          align="center"
        />
        <div className="industry-grid">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <article className="industry-card reveal" key={industry.title}>
                <Icon aria-hidden="true" />
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="final-cta section-dark">
      <div className="container final-cta__inner reveal">
        <h2>Have an operational challenge that standard software cannot solve?</h2>
        <p>
          Tell us how your process works. We will help you identify where software,
          integration and automation can create the greatest impact.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#contact">
            Start a Conversation
            <ArrowRight aria-hidden="true" />
          </a>
          <a className="button button--secondary" href="#capabilities">
            Explore Our Capabilities
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    succeeded: false,
    error: false,
  });
  const [touched, setTouched] = useState({});
  const [formValues, setFormValues] = useState({
    fullName: "",
    jobTitle: "",
    companyName: "",
    industry: "",
    email: "",
    phone: "",
    operationalChallenge: "",
  });

  const errors = {
    fullName: !formValues.fullName.trim() ? "Full name is required." : "",
    companyName: !formValues.companyName.trim() ? "Company name is required." : "",
    email: !formValues.email.trim()
      ? "Business email is required."
      : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)
        ? ""
        : "Enter a valid business email.",
    operationalChallenge: !formValues.operationalChallenge.trim()
      ? "Tell us what you want to improve."
      : "",
  };

  const hasErrors = Object.values(errors).some(Boolean);

  const updateValue = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
  };

  const markTouched = (event) => {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
  };

  const showError = (name) => Boolean(touched[name] && errors[name]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTouched({
      fullName: true,
      companyName: true,
      email: true,
      operationalChallenge: true,
    });

    if (hasErrors) return;

    setFormStatus({ submitting: true, succeeded: false, error: false });

    try {
      const response = await fetch("https://formspree.io/f/mdkwrdok", {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        setFormStatus({ submitting: false, succeeded: false, error: true });
        return;
      }

      setFormStatus({ submitting: false, succeeded: true, error: false });
      setFormValues({
        fullName: "",
        jobTitle: "",
        companyName: "",
        industry: "",
        email: "",
        phone: "",
        operationalChallenge: "",
      });
      setTouched({});
    } catch {
      setFormStatus({ submitting: false, succeeded: false, error: true });
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-layout">
        <div className="contact-copy reveal">
          <SectionHeading
            eyebrow="Contact"
            title="Let's discuss your operation."
            description="Share the process, system or operational challenge you want to improve. We will contact you to understand the context and explore the right approach."
          />
          <div className="contact-benefits">
            {[
              [
                "Operational Assessment",
                "We begin by understanding the real workflow, users and constraints.",
              ],
              [
                "Solution-Oriented Conversation",
                "The first discussion focuses on the problem, not on selling a predefined platform.",
              ],
              [
                "Practical Next Steps",
                "We identify potential solution components, integrations and implementation priorities.",
              ],
            ].map(([title, description]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="contact-methods">
            <a href="mailto:eduardo@kelmetrik.com">
              <Mail aria-hidden="true" />
              eduardo@kelmetrik.com
            </a>
            <a href="tel:+526647891548">
              <Phone aria-hidden="true" />
              +52 664 789 1548
            </a>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="fullName">Full Name*</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formValues.fullName}
                onChange={updateValue}
                onBlur={markTouched}
                aria-invalid={showError("fullName")}
                aria-describedby={showError("fullName") ? "fullName-error" : undefined}
                disabled={formStatus.submitting}
              />
              {showError("fullName") && <span id="fullName-error">{errors.fullName}</span>}
            </div>
            <div className="form-field">
              <label htmlFor="jobTitle">Job Title</label>
              <input
                id="jobTitle"
                name="jobTitle"
                type="text"
                value={formValues.jobTitle}
                onChange={updateValue}
                disabled={formStatus.submitting}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="companyName">Company Name*</label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={formValues.companyName}
                onChange={updateValue}
                onBlur={markTouched}
                aria-invalid={showError("companyName")}
                aria-describedby={
                  showError("companyName") ? "companyName-error" : undefined
                }
                disabled={formStatus.submitting}
              />
              {showError("companyName") && (
                <span id="companyName-error">{errors.companyName}</span>
              )}
            </div>
            <div className="form-field">
              <label htmlFor="industry">Industry</label>
              <select
                id="industry"
                name="industry"
                value={formValues.industry}
                onChange={updateValue}
                disabled={formStatus.submitting}
              >
                <option value="">Select industry</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="food-distribution">Food Distribution</option>
                <option value="warehousing">Warehousing</option>
                <option value="logistics">Logistics & Distribution</option>
                <option value="automotive">Automotive Suppliers</option>
                <option value="industrial-services">Industrial Services</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="email">Business Email*</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={updateValue}
              onBlur={markTouched}
              aria-invalid={showError("email")}
              aria-describedby={showError("email") ? "email-error" : undefined}
              disabled={formStatus.submitting}
            />
            {showError("email") && <span id="email-error">{errors.email}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formValues.phone}
              onChange={updateValue}
              disabled={formStatus.submitting}
            />
          </div>

          <div className="form-field">
            <label htmlFor="operationalChallenge">Operational Challenge*</label>
            <textarea
              id="operationalChallenge"
              name="operationalChallenge"
              rows="5"
              placeholder="Tell us about the process, system or operational challenge you want to improve."
              value={formValues.operationalChallenge}
              onChange={updateValue}
              onBlur={markTouched}
              aria-invalid={showError("operationalChallenge")}
              aria-describedby={
                showError("operationalChallenge")
                  ? "operationalChallenge-error"
                  : undefined
              }
              disabled={formStatus.submitting}
            />
            {showError("operationalChallenge") && (
              <span id="operationalChallenge-error">
                {errors.operationalChallenge}
              </span>
            )}
          </div>

          <p className="privacy-note">
            By submitting this form, you agree to be contacted regarding your
            inquiry.
          </p>

          {formStatus.succeeded && (
            <div className="form-message form-message--success" role="status">
              Thank you. Your project details were sent successfully.
            </div>
          )}

          {formStatus.error && (
            <div className="form-message form-message--error" role="alert">
              There was an error sending your message. Please try again.
            </div>
          )}

          <button
            className="button button--primary form-submit"
            type="submit"
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? "Sending..." : "Send Project Details"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logoImage} alt="Kelmetrik" className="footer-logo" />
          <p>
            Custom industrial software, integration and automation for connected
            operations.
          </p>
          <div className="footer-contact">
            <a href="mailto:eduardo@kelmetrik.com">eduardo@kelmetrik.com</a>
            <a href="tel:+526647891548">+52 664 789 1548</a>
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <nav className="footer-column" aria-label={title} key={title}>
            <h2>{title}</h2>
            {links.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>
        ))}
      </div>
      <div className="container footer-bottom">
        &copy; {new Date().getFullYear()} Kelmetrik. All rights reserved.
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <CapabilitiesSection />
        <OperationalAreasSection />
        <ConnectedOperationsSection />
        <ProcessSection />
        <SolutionExamplesSection />
        <DifferentiatorsSection />
        <IndustriesSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
