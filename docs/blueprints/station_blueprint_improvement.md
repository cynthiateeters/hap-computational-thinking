# Station blueprint improvement guide

**Purpose:** Instructions for ChatGPT when generating station blueprints for HAP Learning Labs. Follow these requirements to avoid common errors identified in Station 1 blueprint review.

---

## Critical requirements

### 1. HAP image filenames must be verified

**Do NOT invent image filenames.** Only use images from this verified list:

| Filename | Use case | Version |
|----------|----------|---------|
| hap-laptop_xiewar | Hero, studying, focused work | v1759495998 |
| HAP-learner_dvehmt | Default, footer, practice | v1759497938 |
| hap-waving_dgzacg | Greeting, farewell | v1759495998 |
| hap-confused-map_q8q0ej | Confusion, lost, problems | v1759495999 |
| hap-broke-things_qtbum4 | Mistakes, disasters, confessions | v1763230414 |
| hap-celebrating_bljvgl | Major victories, completion | v1762699548 |
| hap-brain-explodes_wu0or8 | Breakthroughs (use sparingly!) | v1763230331 |
| hap-thumbs-up_s4si0j | Approval, confidence | v1763230522 |
| hap-lectures_fjnxdj | Teaching, explaining | v1763230356 |
| hap-scientist_safwtg | Experimenting, testing | v1763230817 |
| hap-sconcerned-laptop_frh5ua | Concern, noticing bugs | v1763230464 |
| hap-has-tools_kgoeys | Preparation, setup | v1763230490 |
| hap-w-bug_fztbl6 | Debugging | v1763230718 |
| hap-meets-grace_v2yifo | Mentorship, Station 6 | v1764180952 |

**Wrong:** `hap-thinking_xxx`, `hap-lightbulb_xxx` (placeholder patterns)

**Right:** `hap-laptop_xiewar`, `hap-thumbs-up_s4si0j` (exact filenames from list)

---

### 2. Confessions must include consequences

Each confession needs a **specific mistake** AND its **real outcome**.

**Wrong:**

```text
1. I jumped straight into code without deciding what the program should do.
2. I assumed the computer would "figure it out" if my idea was vague. 😳
```

**Right:**

```text
1. I jumped straight into code without deciding what the program should do—and
   spent an hour writing logic that never made sense in the first place.

2. I assumed the computer would "figure it out" if my idea was vague. Spoiler:
   it didn't. I got errors that made no sense because my thinking was unclear. 😳
```

---

### 3. Code blocks must have language specifiers

Always use `text` for non-code content blocks.

**Wrong:**

````markdown
```
Station ID: station-1-thinking-logically
```
````

**Right:**

````markdown
```text
Station ID: station-1-thinking-logically
```
````

---

### 4. File references must use proper paths

**Wrong:** `fileciteturn6file0` (ChatGPT artifact)

**Right:** `docs/reference-cards/station-blueprint-template.md` (actual file path)

Use relative markdown links in the Related documents section:

```markdown
*Related documents:*

- [Station blueprint template](../reference-cards/station-blueprint-template.md)
- [HAP narrative and scene design guide](../designing-labs/hap-narrative-and-scene-design.md)
- [Secret Number Game artifact](./secret_number_game_artifact.md)
```

---

### 5. Prof. Teeters' voice must be conversational

Her lines should feel like guidance, not lectures.

**Wrong:** "If you can't explain what should happen, the computer never will."

**Right:** "Before you write a single line of code, you need to know what should happen. If you can't explain the behavior, the computer certainly can't guess it."

---

## Additional content to include

### Pre-fill these content decisions

The blueprint should include draft values for:

| Field | Example | Notes |
|-------|---------|-------|
| Subtitle | "Why clear thinking comes before code" | Short phrase for header |
| SEO description | 150-160 characters describing the station | For meta tags |
| 3 insight card titles | "Behavior First", "No Syntax Needed", "Clarity Prevents Bugs" | Key concepts |
| 3 insight card stats | "Think → Then Type", "Plain Words Work", "Vague = Broken" | Memorable phrases |
| Footer reminder | "Behavior first, code second." | One-liner takeaway |

### Reference the Secret Number Game artifact

If the station uses the Secret Number Game, include:

1. A reference to `docs/blueprints/secret_number_game_artifact.md`
2. The canonical behavior description (if relevant to the station)
3. A note about which "lens" this station applies to the game

---

## Station flow connection

Each blueprint must specify:

```text
Previous station ended with:
[What was learned or left unresolved]

This station opens with:
[HAP's state, question, or discovery]

Connection point:
[How they link narratively]
```

For Station 2, the connection should reference Station 1's ending:
- Station 1 established "behavior first" thinking
- Station 2 should build on describing behavior with a new representation method

---

## Pre-generation checklist

Before generating a blueprint, verify you have:

- [ ] The station number and topic
- [ ] The verified HAP image inventory (above)
- [ ] The Secret Number Game artifact (if applicable)
- [ ] Knowledge of what the previous station covered
- [ ] The station's "lens" on the Secret Number Game (from artifact)

---

## Blueprint validation checklist

After generating, verify:

- [ ] All image filenames exist in the verified list
- [ ] All confessions include specific consequences
- [ ] All code blocks have language specifiers (`text`)
- [ ] All file references use proper relative paths
- [ ] Prof. Teeters' line sounds conversational, not lecture-y
- [ ] Content decisions (subtitle, SEO, insight cards) are pre-filled
- [ ] Station flow connection references previous station
- [ ] Secret Number Game reference documented (if applicable)

---

*This guide was created after reviewing Station 1 blueprint corrections. Last updated: January 6, 2026*
