# Deploy this portfolio

## Netlify
- Connect the repo; Netlify will use the root `netlify.toml` and publish the **public** folder.
- Site root = `public/`, so `index.html`, `style.css`, `script.js`, and `/images/*` all load correctly.

## GitHub Pages
- In repo **Settings → Pages**, set **Source** to "Deploy from a branch".
- Set **Branch** to `main` (or your default) and **Folder** to **/ (root)**.
- Then set the folder to **public** by either:
  - Using a branch that has only the contents of `public/` (e.g. a `gh-pages` branch where you copy `public/` contents to the root), or
  - Configuring GitHub Pages to use the **public** directory (e.g. with a GitHub Action that copies `public/` to the deployment root).

If you deploy the repo root instead of `public/`, copy `index.html`, `style.css`, and `script.js` to the root and create an **images** folder at the root containing all files from `public/images/`. Image paths are already `/images/filename.ext`.
