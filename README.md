# Kelmetrik — Connected Operations V1

Bilingual industrial software and integration website. React + Vite, prerendered English and Spanish pages, an original EOL simulation and a Formspree contact form. Analytics is disabled by default.

## Local development

Requires Node 22.13+ (Node 22 LTS recommended).

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build
npm test
npm run preview
```

Build before running tests: the HTML checks read the generated pages. Component tests use a simulated DOM and mocked network responses; they do not verify browser layout or actual email delivery.

## Structure

- `src/content.js`, `src/storyboards.js`: complete EN/ES copy and domain examples.
- `src/lib/eol.js`: pure EOL state machine and inclusive signal validation.
- `src/components/Demo.jsx`: six-step interface and evidence panel, loaded near the viewport.
- `src/lib/analytics.js`: versioned event catalog, controlled properties and deduplication.
- `src/lib/plausible.js`: interchangeable Plausible adapter, without automatic page tracking.
- `src/components/ContactForm.jsx`: existing Formspree endpoint, duplicate protection and persistent states.
- `scripts/build.mjs`: prerenders `/`, `/es/`, `/privacy/`, `/es/privacidad/`, metadata, sitemap and robots.

## Configuration

Copy `.env.example` to `.env.local` for local configuration. Every `VITE_` value is public: never put credentials in it. Vercel uses the existing GitHub project integration and `vercel.json`.

Production requires `VITE_PRIVACY_RESPONSIBLE`, the confirmed legal name of the responsible person or entity. Preview builds show a draft notice until this is supplied. The confirmed privacy email is contact@kelmetrik.com; commercial contact remains eduardo@kelmetrik.com.

Plausible and Search Console accounts have not yet been created. Keep analytics disabled until configuration and verification are complete. Tracking is restricted to the production hostname and an explicit measurement preference; there is no session recording, persistent visitor identifier or transmission of form fields to analytics.

## Documentation

- [Editorial specification: full EN/ES content, glossary and claims](docs/editorial-v1.md)
- [Desktop and mobile wireframes](docs/wireframes.svg) — schematic, not browser screenshots
- [Analytics catalog and activation guide](docs/measurement.md)
- [Validation, release gates and rollback](docs/release.md)

Regenerate the editorial reference with `npm run docs:editorial`. Generate original EN/ES sharing assets with `npm run build:social`.

## Verification status

20 automated tests pass, production assets build and lint is clean. Real-browser inspection was blocked by the environment's administrator policy. Chrome/Safari visual checks, assistive-technology checks and actual Formspree inbox reception remain release gates. See the release checklist before merging to production.

All EOL data is synthetic. Acceptance means acceptance of the illustrated test only; it is not commercial product release. The failure scenario remains in Quality Hold. No performance claims, customer results or certifications are implied.
