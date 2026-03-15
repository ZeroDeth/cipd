# CLAUDE.md

## Project Overview

CIPD Level 5 Study Hub — a React SPA for studying the CIPD Level 5 Associate Diploma in People Management (UK HR qualification). Deployed at cipd.xerolabs.dev via Dokploy/Nixpacks.

## Tech Stack

- **React 19** + **Vite 6** (ES modules, JSX)
- No React Router — navigation uses `useState('home')` in `App.jsx` with a `renderPage()` switch
- Single CSS file (`src/index.css`) with CSS custom properties, no CSS modules or preprocessors
- Deployed via Nixpacks (Node 22) on Dokploy, served with `vite preview` on port 80

## Architecture

```
src/
  App.jsx          — Root component, owns stats state + localStorage persistence, renders pages via switch
  main.jsx         — React 19 createRoot entry point
  index.css        — All styles (variables, layout, components, animations, responsive)
  components/      — Shared UI (Header, Nav bottom-tab bar, ModuleSelector)
  pages/           — Route-level components (Home, Study, Quiz, Flashcards, Scenarios, Crisis, Board, WarRoom, Achievements)
  data/            — Static content arrays/objects, re-exported via data/index.js barrel
```

## Key Patterns

### Navigation
- `setView(string)` controls which page renders — do NOT use `window.location.hash`, `react-router-dom`, or URL-based routing
- The bottom tab Nav component calls `setView` directly
- Pages that need to navigate elsewhere must receive `setView` as a prop

### State Management
- All stats live in `App.jsx` as a single `stats` object passed down via props
- Stats contain `Set` objects (`modulesCompleted`, `studyViewed`) — these require custom serialisation for localStorage (convert to/from arrays)
- `setStats` uses functional updates: `setStats(prev => ({ ...prev, field: newValue }))`
- Never mutate Sets directly — always create new Set instances

### Data Files
- `src/data/*.js` — static content (study sections, flashcards, quiz questions, scenarios, crises, war room cases, achievements, board tiles)
- All exports go through `src/data/index.js` barrel file — add new data files there
- Module codes: 5CO01, 5CO02, 5CO03, 5HR01, 5HR02, 5HR03
- Content must be academically accurate for CIPD Level 5 assignments (UK employment law, HR frameworks, evidence-based practice)

### Styling
- Mobile-first design targeting iPhone Safari
- Bottom tab bar with slide-up drawer for secondary navigation
- Frosted glass card effects (`backdrop-filter: blur`)
- CSS custom properties in `:root` for colours — use these, don't hardcode hex values
- `env(safe-area-inset-bottom)` for iPhone safe areas
- Gradient backgrounds, 3D card flip animations (perspective + rotateY)

## Build & Deploy

```bash
npm run dev        # Vite dev server (port 5173)
npm run build      # Production build to dist/
npm run preview    # Preview production build (port 4173)
```

- Nixpacks config in `nixpacks.toml` — uses Node 22
- `.node-version` file set to 20 (fallback for other tools)
- `engines.node` in package.json: `>=18.0.0`
- Vite binds to `0.0.0.0` (`host: true`) for Docker container access

## Common Pitfalls

- Do NOT use `window.location.hash` for navigation — it won't trigger React state updates
- Do NOT return shared mutable objects (containing Sets/Maps) from initialiser functions — always spread or create fresh instances
- When adding items to categorisation sets (mastered/reviewAgain), always remove from the opposite set to maintain mutual exclusivity
- The `dist/` directory is committed — rebuild after source changes before committing
- `react-router-dom` is in dependencies but unused — navigation is pure useState

## Content Guidelines

- All CIPD content must reference real frameworks, models, and UK legislation (e.g., Equality Act 2010, ACAS Code of Practice)
- Flashcards: `{ front: "Term", back: "Definition with assignment context" }` — 18 per module
- Study sections: include `title`, `body` (HTML with `<span class="kt">` for key terms), `models` array, `criticalQ`, `scenario`
- Use British English spelling (organisation, behaviour, labour, recognise)
