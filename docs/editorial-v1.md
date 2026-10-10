# Kelmetrik — Especificación editorial V1, revisión 5

Los textos EN/ES se generan desde los mismos diccionarios que usa la web. Regenerar con `npm run docs:editorial` después de editar contenido.

## Dirección acordada

Kelmetrik: ingeniería de software e integración de sistemas industriales. Público: operaciones, manufactura, calidad, ingeniería y TI en México y Estados Unidos. Objetivo: conversaciones de diagnóstico. Inglés en / y español en /es/.

Cuatro dominios y una capacidad transversal IT/OT. Capacidad explícita para desarrollar ERP, MES y WMS a medida, módulos e integraciones. La narrativa cubre procesos entre áreas, ERP, Excel, macros, correos y equipos. Ejemplos originales y conceptuales, sin simulación interactiva, sin presentarlos como productos terminados ni trabajos de clientes. Cada bloque utiliza el título original en inglés y un único párrafo comercial: el texto español del usuario se conserva literalmente y la versión inglesa lo traduce fielmente. No se añaden paráfrasis de solución o resultado.

## Secuencia y recursos visuales

1. Inicio: gráfica de barras azul animada detrás de la propuesta y las dos acciones. Números sintéticos variables y una onda de color azul/naranja, identificados como ilustrativos; sin afirmaciones de rendimiento; pausa fuera de pantalla y con pestaña oculta; versión estática con movimiento reducido.
2. Desconexión: comparación del mismo flujo fragmentado y conectado: orden en ERP, seguimiento en Excel, aprobación por correo y recaptura manual.
3. Soluciones: cuatro ejemplos completos y visibles. En escritorio, explicación junto a un fragmento de interfaz conceptual; en móvil, explicación y ejemplo apilados. Estructura: número y categoría → título → párrafo completo → contacto. El ejemplo conserva datos y estados específicos, sin anotaciones comerciales repetidas.
4. Más allá de la máquina: señal → contexto → evento → persona que puede actuar. Interfaces y accesos condicionan la integración.
5. Enfoque: comprender → diseñar → construir → validar → desplegar, con entregable por etapa.
6. Contacto: nombre, correo empresarial y empresa obligatorios; reto opcional.

## Ejemplos conceptuales

| Dominio | Problema | Visual | Capacidad comunicada |
| --- | --- | --- | --- |
| Manufactura | Historia distribuida en registros separados | Orden → estación → registro, pieza, componente y lote | Integraciones, captura y relaciones de trazabilidad consultables |
| Calidad y Safe Launch | Evidencia, alcance y decisión dispersos | Hallazgo, evidencia, contención, responsable y disposición pendiente | Inspección estructurada y seguimiento de decisiones autorizadas |
| APQP | Dependencia que bloquea un hito | Plan aprobado, reporte pendiente y siguiente hito bloqueado | Relación entre planificación, evidencia y aprobación |
| Materiales | Lo escaneado no coincide con la orden | Comparación de material, cantidad y ubicación | Validación antes de registrar un movimiento en el ERP |

Los registros originales llevan etiquetas de ejemplo. Los estados tienen palabras además de color. No hay controles simulados. Cada dominio ofrece contacto contextual. Todo el contenido principal es legible sin JavaScript.

## Glosario

| EN | ES | Uso |
| --- | --- | --- |
| Work order | Orden de producción | Contexto de ejecución |
| Traceability | Trazabilidad | Relaciones recuperables entre producto, operación y evidencia |
| Disposition pending | Disposición pendiente | Una persona autorizada aún debe decidir |
| Safe Launch | Safe Launch | Inspección y contención de arranque |
| APQP | APQP | Planificación avanzada de la calidad del producto |
| IT/OT | IT/OT | Sistemas empresariales y tecnología operativa |

## Registro de afirmaciones

Permitido: capacidades acordadas, método, entregables y ejemplos originales identificados. Condicionado: interfaces disponibles, accesos y alcance acordado. Excluido: ahorros, eficiencia o disponibilidad sin evidencia; clientes ficticios; certificaciones; integración universal.

## Medición y privacidad

Umami gratuito + Search Console. Permiso previo explícito. Sin medición local ni en vistas previas. Sin identificación propia de visitantes, sesiones grabadas, mapas de calor ni campos del formulario en analítica. Responsable: Kelmetrik; correo de privacidad: contact@kelmetrik.com. El domicilio confirmado aparece en ambos idiomas.

## Textos completos de interfaz


## English

**lang**

en

**other**

ES

**otherUrl**

/es/

**home**

/

**privacyUrl**

/privacy/

**title**

Kelmetrik — Industrial software & connected operations

**description**

Custom industrial software and IT/OT integration. Connect manufacturing, quality, materials, equipment and enterprise systems with Kelmetrik.

**nav.0**

Solutions

**nav.1**

IT/OT integration

**nav.2**

Our approach

**nav.3**

Contact

**menu**

Menu

**close**

Close menu

**skip**

Skip to content

**eyebrow**

INDUSTRIAL SOFTWARE & SYSTEMS INTEGRATION

**hero.0**

Connected operations.

**hero.1**

Better decisions.

**intro**

We connect industrial equipment, enterprise systems, people and processes through custom software — turning fragmented information into coordinated, traceable operations.

**primary**

Let’s discuss your operation

**secondary**

Explore our solutions

**heroNote**

Built around the way your operation actually works.

**disconnect.eyebrow**

01 / THE OPERATIONAL DISCONNECT

**disconnect.title**

The information exists.<br>
The connections are missing.

**disconnect.intro**

An order lives in the ERP. Its progress is tracked in Excel. Approvals arrive by email and a macro handles part of the work. Purchasing, warehouse, production and quality hold information about the same process, but do not always share its context.

**disconnect.fragmented**

Working in fragments

**disconnect.connected**

Working with context

**disconnect.before.0**

Order in ERP

**disconnect.before.1**

Excel follow-up

**disconnect.before.2**

Email approval

**disconnect.before.3**

Manual re-entry

**disconnect.after.0**

Shared order

**disconnect.after.1**

Assigned workflow

**disconnect.after.2**

Rules and approvals

**disconnect.after.3**

Connected record

**disconnect.foot**

We connect systems, files, equipment and cross-functional processes. We integrate what already works and build the applications that are missing.

**disconnect.problems.0**

ERP workflows that still require manual steps outside the system.

**disconnect.problems.1**

Spreadsheets, macros and files that depend on one person.

**disconnect.problems.2**

Departments re-entering information or losing track of a request.

**domains.eyebrow**

02 / WHAT WE CAN BUILD

**domains.title**

Solutions for a<br>
connected operation.

**domains.intro**

We build custom ERP, MES and WMS systems, alongside applications and integrations for workflows your current systems do not cover. These four examples show how we connect work across departments.

**domains.example**

Conceptual example

**domains.caption**

Illustrative workflow and interface. Scope is defined around your operation.

**domains.contact**

Let’s discuss this process

**domains.items.0.id**

manufacturing

**domains.items.0.title**

Manufacturing Execution & Traceability

**domains.items.0.summary**

We connect stations, equipment and production systems to record what happens at every manufacturing stage. From component identification to test results, we build traceability that helps teams control processes, detect deviations and understand what happened to each product.

**domains.items.0.visualTitle**

A connected product history

**domains.items.0.nodes.0.0**

ERP

**domains.items.0.nodes.0.1**

Work order

**domains.items.0.nodes.1.0**

Station

**domains.items.0.nodes.1.1**

Identity + result

**domains.items.0.nodes.2.0**

Record

**domains.items.0.nodes.2.1**

Product history

**domains.items.0.recordTitle**

Traceability record

**domains.items.0.facts.0.0**

Work order

**domains.items.0.facts.0.1**

EX-2048

**domains.items.0.facts.1.0**

Product

**domains.items.0.facts.1.1**

EX-0042

**domains.items.0.facts.2.0**

Component / lot

**domains.items.0.facts.2.1**

PCB-A / LT-08

**domains.items.0.facts.3.0**

Station / operation

**domains.items.0.facts.3.1**

Station 02 / assembly

**domains.items.0.evidence**

Linked evidence

**domains.items.0.evidenceText**

Material used → recorded operation → station result

**domains.items.0.outcome**

Look up a product, order or lot

**domains.items.0.platform**

Custom MES

**domains.items.0.short**

Manufacturing

**domains.items.1.id**

quality

**domains.items.1.title**

Quality Management & Safe Launch

**domains.items.1.summary**

We digitize inspections, validations and containment processes so every result has a clear follow-up. We connect evidence, defects, owners and quality decisions, reducing reliance on scattered records and making new-launch controls easier to manage.

**domains.items.1.visualTitle**

From finding to documented decision

**domains.items.1.recordTitle**

Finding follow-up

**domains.items.1.finding**

Surface mark on housing

**domains.items.1.facts.0.0**

Product / lot

**domains.items.1.facts.0.1**

Housing A / LT-08

**domains.items.1.facts.1.0**

Evidence

**domains.items.1.facts.1.1**

Linked inspection record

**domains.items.1.facts.2.0**

Scope

**domains.items.1.facts.2.1**

Identified material from the lot

**domains.items.1.facts.3.0**

Owner

**domains.items.1.facts.3.1**

Quality engineering

**domains.items.1.status**

Disposition pending

**domains.items.1.steps.0**

Finding recorded

**domains.items.1.steps.1**

Containment identified

**domains.items.1.steps.2**

Quality review

**domains.items.1.outcome**

A decision requires an authorized review

**domains.items.1.platform**

Connected quality

**domains.items.1.short**

Quality

**domains.items.2.id**

apqp

**domains.items.2.title**

APQP & Industrial Project Management

**domains.items.2.summary**

We connect project planning with actual execution. We centralize activities, deliverables, owners and evidence to identify delays, visualize dependencies and ensure milestones advance with verifiable results behind them.

**domains.items.2.visualTitle**

The dependency behind the delay

**domains.items.2.recordTitle**

Validation readiness

**domains.items.2.milestone**

Milestone: process validation

**domains.items.2.status**

Blocked by approval

**domains.items.2.rows.0.0**

Validation plan

**domains.items.2.rows.0.1**

Approved

**domains.items.2.rows.1.0**

Test report

**domains.items.2.rows.1.1**

Approval pending

**domains.items.2.rows.2.0**

Next milestone

**domains.items.2.rows.2.1**

Waiting for report

**domains.items.2.facts.0.0**

Owner

**domains.items.2.facts.0.1**

Quality engineering

**domains.items.2.facts.1.0**

Required evidence

**domains.items.2.facts.1.1**

Reviewed and approved report

**domains.items.2.outcome**

The milestone shows its blocker and the next owner

**domains.items.2.platform**

Management applications

**domains.items.2.short**

APQP & projects

**domains.items.3.id**

warehouse

**domains.items.3.title**

Warehouse & Material Management

**domains.items.3.summary**

We connect physical material movements with the systems that manage operations. We design receiving, storage, picking and inventory workflows with validation and traceability, eliminating duplicate data entry and improving control over each movement.

**domains.items.3.visualTitle**

Validate the movement before recording it

**domains.items.3.recordTitle**

Pick validation

**domains.items.3.columns.0**

Order requires

**domains.items.3.columns.1**

Scan records

**domains.items.3.rows.0.0**

Material

**domains.items.3.rows.0.1**

MAT-A2

**domains.items.3.rows.0.2**

MAT-B1

**domains.items.3.rows.1.0**

Quantity

**domains.items.3.rows.1.1**

12 units

**domains.items.3.rows.1.2**

12 units

**domains.items.3.rows.2.0**

Location

**domains.items.3.rows.2.1**

A-03

**domains.items.3.rows.2.2**

A-03

**domains.items.3.status**

Material does not match the order

**domains.items.3.outcome**

Movement pending correction of the discrepancy

**domains.items.3.platform**

Custom WMS

**domains.items.3.short**

Materials

**domains.platformTitle**

Software that fits your operation

**domains.platformNote**

We can build a custom platform, a focused module or an integration with your existing systems. The process defines the scope.

**domains.platforms.0.0**

ERP

**domains.platforms.0.1**

Business management

**domains.platforms.0.2**

Connect purchasing, inventory, requests and approvals across departments.

**domains.platforms.1.0**

MES

**domains.platforms.1.1**

Manufacturing execution

**domains.platforms.1.2**

Link orders, operations, components and shop-floor results.

**domains.platforms.2.0**

WMS

**domains.platforms.2.1**

Warehouse management

**domains.platforms.2.2**

Structure receipts, locations, picking and material movements.

**domains.custom**

CUSTOM BUILT

**domains.navigate**

Explore by process

**machine.eyebrow**

03 / CONNECTING SYSTEMS AND OPERATIONS

**machine.title**

From isolated data<br>
to a connected process.

**machine.intro**

An ERP movement, an Excel file or a machine signal can initiate the same workflow: identify the context, apply a rule and put the next step in the right team’s hands.

**machine.note**

We assess APIs, files, databases and equipment interfaces, together with access permissions and operating constraints, before defining each integration.

**machine.labels.0**

Systems, files & equipment

**machine.labels.1**

Process context

**machine.labels.2**

Rules & follow-up

**machine.labels.3**

Cross-functional action

**machine.details.0**

ERP · Excel · applications · signals

**machine.details.1**

Order · material · request · station

**machine.details.2**

Validations · approvals · evidence

**machine.details.3**

Purchasing · Warehouse · Production · Quality

**machine.caption**

IT/OT integration and software that connect the work.

**approach.eyebrow**

04 / OUR APPROACH

**approach.title**

We start with the operation,<br>
not the software.

**approach.intro**

A clear path from understanding the process to putting a validated solution into use.

**approach.deliverable**

DELIVERABLE

**approach.steps.0.0**

Understand

**approach.steps.0.1**

Observe the workflow, its users, handoffs and constraints.

**approach.steps.0.2**

Process map & agreed priorities

**approach.steps.1.0**

Design

**approach.steps.1.1**

Define system boundaries, information flows and the integration approach.

**approach.steps.1.2**

Solution architecture & scoped workflow

**approach.steps.2.0**

Build

**approach.steps.2.1**

Develop the application and integrations through reviewable increments.

**approach.steps.2.2**

Working prototype & implementation

**approach.steps.3.0**

Validate

**approach.steps.3.1**

Test operational scenarios and exceptions with the people who use the process.

**approach.steps.3.2**

Test evidence & user validation

**approach.steps.4.0**

Deploy

**approach.steps.4.1**

Prepare rollout, operating documentation and the agreed support handoff.

**approach.steps.4.2**

Deployment & handover plan

**contact.eyebrow**

05 / LET’S START A CONVERSATION

**contact.title**

Let’s discuss<br>
your operation.

**contact.intro**

Tell us where information gets disconnected or a process becomes difficult to control. We’ll use that context to coordinate a diagnostic conversation.

**contact.emailLabel**

Prefer email?

**contact.name**

Full name

**contact.email**

Business email

**contact.company**

Company

**contact.challenge**

Operational challenge

**contact.optional**

optional

**contact.placeholder**

Which process, equipment or systems are involved?

**contact.submit**

Send project details

**contact.submitting**

Sending…

**contact.success**

Thank you. Your request has been accepted. We’ll use the details you shared to coordinate a conversation.

**contact.error**

We couldn’t confirm your request. Your details are still here. Please try again or email us.

**contact.notice**

We use these details to respond to your request. Please do not include confidential production or customer information.

**contact.privacy**

Read the privacy notice

**contact.required**

Fields marked * are required.

**contact.honeypot**

Leave this field empty

**contact.emailSubject**

A conversation about our operation

**footer**

Industrial software. Connected operations.

**rights**

Kelmetrik. All rights reserved.

**privacy**

Privacy

**preferences**

Analytics preferences

**privacyContent.title**

Privacy & your choices

**privacyContent.intro**

This page explains how the website handles contact requests and optional audience measurement.

**privacyContent.contactTitle**

Contact information

**privacyContent.contactText**

The contact form sends your name, business email, company and optional operational challenge to Formspree to deliver your request to Kelmetrik. We use this information to respond and coordinate a conversation.

**privacyContent.analyticsTitle**

Optional measurement

**privacyContent.analyticsText**

After you accept, Umami may receive page views and a limited set of interactions: sections and domains viewed, contact actions, and form start and outcome. We never send form fields, product identifiers or free text. We do not enable user identification, session recordings, heatmaps or advertising pixels.

**privacyContent.choicesTitle**

Your choices

**privacyContent.choicesText**

You can change optional measurement below. Rejected events are discarded, not held for later delivery. Your measurement preference may be stored locally in this browser; it is not a visitor identifier. The site and contact form work without analytics.

**privacyContent.providerText**

Service providers process requests under their own privacy notices. Hosting also processes the technical information needed to serve and protect the website.

**privacyContent.rightsTitle**

Questions and privacy requests

**privacyContent.rightsText**

For questions about information you submitted, or to request access, correction or deletion, contact

**privacyContent.back**

Back to Kelmetrik

**privacyContent.responsible**

Responsible party

**privacyContent.address**

Contact address

**privacyContent.formspree**

Formspree privacy notice

**privacyContent.vercel**

Vercel privacy notice

**privacyContent.umami**

Umami privacy notice

**consent.title**

Optional audience measurement

**consent.text**

May we use Umami to measure visits, interest in our solutions and contact actions? We do not send form contents or record sessions. You can decline and still use the entire site.

**consent.allow**

Allow analytics

**consent.reject**

Reject analytics

**consent.disabled**

Optional measurement is disabled. This page does not send usage statistics.

**consent.on**

Analytics is allowed in this browser.

**consent.off**

Analytics is off in this browser.

**consent.close**

Close preferences

**consent.protected**

Your browser privacy signal keeps analytics off.

**consent.preview**

This preview does not send statistics. You can review how optional measurement is presented here.

**consent.unavailable**

Measurement could not start. Your preference is saved and you can continue using the page.

**consent.loading**

Starting permitted measurement…

**chartNote**

Illustrative visualization · synthetic data

## Español

**lang**

es

**other**

EN

**otherUrl**

/

**home**

/es/

**privacyUrl**

/es/privacidad/

**title**

Kelmetrik — Software industrial y operaciones conectadas

**description**

Software industrial a medida e integración IT/OT. Conecta manufactura, calidad, materiales, equipos y sistemas empresariales con Kelmetrik.

**nav.0**

Soluciones

**nav.1**

Integración IT/OT

**nav.2**

Nuestro enfoque

**nav.3**

Contacto

**menu**

Menú

**close**

Cerrar menú

**skip**

Ir al contenido

**eyebrow**

SOFTWARE INDUSTRIAL E INTEGRACIÓN DE SISTEMAS

**hero.0**

Operaciones conectadas.

**hero.1**

Mejores decisiones.

**intro**

Conectamos equipos industriales, sistemas empresariales, personas y procesos mediante software a medida, para transformar información fragmentada en operaciones coordinadas y trazables.

**primary**

Hablemos de tu operación

**secondary**

Explora nuestras soluciones

**heroNote**

Tecnología diseñada alrededor de cómo funciona tu operación.

**disconnect.eyebrow**

01 / LA DESCONEXIÓN OPERATIVA

**disconnect.title**

La información existe.<br>
Faltan las conexiones.

**disconnect.intro**

Una orden vive en el ERP. Su seguimiento está en Excel. Las aprobaciones llegan por correo y una macro completa parte del trabajo. Compras, almacén, producción y calidad tienen información del mismo proceso, pero no siempre comparten el contexto.

**disconnect.fragmented**

Trabajo fragmentado

**disconnect.connected**

Trabajo con contexto

**disconnect.before.0**

Orden en ERP

**disconnect.before.1**

Seguimiento en Excel

**disconnect.before.2**

Aprobación por correo

**disconnect.before.3**

Recaptura manual

**disconnect.after.0**

Orden compartida

**disconnect.after.1**

Flujo con responsables

**disconnect.after.2**

Reglas y aprobaciones

**disconnect.after.3**

Registro conectado

**disconnect.foot**

Conectamos sistemas, archivos, equipos y procesos entre áreas. Integramos lo que ya funciona y desarrollamos las aplicaciones que faltan.

**disconnect.problems.0**

Procesos del ERP que requieren pasos manuales fuera del sistema.

**disconnect.problems.1**

Hojas de cálculo, macros y archivos que dependen de una persona.

**disconnect.problems.2**

Áreas que recapturan información o pierden el estado de una solicitud.

**domains.eyebrow**

02 / LO QUE PODEMOS CONSTRUIR

**domains.title**

Soluciones para una<br>
operación conectada.

**domains.intro**

Desarrollamos ERP, MES y WMS a medida, además de aplicaciones e integraciones para los procesos que tus sistemas actuales no cubren. Estos cuatro ejemplos muestran cómo conectamos el trabajo entre áreas.

**domains.example**

Ejemplo conceptual

**domains.caption**

Flujo e interfaz ilustrativos. El alcance se define con tu operación.

**domains.contact**

Hablemos de este proceso

**domains.items.0.id**

manufacturing

**domains.items.0.title**

Manufacturing Execution & Traceability

**domains.items.0.summary**

Conectamos estaciones, equipos y sistemas de producción para registrar lo que ocurre durante cada etapa de manufactura. Desde la identificación de componentes hasta los resultados de prueba, construimos trazabilidad que permite controlar procesos, detectar desviaciones y entender qué ocurrió con cada producto.

**domains.items.0.visualTitle**

La historia de una pieza, conectada

**domains.items.0.nodes.0.0**

ERP

**domains.items.0.nodes.0.1**

Orden de producción

**domains.items.0.nodes.1.0**

Estación

**domains.items.0.nodes.1.1**

Identidad + resultado

**domains.items.0.nodes.2.0**

Registro

**domains.items.0.nodes.2.1**

Historia de la pieza

**domains.items.0.recordTitle**

Registro de trazabilidad

**domains.items.0.facts.0.0**

Orden

**domains.items.0.facts.0.1**

EJ-2048

**domains.items.0.facts.1.0**

Pieza

**domains.items.0.facts.1.1**

EJ-0042

**domains.items.0.facts.2.0**

Componente / lote

**domains.items.0.facts.2.1**

PCB-A / LT-08

**domains.items.0.facts.3.0**

Estación / operación

**domains.items.0.facts.3.1**

Estación 02 / ensamble

**domains.items.0.evidence**

Evidencia vinculada

**domains.items.0.evidenceText**

Material utilizado → operación registrada → resultado de estación

**domains.items.0.outcome**

Consulta por pieza, orden o lote

**domains.items.0.platform**

MES a medida

**domains.items.0.short**

Manufactura

**domains.items.1.id**

quality

**domains.items.1.title**

Quality Management & Safe Launch

**domains.items.1.summary**

Digitalizamos inspecciones, validaciones y procesos de contención para que cada resultado tenga un seguimiento claro. Conectamos evidencia, defectos, responsables y decisiones de calidad, reduciendo la dependencia de registros dispersos y facilitando el control de nuevos lanzamientos.

**domains.items.1.visualTitle**

Del hallazgo a una decisión documentada

**domains.items.1.recordTitle**

Seguimiento de un hallazgo

**domains.items.1.finding**

Marca superficial en alojamiento

**domains.items.1.facts.0.0**

Producto / lote

**domains.items.1.facts.0.1**

Alojamiento A / LT-08

**domains.items.1.facts.1.0**

Evidencia

**domains.items.1.facts.1.1**

Registro de inspección vinculado

**domains.items.1.facts.2.0**

Alcance

**domains.items.1.facts.2.1**

Material del lote identificado

**domains.items.1.facts.3.0**

Responsable

**domains.items.1.facts.3.1**

Ingeniería de calidad

**domains.items.1.status**

Disposición pendiente

**domains.items.1.steps.0**

Hallazgo registrado

**domains.items.1.steps.1**

Contención identificada

**domains.items.1.steps.2**

Revisión de calidad

**domains.items.1.outcome**

La decisión requiere una revisión autorizada

**domains.items.1.platform**

Calidad conectada

**domains.items.1.short**

Calidad

**domains.items.2.id**

apqp

**domains.items.2.title**

APQP & Industrial Project Management

**domains.items.2.summary**

Conectamos la planeación de proyectos con su ejecución real. Centralizamos actividades, entregables, responsables y evidencia para identificar retrasos, visualizar dependencias y asegurar que los hitos avancen respaldados por resultados verificables.

**domains.items.2.visualTitle**

La dependencia que explica el retraso

**domains.items.2.recordTitle**

Preparación de validación

**domains.items.2.milestone**

Hito: validación del proceso

**domains.items.2.status**

Bloqueado por aprobación

**domains.items.2.rows.0.0**

Plan de validación

**domains.items.2.rows.0.1**

Aprobado

**domains.items.2.rows.1.0**

Reporte de pruebas

**domains.items.2.rows.1.1**

Pendiente de aprobación

**domains.items.2.rows.2.0**

Siguiente hito

**domains.items.2.rows.2.1**

En espera del reporte

**domains.items.2.facts.0.0**

Responsable

**domains.items.2.facts.0.1**

Ingeniería de calidad

**domains.items.2.facts.1.0**

Evidencia requerida

**domains.items.2.facts.1.1**

Reporte revisado y aprobado

**domains.items.2.outcome**

El hito muestra su bloqueo y el siguiente responsable

**domains.items.2.platform**

Aplicaciones de gestión

**domains.items.2.short**

APQP y proyectos

**domains.items.3.id**

warehouse

**domains.items.3.title**

Warehouse & Material Management

**domains.items.3.summary**

Conectamos los movimientos físicos de materiales con los sistemas que administran la operación. Diseñamos procesos de recibo, almacenamiento, picking e inventario con validaciones y trazabilidad, eliminando capturas duplicadas y mejorando el control sobre cada movimiento.

**domains.items.3.visualTitle**

Validar el movimiento antes de registrarlo

**domains.items.3.recordTitle**

Validación de surtido

**domains.items.3.columns.0**

Orden solicita

**domains.items.3.columns.1**

Escaneo registra

**domains.items.3.rows.0.0**

Material

**domains.items.3.rows.0.1**

MAT-A2

**domains.items.3.rows.0.2**

MAT-B1

**domains.items.3.rows.1.0**

Cantidad

**domains.items.3.rows.1.1**

12 unidades

**domains.items.3.rows.1.2**

12 unidades

**domains.items.3.rows.2.0**

Ubicación

**domains.items.3.rows.2.1**

A-03

**domains.items.3.rows.2.2**

A-03

**domains.items.3.status**

Material distinto al solicitado

**domains.items.3.outcome**

Movimiento pendiente de corregir la discrepancia

**domains.items.3.platform**

WMS a medida

**domains.items.3.short**

Materiales

**domains.platformTitle**

Software que se adapta a tu operación

**domains.platformNote**

Podemos desarrollar una plataforma a medida, un módulo específico o una integración con tus sistemas actuales. El alcance se define a partir del proceso.

**domains.platforms.0.0**

ERP

**domains.platforms.0.1**

Gestión empresarial

**domains.platforms.0.2**

Conecta compras, inventario, solicitudes y aprobaciones entre áreas.

**domains.platforms.1.0**

MES

**domains.platforms.1.1**

Ejecución de manufactura

**domains.platforms.1.2**

Relaciona órdenes, operaciones, componentes y resultados en piso.

**domains.platforms.2.0**

WMS

**domains.platforms.2.1**

Gestión de almacenes

**domains.platforms.2.2**

Estructura recibos, ubicaciones, surtido y movimientos de materiales.

**domains.custom**

A MEDIDA

**domains.navigate**

Explora por proceso

**machine.eyebrow**

03 / INTEGRACIÓN ENTRE SISTEMAS Y OPERACIÓN

**machine.title**

Del dato aislado<br>
al proceso conectado.

**machine.intro**

Un movimiento en el ERP, un archivo de Excel o una señal de máquina pueden iniciar el mismo flujo: identificar el contexto, aplicar una regla y poner el siguiente paso en manos del área correcta.

**machine.note**

Revisamos APIs, archivos, bases de datos e interfaces del equipo, junto con permisos y restricciones operativas, antes de definir cada integración.

**machine.labels.0**

Sistemas, archivos y equipos

**machine.labels.1**

Contexto del proceso

**machine.labels.2**

Reglas y seguimiento

**machine.labels.3**

Acciones entre áreas

**machine.details.0**

ERP · Excel · aplicaciones · señales

**machine.details.1**

Orden · material · solicitud · estación

**machine.details.2**

Validaciones · aprobaciones · evidencia

**machine.details.3**

Compras · Almacén · Producción · Calidad

**machine.caption**

Integración IT/OT y software para conectar el trabajo.

**approach.eyebrow**

04 / NUESTRO ENFOQUE

**approach.title**

Comenzamos por la operación,<br>
no por el software.

**approach.intro**

Un camino claro desde comprender el proceso hasta poner en uso una solución validada.

**approach.deliverable**

ENTREGABLE

**approach.steps.0.0**

Comprender

**approach.steps.0.1**

Observar el flujo, sus usuarios, intercambios y restricciones.

**approach.steps.0.2**

Mapa de proceso y prioridades acordadas

**approach.steps.1.0**

Diseñar

**approach.steps.1.1**

Definir límites de sistemas, flujos de información y enfoque de integración.

**approach.steps.1.2**

Arquitectura y alcance del flujo

**approach.steps.2.0**

Construir

**approach.steps.2.1**

Desarrollar la aplicación y las integraciones mediante avances revisables.

**approach.steps.2.2**

Prototipo funcional e implementación

**approach.steps.3.0**

Validar

**approach.steps.3.1**

Probar escenarios y excepciones con las personas que operan el proceso.

**approach.steps.3.2**

Evidencia de pruebas y validación de usuarios

**approach.steps.4.0**

Desplegar

**approach.steps.4.1**

Preparar la puesta en marcha, documentación y entrega del soporte acordado.

**approach.steps.4.2**

Plan de despliegue y entrega

**contact.eyebrow**

05 / INICIEMOS UNA CONVERSACIÓN

**contact.title**

Hablemos de<br>
tu operación.

**contact.intro**

Cuéntanos dónde se desconecta la información o qué proceso resulta difícil de controlar. Ese contexto nos ayudará a coordinar una conversación de diagnóstico.

**contact.emailLabel**

¿Prefieres escribirnos?

**contact.name**

Nombre completo

**contact.email**

Correo empresarial

**contact.company**

Empresa

**contact.challenge**

Reto operativo

**contact.optional**

opcional

**contact.placeholder**

¿Qué proceso, equipos o sistemas están involucrados?

**contact.submit**

Enviar detalles del proyecto

**contact.submitting**

Enviando…

**contact.success**

Gracias. Tu solicitud fue aceptada. Usaremos la información que compartiste para coordinar una conversación.

**contact.error**

No pudimos confirmar tu solicitud. Tus datos siguen aquí. Intenta de nuevo o escríbenos por correo.

**contact.notice**

Usamos estos datos para responder a tu solicitud. Evita incluir información confidencial de producción o de clientes.

**contact.privacy**

Consultar el aviso de privacidad

**contact.required**

Los campos con * son obligatorios.

**contact.honeypot**

Deja este campo vacío

**contact.emailSubject**

Una conversación sobre nuestra operación

**footer**

Software industrial. Operaciones conectadas.

**rights**

Kelmetrik. Todos los derechos reservados.

**privacy**

Privacidad

**preferences**

Preferencias de analítica

**privacyContent.title**

Privacidad y tus opciones

**privacyContent.intro**

Esta página explica cómo el sitio maneja solicitudes de contacto y medición opcional de audiencia.

**privacyContent.contactTitle**

Información de contacto

**privacyContent.contactText**

El formulario envía tu nombre, correo empresarial, empresa y reto operativo opcional a Formspree para entregar tu solicitud a Kelmetrik. Utilizamos esta información para responder y coordinar una conversación.

**privacyContent.analyticsTitle**

Medición opcional

**privacyContent.analyticsText**

Después de aceptar, Umami puede recibir visitas y un conjunto limitado de interacciones: secciones y dominios vistos, acciones de contacto e inicio y resultado del formulario. Nunca enviamos los campos del formulario, identificadores de producto ni texto libre. No activamos identificación de usuarios, grabaciones de sesiones, mapas de calor ni píxeles publicitarios.

**privacyContent.choicesTitle**

Tus opciones

**privacyContent.choicesText**

Puedes cambiar la medición opcional abajo. Los eventos rechazados se descartan, no se guardan para enviarlos después. Tu preferencia puede guardarse localmente en este navegador; no es un identificador de visitante. El sitio y el formulario funcionan sin analítica.

**privacyContent.providerText**

Los proveedores procesan solicitudes conforme a sus propios avisos de privacidad. El alojamiento también procesa la información técnica necesaria para servir y proteger el sitio.

**privacyContent.rightsTitle**

Preguntas y solicitudes de privacidad

**privacyContent.rightsText**

Para consultar la información que compartiste o solicitar acceso, corrección o eliminación, escribe a

**privacyContent.back**

Volver a Kelmetrik

**privacyContent.responsible**

Responsable

**privacyContent.address**

Domicilio de contacto

**privacyContent.formspree**

Aviso de privacidad de Formspree

**privacyContent.vercel**

Aviso de privacidad de Vercel

**privacyContent.umami**

Aviso de privacidad de Umami

**consent.title**

Medición opcional de audiencia

**consent.text**

¿Nos permites medir visitas, interés en nuestras soluciones y acciones de contacto con Umami? No enviamos el contenido del formulario ni grabamos sesiones. Puedes rechazarlo y seguir usando toda la página.

**consent.allow**

Permitir analítica

**consent.reject**

Rechazar analítica

**consent.disabled**

La medición opcional está desactivada. No se envían estadísticas de uso desde esta página.

**consent.on**

La analítica está permitida en este navegador.

**consent.off**

La analítica está desactivada en este navegador.

**consent.close**

Cerrar preferencias

**consent.protected**

La señal de privacidad de tu navegador mantiene la analítica desactivada.

**consent.preview**

Esta vista previa no envía estadísticas. Puedes revisar aquí cómo se presenta la medición opcional.

**consent.unavailable**

No se pudo iniciar la medición. Tu preferencia está guardada y puedes seguir usando la página.

**consent.loading**

Iniciando la medición permitida…

**chartNote**

Visualización ilustrativa · datos sintéticos
