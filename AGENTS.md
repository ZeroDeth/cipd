# AGENTS.md

## Agent Guidelines for CIPD Study Hub

### Content Creation Agents

When generating CIPD study content (flashcards, study sections, quiz questions, scenarios):

1. **Accuracy is critical** — this content is used for real CIPD Level 5 assignment preparation. Cite real frameworks (PESTLE, SWOT, Ulrich, CIPD Profession Map), real legislation (Employment Rights Act 1996, Equality Act 2010, Trade Union and Labour Relations Act 1992), and real academic references.

2. **British English only** — organisation (not organization), behaviour (not behavior), labour (not labor), recognise (not recognize), analyse (not analyze).

3. **Module codes matter** — each module has specific learning outcomes:
   - 5CO01: Organisational Performance & Culture
   - 5CO02: Evidence-Based Practice
   - 5CO03: Professional Behaviours & Valuing People
   - 5HR01: Employment Relationship Management
   - 5HR02: Talent Management & Workforce Planning
   - 5HR03: Reward for Performance & Contribution

4. **Data file format** — follow existing patterns in `src/data/`. All exports must be added to `src/data/index.js`.

### Code Review Agents

1. **Navigation pattern** — this app uses `useState` routing, NOT React Router. Flag any use of `window.location.hash`, `useNavigate()`, or URL-based navigation as a bug.

2. **Set mutual exclusivity** — any feature with categorisation sets (mastered/reviewAgain, correct/incorrect) must ensure items can only exist in one set at a time.

3. **localStorage serialisation** — `Set` and `Map` objects must be converted to arrays before `JSON.stringify`. Check `loadStats`/`saveStats` patterns.

4. **dist/ is committed** — after code changes, verify `npm run build` is run and dist/ is updated before committing.

### Build & Deploy Agents

1. **Vite 6** (not 8) — the project downgraded from Vite 8 to 6 for Nixpacks compatibility. Do not upgrade.

2. **Nixpacks** — deployment uses `nixpacks.toml` with `nodejs_22`. The start command serves on port 80 via `vite preview`.

3. **No native dependencies** — avoid packages requiring native compilation (node-gyp, sharp, etc.) as Nixpacks may not have build tools.

### Testing Approach

- No test framework is configured — verify changes via preview server and manual interaction
- Use `npm run build` as the primary CI check (catches import errors, syntax issues)
- For interactive features (flashcards, quizzes, scenarios), test the full user flow including edge cases (going back, re-rating, refreshing)

### Parallelisation Opportunities

Content creation tasks are highly parallelisable:
- Study sections, flashcards, and quiz questions for different modules can be generated simultaneously
- CSS and component work can run in parallel with data file creation
- Code review agents can run independently per concern (bugs, security, style, history)
