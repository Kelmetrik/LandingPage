import { mkdir, writeFile } from "node:fs/promises";
import { content } from "../src/content.js";
await mkdir("docs", { recursive: true });
let text = `# Kelmetrik — Especificación editorial V1, revisión 2

Los textos EN/ES se generan desde los mismos diccionarios que usa la web. Regenerar con \`npm run docs:editorial\` después de editar contenido.

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

`;
function append(value, path = "") {
  if (typeof value === "string") {
    text += `\n**${path}**\n\n${value.replaceAll("\n", "<br>\n")}\n`;
    return;
  }
  for (const [key, child] of Object.entries(value))
    append(child, path ? `${path}.${key}` : key);
}
for (const lang of ["en", "es"]) {
  text += `\n## ${lang === "en" ? "English" : "Español"}\n`;
  append(content[lang]);
}
await writeFile("docs/editorial-v1.md", text);
console.log("Editorial specification generated from the production copy.");
