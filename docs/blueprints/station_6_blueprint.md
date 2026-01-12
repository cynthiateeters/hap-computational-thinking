# Station 6 blueprint (AI Assistance for Computational Thinking)

**Created:** January 10, 2026 at 8:25 PM ET

## Station identity

**Station ID:** station-6-ai-assistance-computational-thinking
**Title (student-facing):** AI Assistance for Computational Thinking
**Lab context:** Week 1 — Becoming a Developer (Final station, capstone)
**Prerequisites:**

- Station 1: Thinking Logically (describing behavior)
- Station 2: Communicating Logic (pseudocode and flowcharts)
- Station 3: Reasoning and Correcting Logic (tracing and debugging)
- Station 4: From Logic to Computational Thinking (naming patterns)
- Station 5: Setting Up to Contribute (Git/GitHub workflow, Magic Quotes setup)
- Magic Quotes forked, cloned, and running locally
- Understanding of JSON structure from Station 5

---

## Assumptions

- HAP uses VS Code
- HAP uses GitHub Copilot in VS Code

## Learning intent

**Primary concept (one sentence):**
AI can accelerate coding tasks, but responsible use requires detailed prompting, mandatory verification, and taking full ownership of every line of code it generates.

**Supporting concepts:**

- Vague prompts produce generic, often inaccessible code—detailed requirements get professional results
- Performance optimization requires explicit constraints in prompts
- Verification is non-negotiable: you own the code, whether you wrote it or AI assisted
- Understanding beats speed—AI should help you learn, not replace learning
- Prompt iteration is conversational refinement, not one-shot perfection

**Explicit non-goals (what this station does NOT teach):**

- AI model selection or comparison
- Advanced AI techniques or prompt engineering theory
- Replacing understanding with AI generation
- Using AI for complex algorithm design
- AI for writing production code without understanding it
- Trusting AI output without verification

---

## Narrative design

### Characters present

- [x] HAP (primary narrator, reflecting on AI use)
- [x] Prof. Teeters (validates HAP's AI responsibility, appears in opening + closing)
- [ ] Grace Hopper (not needed—Prof. Teeters handles responsibility guidance)

### HAP's arc

HAP's pronoun is `it`.

**Starting state:**
HAP has successfully set up Magic Quotes locally and understands the JSON structure. It is excited about AI's potential to help create quote content but hasn't used AI responsibly yet.

**Key question:**
How do I use AI to help with coding tasks while ensuring quality, and understanding?

**Ending state:**
HAP has created quote-hap.json using AI assistance, committed and pushed it using VS Code Source Control, and opened his first pull request—all while following Prof. Teeters' rules for responsible AI use.

---

## Prof. Teeters moments

**Frequency:** Two moments (opening guidance + closing validation)

**Moment 1 - Opening perspective shift (early station):**

**Context:** HAP asks if he can use AI to help create his Magic Quotes contribution

**Her key line:**
"AI can help you work faster, but it's a tool, not a replacement for thinking. You can use it to generate quote content—but you're responsible for verifying every line, and understanding what the code does. If you can't explain it, you don't own it yet."

**Moment 2 - Validation of learning (final section):**

**Context:** HAP has successfully created quote-hap.json, committed it, and opened his first PR using AI assistance responsibly

**Her key line:**
"HAP, you did something important today. You used AI to speed up your work—but you also validated the JSON structure, and understood every field you generated. That's how professionals use AI. The speed matters less than the responsibility."

---

## Grace Hopper moments

**Frequency:** None

**Rationale:** Station 6 focuses on responsible AI use and workflow completion. Prof. Teeters provides all necessary guidance for ethical/responsibility concerns. Grace's precision role isn't needed here.

---

## HAP's confessions

1. **"I asked AI to generate quotes and used them immediately without checking accessibility."**
   Prof. Teeters tested my code with a screen reader. None of the AI-generated content worked for keyboard navigation. I had to regenerate everything with explicit accessibility requirements. That taught me: AI doesn't care about users unless I make it care.

2. **"I thought 'make it accessible' was enough detail in my prompt."**
   AI gave me generic output that violated WCAG standards. When I provided specific requirements (ARIA labels, keyboard navigation, focus management), the output was professional-quality. Detailed prompts get detailed results.

3. **"I copied AI-generated code without understanding what it did."**
   It looked right, but when Prof. Teeters asked me to explain how the JSON validation worked, I couldn't answer. She reminded me: "Speed without understanding is technical debt." Now I verify AND understand before using anything.

4. **"I assumed AI would optimize performance automatically."**
   My first AI-generated structure was bloated and slow. When I explicitly requested lightweight, mobile-friendly output with performance constraints, AI delivered exactly what I needed. AI responds to what you ask for—nothing more.

---

## Code example contract

**Primary role:** [x] Illustrative + Diagnostic

**Central artifacts:**

1. Magic Quotes repository (continuation from Station 5)
2. quote-hap.json (HAP's contribution created with AI assistance)
3. VS Code Source Control workflow (staging, committing, pushing)
4. GitHub pull request creation

**Code shown:**

- Bad AI prompts → generic output
- Good AI prompts → professional output
- JSON file creation with AI assistance
- Accessibility-focused prompts vs. generic prompts
- VS Code Source Control GUI screenshots (stage, commit, push, PR)
- Git workflow without terminal commands

**Constraints:**

- No terminal Git commands (use VS Code GUI exclusively)
- No complex AI theory (practical prompting only)
- No code HAP doesn't understand
- Every AI-generated example must be verified for accessibility
- Focus on responsibility, not AI capabilities

**Student interaction:**

- **What they watch HAP do:** Create quote-hap.json with AI, verify accessibility, commit via VS Code GUI, push to fork, open PR
- **What they should notice:** Prompt evolution (vague → detailed), verification steps, VS Code Source Control workflow
- **What they should NOT do yet:** Complex Git operations, AI for algorithm design, trusting AI without verification

---

## HAP pose selection

| Location                   | Pose intent                 | Cognitive state                | Image filename          |
| -------------------------- | --------------------------- | ------------------------------ | ----------------------- |
| Intro                      | Excited but cautious        | Ready to practice with AI      | hap-laptop_xiewar       |
| Confession (AI mistakes)   | Embarrassed but learning    | Admitting careless AI use      | hap-broke-things_qtbum4 |
| Accessibility breakthrough | Realization of importance   | Understanding responsibility   | hap-waving_dgzacg       |
| Successful PR creation     | Accomplishment and pride    | Completed first contribution   | hap-celebrating_bljvgl  |
| Closing reflection         | Confident and ready to grow | Professional developer mindset | HAP-learner_dvehmt      |

**Note:** All filenames verified against skills/hap-image-validation/hap-cloudinary-complete-inventory.md

---

## Station flow skeleton

1. **What You'll Learn at This Station** - Three insight cards about AI responsibility + HAP's confession about careless AI use
2. **HAP's First AI Mistake** - Story of shipping AI code without verification, Prof. Teeters' intervention
3. **What AI Can and Can't Do for Computational Thinking** - Strengths/weaknesses grid (pattern recognition vs. understanding)
4. **Creating Effective Prompts for Quote Generation** - Vague prompt failure → detailed prompt success
5. **The Accessibility Problem: AI's Biggest Blind Spot** - Why AI forgets accessibility, how to force it into prompts
6. **Generating quote-hap.json with AI** - Step-by-step with accessibility-first prompting
7. **Verification Workflow: Checking AI Output** - JSON validation, accessibility testing, manual review
8. **HAP's Rules for Working with AI** - 6 numbered rules (non-negotiable)
9. **Using VS Code Source Control for Your First Commit** - GUI-based Git workflow (stage, commit, push)
10. **Opening Your First Pull Request** - GitHub PR creation, describing changes
11. **When NOT to Use AI** - Scenarios where manual work is better
12. **Learning Objectives Checklist** - Final verification + Prof. Teeters' validation

---

## Scene framing

**Previous station (Station 5) ended with:**
HAP has Magic Quotes forked, cloned, and running locally. He understands the JSON structure and knows what fields are required. He's ready to create his contribution.

**This station opens with:**
HAP needs to create quote-hap.json with developer wisdom quotes. He wonders: could AI help generate quote content? Prof. Teeters says yes—but with responsibility and verification.

**Connection point:**
Station 5 taught the setup workflow. Station 6 teaches the contribution workflow—creating files, committing changes, and opening pull requests—all while learning responsible AI use.

**This station ends with:**
HAP has created quote-hap.json with AI assistance, committed it using VS Code Source Control, pushed to his fork, and opened his first pull request to Magic Quotes. He understands the full developer contribution cycle AND responsible AI practices.

---

## Central themes

### AI as assistant, not replacement

**HAP's realization:**
"AI can generate code faster than I can type, but it doesn't care about users the way I should. Prof. Teeters taught me: you own every line of code, whether you wrote it or AI did."

**Teaching approach:**

- Show vague prompts → generic output
- Show detailed prompts → professional output
- Emphasize verification as mandatory step
- Frame AI as acceleration, not automation

### Accessibility is non-negotiable

**HAP's discovery:**
"AI consistently forgets accessibility unless I explicitly request it. EVERY prompt must include accessibility requirements. It's not optional—it's foundational."

**Teaching approach:**

- Show AI output WITHOUT accessibility request → inaccessible
- Show AI output WITH accessibility request → compliant
- Make accessibility the first requirement in every prompt template
- Test with keyboard navigation, screen readers

### Verification builds ownership

**HAP's lesson:**
"Speed without understanding is technical debt. Prof. Teeters asks: 'Can you explain what this code does?' If I can't, I don't own it yet."

**Teaching approach:**

- Show verification checklist (accessibility, JSON schema, performance)
- Manual review even for AI-generated code
- Understanding requirement before accepting output
- Test everything before committing

---

## VS Code Source Control workflow

**HAP uses VS Code GUI for:**

- Viewing changed files (Source Control panel)
- Staging files (+ button next to filename)
- Writing commit messages (message box at top)
- Committing changes (✓ checkmark button)
- Pushing to fork (sync/push button)
- Viewing commit history (Timeline view)

**Gentle introductions needed for:**

- **Source Control panel:** "This shows all files that changed since your last commit"
- **Staging:** "Selecting which changes to include in this commit"
- **Commit messages:** "Describing what you changed and why"
- **Pushing:** "Sending your local commits to GitHub"

**NOT covered:**

- Terminal Git commands (all GUI-based)
- Branching strategies (main branch only)
- Merge conflicts (one file per contributor prevents this)
- Rebasing or advanced Git operations

---

## AI prompting patterns

### Bad prompt (vague)

```text
Generate some developer quotes for my JSON file
```

**Result:** Generic, non-specific, no accessibility, poor quality

### Good prompt (detailed)

```text
Generate 5 developer wisdom quotes about computational thinking for a JSON file.

Requirements:
- Category: "developer-wisdom"
- Tone: "reflective" or "encouraging"
- Each quote: 10-20 words, actionable and specific
- Source: "ai-assisted"
- Focus on: problem-solving, clear thinking, learning from mistakes
- Accessibility: Plain language, no jargon, screen-reader friendly

Format as JSON entries with unique IDs like "hap-001", "hap-002", etc.
```

**Result:** Professional, accessible, on-theme, properly formatted

### Accessibility-first template

```text
Create [task] with these CRITICAL accessibility requirements:

MANDATORY accessibility features:
- Keyboard navigation support
- ARIA labels for all interactive elements
- Focus management
- Screen reader compatibility
- WCAG AA color contrast

[Then add your other technical requirements...]
```

---

## Commands taught in Station 6

**Via VS Code integrated terminal:**

| Command            | Purpose                     | When introduced |
| ------------------ | --------------------------- | --------------- |
| `npm run validate` | Verify JSON file is valid   | Section 7       |
| `npm run dev`      | Check quotes appear on site | Section 7       |

**Via VS Code GUI (Source Control):**

| Action         | GUI Location                       | When introduced |
| -------------- | ---------------------------------- | --------------- |
| View changes   | Source Control icon (sidebar)      | Section 9       |
| Stage file     | + button next to filename          | Section 9       |
| Write message  | Message box at top of panel        | Section 9       |
| Commit         | ✓ checkmark button                 | Section 9       |
| Push to GitHub | Sync/Push button (bottom of panel) | Section 9       |

**Via GitHub web interface:**

| Action              | Location                     | When introduced |
| ------------------- | ---------------------------- | --------------- |
| Create pull request | "Contribute" button on fork  | Section 10      |
| Describe changes    | PR description form          | Section 10      |
| Submit PR           | "Create pull request" button | Section 10      |

---

## Success criteria

Station 6 is successful when:

1. **Students understand AI responsibility**
   - Detailed prompts get better results
   - Accessibility must be explicitly requested
   - Verification is mandatory
   - Understanding beats speed

2. **Students complete the full workflow**
   - Created quote-hap.json with AI assistance
   - Validated JSON structure
   - Committed using VS Code GUI
   - Pushed to their fork
   - Opened first pull request

3. **Students feel confident with VS Code Source Control**
   - Source Control panel is familiar
   - Staging, committing, pushing make sense
   - No fear of Git operations
   - GUI feels approachable

4. **Students internalize the 6 AI rules**
   - Accessibility first, always
   - Detailed prompts required
   - Verification mandatory
   - Understanding required
   - Performance needs explicit requests
   - AI is assistant, not replacement

5. **Lab completion feels earned**
   - Real contribution to real project
   - Professional workflow practiced
   - AI used responsibly
   - Ready for next learning phase

---

## Design constraints

### What makes Station 6 unique

**Fixed 12-section structure from template:**

Station 6 MUST follow the exact structure in `src/templates/station6-template.astro`. This is non-negotiable.

**Capstone nature:**

- Synthesizes all previous stations (computational thinking + Git workflow + AI responsibility)
- First real contribution to a deployed project
- Completes the Week 1 learning arc
- Transitions students from learners to contributors

**Accessibility emphasis:**

- Accessibility appears in EVERY section
- Not optional or secondary—foundational
- AI's weakness becomes the teaching opportunity

### Time investment breakdown

- Understanding AI responsibility: 10 minutes
- Learning prompt engineering: 15 minutes
- Generating quote-hap.json with AI: 10 minutes
- Verification and testing: 10 minutes
- VS Code Source Control workflow: 10 minutes
- Opening pull request: 5 minutes

**Total:** ~60 minutes of active learning and practice

### Balance of HAP narrative vs. direct instruction

**Students watch HAP:**

- Make AI mistakes (ship without verification)
- Learn from Prof. Teeters' correction
- Iterate on prompts (vague → detailed)
- Verify accessibility manually
- Use VS Code GUI for commits
- Open his first PR

**Students can replicate:**

- All prompting examples are copy/paste-able
- All VS Code GUI actions are screenshot-documented
- Verification checklist is provided
- PR process is step-by-step

---

## The 6 AI rules (non-negotiable)

These will appear in Section 8 as numbered tip cards:

1. **Always Specify Accessibility First**
   AI forgets accessibility unless you make it the first requirement. Start EVERY prompt with accessibility constraints before technical requirements.

2. **Detailed Prompts Get Professional Results**
   "Generate quotes" produces junk. "Generate 5 reflective developer-wisdom quotes, 10-20 words each, WCAG AA compliant, focused on computational thinking" produces quality.

3. **Verify Everything Before Committing**
   Run validation tools. Test manually. Check accessibility. If you can't explain what the code does, you don't own it yet.

4. **Understanding Beats Speed**
   AI can generate faster than you can type, but speed without comprehension is technical debt. Learn from what AI generates—don't just accept it.

5. **Performance Requires Explicit Requests**
   AI won't optimize unless you ask. Include performance constraints in prompts: "lightweight," "mobile-friendly," "minimal dependencies."

6. **You Own Every Line of Code**
   Whether you wrote it or AI did, you're responsible for quality, accessibility, and correctness. Blame doesn't transfer to the AI.

---

## Pre-writing checklist

Before starting prose:

- [x] Primary concept is ONE sentence (AI accelerates work, but responsibility/verification/ownership are mandatory)
- [x] Non-goals are explicit (no AI theory, no trust without verification, no complex prompting)
- [x] HAP's arc has clear start/end states (excited about AI → responsible AI user with completed PR)
- [x] Prof. Teeters appears ≤2 times (opening guidance + closing validation)
- [x] Grace does NOT appear (Prof. Teeters handles all guidance)
- [x] At least 2 specific confessions listed (4 listed, all with consequences)
- [x] Code role is declared (illustrative + diagnostic - AI prompts, JSON creation, Git workflow)
- [x] All images have stated reasons (excited, confession, breakthrough, celebration, reflection)
- [x] Flow skeleton complete (12 sections mapped per template)
- [x] Central artifact (Magic Quotes + quote-hap.json) defined
- [x] VS Code GUI approach is defined (Source Control panel exclusively)
- [x] AI responsibility framework is clear (6 rules)
- [x] Accessibility-first approach is emphasized throughout

---

## Transition from Week 1

**Station 6 ending state:**
HAP has completed his first contribution to a real project using professional tools (Git, GitHub, VS Code, AI) while following responsible practices. He understands the full cycle: setup → create → verify → commit → push → PR.

**What Week 1 accomplished:**

- Station 1: Learned to think logically (behavior before code)
- Station 2: Communicated logic (pseudocode and flowcharts)
- Station 3: Reasoned through errors (tracing and debugging)
- Station 4: Applied computational thinking (naming and patterns)
- Station 5: Practiced developer workflow (fork, clone, validate)
- Station 6: Made first contribution (AI assistance + Git + PR)

**Week 2 readiness:**
Students are ready to build actual projects because they understand:

- How to think computationally
- How to work with version control
- How to use AI responsibly
- How to contribute to real codebases
- The professional developer workflow

**Handoff is clean because:**

- Git/GitHub workflow is established
- VS Code is familiar
- AI use patterns are clear
- Contribution cycle is complete
- Confidence is built through real work

---

## Reference documentation

- Full character framework: `docs/designing-labs/hap-narrative-and-scene-design.md`
- HAP voice guidelines: `docs/reference-cards/hap-voice-card.md`
- Character interactions: `docs/reference-cards/character-quick-ref.md`
- Blueprint template: `docs/reference-cards/station-blueprint-template.md`
- Station 6 template: `src/templates/station6-template.astro`
- Magic Quotes context: Station 5 blueprint, Station 5 implementation

---

**Blueprint status:** Complete and ready for implementation
**Next step:** Review blueprint with user, then create `src/pages/stations/station6.astro`
