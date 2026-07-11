# Vladyslav Solonskyi — Portfolio

Minimal monochrome portfolio inspired by the visual language of Nothing products. Built with semantic HTML, CSS, and vanilla JavaScript — no build step or tracking.

## Features

- Dark and light themes with saved preference
- English, Polish, and Ukrainian translations
- Responsive desktop and mobile layouts
- Projects generated from a single data array in `app.js`
- Accessible navigation and reduced-motion support
- Deployable to GitHub Pages, Cloudflare Pages, Netlify, or any static host

## Local development

Run any static server in this directory, for example:

```bash
npx serve .
```

## Add another project

Add one object to the `projects` array in `app.js`. Include translated `title` and `description` values for `en`, `pl`, and `uk`.

## Custom domain

The repository is ready for static hosting. DNS instructions for Name.com depend on the chosen hosting provider and are documented in the project handoff.
