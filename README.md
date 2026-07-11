# Vladyslav Solonskyi — Portfolio

Minimal monochrome portfolio inspired by the visual language of Nothing products. Built with semantic HTML, CSS, and vanilla JavaScript — no build step or tracking.

## Features

- Dark and light themes with saved preference
- English, Polish, and Ukrainian translations
- Responsive desktop and mobile layouts
- Projects generated from a single data array in `app.js`
- Accessible navigation and reduced-motion support
- Deployable to GitHub Pages, a VPS with Nginx, or any static host
- Restrictive Content Security Policy and no third-party runtime requests

## Local development

Run any static server in this directory, for example:

```bash
python -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173`.

## Add another project

Add one object to the `projects` array in `app.js`. Include translated `title` and `description` values for `en`, `pl`, and `uk`.

## Custom domain

The repository contains `CNAME` for `n0thing.works`, an initial HTTP configuration at `deploy/nginx.bootstrap.conf.example`, and a hardened HTTPS configuration at `deploy/nginx.conf.example`.
