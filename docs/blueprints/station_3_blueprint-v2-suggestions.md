# Station 3 blueprint — Suggestions for revision

**Purpose:** This document captures suggested improvements to Station 3 based on how beginners actually think about repetition.

---

## Key insight: Beginners copy-paste before they loop

The current Station 3 has HAP immediately thinking about loops when he wants repetition. This skips how beginners actually approach the problem.

**What beginners actually do:**

1. Want behavior to repeat
2. Copy-paste the code they want to happen again
3. Get told by a mentor that there's a better way (loops)
4. Try a loop but make mistakes

**What current Station 3 does:**

1. HAP wants behavior to repeat
2. HAP immediately writes a WHILE loop (skipping the copy-paste instinct)
3. Loop has a flaw

The copy-paste step is important because it shows *why* loops matter and gives Grace a natural place to introduce the idea of not repeating yourself.

---

## Revised narrative arc

### Phase 1: HAP's natural instinct (copy-paste)

HAP wants the player to get multiple guesses. His first thought is to copy-paste the guess-and-check section:

```text
BEGIN
    DISPLAY "Welcome to the Secret Number Game!"
    DISPLAY "I am thinking of a number."
    DISPLAY "Can you guess what it is?"

    INPUT guess
    IF guess is not correct THEN
        DISPLAY "Wrong guess. Try again!"
    ENDIF

    INPUT guess
    IF guess is not correct THEN
        DISPLAY "Wrong guess. Try again!"
    ENDIF

    INPUT guess
    IF guess is not correct THEN
        DISPLAY "Wrong guess. Try again!"
    ENDIF

    DISPLAY "Thanks for playing!"
END
```

**HAP's thinking:** "I'll give them three chances. I just need to repeat the guess part three times."

### Phase 2: Grace's gentle correction

Grace sees HAP's copy-pasted code and asks a question (not a lecture):

> "What happens if the player guesses correctly on the first try?"

HAP traces through and realizes: the game still asks two more times, even though the player already won.

Grace continues:

> "And what if you want to give them ten chances? Or let them keep guessing until they get it right?"

HAP realizes copying and pasting doesn't scale and has problems.

**Grace's key observation (not jargon-heavy):**

> "When you copy the same logic over and over, any mistake in that logic also gets copied over and over. And if you need to change something, you have to change it everywhere. There is a better way."

Grace introduces the WHILE structure as a way to say "keep doing this until something changes."

### Phase 3: HAP's first loop attempt (the flaw)

HAP tries to convert his copy-paste logic into a loop:

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

**What HAP forgot:** When he copy-pasted, each block had `INPUT guess`. When he made the loop, he only put the INPUT before the loop, not inside it.

### Phase 4: Prof. Teeters asks HAP to trace

Prof. Teeters doesn't point out the flaw. She asks HAP to trace through step by step.

**Her key line:** "Before you trust logic, you walk through it. Slowly. Every time."

HAP traces and discovers the problem: the guess never changes inside the loop.

### Phase 5: Visual comparison with flowcharts

This is where the flowcharts become powerful teaching tools.

**Show the flawed flowchart** (`secret-number-simple-loop.svg`):
- The loop goes around, but there's no INPUT box inside it
- The arrow loops back without any way for the guess to change
- Students can *see* the missing piece visually

**Show the corrected flowchart** (`secret-number-simple-loop-fixed.svg`):
- Now there's an INPUT box inside the loop
- The arrow shows: check → wrong message → get new guess → check again
- The visual makes the fix obvious

### Phase 6: HAP corrects the logic

HAP adds `INPUT guess` inside the loop:

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

HAP traces the corrected version to verify it works.

---

## Suggested station flow (revised)

```text
1. Opening — HAP wants to improve the game (more chances to guess)
2. HAP's first attempt — copy-paste the guess section multiple times
3. Grace's question — "What if they guess right on the first try?"
4. HAP realizes copy-paste has problems (doesn't scale, mistakes multiply)
5. Grace introduces loops — "keep doing this until something changes"
6. HAP's loop attempt — forgets to put INPUT inside the loop
7. Prof. Teeters asks HAP to trace — "walk through it slowly"
8. Tracing reveals the problem — guess never changes
9. Flowchart comparison — visual shows what's missing
10. HAP corrects the logic — adds INPUT inside the loop
11. Verification trace — corrected version works
12. Quick reference — reasoning habits
```

---

## Visual aids to incorporate

### Flowchart components (already exist)

| Artifact | Purpose |
|----------|---------|
| `docs/examples/secret-number-simple-loop.svg` | Shows the flawed loop visually—no INPUT inside |
| `docs/examples/secret-number-simple-loop-fixed.svg` | Shows the corrected loop—INPUT is inside |

**How to use them:**

Create Astro components similar to `SecretNumberFlowchart.astro` for these SVGs, then show them side by side or in sequence:

1. Show the flawed flowchart when HAP discovers the problem
2. Ask students: "What's missing from inside the loop?"
3. Show the corrected flowchart to confirm their intuition

The visual comparison makes the abstract concept concrete. Students can literally *see* that the flawed loop has nothing inside it that changes the guess.

---

## Character moments (revised)

### Grace Hopper

**When she appears:** After HAP copy-pastes his logic

**Her role:** Asks questions that help HAP see the problems with copy-paste, then introduces loops as a better approach

**Key lines:**
- "What happens if the player guesses correctly on the first try?"
- "What if you want to give them ten chances?"
- "When you copy the same logic over and over, any mistake in that logic also gets copied over and over."

**What she does NOT do:**
- Introduce jargon like "DRY principle" or "infinite loop"
- Lecture about best practices
- Tell HAP what's wrong—she asks questions

### Prof. Teeters

**When she appears:** After HAP writes the flawed loop

**Her role:** Asks HAP to trace through the logic step by step

**Key line:** "Before you trust logic, you walk through it. Slowly. Every time."

**What she does NOT do:**
- Point out the flaw directly
- Use technical terms
- Solve the problem for HAP

---

## HAP's confessions (revised)

```text
1. My first instinct was to copy and paste. It felt like the obvious solution—if I want something three times, I write it three times.

2. I didn't think about what happens when the player wins early. My copy-paste version kept asking even after they got it right.

3. When I switched to a loop, I forgot that each of my copy-pasted blocks had INPUT in them. The loop only had it once, outside.

4. I felt confident the loop would work until Prof. Teeters asked me to trace through it. I couldn't explain what happened after "Wrong guess." 😳
```

---

## What to remove from current Station 3

| Current content | Why remove |
|-----------------|------------|
| HAP immediately thinking about loops | Skips how beginners actually think |
| DRY principle mentioned by name | Jargon; the concept can be taught without the acronym |
| "Infinite loop" terminology | Can describe the behavior without the label |
| HAP explaining loop mechanics abstractly | Should discover through tracing, not explanation |

---

## What to add to revised Station 3

| New content | Why add |
|-------------|---------|
| HAP's copy-paste attempt | Shows natural beginner thinking |
| Grace's questions about copy-paste problems | Teaches *why* loops matter |
| Flowchart visual comparisons | Makes the missing INPUT visually obvious |
| HAP's realization that he lost the INPUT | Connects copy-paste to loop transition |

---

## Tone guidance

This station should feel like two mentors helping a beginner work through a problem, not a lecture about programming concepts.

**Do:**
- Show HAP making the mistakes beginners actually make
- Have mentors ask questions instead of giving answers
- Use flowcharts to make abstract problems visual
- Let HAP discover problems through tracing

**Don't:**
- Introduce programming terminology for its own sake
- Have HAP understand concepts before he experiences them
- Have mentors lecture or explain directly
- Rush past the copy-paste phase to get to loops

---

## Suggested artifacts to create

1. **Copy-paste pseudocode** — HAP's first attempt with three repeated blocks
2. **Flawed loop pseudocode** — Already exists: `secret-number-simple-loop.pseudo`
3. **Fixed loop pseudocode** — Already exists: `secret-number-simple-loop-fixed.pseudo`
4. **Flawed loop flowchart component** — Astro wrapper for `secret-number-simple-loop.svg`
5. **Fixed loop flowchart component** — Astro wrapper for `secret-number-simple-loop-fixed.svg`

---

*This document suggests revisions to make Station 3 more authentic to how beginners actually think about repetition, while maintaining the mentor-guided discovery approach.*
