# Synque Group — Showcase Website

A modern, SEO-optimised landing page for **Synque Group**, a collective of specialised entities working in harmony to solve complex problems through technology, creativity, and capital.

Built with React 19, TypeScript, Vite, and Tailwind CSS 4.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 4 |
| Animation | Motion (Framer Motion) |
| Icons | Lucide React |
| Backend | Express 4 |
| Database | better-sqlite3 |
| AI | Google Gemini API |

---

## Project Structure

```
synque-group/
├── index.html              # Entry HTML with all SEO meta tags, OG, JSON-LD
├── src/
│   ├── main.tsx            # React entry point
│   ├── App.tsx             # Root layout, scroll progress bar, page sections
│   ├── index.css           # Global styles
│   ├── types.ts            # TypeScript interfaces + company data
│   └── components/
│       ├── Navbar.tsx      # Fixed top navigation with mobile menu
│       ├── Hero.tsx        # Hero section with H1, CTA, animated image
│       ├── ConnectingLines.tsx  # Decorative SVG connector lines
│       ├── CompanyGrid.tsx # Portfolio grid with H2, company cards
│       ├── CompanyCard.tsx # Individual animated company card (article)
│       └── Footer.tsx      # Footer with internal nav + social links
├── vite.config.ts
├── tsconfig.json
└── .env.example
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Configure environment variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `GEMINI_API_KEY` | Your Google Gemini API key |
| `APP_URL` | The URL where this app is hosted |

### Run locally

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | TypeScript type-check |
| `npm run clean` | Remove the `dist/` directory |

---

## SEO

The site is fully optimised for search engines and social sharing:

- **Meta tags** — title, description, keywords, author, robots (`index, follow`)
- **Canonical URL** — `https://synquegroup.com/`
- **Open Graph** — type, url, site_name, locale, title, description, image (with dimensions and alt)
- **Twitter Card** — `summary_large_image` with site/creator handles
- **JSON-LD Schema** — `Organization` + `WebSite` (with `SearchAction`) via `schema.org`
- **Semantic HTML** — single `<h1>`, multiple `<h2>` headings, `<article>` for company cards
- **Image alt text** — descriptive alt attributes on all images
- **Internal links** — all footer navigation links point to real section anchors
- **Responsive** — CSS media queries, mobile-first layout

---

## Companies in the Ecosystem

| Entity | Category | Focus |
|---|---|---|
| Synque Tech | Technology | Enterprise AI, cloud infrastructure, software engineering |
| Synque Media | Media | Digital storytelling, brand identity, content production |
| Synque Ventures | Ventures | Early-stage startup investment |
| Synque Labs | Research | Quantum computing, biotech, renewable energy |
| Synque Foundation | Impact | Global education, digital literacy, community development |

---

## License

© 2026 Synque Group Holdings. All rights reserved.
