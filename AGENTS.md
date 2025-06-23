# Repository Overview

This repository hosts a Docusaurus site that documents active learning strategies for higher education instructors.

## Top-level Layout

- **docs/** – Markdown documentation grouped by topics such as `why`, `stem`, `humanities`, and `digital-simulations`. These are rendered as the main site content.
- **blog/** – Example blog posts written in Markdown/MDX.
- **src/** – Custom React components, pages, and theme overrides used by Docusaurus.
- **static/** – Images and other static assets served directly by the site.
- **docusaurus.config.ts** – Main configuration file for the site.
- **sidebars.ts** – Configuration for documentation sidebars.
- **package.json** – Defines dependencies and scripts.

## Development Commands

- `pnpm install` – Install dependencies.
- `pnpm start` – Run a local development server at `http://localhost:3000`.
- `pnpm build` – Build static site files into the `build` directory.

The site does not include automated tests. Documentation files under `docs/tests` contain example MDX content used to verify the Docusaurus setup.
