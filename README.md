# UOC FOT Boxing Website

A React/Vite website for the University of Colombo Faculty of Technology Boxing initiative. The site introduces the team, explains the training structure, presents the championship pathway, shares the team story, and helps students join.

## Features

- Responsive red-and-black boxing-inspired visual design
- React Router navigation for Home, Training, Pathway, About, and Join pages
- Dedicated CSS file for each page plus shared global styles
- Training schedule and faculty facilities sections
- Visual championship ladder and competitive boxing gallery
- Coach biography and team participation content
- Join form with front-end confirmation state
- Lucide React icons for UI arrows, statistics, and training cards
- Facebook and Instagram social links

## Tech stack

- React 18
- Vite
- React Router DOM
- Lucide React
- CSS

## Project structure

```text
src/
├── assets/                  # Images used throughout the website
├── components/
│   ├── FacebookIcon.jsx     # Facebook brand SVG icon
│   ├── Header.jsx           # Shared top navigation and branding
│   └── LinkArrow.jsx        # Reusable Lucide ArrowUpRight icon
├── pages/
│   ├── HomePage.jsx
│   ├── TrainingPage.jsx
│   ├── PathwayPage.jsx
│   ├── AboutPage.jsx
│   └── JoinPage.jsx
├── styles.css               # Shared design system and layout rules
└── styles/
    ├── home.css
    ├── training.css
    ├── pathway.css
    ├── about.css
    └── join.css
```

## Pages and routes

| Route | Page | Purpose |
| --- | --- | --- |
| `/` | Home | Hero, team credibility, coach teaser, facilities, and join CTA |
| `/training` | Training | Training hero, schedule, facilities, and fitness benefits |
| `/pathway` | Pathway | Championship ladder and competitive boxing gallery |
| `/about` | About | Origin story, coach biography, and team participation |
| `/join` | Join | Reasons to join, training snapshot, sample signup form, and contact links |

The app uses `HashRouter`, so routes work correctly when deployed as a static site on GitHub Pages.

## Getting started

### Requirements

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will display the local development URL in the terminal, usually `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

The optimized site is generated in `dist/`. This folder is build output and should not be edited manually.

### Preview the production build

```bash
npm run preview
```

## Deployment

The project includes GitHub Pages deployment scripts:

```bash
npm run deploy
```

The `predeploy` script builds the project before publishing `dist/` through `gh-pages`.

## Updating content

- Page copy and page-specific image selections are inside the matching file in `src/pages/`.
- Shared navigation is in `src/components/Header.jsx`.
- Shared UI arrows use `src/components/LinkArrow.jsx`.
- Shared visual tokens, buttons, cards, and responsive rules are in `src/styles.css`.
- Page-specific styles belong in the matching file under `src/styles/`.
- Replace the placeholder Instagram URL when the official account URL is available.
- The Join form currently demonstrates a client-side success state only. Connect it to a backend, email service, or Google Form before using it for real submissions.

## Useful commands

```bash
npm run dev       # Start local development
npm run build     # Build for production
npm run preview   # Preview production output
npm run deploy    # Build and deploy to GitHub Pages
```
