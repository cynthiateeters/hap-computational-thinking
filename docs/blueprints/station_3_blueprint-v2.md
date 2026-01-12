# Station 3 blueprint — Reasoning and correcting logic (v2)

**HAP Learning Lab: Computational Thinking**

This blueprint defines *Station 3* before any prose is written. It follows the official station blueprint template and is intentionally aligned with Station 1 (Thinking Logically) and Station 2 (Communicating Logic). It introduces *reasoning pressure* and *logical correction* while remaining pre-code (pseudocode only).

---

## 1. Station identity

```text
Station ID: station-3-reasoning-and-correcting-logic
Title (student-facing): Reasoning and Correcting Logic
Subtitle: Walking through logic before trusting it
Lab context: Third station in Week 1: Becoming a Developer
Prerequisites: Station 1 — Thinking Logically, Station 2 — Communicating Logic
```

---

## 2. Learning intent

```text
Primary concept:
Logic must be walked through step by step before it can be trusted—and corrected when flaws are found.

Supporting concepts:
- Clear-looking logic can still behave incorrectly
- Repetition increases the chance of hidden mistakes
- Tracing logic reveals problems that reading cannot
- Correcting logic requires understanding *why* it failed

Explicit non-goals:
- Writing JavaScript or any programming language
- Introducing functions or variables
- Teaching formal testing techniques
- Optimizing logic for performance
```

**Focus rule:** This station is about *reasoning, identifying, and correcting* logic at the pseudocode level. Students trace to find problems, understand why they fail, and produce corrected pseudocode. This remains pre-code—no programming languages.

---

## 3. Narrative design

### Characters present

```text
- [x] HAP (narrator)
- [x] Grace Hopper (concept introducer)
- [x] Prof. Teeters (reasoning habit guide)
- [x] The flawed pseudocode (antagonist entity—logic that looks right but fails)
```

### HAP's arc

```text
Starting state:
HAP is dissatisfied that the game ends too quickly and wants to make it more fun.

Key question:
"How do I know my improved logic actually works?"

Next move: HAP attempts to write a loop but he creates an infinite loop.

Prof. Teeters advice: Showing it to Prof. Teeters, HAP gets advice about tracing the logic looking for flaws.

Turning point:
HAP traces the logic and discovers the infinite loop flaw.

Ending state:
HAP understands how to trace logic to find problems, and has corrected the flawed pseudocode by adding INPUT inside the loop.
```

Confidence level at end: **Knows how to trace, identify, and correct logic flaws at the pseudocode level.**

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

Her key line:
"Repetition is not inherently wrong. However, when logic repeats, mistakes also repeat. That observation is called DRY. We will discuss solutions later."
```

**Role:** Grace introduces *defensive thinking* and the DRY principle as developer wisdom, not a rule or technique.

**Key ideas Grace introduces:**

- Repeating logic is common for new developers
- Repetition is not automatically wrong
- Repetition increases risk
- DRY (Don't Repeat Yourself) exists to reduce that risk

**Scope control:**

- DRY is introduced as a *principle*, not something students apply yet
- Loops are identified as the appropriate tool *for now*
- Functions are explicitly deferred

---

## 6. HAP's confessions

```text
1. I thought adding repetition would automatically make my game better.

2. I assumed the loop would eventually stop without checking how.

3. I felt confident until Grace asked me to trace through the logic step by step. I couldn't explain what happened after "Wrong guess"—because I'd never actually walked through it. 😳
```

Each confession reveals a hidden assumption exposed by reasoning.

---

## 7. Code example contract

**Primary role:** Diagnostic

**The intentionally flawed artifact:**

The pseudocode artifact `docs/examples/secret-number-simple-loop.pseudo` contains an **intentional beginner reasoning error** that reflects how new developers commonly think about repetition.

**The flaw:** The WHILE loop checks if the guess is incorrect, displays "Wrong guess. Try again!", but **never asks for a new guess inside the loop**. This creates an infinite loop—a common mistake when beginners add repetition without tracing what actually happens.

**Why this flaw matters:**

- It *looks* reasonable on first read
- It only reveals itself when traced step by step
- It reflects a real beginner mistake (assuming repetition "just works")
- Identifying it is the primary learning activity of this station

**Constraints:**

- Uses pseudocode only (no programming languages)
- Must not include functions, variables, or advanced syntax
- Must not introduce new game rules beyond repetition

**Student interaction:**

- What they should notice: the logic looks reasonable but fails when traced
- What they should discover: the loop never gets new input
- What they should understand: *why* the flaw causes an infinite loop
- What they should produce: a corrected version of the pseudocode
- What they should NOT change: the game idea itself

**Primary artifacts:**

- `docs/examples/secret-number-simple-loop.pseudo` (the flawed version)
- `docs/examples/secret-number-simple-loop-fixed.pseudo` (the corrected version—produced in this station)

**Content of the flawed artifact:**

```text
BEGIN
    DISPLAY "Welcome to the Secret Number Game!"
    DISPLAY "I am thinking of a number."
    DISPLAY "Can you guess what it is?"

    INPUT guess

    WHILE guess is not correct DO
        DISPLAY "Wrong guess. Try again!"
    ENDWHILE

    DISPLAY "Thanks for playing!"
END
```

**The problem:** After displaying "Wrong guess. Try again!", the loop immediately checks `guess is not correct` again—but `guess` never changes because there is no `INPUT` inside the loop. The player is stuck forever.

**Content of the corrected artifact:**

```text
BEGIN
    DISPLAY "Welcome to the Secret Number Game!"
    DISPLAY "I am thinking of a number."
    DISPLAY "Can you guess what it is?"

    INPUT guess

    WHILE guess is not correct DO
        DISPLAY "Wrong guess. Try again!"
        INPUT guess
    ENDWHILE

    DISPLAY "You got it!"
    DISPLAY "Thanks for playing!"
END
```

**The fix:** Adding `INPUT guess` inside the loop allows the player to enter a new guess each time. Now the loop can eventually exit when the correct guess is entered.

---

## 8. HAP pose selection

| Location | Pose intent | Cognitive state | Image filename |
|----------|-------------|-----------------|----------------|
| Intro | excited to improve | optimistic | hap-laptop_xiewar |
| Confession | logic under strain | uncertain, reflective | hap-confused-map_q8q0ej |
| Discovery | finding the problem | concerned realization | hap-sconcerned-laptop_frh5ua |
| Correction | success after fixing | confident | hap-thumbs-up_s4si0j |

**Verification:** All filenames confirmed in `skills/hap-image-validation/hap-cloudinary-complete-inventory.md`

---

## 9. Station flow skeleton

```text
1. Opening scene — HAP realizes the game feels too short (motivation for change)
2. Grace introduces repetition as a core idea (concept framing)
3. HAP adds a loop and feels confident (false success)
4. Prof. Teeters asks HAP to walk through the logic (reasoning pressure)
5. Tracing reveals the infinite loop problem (diagnostic discovery)
6. Understanding the flaw — why the loop never exits (conceptual insight)
7. Correcting the logic — adding INPUT inside the loop (resolution)
8. Verifying the fix — tracing the corrected version (validation)
9. Confession — what HAP learned from this mistake (reflection)
10. Quick reference — reasoning and correction habits (takeaway consolidation)
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
Clear representation (Station 2) is necessary but not sufficient—you must also trace it.

This station ends with:
HAP has identified, understood, and corrected a logic flaw while remaining at the pseudocode level.

Forward connection:
Station 4 can build on this corrected logic or introduce new concepts.
```

---

## 11. Tracing activity design

The core learning activities are **tracing the flawed pseudocode** and **tracing the corrected version**.

**Guided trace of flawed logic:**

1. HAP walks through the first few steps (welcome messages, first input)
2. HAP reaches the WHILE condition and enters the loop
3. HAP displays "Wrong guess. Try again!" and returns to check the condition
4. HAP realizes: "Wait—guess never changed. It's still wrong. Forever."

**Key moment:** The trace must make the infinite loop *viscerally obvious* by showing the same check happening repeatedly with no escape.

**Guided trace of corrected logic:**

1. HAP walks through the same first steps
2. HAP reaches the WHILE condition and enters the loop
3. HAP displays "Wrong guess. Try again!" and then `INPUT guess`
4. HAP returns to check the condition—with a *new* value for guess
5. Eventually the guess is correct, the loop exits, and the game ends properly

**Key moment:** The contrast between the two traces makes the importance of the fix clear.

**Visual aid consideration:** A flowchart showing the loop with the INPUT inside could reinforce the correction.

---

## Pre-writing checklist

Before starting prose:

- [x] Primary concept is ONE sentence
- [x] Non-goals are explicit
- [x] HAP's arc has clear start/turning point/end states
- [x] Prof. Teeters appears once with key line
- [x] Grace appears once with key line (short, no contractions)
- [x] At least 2 specific confessions listed
- [x] Code role declared (diagnostic → correction)
- [x] Intentional flaw documented with explanation
- [x] Corrected version documented with explanation
- [x] Both artifacts listed (flawed and fixed)
- [x] Flow skeleton complete with purpose annotations
- [x] All image filenames verified against inventory
- [x] Aligned with station3-philosophy.md (fixing is allowed)

---

*Related documents:*

- Station blueprint template
- Station 2 blueprint (v2)
- Character quick reference
- HAP voice card
- `docs/blueprints/station3-philosophy.md` (design philosophy)
- `docs/examples/secret-number-simple-loop.pseudo` (the flawed artifact)
- `docs/examples/secret-number-simple-loop-fixed.pseudo` (the corrected artifact—to be created)
