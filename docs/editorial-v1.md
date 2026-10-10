# Kelmetrik — Especificación editorial V1

Fuente de verdad: los textos de este documento se generan de los mismos diccionarios que usa la web. Regenerar con `npm run docs:editorial` después de editar contenido.

## Dirección y límites

Kelmetrik es una empresa de ingeniería de software e integración de sistemas industriales. Público: operaciones, manufactura, calidad, ingeniería y TI en México y Estados Unidos. Conversión: conversación de diagnóstico. Inglés en / y español en /es/.

Cuatro dominios operativos y una capacidad transversal IT/OT. No son productos licenciados. Cada afirmación debe ser una capacidad respaldada, un hecho verificable o un ejemplo explícito. No publicar clientes, métricas de mejora, certificaciones o datos propietarios sin evidencia y autorización.

## Secuencia y recursos visuales

1. Hero: sistemas, equipos y personas alimentan contexto operativo; dos llamadas a la acción.
2. Desconexión: comparación del mismo flujo fragmentado y conectado.
3. EOL: seis etapas con señal, regla, disposición y evidencia.
4. Dominios: problema, flujo y resultado; storyboards identificados como ilustrativos.
5. Máquina: señal → contexto → evento → persona que puede actuar.
6. Enfoque: comprender → diseñar → construir → validar → desplegar; un entregable por fase.
7. Contacto: nombre, correo y empresa obligatorios; reto opcional.

Escritorio: diagrama horizontal con panel lateral. Móvil: etapas verticales, panel debajo y controles táctiles. La historia debe entenderse sin animaciones. Consultar wireframes.svg.

## Storyboard EOL

Datos originales y sintéticos. Orden DEMO-WO-2048; sensor DEMO-SENSOR-01; serie DEMO-SN-0042; componente DEMO-PCB-031; lote DEMO-LOT-008; estación DEMO-EOL-01; referencia DEMO-REF-01.

| Etapa | Evidencia que aparece |
| --- | --- |
| Orden | Orden, modelo, operación EOL |
| Identificación | Serie, componente y lote |
| Prueba | Estación, condición, medición y unidad |
| Validación | Límites 2.40–2.60 V inclusivos, regla DEMO-EOL-v1, resultado |
| Disposición | Prueba aceptada o Quality Hold, con motivo |
| Trazabilidad | Registro completo e historial de eventos |

Normal: 2.51 V; falla: 2.72 V. No se representan otras especificaciones de un sensor real. Cambiar escenario limpia la ejecución; retroceder no duplica eventos. Reiniciar no libera una pieza retenida.

## Glosario

| EN | ES | Uso |
| --- | --- | --- |
| Work order | Orden de producción | Contexto originado en ERP |
| Traceability | Trazabilidad | Relaciones recuperables entre producto, operación y evidencia |
| Quality Hold | Quality Hold · Retención | Pieza contenida para revisión |
| Test accepted | Prueba aceptada | No equivale a liberación comercial |
| EOL | End-of-Line | Prueba funcional al final de línea |
| Safe Launch | Safe Launch | Flujos de inspección y contención de arranque |
| APQP | APQP | Planificación avanzada de la calidad del producto |
| IT/OT | IT/OT | Integración de sistemas empresariales y tecnología operativa |

## Registro de afirmaciones

Permitido: describir capacidades acordadas, método, entregables y escenarios originales identificados. Condicionado: interfaces de equipos, acceso, alcance de integración y soporte según proyecto. Excluido: porcentajes de ahorro, eficiencia o disponibilidad; clientes ficticios; certificaciones; inferencias de IA predictiva; integración universal.

## Textos completos de interfaz

Las claves identifican el lugar de uso; cada texto aparece íntegro para revisión EN/ES.

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

Connected operations

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

Explore a connected operation

**heroNote**

Built around the way your operation actually works.

**network.0**

Enterprise systems

**network.1**

Industrial equipment

**network.2**

People & processes

**networkCenter**

Operational context

**networkCaption**

An order. A signal. A decision. Connected.

**networkLabels.0**

Work orders & materials

**networkLabels.1**

Signals & test results

**networkLabels.2**

Actions & evidence

**disconnect.eyebrow**

01 / THE OPERATIONAL DISCONNECT

**disconnect.title**

The information exists.  
The connections are missing.

**disconnect.intro**

A machine records a result. An operator updates a spreadsheet. Quality searches for the history. Each tool knows a part of the story.

**disconnect.fragmented**

Working in fragments

**disconnect.connected**

Working with context

**disconnect.before.0**

Machine result

**disconnect.before.1**

Manual entry

**disconnect.before.2**

Separate systems

**disconnect.before.3**

Missing history

**disconnect.after.0**

Captured signal

**disconnect.after.1**

Identified product

**disconnect.after.2**

Shared context

**disconnect.after.3**

Traceable decision

**disconnect.foot**

Connect the tools you already use, structure the handoffs, and make the complete story available.

**disconnect.problems.0**

Data stays inside the equipment.

**disconnect.problems.1**

Information gets entered more than once.

**disconnect.problems.2**

Investigations depend on emails and spreadsheets.

**demo.eyebrow**

02 / CONNECTED OPERATIONS IN ACTION

**demo.title**

Follow a signal.  
Understand a decision.

**demo.intro**

Explore an End-of-Line functional test for an industrial sensor. See how one measurement connects a machine, a product and a quality decision.

**demo.badge**

Interactive simulation · Synthetic data

**demo.disclaimer**

An original demonstration of a possible integration. All signals, limits and identifiers are fictitious. This is not a customer implementation or a real sensor specification.

**demo.name**

From work order to quality decision

**demo.station**

Sensor functional test / EOL

**demo.normal**

Normal cycle

**demo.failure**

Failed test

**demo.scenarioLabel**

Choose a scenario

**demo.start**

Start simulation

**demo.next**

Next step

**demo.previous**

Previous

**demo.reset**

Restart

**demo.ready**

Ready to explore

**demo.step**

STEP

**demo.of**

OF

**demo.readyTitle**

One sensor. A connected history.

**demo.readyText**

Choose a scenario, then follow the order through six stages. Advance at your own pace and inspect the information transferred at each handoff.

**demo.steps.0**

Work order

**demo.steps.1**

Identification

**demo.steps.2**

Functional test

**demo.steps.3**

Quality validation

**demo.steps.4**

Disposition

**demo.steps.5**

Traceability

**demo.titles.0**

The order sets the context.

**demo.titles.1**

The product gets a digital identity.

**demo.titles.2**

The machine contributes evidence.

**demo.titles.3**

The rule makes the result explicit.

**demo.titles.4**

The result becomes an operational action.

**demo.titles.5**

The complete history is available.

**demo.bodies.0**

The simulated ERP releases an order for DEMO-SENSOR-01. The production system associates it with the required EOL operation.

**demo.bodies.1**

The simulated scan links the serial number to its electronic component and sensing-element lot. Subsequent results belong to this specific product.

**demo.bodies.2**

Under the illustrative reference condition DEMO-REF-01, the station captures the sensor’s electrical output automatically.

**demo.bodies.3**

The captured value is compared with an inclusive illustrative range of 2.40–2.60 V. The measurement, limits and rule remain part of the record.

**demo.bodies.4**

A passing result is accepted for this test. An out-of-range result places the piece in Quality Hold and retains the reason for review.

**demo.bodies.5**

Quality and engineering can investigate the measurement together with its production context, rather than reconstructing it from disconnected records.

**demo.transfers.0**

ERP → Production system

**demo.transfers.1**

Identification → Product record

**demo.transfers.2**

EOL station → Test record

**demo.transfers.3**

Test record → Validation rule

**demo.transfers.4**

Validation → Quality disposition

**demo.transfers.5**

Traceable record → Quality & engineering

**demo.payloads.0**

Order · Model · Required operation

**demo.payloads.1**

Serial number · Component · Component lot

**demo.payloads.2**

Station · Condition · Measurement · Unit

**demo.payloads.3**

Measurement · Limits · Rule version

**demo.payloads.4**

Test result · Disposition · Reason

**demo.payloads.5**

Order · Product · Test · Decision

**demo.evidence**

Connected evidence

**demo.empty**

Start the simulation to build the product record.

**demo.fields.order**

Work order

**demo.fields.model**

Sensor model

**demo.fields.operation**

Required operation

**demo.fields.serial**

Serial number

**demo.fields.component**

Electronic component

**demo.fields.lot**

Sensing-element lot

**demo.fields.station**

Test station

**demo.fields.condition**

Reference condition

**demo.fields.signal**

Measured output

**demo.fields.limits**

Inclusive limits

**demo.fields.rule**

Validation rule

**demo.fields.result**

Test result

**demo.fields.disposition**

Disposition

**demo.fields.reason**

Reason

**demo.pass**

PASS

**demo.fail**

FAIL

**demo.accepted**

Test accepted

**demo.hold**

Quality Hold

**demo.passReason**

Output within the illustrative limits.

**demo.failReason**

Output above the illustrative upper limit.

**demo.acceptance**

Acceptance applies only to this simulated test, not to commercial product release.

**demo.holdNote**

The piece remains on hold. Restarting this demonstration does not release, repair or approve it.

**demo.log**

Operational event history

**demo.eventNote**

Reviewing previous steps does not create duplicate records.

**demo.finalTitle**

A result you can investigate.

**demo.finalText**

The signal has a source, the product has a history, and the decision has supporting evidence.

**demo.contact**

Discuss a flow like this

**demo.loading**

Loading the interactive experience…

**demo.fallback**

The experience could not load. The complete example remains below; you can also reload to try again.

**demo.staticTitle**

The operation, step by step

**demo.staticText**

Normal cycle: 2.51 V → test accepted. Failed test: 2.72 V → Quality Hold. Illustrative inclusive limits: 2.40–2.60 V.

**domains.eyebrow**

03 / WHAT WE BUILD

**domains.title**

Four operational domains.  
One connected approach.

**domains.intro**

Custom solutions shaped around your workflows, constraints and existing systems.

**domains.problem**

THE CHALLENGE

**domains.flow**

WHAT WE CONNECT

**domains.result**

WHAT IT ENABLES

**domains.explore**

Explore the workflow

**domains.viewDemo**

Explore the EOL simulation

**domains.example**

Illustrative workflow · Not a packaged product

**domains.items.0.id**

manufacturing

**domains.items.0.title**

Manufacturing execution & traceability

**domains.items.0.short**

Manufacturing

**domains.items.0.problem**

Production steps, component records and test results live in different places.

**domains.items.0.flow**

Work orders, product identification, station activity and machine results.

**domains.items.0.result**

A product history that can be followed from execution to investigation.

**domains.items.0.steps.0**

Release order

**domains.items.0.steps.1**

Identify product

**domains.items.0.steps.2**

Capture test

**domains.items.0.steps.3**

Trace decision

**domains.items.1.id**

quality

**domains.items.1.title**

Quality & Safe Launch

**domains.items.1.short**

Quality

**domains.items.1.problem**

Inspections, containment and release decisions rely on scattered evidence.

**domains.items.1.flow**

Defect records, product identity, inspection evidence and controlled disposition.

**domains.items.1.result**

Quality decisions with a visible owner, status and supporting record.

**domains.items.1.steps.0**

Record defect

**domains.items.1.steps.1**

Link evidence

**domains.items.1.steps.2**

Assign review

**domains.items.1.steps.3**

Manage disposition

**domains.items.2.id**

apqp

**domains.items.2.title**

APQP & project execution

**domains.items.2.short**

APQP

**domains.items.2.problem**

A milestone looks on track until a missing approval blocks execution.

**domains.items.2.flow**

Deliverables, dependencies, responsibilities, risks and approval evidence.

**domains.items.2.result**

A clear view of what is blocked, why it matters and who can act.

**domains.items.2.steps.0**

Inspect milestone

**domains.items.2.steps.1**

Find missing approval

**domains.items.2.steps.2**

Identify owner

**domains.items.2.steps.3**

Resolve dependency

**domains.items.3.id**

warehouse

**domains.items.3.title**

Warehouse & material operations

**domains.items.3.short**

Materials

**domains.items.3.problem**

Physical material movements and enterprise records fall out of sync.

**domains.items.3.flow**

ERP orders, receiving, locations, guided picking and scan validation.

**domains.items.3.result**

Material movements checked against the work that needs to be done.

**domains.items.3.steps.0**

Receive order

**domains.items.3.steps.1**

Scan material

**domains.items.3.steps.2**

Validate quantity

**domains.items.3.steps.3**

Record movement

**machine.eyebrow**

04 / BEYOND THE MACHINE

**machine.title**

Your machines know more  
than your systems show.

**machine.intro**

Cycle results, process values and alarms become more useful when connected to the order, product and station that produced them.

**machine.note**

Integration depends on the equipment’s available interfaces, access and operating constraints. We evaluate these before defining the solution.

**machine.labels.0**

Machine signal

**machine.labels.1**

Production context

**machine.labels.2**

Operational event

**machine.labels.3**

People who can act

**machine.details.0**

Test value + unit

**machine.details.1**

Order + serial + station

**machine.details.2**

Rule + result + evidence

**machine.details.3**

Quality · Engineering · Maintenance

**machine.caption**

Industrial connectivity, with operational meaning.

**approach.eyebrow**

05 / OUR APPROACH

**approach.title**

We start with the operation,  
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

06 / START A CONVERSATION

**contact.title**

Let’s discuss  
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

When enabled and permitted, Plausible receives page views and a limited set of interactions: sections viewed, workflows explored, simulation progress and contact actions. Form fields, product identifiers and free text are never sent to analytics. We do not use session recordings or advertising pixels.

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

**privacyContent.draft**

Privacy details are being finalized. The legal name of the responsible party must be confirmed before this version is published.

**privacyContent.back**

Back to Kelmetrik

**privacyContent.responsible**

Responsible party

**privacyContent.address**

Contact address

**privacyContent.formspree**

Formspree privacy notice

**privacyContent.plausible**

Plausible data policy

**privacyContent.vercel**

Vercel privacy notice

**consent.title**

Optional audience measurement

**consent.text**

Help us understand which workflows are useful. Optional analytics measures visits and interactions without recording sessions or collecting form contents.

**consent.allow**

Allow analytics

**consent.reject**

Keep analytics off

**consent.disabled**

Optional analytics is not active on this site.

**consent.on**

Analytics is allowed in this browser.

**consent.off**

Analytics is off in this browser.

**consent.close**

Close preferences

**consent.protected**

Your browser privacy signal keeps analytics off.

### Ejemplos de los storyboards

**storyboards.quality.0.0**

Inspection

**storyboards.quality.0.1**

A housing mark is recorded against DEMO-SN-0187.

**storyboards.quality.1.0**

Evidence

**storyboards.quality.1.1**

The inspection record and defect location remain linked to the product.

**storyboards.quality.2.0**

Review owner

**storyboards.quality.2.1**

Quality reviews the record. Disposition is pending; the product remains contained.

**storyboards.quality.3.0**

Decision

**storyboards.quality.3.1**

The authorized disposition and its supporting evidence become part of the history.

**storyboards.apqp.0.0**

Milestone

**storyboards.apqp.0.1**

EOL validation — blocked.

**storyboards.apqp.1.0**

Dependency

**storyboards.apqp.1.1**

The test plan is approved; the validation report still needs approval.

**storyboards.apqp.2.0**

Responsible role

**storyboards.apqp.2.1**

Quality engineering owns the pending report.

**storyboards.apqp.3.0**

Impact

**storyboards.apqp.3.1**

The milestone remains blocked until the required evidence is approved.

**storyboards.warehouse.0.0**

ERP request

**storyboards.warehouse.0.1**

DEMO-PICK-010 requests 12 units of DEMO-MAT-A2.

**storyboards.warehouse.1.0**

Scan

**storyboards.warehouse.1.1**

The operator scans DEMO-MAT-B1 at the picking location.

**storyboards.warehouse.2.0**

Validation

**storyboards.warehouse.2.1**

Material mismatch. The movement is blocked before inventory is changed.

**storyboards.warehouse.3.0**

Resolution

**storyboards.warehouse.3.1**

The correct material and quantity must be validated before recording the movement.

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

Operaciones conectadas

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

Explora una operación conectada

**heroNote**

Tecnología diseñada alrededor de cómo funciona tu operación.

**network.0**

Sistemas empresariales

**network.1**

Equipos industriales

**network.2**

Personas y procesos

**networkCenter**

Contexto operativo

**networkCaption**

Una orden. Una señal. Una decisión. Conectadas.

**networkLabels.0**

Órdenes y materiales

**networkLabels.1**

Señales y resultados de prueba

**networkLabels.2**

Acciones y evidencia

**disconnect.eyebrow**

01 / LA DESCONEXIÓN OPERATIVA

**disconnect.title**

La información existe.  
Faltan las conexiones.

**disconnect.intro**

Una máquina registra un resultado. Un operador actualiza una hoja de cálculo. Calidad busca el historial. Cada herramienta conoce una parte de la historia.

**disconnect.fragmented**

Trabajo fragmentado

**disconnect.connected**

Trabajo con contexto

**disconnect.before.0**

Resultado de máquina

**disconnect.before.1**

Captura manual

**disconnect.before.2**

Sistemas separados

**disconnect.before.3**

Historial incompleto

**disconnect.after.0**

Señal capturada

**disconnect.after.1**

Producto identificado

**disconnect.after.2**

Contexto compartido

**disconnect.after.3**

Decisión trazable

**disconnect.foot**

Conecta las herramientas que ya utilizas, estructura los intercambios y haz accesible la historia completa.

**disconnect.problems.0**

Los datos permanecen dentro del equipo.

**disconnect.problems.1**

La información se captura más de una vez.

**disconnect.problems.2**

Investigar depende de correos y hojas de cálculo.

**demo.eyebrow**

02 / OPERACIONES CONECTADAS EN ACCIÓN

**demo.title**

Sigue una señal.  
Comprende una decisión.

**demo.intro**

Explora una prueba funcional End-of-Line de un sensor industrial. Observa cómo una medición conecta una máquina, un producto y una decisión de calidad.

**demo.badge**

Simulación interactiva · Datos sintéticos

**demo.disclaimer**

Demostración original de una integración posible. Las señales, los límites y los identificadores son ficticios. No representa una implementación comercial ni la especificación de un sensor real.

**demo.name**

De la orden a la decisión de calidad

**demo.station**

Prueba funcional de sensor / EOL

**demo.normal**

Ciclo normal

**demo.failure**

Prueba fallida

**demo.scenarioLabel**

Elige un escenario

**demo.start**

Iniciar simulación

**demo.next**

Siguiente etapa

**demo.previous**

Anterior

**demo.reset**

Reiniciar

**demo.ready**

Lista para explorar

**demo.step**

ETAPA

**demo.of**

DE

**demo.readyTitle**

Un sensor. Una historia conectada.

**demo.readyText**

Elige un escenario y sigue la orden a través de seis etapas. Avanza a tu ritmo y consulta la información que se transfiere en cada intercambio.

**demo.steps.0**

Orden de producción

**demo.steps.1**

Identificación

**demo.steps.2**

Prueba funcional

**demo.steps.3**

Validación de calidad

**demo.steps.4**

Disposición

**demo.steps.5**

Trazabilidad

**demo.titles.0**

La orden establece el contexto.

**demo.titles.1**

El producto obtiene una identidad digital.

**demo.titles.2**

La máquina aporta evidencia.

**demo.titles.3**

La regla hace explícito el resultado.

**demo.titles.4**

El resultado se convierte en una acción.

**demo.titles.5**

La historia completa está disponible.

**demo.bodies.0**

El ERP simulado libera una orden para DEMO-SENSOR-01. El sistema de producción la asocia con la operación EOL requerida.

**demo.bodies.1**

El escaneo simulado vincula el número de serie con su componente electrónico y el lote del elemento sensor. Los resultados posteriores pertenecen a este producto.

**demo.bodies.2**

Bajo la condición de referencia ilustrativa DEMO-REF-01, la estación captura automáticamente la salida eléctrica del sensor.

**demo.bodies.3**

El valor capturado se compara con el rango ilustrativo inclusivo de 2.40–2.60 V. La medición, los límites y la regla permanecen en el registro.

**demo.bodies.4**

Un resultado conforme se acepta para esta prueba. Un valor fuera de rango coloca la pieza en Quality Hold y conserva el motivo para su revisión.

**demo.bodies.5**

Calidad e ingeniería pueden investigar la medición junto con su contexto de producción, sin reconstruirlo a partir de registros desconectados.

**demo.transfers.0**

ERP → Sistema de producción

**demo.transfers.1**

Identificación → Registro del producto

**demo.transfers.2**

Estación EOL → Registro de prueba

**demo.transfers.3**

Registro de prueba → Regla de validación

**demo.transfers.4**

Validación → Disposición de calidad

**demo.transfers.5**

Registro trazable → Calidad e ingeniería

**demo.payloads.0**

Orden · Modelo · Operación requerida

**demo.payloads.1**

Número de serie · Componente · Lote

**demo.payloads.2**

Estación · Condición · Medición · Unidad

**demo.payloads.3**

Medición · Límites · Versión de regla

**demo.payloads.4**

Resultado · Disposición · Motivo

**demo.payloads.5**

Orden · Producto · Prueba · Decisión

**demo.evidence**

Evidencia conectada

**demo.empty**

Inicia la simulación para construir el registro del producto.

**demo.fields.order**

Orden de producción

**demo.fields.model**

Modelo de sensor

**demo.fields.operation**

Operación requerida

**demo.fields.serial**

Número de serie

**demo.fields.component**

Componente electrónico

**demo.fields.lot**

Lote del elemento sensor

**demo.fields.station**

Estación de prueba

**demo.fields.condition**

Condición de referencia

**demo.fields.signal**

Salida medida

**demo.fields.limits**

Límites inclusivos

**demo.fields.rule**

Regla de validación

**demo.fields.result**

Resultado de prueba

**demo.fields.disposition**

Disposición

**demo.fields.reason**

Motivo

**demo.pass**

CONFORME

**demo.fail**

NO CONFORME

**demo.accepted**

Prueba aceptada

**demo.hold**

Quality Hold · Retención

**demo.passReason**

Salida dentro de los límites ilustrativos.

**demo.failReason**

Salida superior al límite ilustrativo.

**demo.acceptance**

La aceptación corresponde únicamente a esta prueba simulada; no implica la liberación comercial del producto.

**demo.holdNote**

La pieza permanece retenida. Reiniciar la demostración no representa liberarla, repararla ni aprobarla.

**demo.log**

Historial de eventos operativos

**demo.eventNote**

Revisar etapas anteriores no genera registros duplicados.

**demo.finalTitle**

Un resultado que puedes investigar.

**demo.finalText**

La señal tiene un origen, el producto tiene un historial y la decisión tiene evidencia.

**demo.contact**

Hablemos de un flujo similar

**demo.loading**

Cargando la experiencia interactiva…

**demo.fallback**

No se pudo cargar la experiencia. El ejemplo completo sigue disponible abajo; también puedes recargar para intentarlo de nuevo.

**demo.staticTitle**

La operación, paso a paso

**demo.staticText**

Ciclo normal: 2.51 V → prueba aceptada. Prueba fallida: 2.72 V → Quality Hold. Límites inclusivos ilustrativos: 2.40–2.60 V.

**domains.eyebrow**

03 / QUÉ DESARROLLAMOS

**domains.title**

Cuatro ámbitos operativos.  
Un enfoque conectado.

**domains.intro**

Soluciones a medida de tus flujos de trabajo, restricciones y sistemas existentes.

**domains.problem**

EL RETO

**domains.flow**

QUÉ CONECTAMOS

**domains.result**

QUÉ HABILITA

**domains.explore**

Explorar el flujo

**domains.viewDemo**

Explorar la simulación EOL

**domains.example**

Flujo ilustrativo · No es un producto empaquetado

**domains.items.0.id**

manufacturing

**domains.items.0.title**

Ejecución de manufactura y trazabilidad

**domains.items.0.short**

Manufactura

**domains.items.0.problem**

Las etapas de producción, los componentes y los resultados de prueba están en lugares distintos.

**domains.items.0.flow**

Órdenes de producción, identificación de producto, actividad de estaciones y resultados de equipos.

**domains.items.0.result**

Un historial de producto que se puede seguir desde la ejecución hasta la investigación.

**domains.items.0.steps.0**

Liberar orden

**domains.items.0.steps.1**

Identificar producto

**domains.items.0.steps.2**

Capturar prueba

**domains.items.0.steps.3**

Trazar decisión

**domains.items.1.id**

quality

**domains.items.1.title**

Calidad y Safe Launch

**domains.items.1.short**

Calidad

**domains.items.1.problem**

Las inspecciones, contenciones y liberaciones dependen de evidencia dispersa.

**domains.items.1.flow**

Defectos, identidad de producto, evidencia de inspección y disposición controlada.

**domains.items.1.result**

Decisiones de calidad con responsable, estado y evidencia visibles.

**domains.items.1.steps.0**

Registrar defecto

**domains.items.1.steps.1**

Vincular evidencia

**domains.items.1.steps.2**

Asignar revisión

**domains.items.1.steps.3**

Gestionar disposición

**domains.items.2.id**

apqp

**domains.items.2.title**

APQP y ejecución de proyectos

**domains.items.2.short**

APQP

**domains.items.2.problem**

Un hito parece avanzar hasta que una aprobación pendiente bloquea la ejecución.

**domains.items.2.flow**

Entregables, dependencias, responsables, riesgos y evidencia de aprobación.

**domains.items.2.result**

Visibilidad de qué está bloqueado, por qué importa y quién puede actuar.

**domains.items.2.steps.0**

Revisar hito

**domains.items.2.steps.1**

Detectar aprobación pendiente

**domains.items.2.steps.2**

Identificar responsable

**domains.items.2.steps.3**

Resolver dependencia

**domains.items.3.id**

warehouse

**domains.items.3.title**

Almacenes y operaciones de materiales

**domains.items.3.short**

Materiales

**domains.items.3.problem**

Los movimientos físicos y los registros empresariales pierden sincronía.

**domains.items.3.flow**

Órdenes del ERP, recibos, ubicaciones, picking guiado y validación por escaneo.

**domains.items.3.result**

Movimientos de materiales verificados contra el trabajo requerido.

**domains.items.3.steps.0**

Recibir orden

**domains.items.3.steps.1**

Escanear material

**domains.items.3.steps.2**

Validar cantidad

**domains.items.3.steps.3**

Registrar movimiento

**machine.eyebrow**

04 / MÁS ALLÁ DE LA MÁQUINA

**machine.title**

Tus máquinas saben más  
de lo que muestran tus sistemas.

**machine.intro**

Los resultados de ciclo, valores de proceso y alarmas son más útiles cuando se vinculan con la orden, el producto y la estación que los generaron.

**machine.note**

La integración depende de las interfaces disponibles, los accesos y las restricciones operativas del equipo. Evaluamos estas condiciones antes de definir la solución.

**machine.labels.0**

Señal de máquina

**machine.labels.1**

Contexto de producción

**machine.labels.2**

Evento operativo

**machine.labels.3**

Personas que pueden actuar

**machine.details.0**

Valor de prueba + unidad

**machine.details.1**

Orden + serie + estación

**machine.details.2**

Regla + resultado + evidencia

**machine.details.3**

Calidad · Ingeniería · Mantenimiento

**machine.caption**

Conectividad industrial con significado operativo.

**approach.eyebrow**

05 / NUESTRO ENFOQUE

**approach.title**

Comenzamos por la operación,  
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

06 / INICIEMOS UNA CONVERSACIÓN

**contact.title**

Hablemos de  
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

Cuando está habilitado y permitido, Plausible recibe visitas y un conjunto limitado de interacciones: secciones vistas, flujos explorados, avance en la simulación y acciones de contacto. Los campos del formulario, identificadores de producto y texto libre nunca se envían a la analítica. No usamos grabaciones de sesiones ni píxeles publicitarios.

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

**privacyContent.draft**

Se están completando los datos de privacidad. El nombre legal del responsable debe confirmarse antes de publicar esta versión.

**privacyContent.back**

Volver a Kelmetrik

**privacyContent.responsible**

Responsable

**privacyContent.address**

Domicilio de contacto

**privacyContent.formspree**

Aviso de privacidad de Formspree

**privacyContent.plausible**

Política de datos de Plausible

**privacyContent.vercel**

Aviso de privacidad de Vercel

**consent.title**

Medición opcional de audiencia

**consent.text**

Ayúdanos a entender qué flujos resultan útiles. La analítica opcional mide visitas e interacciones sin grabar sesiones ni recopilar el contenido del formulario.

**consent.allow**

Permitir analítica

**consent.reject**

Mantener analítica desactivada

**consent.disabled**

La analítica opcional no está activa en este sitio.

**consent.on**

La analítica está permitida en este navegador.

**consent.off**

La analítica está desactivada en este navegador.

**consent.close**

Cerrar preferencias

**consent.protected**

La señal de privacidad de tu navegador mantiene la analítica desactivada.

### Ejemplos de los storyboards

**storyboards.quality.0.0**

Inspección

**storyboards.quality.0.1**

Se registra una marca en la carcasa de DEMO-SN-0187.

**storyboards.quality.1.0**

Evidencia

**storyboards.quality.1.1**

El registro de inspección y la ubicación del defecto permanecen vinculados al producto.

**storyboards.quality.2.0**

Responsable de revisión

**storyboards.quality.2.1**

Calidad revisa el registro. La disposición está pendiente y el producto permanece contenido.

**storyboards.quality.3.0**

Decisión

**storyboards.quality.3.1**

La disposición autorizada y su evidencia se integran al historial.

**storyboards.apqp.0.0**

Hito

**storyboards.apqp.0.1**

Validación EOL — bloqueada.

**storyboards.apqp.1.0**

Dependencia

**storyboards.apqp.1.1**

El plan de prueba está aprobado; falta aprobar el reporte de validación.

**storyboards.apqp.2.0**

Rol responsable

**storyboards.apqp.2.1**

Ingeniería de calidad es responsable del reporte pendiente.

**storyboards.apqp.3.0**

Impacto

**storyboards.apqp.3.1**

El hito permanece bloqueado hasta que se apruebe la evidencia requerida.

**storyboards.warehouse.0.0**

Solicitud del ERP

**storyboards.warehouse.0.1**

DEMO-PICK-010 solicita 12 unidades de DEMO-MAT-A2.

**storyboards.warehouse.1.0**

Escaneo

**storyboards.warehouse.1.1**

El operador escanea DEMO-MAT-B1 en la ubicación de picking.

**storyboards.warehouse.2.0**

Validación

**storyboards.warehouse.2.1**

El material no corresponde. El movimiento se bloquea antes de modificar el inventario.

**storyboards.warehouse.3.0**

Resolución

**storyboards.warehouse.3.1**

Se deben validar el material correcto y la cantidad antes de registrar el movimiento.
