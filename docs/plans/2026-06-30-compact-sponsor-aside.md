# Compact Sponsor Aside Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make the sponsor placement in documentation sidebars shorter and less visually dominant.

**Architecture:** Keep `SponsorSection` as the reusable component. Branch the template for `mode="aside"` so documentation pages render a compact sponsored link, while the existing grouped sponsor section remains available for richer placements.

**Tech Stack:** VitePress, Vue 3 single-file components, CSS.

---

### Task 1: Render a compact aside sponsor

**Files:**
- Modify: `docs/.vitepress/theme/components/SponsorSection.vue`

**Steps:**

1. Add concise localized labels for the compact aside.
2. Render a small aside template when `props.mode === 'aside'`.
3. Keep the existing grouped section template for all other modes.

### Task 2: Add compact aside styles

**Files:**
- Modify: `docs/.vitepress/theme/style.css`

**Steps:**

1. Add `.sponsor-section--aside` styles for spacing, border, typography, hover state, and dark mode.
2. Avoid changing the existing sponsor landing styles.

### Task 3: Verify

Run:

```bash
npm run build
```

Expected: VitePress build completes successfully.
