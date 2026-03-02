<!-- .github/copilot-instructions.md - Guidance for AI coding agents working on this repo -->
# Copilot / AI agent instructions — tci-express-ads-landing-page

Purpose: short, actionable rules to help an AI be productive in this Astro-based static landing page.

- **Big picture**: This is a minimal Astro static site (no server runtime). Pages live in `src/pages/` and are compiled to a static `dist/` directory by `npm run build`. The site uses plain `.astro` pages and a global stylesheet at `src/styles/global.css`.

- **Key locations**:
  - Pages / routes: [src/pages](src/pages)
  - Layouts (site wrappers): [src/layouts](src/layouts) (empty by default)
  - Section components: [src/sections](src/sections) (empty by default)
  - Global styles: [src/styles/global.css](src/styles/global.css)
  - Static assets: `public/`
  - Config: [astro.config.mjs](astro.config.mjs)
  - Project scripts: [package.json](package.json)

- **Developer workflows / commands** (run from project root):
  - Install: `npm install`
  - Local dev server: `npm run dev` (starts Astro dev server)
  - Build for production: `npm run build` (outputs `dist/`)
  - Preview build: `npm run preview`
  - Astro CLI: `npm run astro -- --help`

- **Project-specific patterns & constraints**:
  - Keep this project static: do not introduce a Node server or serverless handlers unless `astro.config.mjs` is updated with an adapter. Currently there is no adapter configured.
  - Routes are file-based: adding `src/pages/offer.astro` creates `/offer`.
  - Pages use minimal frontmatter. Example: [src/pages/index.astro](src/pages/index.astro) shows a simple page with an HTML document; follow that style for top-level pages.
  - Place reusable page fragments in `src/sections` or `src/layouts`. If you add components for frameworks (React/Vue/etc), keep them in `src/components/` and import into `.astro` files.
  - Global styles belong in [src/styles/global.css](src/styles/global.css). Prefer class-scoped utilities or component-level styles for isolated changes.

- **TypeScript / Config**:
  - `tsconfig.json` extends `astro/tsconfigs/strict`. Keep changes minimal and avoid changing the compilation target unless necessary.

- **Integrations & external dependencies**:
  - The repo currently has only the `astro` dependency. If adding third-party libs, update `package.json` and ensure `npm install` instructions remain accurate.
  - No analytics or API integrations are present; document and centralize any external keys in a new README section if you add them.

- **Pull request / change guidance for AI patches**:
  - Keep edits focused and minimal: modify only the files necessary for the requested change.
  - When adding pages, include a brief example route and a minimal CSS change in `src/styles/global.css` if visual verification is needed.
  - If a change adds runtime behavior (server, adapters, SSR), call this out explicitly in the PR description and add or update `astro.config.mjs` and `package.json` scripts.

- **Examples (copyable)**:
  - Add a new route: create `src/pages/new-offer.astro` with frontmatter and HTML.
  - Start dev server: `npm run dev`
  - Build site: `npm run build` → check `dist/` for static output.

If anything here is unclear or you want more examples (component patterns, CSS conventions, or deployment notes), say which area to expand and I'll update this file.
