# Station 2: Communicating logic - examples blueprint

You are creating Station 2: Communicating Logic for the HAP Learning Lab.

This station teaches how the same logic can be represented in multiple ways before writing code.

## Canonical example files (read-only)

You must treat the following files as authoritative reference examples:

- `docs/examples/secret-number-simple.pseudo` → Textual representation of logic using Level 1 pseudocode
- `docs/examples/secret-number-simple.svg` → Visual representation of the same logic as a flowchart

These two files describe the same game logic and must always be referenced together.

## The pseudocode example

The pseudocode file demonstrates a simple secret number guessing game where the player gets one guess. Key elements to highlight:

### Structure elements

```text
BEGIN
    ...program steps...
END
```

- The `BEGIN` and `END` markers show where the program starts and finishes
- Everything between them happens in order, from top to bottom

### Output/display statements

```text
DISPLAY "Welcome to the Secret Number Game!"
DISPLAY "I am thinking of a number."
DISPLAY "Can you guess what it is?"
```

- These show messages to the player
- The exact text appears in quotation marks
- Students should recognize this as the program "talking" to the user

### Input statement

```text
INPUT guess
```

- This pauses the program and waits for the player to type something
- Whatever the player types gets stored with the label `guess`
- Point out that `guess` is just a name we chose—it could be `playerAnswer` or anything descriptive

### Decision structure

```text
IF guess is correct THEN
    DISPLAY "You win!"
ELSE
    DISPLAY "Wrong guess. Try again next time!"
ENDIF
```

- The `IF/THEN/ELSE/ENDIF` structure shows a decision point
- Only ONE of the two paths will happen—never both
- Emphasize the human-readable condition: "guess is correct" (not code syntax)

## The flowchart example

The SVG flowchart visualizes the exact same logic using standard flowchart shapes:

### Shape meanings to explain

| Shape                        | Color in diagram | Meaning                          |
| ---------------------------- | ---------------- | -------------------------------- |
| Rounded rectangle (start)    | Yellow           | Beginning of the program         |
| Rectangle with double lines  | Green            | The program name/module ("Main") |
| Rounded rectangle            | Blue             | Actions (display, input)         |
| Diamond                      | Purple           | Decision point (IF condition)    |

### Flow to trace with students

1. **Start** (yellow oval at top) → Program begins
2. **Main** (green box) → Names this program
3. **Three output boxes** (blue) → Display the welcome messages in sequence
4. **Input box** (blue) → Wait for player's guess
5. **Decision diamond** (purple) → "guess is correct" with two paths
6. **"You win!"** (blue) → Only reached if guess was correct
7. **"Thanks for playing!"** (blue) → Always shown at the end

### Key teaching points from the flowchart

- Arrows show the direction of flow (top to bottom, left to right)
- The diamond has two exits: one for "yes/true" and one for "no/false"
- Both paths eventually reach the final output box
- The visual makes the "branching" nature of IF/ELSE obvious

## How to use these files in station content

### Use them to illustrate concepts, not as exercises to modify

Refer to them when explaining:

- Structure (BEGIN/END creates boundaries)
- Clarity (each step is one line/shape)
- Shared representations (same logic, different formats)

### Side-by-side comparison opportunities

Show students how each pseudocode line maps to a flowchart shape:

| Pseudocode        | Flowchart equivalent   |
| ----------------- | ---------------------- |
| `BEGIN`           | Start oval + Main box  |
| `DISPLAY "..."`   | Blue rounded rectangle |
| `INPUT guess`     | Blue rounded rectangle |
| `IF ... THEN`     | Purple diamond         |
| `ENDIF` / `END`   | Flow arrows converging |

### Discussion prompts HAP can use

- "When Prof. Teeters showed me both versions, I noticed the flowchart makes the 'fork in the road' really obvious. The diamond shape practically shouts 'decision time!'"
- "I found the pseudocode easier to read out loud, like telling someone the steps. But when I wanted to see the whole game at once, the flowchart helped me see the big picture."
- "Prof. Teeters asked me which one I'd use to explain the game to a friend. I realized it depends on the friend!"

### Emphasize that

- Neither representation is "more correct"
- Both communicate the same behavior
- Different people prefer different formats
- Real developers use both depending on the situation

### Quoting rules

- You may quote short excerpts from the pseudocode, but do not rewrite or extend it
- You may describe what the flowchart shows, but do not redraw or redesign it

## What this station is NOT doing

- Do NOT introduce JavaScript
- Do NOT introduce loops yet
- Do NOT add new game rules
- Do NOT optimize or complete the game
- Do NOT test or debug logic

This station is about representation, not correctness or execution.

## Narrative and tone requirements

- HAP is the learner and narrator
- Prof. Teeters formally introduces pseudocode and flowcharts as standard tools
- The tone should be calm, beginner-safe, and pre-code

## Goal of the station

By the end of Station 2, students should understand:

1. Logic should be written down to be shared
2. The same logic can appear as text or as visuals
3. Pseudocode and flowcharts are thinking tools used before code exists

---

Produce student-facing station content only.
Do not explain your reasoning.
Do not mention these instructions in the output.
