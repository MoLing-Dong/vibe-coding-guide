# AI Debug Workflow

The most dangerous debugging prompt is "try again." Advanced debugging means reproduce first, locate the failure, then modify code. Each round should reduce uncertainty.

## 1. Core Debugging Principles

Use four principles:

- Read the full error before proposing a fix.
- Reproduce consistently before editing.
- Verify one hypothesis at a time.
- Fix the root cause, not the symptom.

If AI starts editing before explaining the error, stop it.

## 2. Provide Minimal Facts

Describe facts instead of frustration.

```txt
Current behavior:
Clicking Save shows success, but the data is gone after refresh.

Expected behavior:
Saved data persists after refresh.

Reproduction:
1. Open /settings/profile.
2. Change the display name.
3. Click Save.
4. Refresh the page.

Error information:
No console error. Network shows PATCH /api/profile returned 200.

Relevant files:
- src/pages/settings/profile.tsx
- src/api/profile.ts
```

The more precise the facts, the less AI has to guess.

## 3. First Round Is Analysis Only

```txt
Analyze first. Do not modify code.
Please:
1. Explain which layers could cause this behavior.
2. List 3 to 5 possible causes.
3. Explain how to verify each cause.
4. Recommend an inspection order.
```

A good answer separates layers such as UI state, request payload, API response, cache invalidation, and backend persistence.

## 4. Add Diagnostic Evidence

For cross-layer bugs, do not fix immediately. Add minimal diagnostics first.

```txt
Only add temporary diagnostic logging to confirm:
1. The submitted payload.
2. The API response.
3. How local state updates after success.

Do not change business logic.
```

Diagnostics must be removable in the final diff. Do not ship temporary logs.

## 5. Verify One Hypothesis

After AI selects the most likely cause, ask for the smallest change.

```txt
Now only verify the hypothesis that the cache is not invalidated after save.
Give the smallest change. Do not restructure the form.
After editing, explain how to verify it.
```

If the hypothesis fails, return to analysis. Do not stack random fixes.

## 6. Regression Check

After the bug is fixed, add at least one regression protection.

- If tests exist, add a focused test.
- If tests do not exist, write manual acceptance steps.
- For UI bugs, keep screenshot or screen recording notes.
- For API bugs, record request and response changes.

Prompt:

```txt
Add a minimal regression check for this bug.
If it cannot be automated, provide manual verification steps.
```

## 7. Common Anti-Patterns

| Anti-pattern | Risk | Better approach |
| --- | --- | --- |
| Ask AI to rewrite the module | Introduces more bugs | Locate the failing layer first |
| Change multiple hypotheses at once | Cannot tell what worked | Test one hypothesis |
| Only inspect final behavior | Fixes symptoms | Trace data flow |
| Skip reproduction | Cannot prove the fix | Write reproduction steps |
| Keep diagnostic logs | Pollutes code | Check the final diff |

## 8. Debugging Prompt Template

```txt
You are a debugging assistant. Follow these rules:
1. Explain the error and reproduction path first.
2. Do not modify code immediately.
3. List possible causes and verification methods.
4. Choose the most likely cause and make the smallest fix.
5. After each change, explain how to verify it.

Current behavior:
Expected behavior:
Reproduction:
Error information:
Relevant files:
Recent changes:
Commands already run:
```

Real debugging is not trying more things. It is getting closer to the root cause with every round.
