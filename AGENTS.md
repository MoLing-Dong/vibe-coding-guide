# Repository Guidelines

## Project Structure & Module Organization

This repository is a VitePress documentation site for a bilingual Vibe Coding guide. Source content lives under `docs/`: Chinese pages are in `docs/zh/`, English pages are in `docs/en/`, and the root landing page is `docs/index.md`. VitePress configuration and theme code live in `docs/.vitepress/`, with Vue/CSS theme assets in `docs/.vitepress/theme/`. Do not edit generated output in `docs/.vitepress/.temp/`, `docs/.vitepress/cache/`, or `docs/.vitepress/dist/`.

## Build, Test, and Development Commands

- `npm install`: install project dependencies.
- `npm run dev`: start the local VitePress dev server on `0.0.0.0`; default URL is `http://localhost:5173`.
- `npm run build`: build the static documentation site.
- `npm run preview`: preview the built site locally.
- `npm run typecheck`: run TypeScript checks with `tsc --noEmit`.

Run `npm run build` and `npm run typecheck` before handing off substantive changes.

## Coding Style & Naming Conventions

Use Markdown for documentation pages and TypeScript/Vue/CSS for VitePress theme files. Keep Markdown headings hierarchical and descriptive. Use fenced code blocks with language tags, for example ` ```bash `. File names should be lowercase kebab-case, such as `quick-start.md` or `codex-cli-install.md`. Match the existing locale layout: add Chinese content under `docs/zh/...` and English content under `docs/en/...`.

For article pages, use Arabic-numbered heading hierarchy as the standard format. The page title remains a single `#` heading. Section headings should be numbered as `## 1. ...`, subsections as `### 1.1 ...`, and deeper sections as `#### 1.1.1 ...`. Keep numbering sequential and update it whenever sections are added, removed, or reordered.

## Testing Guidelines

There is no dedicated test suite in this repository. Treat VitePress build and TypeScript checking as the main verification path. For content-only changes, run `npm run build` to catch broken links, invalid frontmatter, and rendering errors. For config, theme, or Vue changes, also run `npm run typecheck`.

## Commit & Pull Request Guidelines

This checkout does not include Git history, so no existing commit convention can be inferred. Use concise imperative commit messages with a scope when helpful, for example `docs: add Codex CLI install guide` or `theme: adjust homepage styles`. Pull requests should include a short summary, affected pages or directories, verification commands run, and screenshots for visible UI/theme changes. Link related issues when available.

## Security & Configuration Tips

Never commit API keys, tokens, local credentials, or private endpoint URLs. Keep examples clearly fake, such as `sk-xxxxxxxx`. Avoid editing generated VitePress artifacts; update source Markdown, config, or theme files instead.
