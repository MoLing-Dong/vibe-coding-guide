# Delivery

Finishing a feature with vibe coding is only the first step. Before delivery, turn AI-generated changes into code your team can understand, verify, and maintain.

## Pre-Release Checklist

- The diff contains only this task's changes.
- Tests, type checks, lint, or build pass.
- Empty states, error states, and permission boundaries are covered.
- Required docs, comments, or release notes are present.
- Debug code, temporary logs, and unused files are removed.
- A rollback path exists.

## Ask AI for Delivery Review

```txt
Review the current diff as a code reviewer.
Focus on:
1. Unrelated changes.
2. Broken existing behavior.
3. Missing tests or edge cases.
4. Type, security, or performance risks.
List findings by severity. Do not modify code.
```

## Write Change Notes

Good delivery notes include:

- What changed.
- Why it changed.
- How it was verified.
- Known risks.
- Any required config, migration, or follow-up work.

## Post-Release Learning

After release, feed the result back into your workflow:

- Which prompts worked well.
- Which missing context caused rework.
- Which tests caught problems early.
- Which steps should become team templates.

The value of vibe coding compounds when the process improves over time.
