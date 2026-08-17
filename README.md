# PharmaFlow — Frontend

React + Vite frontend for PharmaFlow, built to sit in front of a Django/DRF backend.

## Pages included
- **Landing** (`/`) — marketing page: hero, 5-module feature grid, how-it-works, benefits
- **Login** (`/login`) and **Signup** (`/signup`) — auth forms, posting to `/api/auth/login/` and `/api/auth/signup/`
- **Dashboard** (`/app`) — sidebar + topbar shell, stat cards, stock chart (Recharts), activity feed, quick actions
- **Sidebar sub-pages** (`/app/inventory`, `/medicines`, `/prescriptions`, `/ai-assistant`, `/alerts`, `/reports`, `/history`, `/settings`) — placeholder panels wired into routing/navigation, ready for you to build out one by one

## Run it

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. Vite is already configured to proxy any `/api/*` request to `http://127.0.0.1:8000` (see `vite.config.js`) — point that at wherever `manage.py runserver` is listening.

## Connecting to Django
1. Install `django-cors-headers` and `djangorestframework` (+ `djangorestframework-simplejwt` if you want token auth) in your Django project.
2. Add your DRF auth endpoints — `Login.jsx` and `Signup.jsx` already `fetch('/api/auth/login/')` / `fetch('/api/auth/signup/')` and expect a JSON body back with a `token` field, stored in `localStorage` as `pf_token`.
3. For the dashboard, replace the hardcoded arrays in `src/pages/Dashboard.jsx` (`STATS`, `CHART_DATA`, `ACTIVITIES`) with `fetch`/`axios` calls to your Django views, attaching `Authorization: Bearer <pf_token>`.
4. Build for production with `npm run build` — output lands in `dist/`, which you can serve via Django's static files or Whitenoise, or deploy separately (Vercel/Netlify) and point `vite.config.js`'s proxy target at your deployed API URL.

## Design system
Tokens live in `src/index.css` (`:root`) — colors, radii, shadows, fonts. Palette is pulled directly from the capsule mark: deep maroon (`--maroon-800/950`), blush pink (`--pink-500/300`), cream/gold band (`--cream-200/300`). Display type is Fraunces, body is Inter, data/labels use JetBrains Mono. The recurring visual motif is the capsule/blister-pack — used in the divider, the feature grid, and the dashboard stat pills — so it stays consistent as you add more screens.

## Structure
```
src/
  assets/logo.png
  components/DashboardLayout.jsx (+ .css)
  pages/
    Landing.jsx (+ .css)
    Login.jsx / Signup.jsx (+ shared Auth.css)
    Dashboard.jsx (+ .css)
    PlaceholderPage.jsx
  App.jsx        — routes
  main.jsx       — entry, BrowserRouter
  index.css      — design tokens + shared component classes (.btn, .field, .card…)
```
