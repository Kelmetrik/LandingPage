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
        "A machine records a result. An operator updates a spreadsheet. Quality searches for the history. Each tool knows a part of the story.",
      fragmented: "Working in fragments",
      connected: "Working with context",
      before: [
        "Machine result",
        "Manual entry",
        "Separate systems",
        "Missing history",
      ],
      after: [
        "Captured signal",
        "Identified product",
        "Shared context",
        "Traceable decision",
      ],
      foot: "Connect the tools you already use, structure the handoffs, and make the complete story available.",
      problems: [
        "Data stays inside the equipment.",
        "Information gets entered more than once.",
        "Investigations depend on emails and spreadsheets.",
      ],
    },
    domains: {
      eyebrow: "02 / WHAT WE CAN BUILD",
      title: "Solutions for a\nconnected operation.",
      intro:
        "Every operation has its own systems, rules and constraints. We design software and integrations around that context. These examples show how we can approach four industrial challenges.",
      problem: "THE CHALLENGE",
      flow: "WHAT WE BUILD",
      result: "WHAT IT ENABLES",
      example: "Conceptual example",
      caption:
        "Illustrative workflow and interface. Scope is defined around your operation.",
      contact: "Let’s discuss this process",
      items: [
        {
          id: "manufacturing",
          title: "Manufacturing & traceability",
          problem:
            "When an issue appears, reconstructing a product’s history requires searching across disconnected records.",
          flow: "Execution applications and integrations that link orders, components and station results in a searchable record.",
          result:
            "Retrieve a product’s journey and find the material and evidence associated with each operation.",
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
        },
        {
          id: "quality",
          title: "Quality & Safe Launch",
          problem:
            "An inspection identifies an issue, but its evidence, affected material and disposition live in separate conversations.",
          flow: "Workflows to record inspections, link evidence to products and manage containment, ownership and dispositions.",
          result:
            "Identify which material is contained, why, and who needs to review the evidence before making a decision.",
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
        },
        {
          id: "apqp",
          title: "APQP & project execution",
          problem:
            "The plan shows a target date, but it does not make clear which deliverable or approval prevents the next milestone.",
          flow: "Applications that connect milestones, deliverables, dependencies, owners and approval evidence.",
          result:
            "Distinguish completed work from approved work and address the dependency blocking progress.",
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
        },
        {
          id: "warehouse",
          title: "Warehouse & materials",
          problem:
            "What is received or picked does not always match the order and the inventory record.",
          flow: "Scanning, material and quantity validation, and movement records connected with the ERP through its available interfaces.",
          result:
            "Detect discrepancies before confirming a movement and preserve its relationship to the order and location.",
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
        },
      ],
    },
    machine: {
      eyebrow: "03 / BEYOND THE MACHINE",
      title: "Your machines know more\nthan your systems show.",
      intro:
        "Cycle results, process values and alarms become more useful when connected to the order, product and station that produced them.",
      note: "Integration depends on the equipment’s available interfaces, access and operating constraints. We evaluate these before defining the solution.",
      labels: [
        "Machine signal",
        "Production context",
        "Operational event",
        "People who can act",
      ],
      details: [
        "Test value + unit",
        "Order + serial + station",
        "Rule + result + evidence",
        "Quality · Engineering · Maintenance",
      ],
      caption: "Industrial connectivity, with operational meaning.",
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
        "Una máquina registra un resultado. Un operador actualiza una hoja de cálculo. Calidad busca el historial. Cada herramienta conoce una parte de la historia.",
      fragmented: "Trabajo fragmentado",
      connected: "Trabajo con contexto",
      before: [
        "Resultado de máquina",
        "Captura manual",
        "Sistemas separados",
        "Historial incompleto",
      ],
      after: [
        "Señal capturada",
        "Producto identificado",
        "Contexto compartido",
        "Decisión trazable",
      ],
      foot: "Conecta las herramientas que ya utilizas, estructura los intercambios y haz accesible la historia completa.",
      problems: [
        "Los datos permanecen dentro del equipo.",
        "La información se captura más de una vez.",
        "Investigar depende de correos y hojas de cálculo.",
      ],
    },
    domains: {
      eyebrow: "02 / LO QUE PODEMOS CONSTRUIR",
      title: "Soluciones para una\noperación conectada.",
      intro:
        "Cada operación tiene sus propios sistemas, reglas y restricciones. Diseñamos software e integraciones alrededor de ese contexto. Estos ejemplos muestran cómo podemos abordar cuatro retos industriales.",
      problem: "EL RETO",
      flow: "QUÉ DESARROLLAMOS",
      result: "QUÉ PERMITE HACER",
      example: "Ejemplo conceptual",
      caption:
        "Flujo e interfaz ilustrativos. El alcance se define con tu operación.",
      contact: "Hablemos de este proceso",
      items: [
        {
          id: "manufacturing",
          title: "Manufactura y trazabilidad",
          problem:
            "Cuando aparece un problema, reconstruir la historia de una pieza exige buscar en registros separados.",
          flow: "Aplicaciones de ejecución e integraciones que relacionan órdenes, componentes y resultados de estación en un registro consultable.",
          result:
            "Recuperar el recorrido de una pieza y encontrar el material y la evidencia asociados a cada operación.",
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
        },
        {
          id: "quality",
          title: "Calidad y Safe Launch",
          problem:
            "Una inspección detecta un hallazgo, pero la evidencia, el material afectado y la decisión quedan en conversaciones distintas.",
          flow: "Flujos para registrar inspecciones, vincular evidencia al producto y gestionar contenciones, responsables y disposiciones.",
          result:
            "Identificar qué material está contenido, por qué y quién debe revisar la evidencia antes de decidir.",
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
        },
        {
          id: "apqp",
          title: "APQP y ejecución de proyectos",
          problem:
            "El plan indica una fecha de avance, pero no deja claro qué entregable o aprobación impide alcanzar el siguiente hito.",
          flow: "Aplicaciones que relacionan hitos, entregables, dependencias, responsables y evidencia de aprobación.",
          result:
            "Distinguir trabajo terminado de trabajo aprobado y atender la dependencia que bloquea el avance.",
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
        },
        {
          id: "warehouse",
          title: "Almacenes y materiales",
          problem:
            "Lo que se recibe o se surte no siempre coincide con la orden y el registro del inventario.",
          flow: "Flujos de escaneo, validación de material y cantidad, y registro de movimientos conectados con el ERP según sus interfaces disponibles.",
          result:
            "Detectar discrepancias antes de confirmar un movimiento y conservar su relación con la orden y la ubicación.",
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
        },
      ],
    },
    machine: {
      eyebrow: "03 / MÁS ALLÁ DE LA MÁQUINA",
      title: "Tus máquinas saben más\nde lo que muestran tus sistemas.",
      intro:
        "Los resultados de ciclo, valores de proceso y alarmas son más útiles cuando se vinculan con la orden, el producto y la estación que los generaron.",
      note: "La integración depende de las interfaces disponibles, los accesos y las restricciones operativas del equipo. Evaluamos estas condiciones antes de definir la solución.",
      labels: [
        "Señal de máquina",
        "Contexto de producción",
        "Evento operativo",
        "Personas que pueden actuar",
      ],
      details: [
        "Valor de prueba + unidad",
        "Orden + serie + estación",
        "Regla + resultado + evidencia",
        "Calidad · Ingeniería · Mantenimiento",
      ],
      caption: "Conectividad industrial con significado operativo.",
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
  },
};
