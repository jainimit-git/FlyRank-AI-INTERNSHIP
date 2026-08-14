# Project Conventions

## Stack
- Language: JavaScript
- Frontend: React.js
- Build Tool: Vite
- Package manager: npm
- Backend: Node.js + Express.js
- Database: MongoDB

## Conventions
- Use functional React components and React Hooks
- Use 2-space indentation
- Prefer small, single-purpose functions and components
- Keep components/files under ~200 lines where possible
- Use meaningful and descriptive names for components, variables, and functions
- Keep reusable UI components separate from page-specific components
- Keep API calls and data-fetching logic separate from UI components where practical
- Use async/await for asynchronous operations
- Handle loading, error, and empty states explicitly
- Avoid unnecessary prop drilling; use Context or another state-management solution when appropriate
- Keep secrets and API keys in environment variables and never commit them to Git
- Follow a consistent folder structure throughout the project

## Git Conventions
- Commit messages follow Conventional Commits:
  - `feat:` — new feature
  - `fix:` — bug fix
  - `docs:` — documentation
  - `refactor:` — code restructuring
  - `chore:` — maintenance/configuration
  - `style:` — formatting/style changes

## AI Assistant Notes
- Explain reasoning briefly before large refactors
- Don't install new dependencies without asking first
- Ask before deleting or overwriting files
- Prefer simple, maintainable solutions over unnecessary abstractions
- Preserve the existing project architecture unless there is a clear reason to change it
- When modifying existing code, avoid changing unrelated functionality