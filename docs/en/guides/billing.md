# Control Cost and Context

The cost of vibe coding is not only model spend. It also includes time, attention, and context drift. Clear boundaries reduce the chance of a long conversation that produces unusable code.

## Common Concepts

| Concept | Description |
| --- | --- |
| Context budget | The information the assistant truly needs for the current task |
| Conversation drift | When a long chat makes the assistant forget goals or mix old constraints |
| Verification cost | Time spent running tests, builds, and manual checks |
| Rework cost | Extra edits caused by unclear requirements or oversized scope |
| Switching cost | Overhead from moving across assistants, branches, or tasks |

## Control Context

1. Provide only files, errors, screenshots, and requirements related to the task.
2. For long tasks, ask the assistant to summarize its current understanding before continuing.
3. When the conversation gets noisy, start fresh with a short handoff summary.
4. Do not bundle unrelated requests into one thread.
5. Ask the assistant to restate the goal and constraints before editing.

## Control Time

- If it cannot find the right files after 15 minutes, pause and restate the problem.
- If there is no runnable result after 30 minutes, reduce the scope.
- Verify each small step instead of saving verification for the end.
- For repeated failures, ask for hypotheses and evidence before another fix.

## Control Model Spend

- Use fast, cheaper assistants for small tasks and stronger models for hard reasoning.
- Trim logs to the error stack, reproduction steps, and relevant config.
- Ask the assistant to state what it is searching for before browsing files.
- Ask for patches or targeted edits instead of repeated full-file output.

## Stop Signals

Pause the current session when:

- The assistant starts editing unrelated files.
- It cannot explain why it made a change.
- The same test keeps failing without a new hypothesis.
- The requirement changed, but old conversation context still affects the output.
