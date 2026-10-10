# Kelmetrik — Especificación editorial V1, revisión 2

Los textos EN/ES se generan desde los mismos diccionarios que usa la web. Regenerar con `npm run docs:editorial` después de editar contenido.

## Dirección acordada

Kelmetrik: ingeniería de software e integración de sistemas industriales. Público: operaciones, manufactura, calidad, ingeniería y TI en México y Estados Unidos. Objetivo: conversaciones de diagnóstico. Inglés en / y español en /es/.

Cuatro dominios y una capacidad transversal IT/OT. Ejemplos originales y conceptuales, sin simulación interactiva, sin presentarlos como productos terminados ni trabajos de clientes. Cada bloque responde: problema operativo → qué desarrolla Kelmetrik → qué permite hacer.

## Secuencia y recursos visuales

1. Inicio: gráfica de barras azul animada detrás de la propuesta y las dos acciones. Decoración sin números ni afirmaciones de rendimiento; pausa fuera de pantalla y con pestaña oculta; versión estática con movimiento reducido.
2. Desconexión: comparación del mismo flujo fragmentado y conectado.
3. Soluciones: cuatro ejemplos completos y visibles. En escritorio, explicación junto a un fragmento de interfaz anotado; en móvil, explicación y ejemplo apilados.
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

**domains.eyebrow**

02 / WHAT WE CAN BUILD

**domains.title**

Solutions for a<br>
connected operation.

**domains.intro**

Every operation has its own systems, rules and constraints. We design software and integrations around that context. These examples show how we can approach four industrial challenges.

**domains.problem**

THE CHALLENGE

**domains.flow**

WHAT WE BUILD

**domains.result**

WHAT IT ENABLES

**domains.example**

Conceptual example

**domains.caption**

Illustrative workflow and interface. Scope is defined around your operation.

**domains.contact**

Let’s discuss this process

**domains.items.0.id**

manufacturing

**domains.items.0.title**

Manufacturing & traceability

**domains.items.0.problem**

When an issue appears, reconstructing a product’s history requires searching across disconnected records.

**domains.items.0.flow**

Execution applications and integrations that link orders, components and station results in a searchable record.

**domains.items.0.result**

Retrieve a product’s journey and find the material and evidence associated with each operation.

**domains.items.0.visualTitle**

A connected product history

**domains.items.0.annotation**

Kelmetrik structures the relationships between your systems and makes evidence available to operations, quality and engineering.

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

**domains.items.1.id**

quality

**domains.items.1.title**

Quality & Safe Launch

**domains.items.1.problem**

An inspection identifies an issue, but its evidence, affected material and disposition live in separate conversations.

**domains.items.1.flow**

Workflows to record inspections, link evidence to products and manage containment, ownership and dispositions.

**domains.items.1.result**

Identify which material is contained, why, and who needs to review the evidence before making a decision.

**domains.items.1.visualTitle**

From finding to documented decision

**domains.items.1.annotation**

Kelmetrik connects shop-floor capture with quality follow-up, preserving context and ownership for every decision.

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

**domains.items.2.id**

apqp

**domains.items.2.title**

APQP & project execution

**domains.items.2.problem**

The plan shows a target date, but it does not make clear which deliverable or approval prevents the next milestone.

**domains.items.2.flow**

Applications that connect milestones, deliverables, dependencies, owners and approval evidence.

**domains.items.2.result**

Distinguish completed work from approved work and address the dependency blocking progress.

**domains.items.2.visualTitle**

The dependency behind the delay

**domains.items.2.annotation**

Kelmetrik turns scattered follow-up into a shared view of the work and the evidence required to move forward.

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

**domains.items.3.id**

warehouse

**domains.items.3.title**

Warehouse & materials

**domains.items.3.problem**

What is received or picked does not always match the order and the inventory record.

**domains.items.3.flow**

Scanning, material and quantity validation, and movement records connected with the ERP through its available interfaces.

**domains.items.3.result**

Detect discrepancies before confirming a movement and preserve its relationship to the order and location.

**domains.items.3.visualTitle**

Validate the movement before recording it

**domains.items.3.annotation**

Kelmetrik connects the physical operation to the business record and makes the rules for confirming each movement explicit.

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

**machine.eyebrow**

03 / BEYOND THE MACHINE

**machine.title**

Your machines know more<br>
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

**domains.eyebrow**

02 / LO QUE PODEMOS CONSTRUIR

**domains.title**

Soluciones para una<br>
operación conectada.

**domains.intro**

Cada operación tiene sus propios sistemas, reglas y restricciones. Diseñamos software e integraciones alrededor de ese contexto. Estos ejemplos muestran cómo podemos abordar cuatro retos industriales.

**domains.problem**

EL RETO

**domains.flow**

QUÉ DESARROLLAMOS

**domains.result**

QUÉ PERMITE HACER

**domains.example**

Ejemplo conceptual

**domains.caption**

Flujo e interfaz ilustrativos. El alcance se define con tu operación.

**domains.contact**

Hablemos de este proceso

**domains.items.0.id**

manufacturing

**domains.items.0.title**

Manufactura y trazabilidad

**domains.items.0.problem**

Cuando aparece un problema, reconstruir la historia de una pieza exige buscar en registros separados.

**domains.items.0.flow**

Aplicaciones de ejecución e integraciones que relacionan órdenes, componentes y resultados de estación en un registro consultable.

**domains.items.0.result**

Recuperar el recorrido de una pieza y encontrar el material y la evidencia asociados a cada operación.

**domains.items.0.visualTitle**

La historia de una pieza, conectada

**domains.items.0.annotation**

Kelmetrik estructura las relaciones entre tus sistemas y pone la evidencia al alcance de operaciones, calidad e ingeniería.

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

**domains.items.1.id**

quality

**domains.items.1.title**

Calidad y Safe Launch

**domains.items.1.problem**

Una inspección detecta un hallazgo, pero la evidencia, el material afectado y la decisión quedan en conversaciones distintas.

**domains.items.1.flow**

Flujos para registrar inspecciones, vincular evidencia al producto y gestionar contenciones, responsables y disposiciones.

**domains.items.1.result**

Identificar qué material está contenido, por qué y quién debe revisar la evidencia antes de decidir.

**domains.items.1.visualTitle**

Del hallazgo a una decisión documentada

**domains.items.1.annotation**

Kelmetrik conecta la captura en piso con el seguimiento de calidad, conservando el contexto y la responsabilidad de cada decisión.

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

**domains.items.2.id**

apqp

**domains.items.2.title**

APQP y ejecución de proyectos

**domains.items.2.problem**

El plan indica una fecha de avance, pero no deja claro qué entregable o aprobación impide alcanzar el siguiente hito.

**domains.items.2.flow**

Aplicaciones que relacionan hitos, entregables, dependencias, responsables y evidencia de aprobación.

**domains.items.2.result**

Distinguir trabajo terminado de trabajo aprobado y atender la dependencia que bloquea el avance.

**domains.items.2.visualTitle**

La dependencia que explica el retraso

**domains.items.2.annotation**

Kelmetrik convierte el seguimiento disperso en una vista compartida del trabajo y de la evidencia necesaria para avanzar.

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

**domains.items.3.id**

warehouse

**domains.items.3.title**

Almacenes y materiales

**domains.items.3.problem**

Lo que se recibe o se surte no siempre coincide con la orden y el registro del inventario.

**domains.items.3.flow**

Flujos de escaneo, validación de material y cantidad, y registro de movimientos conectados con el ERP según sus interfaces disponibles.

**domains.items.3.result**

Detectar discrepancias antes de confirmar un movimiento y conservar su relación con la orden y la ubicación.

**domains.items.3.visualTitle**

Validar el movimiento antes de registrarlo

**domains.items.3.annotation**

Kelmetrik conecta la operación física con el registro empresarial y hace explícitas las reglas para confirmar cada movimiento.

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

**machine.eyebrow**

03 / MÁS ALLÁ DE LA MÁQUINA

**machine.title**

Tus máquinas saben más<br>
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
