# Simple Engineering Portfolio

A deliberately small, static engineering portfolio built with Astro.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Where to edit things

### Site-wide identity and contact details
Edit:

`src/config/site.ts`

This controls your name, role, tagline, navigation, social/contact links,
homepage introduction, footer text, SEO defaults and other repeated content.

### Projects
Add a new Markdown file to:

`src/pages/projects/`

Copy `_example.md.txt`, rename it to something such as:

`my-project.md`

Then remove `.txt`.

### Writing
Add Markdown files to:

`src/pages/writing/`

### Styling
Edit:

`src/styles/global.css`

The variables at the top control the main visual system.

### Images
Put images in:

`public/images/`

Then reference them in Markdown as:

`/images/example.jpg`

## Netlify

Build command:

`npm run build`

Publish directory:

`dist`
