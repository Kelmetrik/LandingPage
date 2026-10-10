# Medición V1

El catálogo pertenece a Kelmetrik. `src/lib/analytics.js` define `createAnalytics`, `track` y el esquema 1. `src/lib/plausible.js` es el único adaptador del proveedor. El contexto de demo vive en memoria y termina con la carga de página.

## Eventos y significado

| Evento | Disparador | Propiedades específicas |
| --- | --- | --- |
| page_view | Carga con permiso, o permiso otorgado; una vez por página | language |
| section_view | 60% del bloque de título/introducción visible durante 2 segundos continuos y pestaña visible | section |
| domain_view | Mismo criterio para el título y problema de un dominio | domain |
| domain_explore | Abrir storyboard o seguir enlace de manufactura | domain |
| demo_start | Inicio explícito | scenario |
| demo_scenario_select | Cambio explícito de opción | scenario |
| demo_step_reached | Primera llegada a una etapa en una ejecución | scenario, stage |
| demo_complete | Primera llegada a trazabilidad en una ejecución | scenario |
| demo_reset | Reinicio o cambio que descarta una ejecución iniciada | scenario, reason |
| contact_click | Clic de contacto o correo | location, contexto |
| form_start | Primera edición del formulario | contexto |
| form_submit_success | Respuesta HTTP satisfactoria de Formspree | contexto |
| form_submit_error | Fallo de red/timeout o respuesta no satisfactoria | error, contexto |

Cada evento lleva `schema_version=1` y `language=en|es`. Contexto: `demo_explored` booleano, `demo_scenarios=none|normal|failure|both`, `demo_max_stage=0..6`. `stage`: work_order, identification, test, validation, disposition, traceability. `reason`: restart, scenario_change. `location`: header, hero, demo, contact, footer. `error`: network, service.

`section`: hero, disconnect, connected-operations, solutions, machine, approach, contact. `domain`: manufacturing, quality, apqp, warehouse. El validador elimina claves desconocidas y valores fuera del catálogo. Nunca transmitir nombres, correos, empresas, retos, series ni texto libre.

Una exposición no demuestra interés activo; usar domain_explore para esa distinción. Un envío aceptado no confirma entrega en bandeja ni una oportunidad calificada. La tasa de contacto tras demo representa correlación de esta carga de página, no causalidad ni atribución entre dispositivos.

## Privacidad y activación

Desactivada por defecto. No hay cuenta Plausible ni propiedad Search Console confirmadas. Una vez configurada, la implementación solicita permiso explícito antes de medir y ofrece revocación en el pie de página. Es una elección conservadora de producto; el aviso final debe revisarse con los datos reales del responsable. GPC o Do Not Track mantienen la medición apagada. La única persistencia del sitio es la preferencia on/off en localStorage; no contiene identificadores.

No hay cola: eventos y contexto rechazados no se conservan ni se reproducen tras aceptar. Al revocar se limpia el contexto. Una petición que ya salió antes de revocar no puede recuperarse. Recargar o cambiar de idioma inicia una carga nueva. El dominio de producción es el único habilitado; las vistas previas y localhost no generan métricas reales.

El adaptador envía desde el navegador a https://plausible.io/api/event, sin cookies ni credenciales. Mapea page_view a pageview, sin script que duplique vistas. Las exposiciones son no interactivas. Solo conserva utm_source, utm_medium y utm_campaign con etiquetas cortas alfanuméricas y guiones; descarta el resto de la consulta y el fragmento. El referrer se reduce al origen. Las campañas deben usar etiquetas genéricas, nunca nombres, emails o números de contacto. No hay proxy para eludir bloqueadores.

## Configurar Plausible

1. El titular crea el sitio `kelmetrik.com` y selecciona un plan que permita propiedades personalizadas y embudos (Business en la documentación consultada). Los eventos cuentan en el volumen facturable.
2. Crear objetivos de evento con los nombres anteriores excepto page_view; este utiliza la vista nativa.
3. Crear objetivos filtrados de demo_step_reached por escenario y stage.
4. Crear dos embudos secuenciales, uno por escenario: demo_start → seis objetivos de etapa. Crear otro embudo demo_start → contact_click → form_submit_success, permitiendo actividad intermedia.
5. Configurar fuentes, país, dispositivo, idioma y objetivos en los informes. El contexto de contacto permite segmentar exploró/no exploró, escenarios y etapa máxima.
6. Establecer VITE_ANALYTICS_ENABLED=true y VITE_PLAUSIBLE_DOMAIN=kelmetrik.com solo después de revisar privacidad y realizar una prueba controlada. Mantener apagado en preview.
7. Comprobar eventos en el panel real. Un HTTP 202 del Events API no garantiza inclusión: Plausible puede descartar bots o pruebas. Deshabilitar otras instalaciones de seguimiento automático para no duplicar registros.

## Search Console

Es complementario a Plausible: muestra rendimiento en búsquedas, no interacciones con la demo. El titular crea una propiedad de dominio para kelmetrik.com y verifica el DNS con el valor exacto entregado por Google. Alternativa: propiedad de prefijo https://www.kelmetrik.com/ y token público VITE_GOOGLE_SITE_VERIFICATION. Enviar https://www.kelmetrik.com/sitemap.xml y comprobar las cuatro rutas. No inventar valores DNS ni asumir verificación completada.

## Evolución y revisión

Un futuro adaptador recibe el mismo evento y las mismas propiedades saneadas. Cambiar su implementación no modifica componentes ni lógica EOL. Revisar antes cualquier ampliación de datos o persistencia.

A las dos y cuatro semanas de publicación, comparar fuentes, exposición/exploración por dominio, avance normal/falla y contactos con contexto. Registrar volumen y limitaciones; no imponer una meta de conversión sin línea base. No se programan recordatorios mientras no exista una fecha real de publicación.

Referencias: https://plausible.io/docs/events-api · https://plausible.io/docs/funnel-analysis · https://plausible.io/docs/custom-props/for-custom-events · https://support.google.com/webmasters/answer/9008080
