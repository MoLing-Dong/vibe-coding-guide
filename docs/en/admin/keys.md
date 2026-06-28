# Requirements and Acceptance

Vibe coding usually fails not because the model is weak, but because the requirement is vague. Clear requirements and acceptance criteria let the assistant deliver the thing you actually wanted.

## Requirement Card

A useful requirement card includes:

- Background: why this matters.
- User: who uses it.
- Behavior: what the user does.
- Rules: business constraints.
- Boundaries: what is out of scope.
- Acceptance: how completion is judged.

## Writing Acceptance Criteria

Do not write only "improve UX." Make it testable:

| Vague | Better |
| --- | --- |
| Make the page look better | The form buttons do not wrap or overlap at 375px width |
| Fix filtering | Selecting Refunded adds `refundStatus=refunded` to the URL |
| Improve performance | Initial page load makes no more than 2 requests |
| Add error feedback | Save failures show the server-provided error message |

## Before Giving It to AI

- Did you say what is out of scope?
- Is there at least one verifiable result?
- Did you include empty and error states?
- Did you mention permissions, legacy data, or compatibility?
- Did you state which existing behavior must remain?

The more specific the requirement, the more the assistant behaves like a collaborator instead of a guesser.
