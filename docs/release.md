# Publicación y verificación

## Preparación

Base original: `20b8d68bd494a4623e51a6c65d1ef5ac06b6f151`. Proyecto Vercel existente: landing-page. Mantener su integración con GitHub y publicar primero la rama como vista previa.

- Nombre legal del responsable: pendiente de confirmación. Configurar VITE_PRIVACY_RESPONSIBLE antes de producción. El build de Vercel production falla de forma explícita si falta; preview/local funcionan y muestran el aviso pendiente.
- Domicilio confirmado: Miguel Alemán Valdez 3110, Oficina 1B, Colonia Gabilondo, 22044 Tijuana, B.C.
- Privacidad: contact@kelmetrik.com. Contacto comercial existente: eduardo@kelmetrik.com.
- Formspree conserva el endpoint existente; comprobar el destinatario y recepción en la cuenta del titular.
- Plausible y Search Console no existen todavía; seguir measurement.md. Mantener analítica desactivada hasta activación y prueba.

## Validación

Ejecutar `npm ci`, `npm run lint`, `npm run build`, `npm test`. Las pruebas de componentes se ejecutan en DOM simulado, con peticiones de formulario simuladas; no equivalen a pruebas visuales ni recepción de correo real.

La inspección del navegador estuvo bloqueada por una política de seguridad del entorno. Queda pendiente la comprobación visual en Chrome y Safari móvil, a 360, 390, 768 y 1440 px. No sustituir esa validación por una afirmación de que el sitio fue probado visualmente.

En la vista previa comprobar: siete secciones, menú táctil y Escape, enlaces EN/ES, ambas demos completas, retroceso sin duplicados, cambio de escenario, panel de evidencia, Quality Hold persistente, tres storyboards, formulario y aviso de privacidad. Usar teclado y lector de pantalla; comprobar foco y anuncio de etapas.

Con movimiento reducido, no deben correr animaciones. Fuera de pantalla y con pestaña oculta deben detenerse. Sin JavaScript, el HTML principal y los storyboards nativos siguen disponibles; el ejemplo EOL está descrito en el bloque desplegable y el formulario usa el envío nativo de Formspree.

Comprobar recepción de una solicitud de prueba identificada como tal y confirmar la bandeja de destino. Una respuesta del servicio por sí sola no verifica entrega de correo.

## Despliegue

1. Registrar SHA final y URL del deployment previo.
2. Revisar la vista previa y resolver los pendientes anteriores.
3. Configurar los datos de producción; activar analítica solo si su cuenta está lista.
4. Integrar la rama en main para desplegar con Vercel.
5. Verificar acceso directo a /, /es/, /privacy/ y /es/privacidad/, canonicals, hreflang y sitemap. Preview incluye noindex; producción no.
6. Comprobar contacto y medición real. Programar las revisiones de dos y cuatro semanas desde esta fecha.

## Reversión

Si hay un problema operativo, promover en Vercel el deployment anterior registrado. Alternativamente revertir el commit de la V1 y desplegar; evitar reset/force-push sobre main. Para un problema aislado de medición, establecer VITE_ANALYTICS_ENABLED=false y volver a desplegar. No eliminar la cuenta ni los datos del proveedor como parte de una reversión del sitio.
