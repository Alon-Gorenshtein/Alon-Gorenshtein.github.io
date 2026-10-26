# Website source

Editable source for https://alon-gorenshtein.github.io/. This directory is excluded from the public website by GitHub Pages/Jekyll because its name begins with an underscore.

Use Node.js 24 (minimum 22.13) and run from this directory:

```sh
npm ci
npm test
```

Tests build and render the homepage plus four research pages into `github-pages/`, then check rendered identity, canonical URLs, metadata, sitemap coverage and ownership verification. To publish, copy the contents of `github-pages/` to the repository root, preserving this source directory and existing verification files. Review the root diff and commit/push through the normal repository workflow.

Edit `app/lib/identity.ts` for biography and professional profile URLs; edit `app/lib/research.ts` for sourced research summaries. Canonical URLs use the existing GitHub Pages domain. Keep HTML routes, the sitemap, and the route list in `scripts/build-github-pages.mjs` in sync when adding pages. Never overwrite or remove ownership verification files during a rebuild.

No analytics, tracking IDs, account credentials, or access tokens are needed for the public site. Search Console verification and indexing are separate account actions; a successful deployment does not confirm indexing.
