# Project Agent Instructions

## Project Overview

This repository contains the personal website for Tian HUANG, a Tracking & Attribution consultant targeting French clients.

The site is a static Astro project focused on:

- Tracking and attribution consulting
- GA4, GTM and Consent Mode audits
- Revenue reconciliation between Ads, analytics, CRM and back-office data
- Dashboard data quality
- Measurable marketing websites for small businesses

**Stack:** Astro | Tailwind CSS | TypeScript | MDX | Sharp | Netlify

## Quick Reference

| Command           | Purpose                             |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start dev server at localhost:4321  |
| `npm run build`   | Production build to `./dist/`       |
| `npm run preview` | Preview production build locally    |
| `npm run check`   | Run astro check + ESLint + Prettier |
| `npm run fix`     | Auto-fix ESLint + Prettier issues   |

**Node.js requirement:** >= 22.12.0

## Architecture

```
src/
  assets/
  components/
    common/        # Shared utilities such as Image, Metadata, Analytics
    ui/            # Button, Headline, WidgetWrapper, ItemGrid
    widgets/       # Reusable sections: Hero, Features, FAQs, CTA, Header, Footer
    blog/          # Resource article rendering
  data/post/       # Resource articles
  layouts/         # Page, markdown and site layouts
  pages/           # File-based routing
  utils/           # Blog, image and permalink helpers
  config.yaml      # Site configuration
  navigation.ts    # Header and footer navigation
vendor/integration/
```

## Editing Principles

- Keep public-facing copy in French.
- Preserve reusable components and layouts.
- Remove demo, placeholder or template-promotion content from public routes.
- Prefer scoped page edits over broad refactors.
- Run `npm run check` before committing.
- Run `npm run build` before deploying.

## Important Pages

- `/`
- `/services`
- `/methodologie`
- `/cas`
- `/ressources`
- `/a-propos`
- `/prendre-un-rdv`

## Content Principles

- Do not overstate seniority or invent client references.
- Use concrete deliverables: audit, checklist, measurement plan, reconciliation table, dashboard spec.
- Explain tracking problems in terms of business decisions.
- Keep the booking path clear and visible.
