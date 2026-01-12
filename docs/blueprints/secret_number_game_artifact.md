# Secret Number Game — Core Scenario Artifact

**HAP Learning Lab: Computational Thinking**

This artifact defines the **Secret Number Game** as a *shared narrative and logic scenario* used across multiple stations in this learning lab.

It is written **for lab content creators**, not students.

---

## 1. Purpose of This Artifact

The Secret Number Game is the **single running scenario** for early stations in the HAP Learning Lab.

Its role is to:

- Provide a consistent context for teaching computational thinking
- Support multiple representations of the same logic
- Scale from informal reasoning to formal code
- Stay simple while still being rich enough to grow

This artifact exists to ensure **conceptual consistency** across all stations that reference the game.

---

## 2. Why This Game Was Chosen

The Secret Number Game was selected because it:

- Is immediately understandable with no technical background
- Is game-like without requiring graphics or UI
- Naturally introduces decisions, repetition, and end conditions
- Maps cleanly to pseudocode, flowcharts, and JavaScript
- Aligns with future Game & Real-Time Interactive Design (GRID) coursework

The game is intentionally **minimal** so that learning focuses on *thinking*, not features.

---

## 3. Canonical Game Description (Behavior Level)

At the behavior level, the game works as follows:

- The game chooses a secret number
- The player makes a guess
- The game checks the guess
- The game gives feedback
- The player may guess again
- The game eventually ends

This description must remain **language-independent** and **implementation-free**.

---

## 4. Scope Rules (Very Important)

### Included on Purpose

- One player
- One secret number
- One guess at a time
- Clear win condition
- Clear feedback

### Explicitly Excluded

- Scoring systems
- Timers
- Difficulty levels
- Hints
- Graphics or UI design
- Random number generation details

These exclusions protect the game from feature creep in early stations.

---

## 5. How the Game Evolves Across Stations

The **game idea never changes**. Only the *lens* changes.

| Station | What Changes | What Stays the Same |
|-------|-------------|---------------------|
| Thinking Logically | Describe behavior | Game idea |
| Communicating Logic | Represent logic | Game idea |
| Reasoning About Logic | Trace and test | Game idea |
| Understanding Functionality | Procedural steps | Game idea |
| Documenting Logic | Written explanation | Game idea |
| Collaborating with AI | Review and critique | Game idea |

This progression is intentional and must be preserved.

---

## 6. Representation Contract

Any representation of the Secret Number Game must:

- Match the canonical behavior description
- Avoid adding new rules or features
- Use short, action-based language
- Be consistent across text, diagrams, and code

Representations may include:

- Plain-language descriptions
- Given / When / Then statements
- Pseudocode
- Flowcharts
- JavaScript examples

But they must all describe the *same* game.

---

## 7. Relationship to Tooling

The game is intentionally compatible with:

- Pseudocode standards (Level 1)
- Flowchart conventions focused on control flow
- JavaScript-to-flowchart tools
- AI explanation and review workflows

Tooling must adapt to the game. The game must not adapt to tooling.

---

## 8. Common Pitfalls for Content Creators

Avoid these mistakes when writing lab content:

- Adding new rules without justification
- Explaining implementation too early
- Mixing behavior with syntax
- Treating the game as a UI problem
- Solving the game instead of describing it

When in doubt, return to the canonical behavior description.

---

## 9. HAP Narrative Alignment

Within the HAP narrative, the Secret Number Game represents:

- A safe place to make logic mistakes
- A repeatable mental model
- A shared reference point for questions

HAP should treat the game as something they are *learning to understand*, not something they already control.

---

## 10. Final Guidance for Lab Creators

If you are creating new content that references the Secret Number Game, ask:

> “Am I changing the game, or changing how we think about the game?”

Only the second is allowed in early stations.

---

*This artifact should be read before creating any station content that references the Secret Number Game.*