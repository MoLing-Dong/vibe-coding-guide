# Project Context

The quality of AI-generated code depends heavily on whether the assistant understands the project context. More context is not always better. Relevant context is better.

## What to Provide

| Context | Why it helps |
| --- | --- |
| Related file paths | Points the assistant to the right implementation area |
| Existing components or helpers | Encourages reuse of project patterns |
| Data structures and API fields | Prevents wrong field names, types, and states |
| Error logs and reproduction steps | Supports debugging |
| Test and build commands | Lets the assistant verify work |
| Team conventions | Keeps style consistent |

## Context Pack Template

```txt
Project: React + TypeScript admin app.

Relevant files:
- src/pages/orders/index.tsx: Orders list page.
- src/components/table/DataTable.tsx: shared table.
- src/api/orders.ts: Orders query API.

Existing conventions:
- Forms use react-hook-form.
- Filters sync to the URL.
- Tests run with npm run test -- orders.

Current task:
Add a refund status filter to the Orders list.
```

## Let AI Gather Context

When your tool can access the repository, ask:

```txt
Please search for the Orders list, filter component, and Orders API files.
Summarize the current implementation and tell me which files you plan to modify.
Do not edit until I confirm.
```

## What Not to Provide

- Long unrelated historical discussions.
- Outdated design docs.
- Whole repository file lists without explanation.
- Code snippets with no source or purpose.

Too much context dilutes the signal. Start focused, then let the assistant ask for what it needs.
