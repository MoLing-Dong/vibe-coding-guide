# Safe Refactoring

If you ask AI to "refactor this" without constraints, you often get a diff that is hard to review. Safe refactoring means lock behavior first, then change structure in small steps.

## 1. What AI Can Refactor Well

Good candidates:

- Split long functions.
- Remove local duplication.
- Improve names and types.
- Extract pure functions.
- Restructure a small component internally.

Avoid giving AI these as one big task:

- Rewrite core architecture.
- Change business logic and data models together.
- Move many files.
- Refactor payment, permission, or destructive flows without tests.

## 2. Lock Existing Behavior

Refactoring should not change user-visible behavior. Ask AI to summarize the current behavior first.

```txt
Read this module first. Do not modify it.
Summarize:
1. What it exposes externally.
2. Key inputs and outputs.
3. Existing edge cases.
4. Behaviors that must stay unchanged.
```

If AI cannot explain the current behavior, it is not ready to refactor.

## 3. Add Protection First

Use tests when available, or a manual checklist when not.

```txt
Before refactoring, propose the smallest protection plan:
- Which behaviors need tests.
- Which existing tests already cover them.
- If there is no test framework, what manual checks are needed.
```

For risky refactors, commit protection first, then change structure.

## 4. Refactor in Layers

Recommended order:

1. Rename only, without structural changes.
2. Extract pure functions without changing callers.
3. Split components or modules.
4. Remove duplicated logic.
5. Clean up old code.

Each step should pass verification independently.

## 5. Control the Diff

Set boundaries explicitly.

```txt
Only refactor the internals of OrderFilters.
Do not change API requests.
Do not change page layout.
Do not change styles.
Do not move files.
Run npm run typecheck after each step.
```

If AI finds a bug during refactoring, make it stop first:

```txt
If you find an existing bug, record it. Do not mix the fix into this refactor.
```

## 6. Checkpoints During Refactoring

After each step, ask AI:

- Did external behavior remain unchanged?
- Why is this step a pure refactor?
- What verification command was run?
- Are there unrelated changes in the diff?

Prompt:

```txt
Check whether the last step changed external behavior.
If it did, point to the location and explain whether it is necessary.
```

## 7. When Refactoring Goes Wrong

If type checks fail, tests fail, or the diff gets out of control, do not keep going.

Process:

1. Stop adding changes.
2. Ask AI to summarize the current diff.
3. Find the last stable checkpoint.
4. Decide what to keep and what to revert.
5. Split the task smaller.

Do not let AI continue patching in a confused state.

## 8. Safe Refactoring Template

```txt
Goal:
Safely refactor [module] to improve readability without changing external behavior.

Boundaries:
- Do not change business logic.
- Do not change API contracts.
- Do not change UI copy.
- Do not move unrelated files.

Process:
1. Summarize current behavior.
2. Propose a protection plan.
3. Give a refactor plan with at most 5 steps.
4. Execute one step at a time.
5. After each step, run verification and summarize the diff.

Acceptance:
- Existing tests pass.
- Type checks pass.
- External behavior is unchanged.
```

A good refactor makes code clearer and reviewers calmer.
