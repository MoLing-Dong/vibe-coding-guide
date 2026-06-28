# Workflow Breakdown

Large tasks handed to AI often produce a giant diff that is hard to review. Break work into verifiable steps so every step has a clear input and output.

## Recommended Flow

| Stage | Goal |
| --- | --- |
| Explore | Find relevant files and existing patterns |
| Plan | Define steps, risks, and verification |
| Implement | Change one small target at a time |
| Verify | Run tests, builds, or manual checks |
| Wrap up | Review the diff, update docs, record risks |

## Example Breakdown

Original request:

```txt
Redo the Orders management page so it supports refund filters, export, and mobile layout.
```

Break it down:

1. Read the Orders page and summarize the table, filters, and API structure.
2. Add refund status filtering and verify URL sync.
3. Add an export button using the existing export capability.
4. Check mobile layout and fix only obvious overlap.
5. Run tests and build, then list remaining risks.

## Control Phrases

- Complete step 1 only; do not edit files yet.
- Make one small scoped change at a time.
- If this requires API or data structure changes, stop and explain why.
- Do not refactor unrelated components.
- Tell me how to verify every step.

## When to Split Again

- The assistant's plan has more than 7 steps.
- One diff touches too many modules.
- The task mixes feature work, styling, migration, and performance.
- Verification is unclear.
