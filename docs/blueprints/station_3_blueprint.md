# Station 3 Blueprint — Reasoning About Logic

**HAP Learning Lab: Computational Thinking**

This blueprint defines *Station 3* before any prose is written. It follows the official station blueprint template and is intentionally aligned with Station 1 (Thinking Logically) and Station 2 (Communicating Logic). It introduces *reasoning pressure* without introducing code.

---

## 1. Station identity

```text
Station ID: station-3-reasoning-about-logic
Title (student-facing): Reasoning About Logic
Subtitle: Walking through logic before trusting it
Lab context: Third station in Week 1: Becoming a Developer
Prerequisites: Station 1 — Thinking Logically, Station 2 — Communicating Logic
```

---

## 2. Learning intent

```text
Primary concept:
Logic must be walked through step by step before it can be trusted.

Supporting concepts:
- Clear-looking logic can still behave incorrectly
- Repetition increases the chance of hidden mistakes

Explicit non-goals:
- Writing JavaScript
- Fixing or optimizing logic
- Introducing functions or variables
- Teaching formal testing techniques
```

**Focus rule:** This station is about *reasoning*, not rewriting or implementing logic.

---

## 3. Narrative design

### Characters present

```text
- [x] HAP (narrator)
- [x] Grace Hopper (concept introducer)
- [x] Prof. Teeters (reasoning habit guide)
```

### HAP’s arc

```text
Starting state:
HAP is dissatisfied that the game ends too quickly and wants to make it more fun.

Key question:
"How do I know my improved logic actually works?"

Ending state:
HAP understands that adding repetition makes reasoning necessary, and that logic must be traced to find problems.
```

Confidence level at end: **Knows how to question logic, not yet how to fix it.**

---

## 4. Prof. Teeters moments

**Frequency:** Once (intentional)

```text
- [ ] Opening perspective shift
- [x] Mid-station guidance
- [ ] Validation of learning

Her key line:
"Before you fix logic, you walk through it. Slowly. Every time."
```

---

## 5. Grace Hopper moments

**Frequency:** Once (intentional)

```text
- [ ] Terminology correction
- [x] Reframing question
- [ ] Technical precision
```

**Role:** Grace introduces *defensive thinking* and the DRY principle as developer wisdom, not a rule or technique.

**Key ideas Grace introduces:**

- Repeating logic is common for new developers
- Repetition is not automatically wrong
- Repetition increases risk
- DRY (Don’t Repeat Yourself) exists to reduce that risk

**Scope control:**

- DRY is introduced as a *principle*, not something students apply yet
- Loops are identified as the appropriate tool *for now*
- Functions are explicitly deferred

**Grace’s anchor line:**
"Repeating logic isn’t a mistake. But experienced developers learn to avoid repetition because mistakes repeat too. That idea is called DRY. For now, loops help us repeat behavior safely. Later, we’ll talk about functions."

---

## 6. HAP’s confessions

```text
1. I thought adding repetition would automatically make my game better.

2. I assumed the loop would eventually stop without checking how.

3. I felt confident until someone asked me to explain what happens step by step. 😳
```

Each confession reveals a hidden assumption exposed by reasoning.

---

## 7. Code example contract

```text
Primary role: Diagnostic

Constraints:
- Uses flawed pseudocode only
- Must not include functions, variables, or syntax
- Must not introduce new game rules beyond repetition

Student interaction:
- What they should notice: the logic looks reasonable but fails when traced
- What they should NOT change: the game idea itself
```

Primary artifact:

- `docs/examples/secret-number-simple-loop.pseudo`

---

## 8. HAP pose selection

| Location | Pose intent | Cognitive state | Image filename |
|----------|-------------|-----------------|----------------|
| Intro | excited to improve | optimistic | hap-lightbulb_xxx |
| Confession | logic under strain | uncertain, reflective | hap-confused-map_q8q0ej |
| Breakthrough | realization through reasoning | thoughtful | hap-thinking_xxx |

---

## 9. Station flow skeleton

```text
1. Opening scene — HAP realizes the game feels too short
2. Grace introduces repetition as a core idea
3. HAP adds a loop and feels confident
4. Prof. Teeters asks HAP to walk through the logic
5. Tracing reveals a problem
6. Confession — confidence replaced by questions
7. Quick reference — reasoning habits to remember
```

---

## 10. Scene framing

```text
Previous station ended with:
Logic can be represented clearly using pseudocode and flowcharts.

This station opens with:
HAP wanting to improve the game by making it repeat.

Connection point:
Station 3 challenges the assumption that written logic automatically works.
```

---

## Pre-writing checklist

Before starting prose:

- [x] Primary concept is ONE sentence
- [x] Non-goals are explicit
- [x] HAP’s arc has clear start/end states
- [x] Prof. Teeters appears once
- [x] Grace appears once and only conceptually
- [x] At least 2 specific confessions listed
- [x] Code role declared (diagnostic)
- [x] Flow skeleton complete

---

*Related documents:*

- Station blueprint template
- Station 2 blueprint (v2)
- Character quick reference
- Secret Number Game artifact
