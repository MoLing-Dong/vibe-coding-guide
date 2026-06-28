# Troubleshooting

When vibe coding goes wrong, first decide whether the failure is about requirements, context, implementation, or verification. Do not immediately ask AI to "try again." Turn the failure into facts first.

## Common Issues

| Issue | Common Cause | Resolution |
| --- | --- | --- |
| AI edits the wrong file | Missing path or context | Provide file paths and require read-before-edit |
| Code runs but misses the need | Vague acceptance criteria | Rewrite the criteria as testable results |
| Tests keep failing | No root-cause analysis | Ask it to reproduce, list hypotheses, then fix |
| Diff is too large | Scope is too broad | Revert or split the task |
| Style is inconsistent | Existing pattern was not provided | Point to reference components or nearby code |
| Conversation gets messy | Context drift | Start fresh with a handoff summary |

## Debugging Template

```txt
Current behavior:
Expected behavior:
Actual result:
Reproduction steps:
Relevant files:
Recent changes:
Verification commands already run:
Please analyze likely causes first; do not edit code yet.
```

## Pulling AI Back on Track

- Copy its plan and point out which step does not match the goal.
- State which changes to keep and which to remove.
- Ask it to restate the current goal and forbidden scope.
- If needed, ask for a patch explanation before editing.

## When Verification Fails

```txt
This test failed. Please do not guess.
First explain what the assertion is checking, then list 3 possible causes from the related code.
Choose the most likely cause and propose the smallest fix.
```

Troubleshooting should converge. Each round should reduce uncertainty, not add more changes.
