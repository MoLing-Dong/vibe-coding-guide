# Visual Inputs

Screenshots, design mockups, whiteboard photos, and error screenshots can make vibe coding much faster. The trick is to explain what the assistant should learn from the image.

## Useful Visual Material

- Page screenshots: layout, spacing, state, and interaction issues.
- Design mockups: what must be matched and what can adapt to existing components.
- Error screenshots: include text logs too, so recognition mistakes do not matter.
- Whiteboard sketches: business flow and module relationships.
- Before/after comparisons: mark current and expected results.

## How to Provide It

```txt
This image shows the current Orders detail page.

Please focus on:
1. Whether the status bar and actions are too crowded.
2. Whether refund information belongs in the right summary panel.
3. Which elements should wrap on mobile width.

Constraints:
- Reuse the existing Button, Tag, and DescriptionList components.
- Do not add global styles.
Give layout recommendations first; do not edit code yet.
```

## From Image to Code

1. Ask the assistant to describe the key elements it sees.
2. Correct any recognition mistakes.
3. Add existing component names and file paths.
4. Ask for an implementation plan.
5. Approve the plan before editing.
6. Verify the final result with screenshots or a browser.

## Notes

- Images do not replace acceptance criteria.
- Hard requirements for size, color, or copy should be written as text.
- Blurry or heavily cropped screenshots can mislead the assistant.
- Redact private information first.
- For visual work, verify both desktop and mobile layouts.
