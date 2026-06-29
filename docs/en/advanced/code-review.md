# AI Code Review

AI is useful not only for writing code, but also for acting as a strict reviewer before commit. The trick is to make it review the real diff, not give vague praise about code quality.

## 1. When to Use AI Review

Use AI review when:

- A feature is done but not committed.
- The diff is larger than you can inspect at a glance.
- The change touches permissions, money, deletion, or auth state.
- Tests pass, but you are worried about edge cases.
- You are preparing a PR description and risk notes.

Do not use AI review as a replacement for tests. It can find suspicious code, but it cannot prove correctness.

## 2. Review Input

The best input is the current diff, task goal, and acceptance criteria.

```txt
Review the current diff as a code reviewer.

Task:
Add a refund status filter to the orders list.

Acceptance:
- The default view shows all orders.
- The filter value syncs to the URL.
- Refreshing preserves the filter.

Focus on:
1. Unrelated changes.
2. Existing behavior regressions.
3. Missing edge cases.
4. Type, security, or performance risks.
5. Missing tests.

List findings by severity. Do not modify code.
```

If the tool can read git diff, let it inspect the diff directly. Otherwise, paste the important parts.

## 3. Severity Format

Ask AI to use a stable format.

```txt
Use this format:

Severity: Blocker / Major / Minor / Nit
Location: file and line
Problem:
Impact:
Suggestion:
```

This helps separate must-fix issues from optional polish.

## 4. Review Dimensions

Advanced review should cover at least six dimensions.

| Dimension | Questions |
| --- | --- |
| Requirement fit | Does it satisfy acceptance criteria? |
| Regression risk | Could old behavior break? |
| Edge states | Empty, loading, error, permission states |
| Types and contracts | Field names, optional values, API shapes |
| Security | Permission bypass, sensitive data, injection |
| Maintainability | Unrelated refactors, duplication, unclear naming |

Do not ask only "any issues?" Tell AI what kind of issues to hunt for.

## 5. Review the Tests

Tests need review too.

```txt
Check whether the new tests actually cover this requirement.
Focus on:
1. Testing implementation details instead of behavior.
2. Missing failure paths.
3. Flaky waits.
4. Missing assertions for key behavior.
```

Many tests exist without protecting the behavior that matters.

## 6. Process Review Results

Do not accept every AI finding blindly. For each item, decide:

- Is it relevant to this task?
- Is there code evidence?
- Must it be fixed now?
- Can it be tracked as follow-up?

Ask AI to categorize:

```txt
Split these findings into:
1. Must fix in this change.
2. Can be follow-up.
3. Style suggestions only.
Explain why.
```

## 7. Generate PR Notes

After review, ask AI to write a PR description from the final diff.

```txt
Write a PR description based on the final diff:

## Summary
- 

## Verification
- 

## Risk
- 
```

Keep PR notes short and specific.

## 8. Review Prompt Template

```txt
Review the current diff. Do not modify code.

Background:
Goal:
Acceptance criteria:
Verification already run:

Focus on:
- Requirement fit.
- Unrelated changes.
- Existing behavior regressions.
- Missing edge cases.
- Missing tests.
- Security or performance risks.

Output:
Group findings by Blocker, Major, Minor, and Nit.
Each item must include location, problem, impact, and suggestion.
```

AI review is most valuable when it gives you one more calm reviewer before the change leaves your machine.
