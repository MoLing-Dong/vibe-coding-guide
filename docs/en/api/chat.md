# Task Prompts

A good vibe coding prompt is a compact task card. It tells the assistant what to do, where to do it, what not to touch, and how completion will be judged.

## Basic Structure

```txt
Background: why this matters.
Goal: what should be completed now.
Context: related files, APIs, components, and errors.
Constraints: what must stay unchanged.
Acceptance: how we know it is done.
Process: plan first, wait for confirmation, then edit in small steps.
```

## Example

```txt
Background: users report that the Reports page has no empty state, so it looks broken.

Goal: add an empty state to the Reports page.

Context:
- Page file: src/pages/reports/index.tsx
- Existing Loading and Error components live in src/components/status
- Show the empty state when reports.length === 0 and loading is false.

Constraints:
- Do not change the request logic.
- Reuse the existing status component style.
- Give me a plan before editing.

Acceptance:
- Existing table is shown when data exists.
- Empty state is shown when there is no data.
- Loading and error states still work.
```

## Useful Instructions

| Instruction | Use |
| --- | --- |
| Read the relevant files and summarize the current implementation first | Prevents guessing |
| Give 2 to 3 options and recommend one | Useful when the requirement is still open |
| Only change necessary files and avoid unrelated refactors | Controls scope |
| Explain how to verify each step | Keeps the work inspectable |
| If information is missing, ask before editing | Reduces fabrication |

## Prompt Quality Check

- Does it describe the successful user experience?
- Does it include file paths or module boundaries?
- Does it say what must not change?
- Does it require planning before editing?
- Does it include tests or manual acceptance steps?
