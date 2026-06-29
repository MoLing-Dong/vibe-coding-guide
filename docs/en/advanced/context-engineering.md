# Context Engineering

Context engineering is not dumping every available document into AI. It is compressing the information needed for the current task into clear, reliable, verifiable input.

## 1. Why Context Fails

AI often drifts because the context is weak:

- The request explains the need but not the code location.
- The shared document is outdated, but nobody says so.
- Too much irrelevant discussion dilutes the important facts.
- Acceptance criteria are missing.
- Forbidden areas are not stated, so AI edits unrelated modules.

The advanced goal is to give AI an accurate enough project map before it starts editing.

## 2. Context Pack Structure

Use five sections.

```txt
Task:
What should be completed now.

Relevant locations:
Files, components, APIs, tests.

Existing patterns:
How similar work is already done in the project.

Constraints:
What must not change and which style to follow.

Acceptance:
How to prove the task is complete.
```

This structure is more stable than a long paragraph because AI can check each field for gaps.

## 3. Project Map

A project map helps AI understand the repository quickly. It does not need to be long.

```txt
Project map:
- src/pages: page entry points.
- src/components: reusable UI components.
- src/api: API request wrappers.
- src/stores: shared state.
- tests: unit and integration tests.
- npm run typecheck: type checking.
- npm run test: tests.
```

If the project has a monorepo layout, plugin system, server rendering, or database migrations, include that too.

## 4. Current Task Context

Current task context should only include information directly related to this task.

```txt
Current task context:
- Page: src/pages/orders/index.tsx
- Filter component: src/components/orders/OrderFilters.tsx
- Query helper: src/utils/query.ts
- Reference: src/pages/customers/index.tsx already has status filtering
- Verification: npm run typecheck
```

You can also ask AI to gather missing context first.

```txt
Please search for files related to order filtering.
Summarize the current implementation and tell me what context is still missing.
Do not edit until I confirm.
```

## 5. Boundaries and Forbidden Areas

Clear boundaries reduce unrelated diffs.

```txt
Boundaries:
- Do not change the API response shape.
- Do not add a new state management library.
- Do not rewrite the table component.
- Do not move files.
- Do not modify unrelated pages.
```

For legacy projects, add:

```txt
If you believe a boundary must be crossed, stop and explain why with alternatives.
```

## 6. Evidence First

Do not ask AI to simply "understand the project." Ask for evidence.

```txt
List the relevant files you found:
| File | Purpose | Why relevant | Needs modification |
```

This makes it much easier to catch wrong assumptions before implementation.

## 7. Continuing Long Sessions

When a session gets long, create a handoff summary.

```txt
Summarize this session for a future continuation:
1. Original goal.
2. Confirmed context.
3. Changes made.
4. Verification already run.
5. Current blocker.
6. Recommended next step.
```

If AI starts forgetting details, repeating itself, or mixing up filenames, start a new session with the handoff summary.

## 8. Context Quality Checklist

Before sending a task to AI, check:

- Are file paths clear?
- Is there a reference implementation?
- Are forbidden areas stated?
- Is there an acceptance method?
- Are outdated sources marked as outdated?
- Did you ask AI to read before editing?

The essence of context engineering is reducing uncertainty. Every piece of context should help AI guess less.
