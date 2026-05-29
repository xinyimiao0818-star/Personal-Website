# Personal Website

A bilingual personal website prototype built with Astro and Markdown.

## Local Development

```bash
npm install
npm run dev
```

## Public Deployment

This site is configured for GitHub Pages.

Recommended repository:

```text
xinyimiao0818-star/Personal-Website
```

After pushing the `main` branch to GitHub, enable GitHub Pages with **Source: GitHub Actions**. The deployment workflow in `.github/workflows/deploy.yml` will build the site and publish it at:

```text
https://xinyimiao0818-star.github.io/Personal-Website/
```

Raw internship and campus material folders are intentionally ignored by Git and should stay local unless a public-safe version is created.

## Content

- `src/content/profile`: bilingual profile and identity copy
- `src/content/timeline`: archive entries across study, work, projects, and life
- `src/content/notes`: thoughts and note detail pages
- `src/content/life`: life slices for the photo-led section
