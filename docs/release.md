# Publicación y verificación — revisión 5

## Estado

Rama: feat/connected-operations-v1. PR: https://github.com/Kelmetrik/LandingPage/pull/1. Proyecto Vercel existente: landing-page. Esta revisión añade valores variables y una onda de color azul/naranja al fondo, amplía el contexto a ERP/Excel/macros/procesos entre áreas, explicita ERP/MES/WMS a medida y mejora jerarquía, tamaño de texto y densidad visual. Conserva cuatro ejemplos visibles y Umami gratuito + Search Console con permiso previo.

Responsable confirmado: Kelmetrik. Domicilio: Miguel Alemán Valdez 3110, Oficina 1B, Colonia Gabilondo, 22044 Tijuana, B.C. Privacidad: contact@kelmetrik.com. Contacto comercial: eduardo@kelmetrik.com.

## Ajustes de recorrido — revisión 5

- Scroll nativo de proximidad hacia encabezados de sección y los cuatro ejemplos, sin capturar la rueda ni obligar a saltar bloques largos. Se desactiva al escribir en el formulario, abrir un diálogo o solicitar movimiento reducido.
- Aparición única y breve de títulos y visuales; pasos de integración y metodología con pequeños desfases. El contenido permanece visible si JavaScript o los observadores no están disponibles.
- Valores de la gráfica en Arial, peso 600 y tamaño mayor, conservando los datos ilustrativos variables.

## Limpieza editorial — revisión 5

Los cuatro párrafos originales en español se conservan literalmente, una sola vez por solución, con los títulos originales en inglés. Se retiraron los apartados secundarios de solución/resultado y las anotaciones comerciales de los ejemplos en ambos idiomas, junto con sus campos y estilos sin uso. Cada bloque conserva número, categoría, título, párrafo y contacto, acompañado por su ejemplo conceptual. La altura sigue el contenido; no se añadieron rellenos ni alturas mínimas.

## Validación realizada

- Lint y build correctos; 25 pruebas automatizadas aprobadas.
- Una prueba compara los cuatro párrafos españoles con el texto aprobado, verifica una sola aparición y comprueba títulos, ejemplos y contactos en ambas versiones.
- EN/ES prerenderizados, seis secciones, cuatro ejemplos visibles, enlaces antiguos equivalentes y ausencia de scripts de medición iniciales.
- Apertura/cierre de preferencias y retorno de foco en DOM simulado, estados configurado/ausente/preview/bloqueado y elecciones aceptar/rechazar.
- Carga del proveedor solo con permiso; revocación durante carga, sin replay; propiedades controladas y descarte de eventos EOL.
- Cambio de valores y colores, pausa/cancelación de cuadros por visibilidad y movimiento reducido comprobados con señales y tiempo simulados.
- Entradas visuales de una sola aparición, cambio de preferencia de movimiento y limpieza al abandonar la página comprobados con observadores simulados.
- Formulario: validación, retención de texto tras error y bloqueo de duplicados con red simulada.

La inspección real de http://127.0.0.1:4173/ sigue bloqueada: el navegador no pudo verificar una política administrativa y denegó acceso. No se intentó eludirla. No hay capturas ni comprobación visual real de esta revisión.

## Comprobaciones pendientes de publicación

- [ ] Revisar con rueda, trackpad, teclado y tacto que el ajuste de scroll resulte cómodo; permitir leer enteros los ejemplos altos y llegar al pie sin saltos.
- [ ] Chrome y Safari móvil a 360, 390, 768 y 1440 px: barras visibles detrás del contenido, texto legible, sin desbordamiento y todos los ejemplos completos.
- [ ] Teclado y lector de pantalla: menú, enlaces, tabla de materiales, foco atrapado en el diálogo, Escape y retorno al botón que lo abrió.
- [ ] Revisión sin JavaScript y con movimiento reducido. El contenido principal debe seguir siendo útil y la gráfica estática.
- [ ] Confirmar recepción en bandeja del mensaje KELMETRIK-V1-20261010. El 10 de octubre de 2026 Formspree respondió HTTP 200 con ok:true a ese único envío autorizado; no se repitió en esta revisión.
- [ ] Crear la cuenta Hobby y propiedad Search Console bajo control del titular, siguiendo activar-medicion.md. No se realizó contratación ni cambio de plan.
- [ ] Configurar ID real, permiso y comprobar eventos en Umami antes de declarar activa la medición.
- [ ] Resolver acceso al proyecto Vercel actualmente gestionado por Luz.

La vista local funciona sin Vercel ni cuenta de Umami. Para ver cambios, actualizar la página tras generar el build.

## Despliegue y reversión

1. Revisar la vista local y los pendientes; registrar SHA final y deployment previo.
2. Mantener VITE_ANALYTICS_ENABLED=false hasta configurar y validar la cuenta. Preview no envía eventos incluso si recibe esa variable.
3. Integrar el PR solamente después de revisar la versión. No hay cambios de DNS o hosting incluidos en esta entrega.
4. Comprobar producción: rutas /, /es/, /privacy/, /es/privacidad/, canonicals, hreflang, sitemap, contacto y preferencias.
5. Revisar métricas a las dos y cuatro semanas de la publicación real; no hay recordatorios programados sin fecha de lanzamiento.

Base de producción anterior: 20b8d68bd494a4623e51a6c65d1ef5ac06b6f151. Deployment previo registrado: https://vercel.com/luzgonzalezaguirres-projects/landing-page/BvoY2X8doP1cfHnqvNUvkicNREwn. Para revertir, promover ese deployment o revertir los commits de la V1; no hacer force-push a main. Para desactivar solo medición, establecer VITE_ANALYTICS_ENABLED=false y volver a desplegar.
