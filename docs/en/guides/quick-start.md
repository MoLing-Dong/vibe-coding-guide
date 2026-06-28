# Quick Start

Vibe coding is not "let AI write whatever it wants." It is a workflow where you describe the goal, context, constraints, and acceptance criteria, then let the assistant implement in small steps and verify the result. Start with one low-risk feature.

## 1. Pick a Small Task

A good first task usually has these traits:

- It can be completed in 30 to 90 minutes.
- It touches 1 to 3 files.
- Success is visible, such as one new filter, field, validation rule, or copy change.
- Failure is easy to roll back.

Do not start by asking AI to "refactor the whole system" or "build a full product from scratch." Establish the rhythm first, then scale up.

## 2. Write the First Task Prompt

Use four blocks: goal, context, constraints, and acceptance criteria.

```txt
Goal: add a refund status filter to the Orders page.

Context:
- The page is in src/pages/orders/index.tsx.
- Table filters live in the OrderFilters component.
- The API already returns refundStatus: none, pending, or refunded.

Constraints:
- Keep the existing UI style.
- Give me a plan before editing code.
- Run the relevant test or type check after the change.

Acceptance criteria:
- Users can filter orders by refund status.
- All orders are shown by default.
- The selected filter is synced to the URL query string.
```

## 3. Ask AI to Read Before Planning

Do not rush into edits. Ask the assistant to locate relevant files, summarize the existing pattern, and propose a short plan. Check whether:

- It found the right files.
- It reuses existing components and naming.
- It mentions tests, type checks, or manual verification.
- It avoids expanding the scope.

## 4. Execute in Small Steps

After you approve the plan, ask the assistant to take one small step at a time. At the end of each step, it should tell you:

- Which files changed.
- Why the change was made.
- How to verify it.
- What remains unfinished.

This keeps you aware of the code and lets you redirect the assistant early if it drifts.

## 5. Finish With Verification

Do not trust the final summary alone. Verify the work:

- Run tests, type checks, or a build.
- Open the page or call the endpoint manually.
- Review the diff for unrelated refactors.
- Ask the assistant to update notes or docs based on the final code.

## Starter Checklist

- Is the task small enough?
- Did you provide files, patterns, and constraints?
- Did the assistant plan before editing?
- Is every step verifiable?
- Does the final diff only contain changes needed for this task?
