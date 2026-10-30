# BO / STUDIO — Architecture-inspired Portfolio

Bilingual (Thai / English) portfolio and editorial blog built with **Astro 5, Tailwind CSS 4, and Markdown/MDX**.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:4321/en/` or `/th/`.

## Build and deploy to Netlify

1. Push this folder to a new GitHub repository.
2. In Netlify choose **Add new project → Import an existing project** and connect GitHub.
3. Netlify will read `netlify.toml`: build command `npm run build`, publish directory `dist`.
4. Set the custom domain in Netlify if desired.
5. Update `site` in `astro.config.mjs` to your actual Netlify/custom-domain URL.

You can also run `npm run build` and drag the generated `dist` folder into Netlify Drop for a manual deploy.

## Edit content

- **Name, navigation, translations, summaries, project cards:** `src/data.ts`
- **Page structure:** `src/pages/[...path].astro`
- **Article files:** `src/content/articles/en/` and `src/content/articles/th/`
- **Article template:** `src/pages/[lang]/writing/[slug].astro`
- **Visual design:** `src/styles/global.css`
- **Architectural illustration:** `src/components/CityArt.astro`
- **Header, footer and contact:** `src/layouts/Base.astro`
- **CV:** Replace `public/cv-placeholder.txt` with `public/cv.pdf`, then change the href in the resume page.

## Adding an article

Create a `.md` or `.mdx` file in the relevant language directory with frontmatter:

```yaml
---
title: "Article title"
description: "Short summary"
date: 2026-10-29
lang: en
category: Urban Intelligence
readingTime: 5 MIN READ
---
```

Use matching filenames in `/en/` and `/th/` to create translated articles. Each language is independently browsable.

## Before publishing

- Replace `BO / STUDIO` branding with your preferred professional name.
- Replace `hello@example.com` with your real contact address.
- Confirm all professional details, qualifications and dates.
- Replace conceptual project cards with approved, non-confidential case studies.
- Replace CV placeholder and verify public profile links.
- Review starter articles and add citations where needed.
- Replace `site` with your deployed domain.

All illustrative architecture graphics are generated with inline SVG and require no external asset license. Google Fonts are used for typography; you can self-host alternatives if desired.


## V3 / CMS
- Text-free hero image: public/images/city-hero.webp
- Pages CMS config: .pages.yml
- Setup guide: CMS-SETUP-TH.md
- Edit articles at https://pagescms.org/ (GitHub account required). Every save triggers a GitHub commit and an automatic Netlify build.
