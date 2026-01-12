# Station 1 blueprint — Thinking logically

**HAP Learning Lab: Computational Thinking**

This blueprint defines *Station 1* before any prose is written. It follows the official station blueprint template and HAP narrative design rules.

---

## 1. Station identity

```text
Station ID: station-1-thinking-logically
Title (student-facing): Thinking Logically
Lab context: First station in the Computational Thinking lab. Introduces the Secret Number Game as a running scenario.
Prerequisites: None. This is the entry point to the lab.
```

---

## 2. Learning intent

```text
Primary concept:
Describing behavior clearly must come before writing code.

Supporting concepts:
- Logic can be expressed without syntax
- Clear thinking prevents downstream bugs

Explicit non-goals:
- Writing JavaScript
- Learning pseudocode syntax
- Learning flowchart symbols
- Designing full algorithms
```

**Focus rule:** This station is about *intent and behavior*, not structure or implementation.

---

## 3. Narrative design

### Characters present

```text
- [x] HAP (narrator)
- [x] Prof. Teeters (guidance moment only)
- [ ] Grace Hopper (not needed at this stage)
```

### HAP's arc

```text
Starting state:
HAP believes being a developer means starting by writing code.

Key question:
"How do I know what code to write if I haven't decided what should happen?"

Ending state:
HAP understands that describing behavior clearly is a developer skill.
```

Confidence level at end: **Knows the next question, not the full solution.**

---

## 4. Prof. Teeters moments

**Frequency:** Once

```text
- [x] Opening perspective shift
- [ ] Mid-station guidance
- [ ] Validation of learning

Her key line:
"Before you write a single line of code, you need to know what should happen.
If you can't explain the behavior, the computer certainly can't guess it."
```

---

## 5. Grace Hopper moments

```text
- [ ] Terminology correction
- [ ] Technical precision
- [ ] Reframing question
```

**Rationale:** Precision is not yet required. Introducing Grace here would be premature. She will appear in later stations when terminology and technical accuracy matter.

---

## 6. HAP's confessions

```text
1. I jumped straight into code without deciding what the program should do—and
   spent an hour writing logic that never made sense in the first place.

2. I assumed the computer would "figure it out" if my idea was vague. Spoiler:
   it didn't. I got errors that made no sense because my thinking was unclear. 😳

3. I mixed up what I wanted to happen with how it would happen—and ended up
   solving the wrong problem entirely.
```

Each confession is tied to a real consequence (wasted time, confusing errors, wrong solution).

---

## 7. Code example contract

```text
Primary role: Illustrative

Constraints:
- Must not include code
- Must not include pseudocode keywords
- Must remain plain language descriptions of behavior

Student interaction:
- What they should notice: unclear behavior descriptions create unanswered questions
- What they should NOT change: the Secret Number Game idea itself
```

**Reference:** The Secret Number Game is defined in `docs/blueprints/secret_number_game_artifact.md`. This station uses only the canonical behavior description:

- The game chooses a secret number
- The player makes a guess
- The game checks the guess
- The game gives feedback
- The player may guess again
- The game eventually ends

---

## 8. HAP pose selection

| Location | Pose intent | Cognitive state | Image filename |
|----------|-------------|-----------------|----------------|
| Intro | eager but unsure | curious, wants to start coding | hap-laptop_xiewar |
| Confession | showing mistakes | embarrassed but learning | hap-broke-things_qtbum4 |
| Breakthrough | clarity dawning | confident about next step | hap-thumbs-up_s4si0j |

**Rule:** Every pose must reinforce the narrative moment, not decorate it. All filenames verified against `skills/hap-image-validation/hap-cloudinary-complete-inventory.md`.

---

## 9. Station flow skeleton

```text
1. Opening scene — HAP admits confusion about where to start ("I wanted to code but didn't know what to write")
2. Prof. Teeters perspective shift — behavior before code
3. Core idea — describing behavior using plain language (no syntax)
4. Application — Secret Number Game behavior description
5. Confession — mistakes caused by skipping the "what should happen" step
6. Breakthrough — clarity comes from describing behavior first
7. Quick reference — key ideas to remember
```

---

## 10. Scene framing

```text
Previous station ended with:
N/A (this is the first station)

This station opens with:
HAP eager to start coding but unsure what to write first

Connection point:
Establishes "behavior first" as the foundation for all later stations.
The Secret Number Game is introduced here and continues through the entire lab.
```

---

## Pre-writing checklist

Before writing Station 1 content:

- [x] Primary concept is one sentence
- [x] Non-goals are explicit
- [x] HAP's arc has a clear start and end
- [x] Prof. Teeters appears once
- [x] Grace Hopper does not appear
- [x] At least two specific confessions listed (with consequences)
- [x] Code role declared (illustrative)
- [x] All image filenames verified against inventory
- [x] Flow skeleton complete
- [x] Secret Number Game reference documented

---

*Related documents:*

- [Station blueprint template](../reference-cards/station-blueprint-template.md)
- [HAP narrative and scene design guide](../designing-labs/hap-narrative-and-scene-design.md)
- [Secret Number Game artifact](./secret_number_game_artifact.md)
