# Full AI Coding Session

Advanced vibe coding is not about fancier prompts. It is about giving each session a clear rhythm: define the goal, build context, implement in small steps, verify continuously, and leave a useful handoff.

## 1. When to Use This Workflow

This workflow fits real engineering tasks that can usually finish in one to three hours, such as:

- Add a filter, sort control, empty state, or permission message.
- Fix a bug with stable reproduction steps.
- Add a field to an existing API flow and update callers.
- Add coverage for an under-tested module.
- Refactor a local piece of code without changing behavior.

If the work touches multiple systems, database migrations, production configuration, or broad architecture, split it into multiple sessions first.

## 2. Prepare a Task Card

Before starting, write a compact task card.

```txt
Goal:
Add a refund status filter to the orders list.

Business context:
Operations needs to find pending refunds faster.

Relevant locations:
- src/pages/orders/index.tsx
- src/components/orders/OrderFilters.tsx
- src/api/orders.ts

Constraints:
- Do not change the API contract.
- Sync the filter value to the URL.
- Reuse the existing Select component.

Acceptance:
- The default view shows all orders.
- Selecting a refund status refreshes the list.
- Refreshing the page preserves the filter.
- npm run typecheck passes.
```

A good task card tells AI what success means, and it tells you when the session should stop.

## 3. Explore Before Editing

Do not ask AI to edit immediately. First, ask it to read and summarize.

```txt
Please read the relevant files first and answer:
1. How does the orders list manage filter state today?
2. Where are URL query params synchronized?
3. Which files need to change?
4. What are the main risks?

Do not edit files yet.
```

Check whether it found the right files. If it guesses fields, invents components, or expands scope, pull it back.

## 4. Ask for a Small Plan

After exploration, ask for a plan with three to six steps.

```txt
Based on the code you read, propose a small-step implementation plan.
Each step must include:
- Goal
- Files involved
- Verification method

Keep it under 6 steps.
```

A good plan often looks like this:

1. Add `refundStatus` to the filter type.
2. Add the dropdown to the filter component.
3. Include the field when building query params.
4. Confirm URL synchronization and defaults.
5. Run type checks or relevant tests.

If the plan includes refactoring, restyling, API changes, and test migration at once, the task is too large.

## 5. Implement One Step at a Time

Ask AI to execute one verifiable target at a time.

```txt
Execute step 1 and step 2 only.
Only update filter types and UI. Do not change request logic.
Afterward, summarize changed files and how to verify the next step.
```

After each step, inspect three things:

- Does the diff match the step goal?
- Does naming follow existing project style?
- Is the next step still clear?

If the diff grows unexpectedly, ask AI to explain why each changed file is necessary before continuing.

## 6. Stop on Verification Failures

A verification failure is not a signal to keep trying random patches. It is a signal to enter debugging mode.

```txt
typecheck failed.
Do not modify code yet.
First explain the error, locate the relevant code, then list 3 possible causes.
Choose the most likely cause and propose the smallest fix.
```

Advanced collaboration prevents AI from replacing root-cause analysis with trial and error.

## 7. Finish With Handoff

When the feature is complete, ask for a final delivery summary.

```txt
Based on the current diff, write a handoff summary:
1. What changed.
2. Which files changed.
3. How it was verified.
4. Risks or uncovered areas.
5. Suggested PR description.
```

Then inspect the diff yourself. AI summaries help, but they do not replace human judgment.

## 8. Session Handoff Template

Keep a short handoff at the end of each meaningful session.

```txt
Session goal:
Completed:
Files changed:
Verification commands:
Unfinished work:
Risks:
Recommended next step:
```

This simple template prevents long-session drift and helps the next AI session start with useful context.
