# Skyblock Wiki

Official documentation site for the Skyblock Minecraft plugin, built with [Astro Starlight](https://starlight.astro.build/).

## Development

Install dependencies:

```bash
npm install
```

Start local dev server:

```bash
npm run dev
```

Build production bundle:

```bash
npm run build
```

Preview build output:

```bash
npm run preview
```

## Deployment

This repository is configured for automatic deployment on [Vercel](https://vercel.com).
Import this repository in your Vercel dashboard using standard Astro build settings:

- **Framework Preset**: Astro
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
