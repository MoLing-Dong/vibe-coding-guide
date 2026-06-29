# Multi-Role Collaboration

Multi-role collaboration does not require multiple AI tools. The core idea is to separate planning, implementation, review, and verification so one answer is not responsible for every judgment.

## 1. Why Split Roles

Single-role sessions have three common problems:

- The code writer tends to justify the code it wrote.
- Planning and implementation blend together, expanding scope.
- Review is too soft and misses boundaries.

Roles create useful tension: the planner focuses on path, the implementer on changes, the reviewer on risk, and the verifier on evidence.

## 2. Four Useful Roles

| Role | Owns | Does Not Own |
| --- | --- | --- |
| Planner | Task breakdown, boundaries, risk | Editing code |
| Implementer | Small scoped changes | Expanding requirements |
| Reviewer | Diff inspection, issue finding | Blind rewrites |
| Verifier | Commands, output, acceptance evidence | Text summaries only |

Even with one AI tool, you can switch roles in sequence.

## 3. Simulate Roles in One Tool

Use one session like this:

```txt
Act as Planner first.
Only read the code and propose a plan. Do not modify files.
```

After confirming the plan:

```txt
Now switch to Implementer.
Only execute step 1 of the plan, then stop.
```

After implementation:

```txt
Now switch to Reviewer.
Review the current diff. Do not modify code.
```

Finally:

```txt
Now switch to Verifier.
List the verification commands and explain what each command proves.
```

Role switching reduces the "write and rationalize" pattern.

## 4. Multiple Tool Collaboration

If you use multiple tools, divide labor clearly:

- Claude Code: understand large repositories, explain business logic, plan.
- Codex CLI: execute patches, run commands, handle local edits.
- ChatGPT or web model: review PR notes, rewrite docs, provide a second opinion.

Do not let multiple tools edit the same files at the same time. A safer pattern is serial: plan, execute, review.

## 5. Handoff Format

Roles need explicit handoffs.

```txt
Handoff to Implementer:
Goal:
Allowed files:
Forbidden files:
Steps:
Verification commands:
Risks:
```

Reviewer handoff:

```txt
Handoff to Reviewer:
Original goal:
Acceptance criteria:
Current diff summary:
Verification already run:
Focus areas:
```

Without handoffs, multi-role work creates more context confusion.

## 6. Good Tasks for Multi-Role Work

Good fit:

- Medium-sized features.
- Higher-risk refactors.
- Test failure investigation.
- Pre-release review.
- Code and docs updates together.

Poor fit:

- Tiny copy edits.
- One-line config changes.
- Simple fixes you fully understand.

Roles should reduce risk, not add ceremony.

## 7. Handle Disagreements

If Planner and Reviewer disagree, ask for evidence.

```txt
Planner thinks A must change. Reviewer thinks it should not.
List code evidence, risks, and recommended decision for both sides.
Do not modify code.
```

Humans still make the final decision. AI should make the trade-off clear.

## 8. Multi-Role Template

```txt
Use a four-role process for this task:

Planner:
Read code, output plan and risks, do not edit.

Implementer:
Follow the confirmed plan one step at a time.

Reviewer:
Review the diff by severity, do not edit.

Verifier:
Run or recommend verification commands and confirm acceptance evidence.

If any role finds that scope must expand, stop and explain why first.
```

The value of roles is making AI collaboration feel more like a small team and less like one person rushing to submit homework.
