# Compact Sponsor Aside Design

## Goal

Make the sponsor placement inside documentation pages quieter and more compact while keeping the dedicated sponsors page complete.

## Chosen Approach

Only the documentation aside changes. `SponsorSection` keeps its full layout for non-aside contexts, but renders a separate compact template for `mode="aside"`.

## Design

The aside placement becomes a small sponsored link rather than a full card stack. It shows a short sponsor label, the sponsor name, and an external-link arrow. Descriptions, tier headings, grouped cards, and heavy shadows are removed from the reading surface.

The dedicated `/sponsors` page remains unchanged so sponsors still have a richer page for discovery.

## Verification

Run `npm run build` after implementation to confirm the VitePress site renders successfully.
