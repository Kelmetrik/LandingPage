# Publicación y verificación — revisión 2

## Estado

Rama: feat/connected-operations-v1. PR: https://github.com/Kelmetrik/LandingPage/pull/1. Proyecto Vercel existente: landing-page. La revisión restaura el fondo animado, sustituye EOL por cuatro ejemplos visibles y prepara Umami gratuito + Search Console con permiso previo.

Responsable confirmado: Kelmetrik. Domicilio: Miguel Alemán Valdez 3110, Oficina 1B, Colonia Gabilondo, 22044 Tijuana, B.C. Privacidad: contact@kelmetrik.com. Contacto comercial: eduardo@kelmetrik.com.

## Validación realizada

- Lint y build correctos; 22 pruebas automatizadas aprobadas.
- EN/ES prerenderizados, seis secciones, cuatro ejemplos visibles, enlaces antiguos equivalentes y ausencia de scripts de medición iniciales.
- Apertura/cierre de preferencias y retorno de foco en DOM simulado, estados configurado/ausente/preview/bloqueado y elecciones aceptar/rechazar.
- Carga del proveedor solo con permiso; revocación durante carga, sin replay; propiedades controladas y descarte de eventos EOL.
- Pausa del gráfico por visibilidad y movimiento reducido comprobada con señales simuladas.
- Formulario: validación, retención de texto tras error y bloqueo de duplicados con red simulada.

La inspección real de http://127.0.0.1:4173/ sigue bloqueada: el navegador no pudo verificar una política administrativa y denegó acceso. No se intentó eludirla. No hay capturas ni comprobación visual real de esta revisión.

## Comprobaciones pendientes de publicación

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
