# Sponsor Banner Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a reusable sponsor banner for all documentation pages and the home page, starting with `https://subapi.stjhub.com/`.

**Architecture:** Build one reusable Vue component that owns sponsor copy, link behavior, and locale-aware text. Mount it through the theme `Layout.vue` so doc pages can render it in the aside area while the home page can render the same component in a full-width placement. Keep the styling lightweight and compatible with the existing VitePress theme.

**Tech Stack:** VitePress, Vue 3, TypeScript, scoped theme CSS

---

### Task 1: Add the reusable sponsor component

**Files:**
- Create: `docs/.vitepress/theme/components/SponsorBanner.vue`

**Step 1: Implement the banner copy and link**

Use a small Vue component with a `variant` prop for `aside` and `home` rendering.

**Step 2: Verify locale-aware text**

Confirm Chinese pages show Chinese copy and English pages show English copy.

### Task 2: Mount the banner in the theme layout

**Files:**
- Create: `docs/.vitepress/theme/Layout.vue`
- Modify: `docs/.vitepress/theme/index.ts`

**Step 1: Add a custom layout wrapper**

Render the sponsor banner in `aside-bottom` for documentation pages and in `layout-bottom` for the home page.

**Step 2: Register the custom layout**

Export the theme layout from `docs/.vitepress/theme/index.ts`.

### Task 3: Style the sponsor placement

**Files:**
- Modify: `docs/.vitepress/theme/style.css`
- Modify: `docs/.vitepress/theme/home.css`

**Step 1: Add compact banner styling**

Keep the banner readable, restrained, and visually compatible with the current docs theme.

**Step 2: Add home-page width constraints**

Prevent the home-page sponsor block from stretching too wide.

### Task 4: Verify the site

**Files:**
- No new files

**Step 1: Run the build**

Run: `npm run build`

**Step 2: Run type checking**

Run: `npm run typecheck`

**Step 3: Inspect the result**

Open the site locally and confirm the banner appears on doc pages and the home page without breaking layout.
