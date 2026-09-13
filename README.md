# Sanjida Tasneem — Portfolio

A single-page React portfolio built with Vite. Sections: About, Work
(FlyRank AI internship), Research (skin lesion + waste classification
papers), Projects, Skills, and Contact.

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Before you deploy: set the base path

Open `vite.config.js` and check the `base` value:

- If your repo is a **project site**, e.g. `github.com/sanji24096/portfolio`,
  set `base: '/portfolio/'` (replace `portfolio` with your actual repo name).
- If your repo **is** `sanji24096.github.io` (a user site), set `base: '/'`.

This is already set to `/portfolio/` — change it if you name the repo
something else.

## Deploy — Option A: GitHub Actions (recommended)

This repo already includes `.github/workflows/deploy.yml`, which builds
and deploys automatically on every push to `main`.

1. Push this project to a new GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or re-run the workflow from the **Actions** tab).
5. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Deploy — Option B: gh-pages branch (manual)

```bash
npm install
npm run build
npm run deploy
```

This pushes the built `dist/` folder to a `gh-pages` branch using the
`gh-pages` package (already in `devDependencies`). Then in **Settings →
Pages**, set the source to the `gh-pages` branch.

## Filling in your details

Two spots in `src/App.jsx` are left as placeholders on purpose — your
email and LinkedIn URL in the Contact section. Search for
`[add your email here]` and `[add LinkedIn]` and swap in your real links.

## Project structure

```
├── index.html
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx      # all content lives here
│   └── App.css       # design system + layout
└── .github/workflows/deploy.yml
```
