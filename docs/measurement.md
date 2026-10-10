# Medición V2

Decisión del titular: Umami Cloud Hobby + Search Console, con permiso antes de medir. Guía de activación: [activar-medicion.md](activar-medicion.md).

## Catálogo e interfaz

`track(eventName, properties)` conserva la interfaz central. El adaptador Umami es el único código que utiliza al proveedor. Se retiraron los eventos EOL y domain_explore, porque ya no hay simulaciones ni contenido oculto por explorar.

| Evento              | Disparador                                                                                | Propiedades específicas                |
| ------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------- |
| page_view           | Una vista cuando el proveedor está listo y existe permiso; nunca automática               | —                                      |
| section_view        | 60% del encabezado/introducción visible durante dos segundos continuos; una vez por carga | section                                |
| domain_view         | Mismo criterio para título/problema de un dominio                                         | domain                                 |
| contact_click       | Clic explícito de contacto                                                                | location, domain solo desde un ejemplo |
| form_start          | Primera edición del formulario                                                            | —                                      |
| form_submit_success | Formspree confirma aceptación                                                             | —                                      |
| form_submit_error   | Fallo de envío                                                                            | error: network o service               |

Cada evento lleva schema_version=2 y language=en|es. Valores de section: hero, disconnect, solutions, machine, approach, contact. Domain: manufacturing, quality, apqp, warehouse. Location: header, hero, solution, contact, footer.

Los datos permitidos se filtran por listas cerradas. No se transmite texto libre, campos del formulario, identificadores de producto, propiedades heredadas de la demo ni un ID propio de visitante. El dominio de un contact_click describe el botón pulsado, no una atribución histórica al formulario posterior. Un dominio visto solo demuestra exposición.

## Ciclo de permiso

Estado inicial: sin medición. Sin proveedor configurado, el panel explica que está apagada. En local y preview siempre explica que esa vista no envía estadísticas. En producción configurada muestra aceptar/rechazar. Cerrar conserva la medición apagada; se puede reabrir en el pie.

La preferencia utiliza kelmetrik-measurement-v2 en localStorage. No reutilizamos el permiso anterior para otro proveedor. Si el almacenamiento falla, la decisión dura en memoria. GPC/DNT impiden carga y envío.

Solo después de aceptar se carga https://cloud.umami.is/script.js. data-auto-track=false deshabilita inicialización automática; el sitio envía la única vista y sus eventos manuales. Se fija https://gateway.umami.is como destino y se verifica permiso de nuevo en el hook before-send. No se activa identify, performance, replay ni heatmap.

Durante la carga del proveedor se descartan interacciones, sin cola. Al estar listo se envía la vista actual y se reinician las ventanas de exposición. Revocar invalida cargas pendientes y deshabilita envío. Una solicitud que ya salió antes de revocar no se puede retirar. Errores de carga, timeout y errores del proveedor están aislados de contacto y navegación. No usamos proxies para eludir bloqueadores.

El URL enviado solo conserva ruta y utm_source/utm_medium/utm_campaign con valores alfanuméricos, guiones y guion bajo de hasta 64 caracteres. Descarta fragmento y otros parámetros. El referrer se reduce al origen. No usar nombres ni correos como campañas.

## Configuración y costo

VITE_ANALYTICS_ENABLED=false por defecto. VITE_UMAMI_WEBSITE_ID es público y se obtiene del sitio real. Solo kelmetrik.com/www.kelmetrik.com pueden enviar. CSP permite el script oficial y gateway.umami.is. No hay cuentas creadas ni estadísticas reales verificadas todavía.

Hobby consultado: un sitio, 100.000 eventos mensuales y seis meses de historial. Las propiedades consumen cuota. Confirmar los límites y comportamiento de sobreconsumo en la cuenta antes de activar; nunca iniciar prueba de pago ni autorizar cobros automáticamente.

## Revisión

A las dos y cuatro semanas de la publicación real: fuentes, exposición a dominios, contacto contextual y envíos aceptados. Registrar el volumen y las limitaciones de consentimiento/bloqueadores. Search Console complementa con consultas e indexación. No implica reconocer la identidad de visitantes.
