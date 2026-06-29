# Project-Level AGENTS.md

`AGENTS.md` is a project guide for AI coding assistants. It captures project structure, commands, style rules, and safety boundaries so each session needs less repeated explanation.

## 1. What Belongs Here

`AGENTS.md` should contain stable, reusable information that constrains code changes.

Good content:

- Project structure.
- Build, test, and typecheck commands.
- Code style and naming conventions.
- Directory responsibilities.
- Generated files that should not be edited.
- Commit or PR expectations.
- Security notes.

Avoid:

- Temporary feature requests.
- One-off task plans.
- Outdated roadmaps.
- Private tokens or internal credentials.

## 2. Recommended Structure

```md
# Repository Guidelines

## Project Structure

## Development Commands

## Coding Style

## Testing and Verification

## Git and PR Guidelines

## Security Notes

## AI Collaboration Rules
```

Headings do not need to be clever. AI benefits from stable structure.

## 3. Document Exact Commands

Commands should be specific enough to run directly.

```md
## Development Commands

- `npm install`: install dependencies.
- `npm run dev`: start the local dev server.
- `npm run build`: build the site.
- `npm run typecheck`: run TypeScript checks.

Run `npm run build` before handing off documentation changes.
Run both `npm run build` and `npm run typecheck` before handing off theme or config changes.
```

Do not write only "run tests." Tell AI which command to run.

## 4. Mark Forbidden Areas

Many projects contain generated files, caches, or deployment output.

```md
Do not edit generated output in:
- `docs/.vitepress/.temp/`
- `docs/.vitepress/cache/`
- `docs/.vitepress/dist/`
```

This kind of note prevents a surprising amount of unrelated diff.

## 5. Capture Content Rules

Documentation projects need rules for headings, filenames, and language layout.

```md
Use lowercase kebab-case filenames.
Chinese pages live under `docs/zh/`.
English pages live under `docs/en/`.
Article headings use Arabic-numbered hierarchy:
- `# Page Title`
- `## 1. Section`
- `### 1.1 Subsection`
```

If you want AI to follow a format repeatedly, put it in the project guide.

## 6. Add AI Collaboration Rules

You can explicitly define how AI should work.

```md
## AI Collaboration Rules

- Read relevant files before editing.
- Keep changes scoped to the current task.
- Do not refactor unrelated files.
- Preserve existing style and structure.
- Run documented verification commands before handoff.
- Mention commands that could not be run.
```

These rules are simple, but they make sessions more consistent.

## 7. Maintain AGENTS.md

`AGENTS.md` can go stale, so maintain it.

Update it when:

- An important directory is added.
- Build or test commands change.
- Documentation format rules change.
- Deployment flow changes.
- AI repeatedly makes the same project-specific mistake.

If a rule only matters for one task, put it in the task prompt instead of the project guide.

## 8. Minimal Template

```md
# Repository Guidelines

## Project Structure

Describe source directories, generated directories, and ownership boundaries.

## Commands

- `npm run dev`: start local development.
- `npm run build`: build production output.
- `npm run typecheck`: run TypeScript checks.

## Style

Describe naming, formatting, heading, and language rules.

## Verification

State which commands are required for different change types.

## Safety

List files or secrets that must not be edited or committed.
```

A good `AGENTS.md` acts like a quiet maintainer: every time AI enters the repo, the boundaries are already explained.
