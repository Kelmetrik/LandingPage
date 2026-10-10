# Activar la medición gratuita de Kelmetrik

## Qué elegimos y qué falta

Elegimos **Umami Cloud Hobby + Google Search Console**, ambos sin contratar un plan de pago. El código está preparado; las cuentas y la recepción de estadísticas reales todavía no están verificadas. La vista local no envía datos.

- Umami: visitas, procedencia, páginas, interés en dominios y acciones de contacto.
- Search Console: búsquedas en Google, impresiones, clics e indexación. No identifica a las personas que visitan la página.
- Las cuentas deben quedar bajo tu control. No compartas contraseñas; el identificador público del sitio sí se puede compartir para conectarlo.

## 1. Crear el sitio gratuito en Umami

1. Abre [Umami Cloud](https://cloud.umami.is/) y crea una cuenta con un correo que controles. Completa personalmente la autenticación y la aceptación de sus términos.
2. Elige **Hobby — $0**, no la prueba de Pro ni Business. La página de planes consultada indica un sitio, 100.000 eventos al mes y seis meses de historial. Verifica estos límites al registrarte: el proveedor puede cambiarlos.
3. En **Websites → Add website**, escribe **Kelmetrik** como nombre y **kelmetrik.com** como dominio. Guarda el sitio.
4. Abre la edición del sitio y su apartado **Tracking code**. Copia únicamente el valor `data-website-id` (una cadena con letras, números y guiones). Es público, no es una contraseña ni una API key.
5. Comparte ese identificador en esta conversación para completar la conexión. No pegues el script por tu cuenta en el HTML: la página ya controla su carga después del permiso y evita vistas duplicadas.

La instalación usa el script oficial cloud.umami.is y el receptor gateway.umami.is. Si el código que entrega tu cuenta muestra otros dominios, revisarlos antes de activar.

## 2. Conectar con el despliegue

En el proyecto Vercel **landing-page**, quien tenga acceso abre **Settings → Environment Variables**, configura para producción y vuelve a desplegar:

```text
VITE_ANALYTICS_ENABLED=true
VITE_UMAMI_WEBSITE_ID=<identificador público de tu sitio>
```

Actualmente el acceso a Vercel depende de la cuenta de Luz. Puedes crear Umami y obtener su identificador ahora; la activación real requiere que ella configure estos valores o te otorgue acceso al proyecto. No es necesario mover el dominio ni cambiar de alojamiento para usar Umami.

Dejar la medición apagada en Preview. La aplicación limita además el envío a kelmetrik.com y www.kelmetrik.com. No introducir claves privadas en variables VITE_, porque son públicas.

## 3. Comprobar antes de darla por activa

1. Abre la versión publicada con una preferencia aún no elegida: debe pedir permiso.
2. Rechaza: no debe cargar Umami ni enviar eventos.
3. Abre **Preferencias de analítica** en el pie y acepta. Revisa en Umami que aparezca una vista de página.
4. Mantén una sección y un dominio visibles al menos dos segundos. Deben aparecer section_view y domain_view una sola vez por carga.
5. Pulsa “Hablemos de este proceso”: contact_click debe incluir el dominio del ejemplo.
6. Comprueba form_start al editar el formulario y form_submit_success solo tras aceptación de Formspree. Usa un mensaje identificado como prueba y verifica su recepción por separado.
7. Revoca el permiso y confirma que cesan los envíos. No se recuperan eventos rechazados previamente.

Un bloqueador o una señal de privacidad del navegador puede impedir la medición. No la eludimos; el formulario y la navegación deben seguir funcionando. La mayoría de datos de uso corresponden a visitantes que aceptaron, no a toda la audiencia.

## 4. Qué mirar en Umami

- **Adquisición:** páginas, procedencia y campañas con etiquetas genéricas.
- **Exposición:** domain_view por manufacturing, quality, apqp y warehouse. Haber visto un bloque no equivale a interés comercial.
- **Acción explícita:** contact_click, especialmente los que llevan domain y location=solution.
- **Contacto:** form_start, form_submit_success y form_submit_error. Una solicitud aceptada por el servicio no equivale a una venta ni confirma recepción en bandeja.

Empieza con estos informes. Revisa el volumen antes de inferir tendencias; no uses diferencias de unas pocas visitas como prueba de mejora.

## 5. Crear Google Search Console

1. Entra a [Google Search Console](https://search.google.com/search-console/) con una cuenta de Google que controles.
2. Añade una propiedad de tipo **Dominio**, con **kelmetrik.com** sin https ni rutas.
3. Google proporcionará un registro TXT. Copia exactamente su contenido en el administrador DNS del dominio. El proveedor DNS puede ser distinto de Vercel; no sustituir registros existentes ni inventar el valor.
4. Regresa a Google y pulsa **Verificar** cuando el registro esté disponible. Conserva el TXT para mantener la verificación.
5. En **Sitemaps**, envía **https://www.kelmetrik.com/sitemap.xml** una vez publicada la nueva versión.
6. Usa la inspección de URL para revisar `/` y `/es/`. Consulta **Rendimiento** para búsquedas, impresiones y clics cuando haya datos suficientes.

Si no tienes acceso al DNS, se puede usar una propiedad de prefijo https://www.kelmetrik.com/ y una etiqueta de verificación. El código admite `VITE_GOOGLE_SITE_VERIFICATION`; esa alternativa también requiere configurar y publicar el sitio. No confundas una propiedad creada con una propiedad verificada.

## 6. Mantener costo cero

Consulta el uso en la cuenta y los [límites vigentes de Hobby](https://umami.is/pricing). Las visitas y propiedades de eventos cuentan en el consumo, así que 100.000 eventos no significa 100.000 visitantes. Confirma en la cuenta el comportamiento al llegar al límite: la FAQ general de sobreconsumo no distingue claramente todos los planes.

No iniciar pruebas de pago, añadir facturación ni autorizar sobreconsumo para completar esta instalación. Si aparecen cobros o no se ofrece Hobby, mantener la medición desactivada y revisar la decisión contigo. No hay lógica de contratación ni cambio de plan en el sitio.

Antes de alcanzar la cuota, revisar contigo si reducimos eventos, apagamos temporalmente la medición o pasamos a pago. El plan se cambiará solo con tu decisión. Revisa también la retención de seis meses y exporta los informes que quieras conservar.

## Referencias oficiales

- [Planes Umami](https://umami.is/pricing)
- [Añadir un sitio](https://docs.umami.is/docs/add-a-website)
- [Obtener el código de medición](https://docs.umami.is/docs/collect-data)
- [Configurar el tracker](https://docs.umami.is/docs/tracker-configuration)
- [Añadir y verificar una propiedad Search Console](https://support.google.com/webmasters/answer/34592?hl=es)
