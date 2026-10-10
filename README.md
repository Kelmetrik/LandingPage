# Kelmetrik — Connected Operations V1

Bilingual industrial software and integration website: React + Vite, prerendered EN/ES HTML, dynamic blue/orange bar-chart background with changing synthetic values, four original conceptual solution examples with guided reading and explicit custom ERP/MES/WMS capabilities and the existing Formspree contact form. The interactive EOL simulation has been removed.

## Local development

Node 22.13+ (Node 22 LTS recommended).

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build
npm test
npm run preview -- --host 127.0.0.1 --port 4173
```

Build before testing: static HTML checks read dist. Open http://127.0.0.1:4173/es/ for Spanish or / for English. The preview serves the latest build; refresh after changes. It never sends analytics.

## Structure

- `src/content.js`: complete EN/ES editorial content and conceptual examples.
- `src/components/AnimatedBackgroundChart.jsx`: original hero geometry with decorative bars and visibility/motion-aware transforms.
- `src/components/Solutions.jsx`: four visible problem/implementation/outcome examples and contextual contact links.
- `src/lib/analytics.js`: schema 2 event catalog, controlled properties and deduplication.
- `src/lib/measurement.js`: consent lifecycle, provider readiness and revocation.
- `src/lib/umami.js`: manual Umami adapter; no automatic tracking or user identification.
- `src/components/Preferences.jsx`: accessible native modal, available from landing and privacy pages.
- `scripts/build.mjs`: prerenders /, /es/, /privacy/, /es/privacidad/ with metadata, sitemap and robots.

## Configuration and activation

[Guía paso a paso para el titular: activar Umami gratuito y Search Console](docs/activar-medicion.md).

Copy .env.example to .env.local for local configuration. VITE_ values are public: never put credentials in them. Production settings belong in the existing Vercel project. Access currently depends on the project owner.

Analytics is off until an actual Umami site ID is configured and each visitor explicitly accepts. The confirmed privacy responsible party is Kelmetrik, with contact@kelmetrik.com and the address in both privacy pages. VITE_PRIVACY_RESPONSIBLE is an optional override. Commercial contact remains eduardo@kelmetrik.com.

## Documentation

- [Editorial specification and all EN/ES texts](docs/editorial-v1.md)
- [Desktop/mobile wireframes](docs/wireframes.svg) — schematic, not screenshots
- [Event catalog and consent behavior](docs/measurement.md)
- [Validation, release and rollback](docs/release.md)

Regenerate editorial content with npm run docs:editorial. Sharing assets: npm run build:social.

## Verification

22 automated tests pass; lint and build pass. Tests cover mocked form requests, preferences, consent races and provider failure, analytics deduplication/sanitization, static content and hydration. DOM tests do not establish browser layout or actual screen-reader behavior.

Browser inspection is still blocked by an administrator policy. Chrome/Safari visual checks at 360, 390, 768 and 1440 px and real measurement with an owner-controlled account remain pending. A previously authorized Formspree test was accepted by the service; inbox reception remains unconfirmed. Production has not been changed.
