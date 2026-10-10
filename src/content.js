export const content = {
  en: {
    lang: "en",
    other: "ES",
    otherUrl: "/es/",
    home: "/",
    privacyUrl: "/privacy/",
    title: "Kelmetrik — Industrial software & connected operations",
    description:
      "Custom industrial software and IT/OT integration. Connect manufacturing, quality, materials, equipment and enterprise systems with Kelmetrik.",
    nav: ["Solutions", "IT/OT integration", "Our approach", "Contact"],
    menu: "Menu",
    close: "Close menu",
    skip: "Skip to content",
    eyebrow: "INDUSTRIAL SOFTWARE & SYSTEMS INTEGRATION",
    hero: ["Connected operations.", "Better decisions."],
    intro:
      "We connect industrial equipment, enterprise systems, people and processes through custom software — turning fragmented information into coordinated, traceable operations.",
    primary: "Let’s discuss your operation",
    secondary: "Explore our solutions",
    heroNote: "Built around the way your operation actually works.",
    disconnect: {
      eyebrow: "01 / THE OPERATIONAL DISCONNECT",
      title: "The information exists.\nThe connections are missing.",
      intro:
        "An order lives in the ERP. Its progress is tracked in Excel. Approvals arrive by email and a macro handles part of the work. Purchasing, warehouse, production and quality hold information about the same process, but do not always share its context.",
      fragmented: "Working in fragments",
      connected: "Working with context",
      before: [
        "Order in ERP",
        "Excel follow-up",
        "Email approval",
        "Manual re-entry",
      ],
      after: [
        "Shared order",
        "Assigned workflow",
        "Rules and approvals",
        "Connected record",
      ],
      foot: "We connect systems, files, equipment and cross-functional processes. We integrate what already works and build the applications that are missing.",
      problems: [
        "ERP workflows that still require manual steps outside the system.",
        "Spreadsheets, macros and files that depend on one person.",
        "Departments re-entering information or losing track of a request.",
      ],
    },
    domains: {
      eyebrow: "02 / WHAT WE CAN BUILD",
      title: "Solutions for a\nconnected operation.",
      intro:
        "We build custom ERP, MES and WMS systems, alongside applications and integrations for workflows your current systems do not cover. These four examples show how we connect work across departments.",
      problem: "THE STARTING POINT",
      flow: "THE SOLUTION WE BUILD",
      result: "WHAT YOUR TEAM CAN DO",
      example: "Conceptual example",
      caption:
        "Illustrative workflow and interface. Scope is defined around your operation.",
      contact: "Let’s discuss this process",
      items: [
        {
          id: "manufacturing",
          title: "Manufacturing Execution & Traceability",
          summary:
            "We connect stations, equipment and production systems to record what happens at every manufacturing stage. From component identification to test results, we build traceability that helps teams control processes, detect deviations and understand what happened to each product.",
          problem:
            "Component identification, process records and test results often live in separate systems, making it difficult to follow each product through production.",
          flow: "We develop custom MES systems and execution modules that connect stations, equipment and production systems. We link ERP orders, component identification and test results to record what happens at each manufacturing stage.",
          result:
            "Monitor process execution, identify deviations and investigate what happened to each product using its linked records.",
          visualTitle: "A connected product history",
          annotation:
            "Kelmetrik structures the relationships between your systems and makes evidence available to operations, quality and engineering.",
          nodes: [
            ["ERP", "Work order"],
            ["Station", "Identity + result"],
            ["Record", "Product history"],
          ],
          recordTitle: "Traceability record",
          facts: [
            ["Work order", "EX-2048"],
            ["Product", "EX-0042"],
            ["Component / lot", "PCB-A / LT-08"],
            ["Station / operation", "Station 02 / assembly"],
          ],
          evidence: "Linked evidence",
          evidenceText: "Material used → recorded operation → station result",
          outcome: "Look up a product, order or lot",
          platform: "Custom MES",
          short: "Manufacturing",
        },
        {
          id: "quality",
          title: "Quality Management & Safe Launch",
          summary:
            "We digitize inspections, validations and containment processes so every result has a clear follow-up. We connect evidence, defects, owners and quality decisions, reducing reliance on scattered records and making new-launch controls easier to manage.",
          problem:
            "Inspections generate findings, but evidence, containment actions and quality decisions can become scattered across spreadsheets and conversations.",
          flow: "We digitize inspections, validations and containment workflows through quality applications connected to your ERP or MES. Each result links defects, evidence, owners and the decisions that follow.",
          result:
            "Follow each finding through disposition and coordinate new-launch controls with shared records and clear responsibility.",
          visualTitle: "From finding to documented decision",
          annotation:
            "Kelmetrik connects shop-floor capture with quality follow-up, preserving context and ownership for every decision.",
          recordTitle: "Finding follow-up",
          finding: "Surface mark on housing",
          facts: [
            ["Product / lot", "Housing A / LT-08"],
            ["Evidence", "Linked inspection record"],
            ["Scope", "Identified material from the lot"],
            ["Owner", "Quality engineering"],
          ],
          status: "Disposition pending",
          steps: [
            "Finding recorded",
            "Containment identified",
            "Quality review",
          ],
          outcome: "A decision requires an authorized review",
          platform: "Connected quality",
          short: "Quality",
        },
        {
          id: "apqp",
          title: "APQP & Industrial Project Management",
          summary:
            "We connect project planning with actual execution. We centralize activities, deliverables, owners and evidence to identify delays, visualize dependencies and ensure milestones advance with verifiable results behind them.",
          problem:
            "Project plans and actual progress often diverge when activities, deliverables and approvals are tracked separately.",
          flow: "We develop project management applications and custom ERP modules that connect planning with execution. We bring activities, deliverables, dependencies, owners and approval evidence into a shared workflow.",
          result:
            "Identify delays, understand dependencies and review the verifiable evidence supporting each milestone before advancing.",
          visualTitle: "The dependency behind the delay",
          annotation:
            "Kelmetrik turns scattered follow-up into a shared view of the work and the evidence required to move forward.",
          recordTitle: "Validation readiness",
          milestone: "Milestone: process validation",
          status: "Blocked by approval",
          rows: [
            ["Validation plan", "Approved"],
            ["Test report", "Approval pending"],
            ["Next milestone", "Waiting for report"],
          ],
          facts: [
            ["Owner", "Quality engineering"],
            ["Required evidence", "Reviewed and approved report"],
          ],
          outcome: "The milestone shows its blocker and the next owner",
          platform: "Management applications",
          short: "APQP & projects",
        },
        {
          id: "warehouse",
          title: "Warehouse & Material Management",
          summary:
            "We connect physical material movements with the systems that manage operations. We design receiving, storage, picking and inventory workflows with validation and traceability, eliminating duplicate data entry and improving control over each movement.",
          problem:
            "Physical material movements and system records can fall out of sync when receiving, picking and inventory updates require repeated manual entry.",
          flow: "We develop custom WMS systems, warehouse modules and ERP integrations for receiving, storage, picking and inventory. We connect physical movements with operational records through material, quantity and location validation.",
          result:
            "Detect discrepancies before confirming movements, trace their history and reuse captured information across connected systems.",
          visualTitle: "Validate the movement before recording it",
          annotation:
            "Kelmetrik connects the physical operation to the business record and makes the rules for confirming each movement explicit.",
          recordTitle: "Pick validation",
          columns: ["Order requires", "Scan records"],
          rows: [
            ["Material", "MAT-A2", "MAT-B1"],
            ["Quantity", "12 units", "12 units"],
            ["Location", "A-03", "A-03"],
          ],
          status: "Material does not match the order",
          outcome: "Movement pending correction of the discrepancy",
          platform: "Custom WMS",
          short: "Materials",
        },
      ],
      platformTitle: "Software that fits your operation",
      platformNote:
        "We can build a custom platform, a focused module or an integration with your existing systems. The process defines the scope.",
      platforms: [
        [
          "ERP",
          "Business management",
          "Connect purchasing, inventory, requests and approvals across departments.",
        ],
        [
          "MES",
          "Manufacturing execution",
          "Link orders, operations, components and shop-floor results.",
        ],
        [
          "WMS",
          "Warehouse management",
          "Structure receipts, locations, picking and material movements.",
        ],
      ],
      custom: "CUSTOM BUILT",
      navigate: "Explore by process",
    },
    machine: {
      eyebrow: "03 / CONNECTING SYSTEMS AND OPERATIONS",
      title: "From isolated data\nto a connected process.",
      intro:
        "An ERP movement, an Excel file or a machine signal can initiate the same workflow: identify the context, apply a rule and put the next step in the right team’s hands.",
      note: "We assess APIs, files, databases and equipment interfaces, together with access permissions and operating constraints, before defining each integration.",
      labels: [
        "Systems, files & equipment",
        "Process context",
        "Rules & follow-up",
        "Cross-functional action",
      ],
      details: [
        "ERP · Excel · applications · signals",
        "Order · material · request · station",
        "Validations · approvals · evidence",
        "Purchasing · Warehouse · Production · Quality",
      ],
      caption: "IT/OT integration and software that connect the work.",
    },
    approach: {
      eyebrow: "04 / OUR APPROACH",
      title: "We start with the operation,\nnot the software.",
      intro:
        "A clear path from understanding the process to putting a validated solution into use.",
      deliverable: "DELIVERABLE",
      steps: [
        [
          "Understand",
          "Observe the workflow, its users, handoffs and constraints.",
          "Process map & agreed priorities",
        ],
        [
          "Design",
          "Define system boundaries, information flows and the integration approach.",
          "Solution architecture & scoped workflow",
        ],
        [
          "Build",
          "Develop the application and integrations through reviewable increments.",
          "Working prototype & implementation",
        ],
        [
          "Validate",
          "Test operational scenarios and exceptions with the people who use the process.",
          "Test evidence & user validation",
        ],
        [
          "Deploy",
          "Prepare rollout, operating documentation and the agreed support handoff.",
          "Deployment & handover plan",
        ],
      ],
    },
    contact: {
      eyebrow: "05 / LET’S START A CONVERSATION",
      title: "Let’s discuss\nyour operation.",
      intro:
        "Tell us where information gets disconnected or a process becomes difficult to control. We’ll use that context to coordinate a diagnostic conversation.",
      emailLabel: "Prefer email?",
      name: "Full name",
      email: "Business email",
      company: "Company",
      challenge: "Operational challenge",
      optional: "optional",
      placeholder: "Which process, equipment or systems are involved?",
      submit: "Send project details",
      submitting: "Sending…",
      success:
        "Thank you. Your request has been accepted. We’ll use the details you shared to coordinate a conversation.",
      error:
        "We couldn’t confirm your request. Your details are still here. Please try again or email us.",
      notice:
        "We use these details to respond to your request. Please do not include confidential production or customer information.",
      privacy: "Read the privacy notice",
      required: "Fields marked * are required.",
      honeypot: "Leave this field empty",
      emailSubject: "A conversation about our operation",
    },
    footer: "Industrial software. Connected operations.",
    rights: "Kelmetrik. All rights reserved.",
    privacy: "Privacy",
    preferences: "Analytics preferences",
    privacyContent: {
      title: "Privacy & your choices",
      intro:
        "This page explains how the website handles contact requests and optional audience measurement.",
      contactTitle: "Contact information",
      contactText:
        "The contact form sends your name, business email, company and optional operational challenge to Formspree to deliver your request to Kelmetrik. We use this information to respond and coordinate a conversation.",
      analyticsTitle: "Optional measurement",
      analyticsText:
        "After you accept, Umami may receive page views and a limited set of interactions: sections and domains viewed, contact actions, and form start and outcome. We never send form fields, product identifiers or free text. We do not enable user identification, session recordings, heatmaps or advertising pixels.",
      choicesTitle: "Your choices",
      choicesText:
        "You can change optional measurement below. Rejected events are discarded, not held for later delivery. Your measurement preference may be stored locally in this browser; it is not a visitor identifier. The site and contact form work without analytics.",
      providerText:
        "Service providers process requests under their own privacy notices. Hosting also processes the technical information needed to serve and protect the website.",
      rightsTitle: "Questions and privacy requests",
      rightsText:
        "For questions about information you submitted, or to request access, correction or deletion, contact",
      back: "Back to Kelmetrik",
      responsible: "Responsible party",
      address: "Contact address",
      formspree: "Formspree privacy notice",
      vercel: "Vercel privacy notice",
      umami: "Umami privacy notice",
    },
    consent: {
      title: "Optional audience measurement",
      text: "May we use Umami to measure visits, interest in our solutions and contact actions? We do not send form contents or record sessions. You can decline and still use the entire site.",
      allow: "Allow analytics",
      reject: "Reject analytics",
      disabled:
        "Optional measurement is disabled. This page does not send usage statistics.",
      on: "Analytics is allowed in this browser.",
      off: "Analytics is off in this browser.",
      close: "Close preferences",
      protected: "Your browser privacy signal keeps analytics off.",
      preview:
        "This preview does not send statistics. You can review how optional measurement is presented here.",
      unavailable:
        "Measurement could not start. Your preference is saved and you can continue using the page.",
      loading: "Starting permitted measurement…",
    },
    chartNote: "Illustrative visualization · synthetic data",
  },
  es: {
    lang: "es",
    other: "EN",
    otherUrl: "/",
    home: "/es/",
    privacyUrl: "/es/privacidad/",
    title: "Kelmetrik — Software industrial y operaciones conectadas",
    description:
      "Software industrial a medida e integración IT/OT. Conecta manufactura, calidad, materiales, equipos y sistemas empresariales con Kelmetrik.",
    nav: ["Soluciones", "Integración IT/OT", "Nuestro enfoque", "Contacto"],
    menu: "Menú",
    close: "Cerrar menú",
    skip: "Ir al contenido",
    eyebrow: "SOFTWARE INDUSTRIAL E INTEGRACIÓN DE SISTEMAS",
    hero: ["Operaciones conectadas.", "Mejores decisiones."],
    intro:
      "Conectamos equipos industriales, sistemas empresariales, personas y procesos mediante software a medida, para transformar información fragmentada en operaciones coordinadas y trazables.",
    primary: "Hablemos de tu operación",
    secondary: "Explora nuestras soluciones",
    heroNote: "Tecnología diseñada alrededor de cómo funciona tu operación.",
    disconnect: {
      eyebrow: "01 / LA DESCONEXIÓN OPERATIVA",
      title: "La información existe.\nFaltan las conexiones.",
      intro:
        "Una orden vive en el ERP. Su seguimiento está en Excel. Las aprobaciones llegan por correo y una macro completa parte del trabajo. Compras, almacén, producción y calidad tienen información del mismo proceso, pero no siempre comparten el contexto.",
      fragmented: "Trabajo fragmentado",
      connected: "Trabajo con contexto",
      before: [
        "Orden en ERP",
        "Seguimiento en Excel",
        "Aprobación por correo",
        "Recaptura manual",
      ],
      after: [
        "Orden compartida",
        "Flujo con responsables",
        "Reglas y aprobaciones",
        "Registro conectado",
      ],
      foot: "Conectamos sistemas, archivos, equipos y procesos entre áreas. Integramos lo que ya funciona y desarrollamos las aplicaciones que faltan.",
      problems: [
        "Procesos del ERP que requieren pasos manuales fuera del sistema.",
        "Hojas de cálculo, macros y archivos que dependen de una persona.",
        "Áreas que recapturan información o pierden el estado de una solicitud.",
      ],
    },
    domains: {
      eyebrow: "02 / LO QUE PODEMOS CONSTRUIR",
      title: "Soluciones para una\noperación conectada.",
      intro:
        "Desarrollamos ERP, MES y WMS a medida, además de aplicaciones e integraciones para los procesos que tus sistemas actuales no cubren. Estos cuatro ejemplos muestran cómo conectamos el trabajo entre áreas.",
      problem: "EL PUNTO DE PARTIDA",
      flow: "LA SOLUCIÓN QUE CONSTRUIMOS",
      result: "LO QUE TU EQUIPO PUEDE HACER",
      example: "Ejemplo conceptual",
      caption:
        "Flujo e interfaz ilustrativos. El alcance se define con tu operación.",
      contact: "Hablemos de este proceso",
      items: [
        {
          id: "manufacturing",
          title: "Ejecución de manufactura y trazabilidad",
          summary:
            "Conectamos estaciones, equipos y sistemas de producción para registrar lo que ocurre durante cada etapa de manufactura. Desde la identificación de componentes hasta los resultados de prueba, construimos trazabilidad que permite controlar procesos, detectar desviaciones y entender qué ocurrió con cada producto.",
          problem:
            "La identificación de componentes, los registros de proceso y los resultados de prueba suelen quedar en sistemas separados, dificultando seguir cada producto durante su fabricación.",
          flow: "Desarrollamos MES a medida y módulos de ejecución que conectan estaciones, equipos y sistemas de producción. Vinculamos órdenes del ERP, identificación de componentes y resultados de prueba para registrar lo que ocurre en cada etapa de manufactura.",
          result:
            "Controlar la ejecución de los procesos, detectar desviaciones e investigar qué ocurrió con cada producto a partir de sus registros vinculados.",
          visualTitle: "La historia de una pieza, conectada",
          annotation:
            "Kelmetrik estructura las relaciones entre tus sistemas y pone la evidencia al alcance de operaciones, calidad e ingeniería.",
          nodes: [
            ["ERP", "Orden de producción"],
            ["Estación", "Identidad + resultado"],
            ["Registro", "Historia de la pieza"],
          ],
          recordTitle: "Registro de trazabilidad",
          facts: [
            ["Orden", "EJ-2048"],
            ["Pieza", "EJ-0042"],
            ["Componente / lote", "PCB-A / LT-08"],
            ["Estación / operación", "Estación 02 / ensamble"],
          ],
          evidence: "Evidencia vinculada",
          evidenceText:
            "Material utilizado → operación registrada → resultado de estación",
          outcome: "Consulta por pieza, orden o lote",
          platform: "MES a medida",
          short: "Manufactura",
        },
        {
          id: "quality",
          title: "Gestión de calidad y Safe Launch",
          summary:
            "Digitalizamos inspecciones, validaciones y procesos de contención para que cada resultado tenga un seguimiento claro. Conectamos evidencia, defectos, responsables y decisiones de calidad, reduciendo la dependencia de registros dispersos y facilitando el control de nuevos lanzamientos.",
          problem:
            "Las inspecciones generan hallazgos, pero la evidencia, las acciones de contención y las decisiones de calidad pueden quedar dispersas entre hojas de cálculo y conversaciones.",
          flow: "Digitalizamos inspecciones, validaciones y procesos de contención mediante aplicaciones de calidad conectadas con tu ERP o MES. Cada resultado relaciona defectos, evidencia, responsables y las decisiones de seguimiento.",
          result:
            "Dar seguimiento a cada hallazgo hasta su disposición y coordinar el control de nuevos lanzamientos con registros compartidos y responsabilidades claras.",
          visualTitle: "Del hallazgo a una decisión documentada",
          annotation:
            "Kelmetrik conecta la captura en piso con el seguimiento de calidad, conservando el contexto y la responsabilidad de cada decisión.",
          recordTitle: "Seguimiento de un hallazgo",
          finding: "Marca superficial en alojamiento",
          facts: [
            ["Producto / lote", "Alojamiento A / LT-08"],
            ["Evidencia", "Registro de inspección vinculado"],
            ["Alcance", "Material del lote identificado"],
            ["Responsable", "Ingeniería de calidad"],
          ],
          status: "Disposición pendiente",
          steps: [
            "Hallazgo registrado",
            "Contención identificada",
            "Revisión de calidad",
          ],
          outcome: "La decisión requiere una revisión autorizada",
          platform: "Calidad conectada",
          short: "Calidad",
        },
        {
          id: "apqp",
          title: "APQP y gestión de proyectos industriales",
          summary:
            "Conectamos la planeación de proyectos con su ejecución real. Centralizamos actividades, entregables, responsables y evidencia para identificar retrasos, visualizar dependencias y asegurar que los hitos avancen respaldados por resultados verificables.",
          problem:
            "La planeación y el avance real pueden separarse cuando las actividades, los entregables y las aprobaciones se siguen en registros distintos.",
          flow: "Desarrollamos aplicaciones de gestión de proyectos y módulos de ERP a medida que conectan la planeación con la ejecución. Centralizamos actividades, entregables, dependencias, responsables y evidencia de aprobación en un flujo compartido.",
          result:
            "Identificar retrasos, visualizar dependencias y revisar la evidencia verificable que respalda cada hito antes de avanzar.",
          visualTitle: "La dependencia que explica el retraso",
          annotation:
            "Kelmetrik convierte el seguimiento disperso en una vista compartida del trabajo y de la evidencia necesaria para avanzar.",
          recordTitle: "Preparación de validación",
          milestone: "Hito: validación del proceso",
          status: "Bloqueado por aprobación",
          rows: [
            ["Plan de validación", "Aprobado"],
            ["Reporte de pruebas", "Pendiente de aprobación"],
            ["Siguiente hito", "En espera del reporte"],
          ],
          facts: [
            ["Responsable", "Ingeniería de calidad"],
            ["Evidencia requerida", "Reporte revisado y aprobado"],
          ],
          outcome: "El hito muestra su bloqueo y el siguiente responsable",
          platform: "Aplicaciones de gestión",
          short: "APQP y proyectos",
        },
        {
          id: "warehouse",
          title: "Gestión de almacenes y materiales",
          summary:
            "Conectamos los movimientos físicos de materiales con los sistemas que administran la operación. Diseñamos procesos de recibo, almacenamiento, picking e inventario con validaciones y trazabilidad, eliminando capturas duplicadas y mejorando el control sobre cada movimiento.",
          problem:
            "Los movimientos físicos y los registros del sistema pueden perder sincronía cuando el recibo, el surtido y las actualizaciones de inventario requieren capturas manuales repetidas.",
          flow: "Desarrollamos WMS a medida, módulos de almacén e integraciones con ERP para recibo, almacenamiento, picking e inventario. Conectamos los movimientos físicos con los registros de la operación mediante validaciones de material, cantidad y ubicación.",
          result:
            "Detectar discrepancias antes de confirmar movimientos, consultar su trazabilidad y reutilizar la información capturada entre los sistemas conectados.",
          visualTitle: "Validar el movimiento antes de registrarlo",
          annotation:
            "Kelmetrik conecta la operación física con el registro empresarial y hace explícitas las reglas para confirmar cada movimiento.",
          recordTitle: "Validación de surtido",
          columns: ["Orden solicita", "Escaneo registra"],
          rows: [
            ["Material", "MAT-A2", "MAT-B1"],
            ["Cantidad", "12 unidades", "12 unidades"],
            ["Ubicación", "A-03", "A-03"],
          ],
          status: "Material distinto al solicitado",
          outcome: "Movimiento pendiente de corregir la discrepancia",
          platform: "WMS a medida",
          short: "Materiales",
        },
      ],
      platformTitle: "Software que se adapta a tu operación",
      platformNote:
        "Podemos desarrollar una plataforma a medida, un módulo específico o una integración con tus sistemas actuales. El alcance se define a partir del proceso.",
      platforms: [
        [
          "ERP",
          "Gestión empresarial",
          "Conecta compras, inventario, solicitudes y aprobaciones entre áreas.",
        ],
        [
          "MES",
          "Ejecución de manufactura",
          "Relaciona órdenes, operaciones, componentes y resultados en piso.",
        ],
        [
          "WMS",
          "Gestión de almacenes",
          "Estructura recibos, ubicaciones, surtido y movimientos de materiales.",
        ],
      ],
      custom: "A MEDIDA",
      navigate: "Explora por proceso",
    },
    machine: {
      eyebrow: "03 / INTEGRACIÓN ENTRE SISTEMAS Y OPERACIÓN",
      title: "Del dato aislado\nal proceso conectado.",
      intro:
        "Un movimiento en el ERP, un archivo de Excel o una señal de máquina pueden iniciar el mismo flujo: identificar el contexto, aplicar una regla y poner el siguiente paso en manos del área correcta.",
      note: "Revisamos APIs, archivos, bases de datos e interfaces del equipo, junto con permisos y restricciones operativas, antes de definir cada integración.",
      labels: [
        "Sistemas, archivos y equipos",
        "Contexto del proceso",
        "Reglas y seguimiento",
        "Acciones entre áreas",
      ],
      details: [
        "ERP · Excel · aplicaciones · señales",
        "Orden · material · solicitud · estación",
        "Validaciones · aprobaciones · evidencia",
        "Compras · Almacén · Producción · Calidad",
      ],
      caption: "Integración IT/OT y software para conectar el trabajo.",
    },
    approach: {
      eyebrow: "04 / NUESTRO ENFOQUE",
      title: "Comenzamos por la operación,\nno por el software.",
      intro:
        "Un camino claro desde comprender el proceso hasta poner en uso una solución validada.",
      deliverable: "ENTREGABLE",
      steps: [
        [
          "Comprender",
          "Observar el flujo, sus usuarios, intercambios y restricciones.",
          "Mapa de proceso y prioridades acordadas",
        ],
        [
          "Diseñar",
          "Definir límites de sistemas, flujos de información y enfoque de integración.",
          "Arquitectura y alcance del flujo",
        ],
        [
          "Construir",
          "Desarrollar la aplicación y las integraciones mediante avances revisables.",
          "Prototipo funcional e implementación",
        ],
        [
          "Validar",
          "Probar escenarios y excepciones con las personas que operan el proceso.",
          "Evidencia de pruebas y validación de usuarios",
        ],
        [
          "Desplegar",
          "Preparar la puesta en marcha, documentación y entrega del soporte acordado.",
          "Plan de despliegue y entrega",
        ],
      ],
    },
    contact: {
      eyebrow: "05 / INICIEMOS UNA CONVERSACIÓN",
      title: "Hablemos de\ntu operación.",
      intro:
        "Cuéntanos dónde se desconecta la información o qué proceso resulta difícil de controlar. Ese contexto nos ayudará a coordinar una conversación de diagnóstico.",
      emailLabel: "¿Prefieres escribirnos?",
      name: "Nombre completo",
      email: "Correo empresarial",
      company: "Empresa",
      challenge: "Reto operativo",
      optional: "opcional",
      placeholder: "¿Qué proceso, equipos o sistemas están involucrados?",
      submit: "Enviar detalles del proyecto",
      submitting: "Enviando…",
      success:
        "Gracias. Tu solicitud fue aceptada. Usaremos la información que compartiste para coordinar una conversación.",
      error:
        "No pudimos confirmar tu solicitud. Tus datos siguen aquí. Intenta de nuevo o escríbenos por correo.",
      notice:
        "Usamos estos datos para responder a tu solicitud. Evita incluir información confidencial de producción o de clientes.",
      privacy: "Consultar el aviso de privacidad",
      required: "Los campos con * son obligatorios.",
      honeypot: "Deja este campo vacío",
      emailSubject: "Una conversación sobre nuestra operación",
    },
    footer: "Software industrial. Operaciones conectadas.",
    rights: "Kelmetrik. Todos los derechos reservados.",
    privacy: "Privacidad",
    preferences: "Preferencias de analítica",
    privacyContent: {
      title: "Privacidad y tus opciones",
      intro:
        "Esta página explica cómo el sitio maneja solicitudes de contacto y medición opcional de audiencia.",
      contactTitle: "Información de contacto",
      contactText:
        "El formulario envía tu nombre, correo empresarial, empresa y reto operativo opcional a Formspree para entregar tu solicitud a Kelmetrik. Utilizamos esta información para responder y coordinar una conversación.",
      analyticsTitle: "Medición opcional",
      analyticsText:
        "Después de aceptar, Umami puede recibir visitas y un conjunto limitado de interacciones: secciones y dominios vistos, acciones de contacto e inicio y resultado del formulario. Nunca enviamos los campos del formulario, identificadores de producto ni texto libre. No activamos identificación de usuarios, grabaciones de sesiones, mapas de calor ni píxeles publicitarios.",
      choicesTitle: "Tus opciones",
      choicesText:
        "Puedes cambiar la medición opcional abajo. Los eventos rechazados se descartan, no se guardan para enviarlos después. Tu preferencia puede guardarse localmente en este navegador; no es un identificador de visitante. El sitio y el formulario funcionan sin analítica.",
      providerText:
        "Los proveedores procesan solicitudes conforme a sus propios avisos de privacidad. El alojamiento también procesa la información técnica necesaria para servir y proteger el sitio.",
      rightsTitle: "Preguntas y solicitudes de privacidad",
      rightsText:
        "Para consultar la información que compartiste o solicitar acceso, corrección o eliminación, escribe a",
      back: "Volver a Kelmetrik",
      responsible: "Responsable",
      address: "Domicilio de contacto",
      formspree: "Aviso de privacidad de Formspree",
      vercel: "Aviso de privacidad de Vercel",
      umami: "Aviso de privacidad de Umami",
    },
    consent: {
      title: "Medición opcional de audiencia",
      text: "¿Nos permites medir visitas, interés en nuestras soluciones y acciones de contacto con Umami? No enviamos el contenido del formulario ni grabamos sesiones. Puedes rechazarlo y seguir usando toda la página.",
      allow: "Permitir analítica",
      reject: "Rechazar analítica",
      disabled:
        "La medición opcional está desactivada. No se envían estadísticas de uso desde esta página.",
      on: "La analítica está permitida en este navegador.",
      off: "La analítica está desactivada en este navegador.",
      close: "Cerrar preferencias",
      protected:
        "La señal de privacidad de tu navegador mantiene la analítica desactivada.",
      preview:
        "Esta vista previa no envía estadísticas. Puedes revisar aquí cómo se presenta la medición opcional.",
      unavailable:
        "No se pudo iniciar la medición. Tu preferencia está guardada y puedes seguir usando la página.",
      loading: "Iniciando la medición permitida…",
    },
    chartNote: "Visualización ilustrativa · datos sintéticos",
  },
};
