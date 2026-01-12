# Station 5 blueprint (Magic Quotes Version)

## Station identity

**Station ID:** station-5-git-github-setup
**Title (student-facing):** Setting Up to Contribute
**Lab context:** Week 1 — Becoming a Developer (From thinking to contributing)
**Prerequisites:**

- Station 1: Thinking Logically (describing behavior)
- Station 2: Communicating Logic (pseudocode and flowcharts)
- Station 3: Reasoning and Correcting Logic (tracing and debugging)
- Station 4: From Logic to Computational Thinking (naming patterns)
- VS Code installed on their computer
- Git installed (but not yet used)
- Node.js and npm installed (but not yet used)
- GitHub account created

---

## Learning intent

**Primary concept (one sentence):**
Collaboration means learning from existing work—developers grow by studying, adapting, and building on what others have created.

**Supporting concepts:**

- Developers prepare to contribute to projects by forking repositories, cloning them locally, exploring their structure, and validating their setup—all before writing a single line of code.
- Forking creates a safe personal workspace on GitHub where you can experiment without affecting the original project
- Local and remote repositories are separate until you deliberately sync them with Git commands
- Documentation makes sense when read in context while exploring actual files
- Development tools (npm, Vite) help validate work before contributing

**Explicit non-goals (what this station does NOT teach):**

- Git terminal commands (VS Code Source Control handles this)
- Creating or editing files in the repository
- Committing changes (Station 6)
- Opening pull requests (Station 6)
- Writing JavaScript code
- JSON syntax in depth (just pattern recognition)

---

## Narrative design

### Characters present

- [x] HAP (primary narrator)
- [x] Grace Hopper (introduces Git and GitHub concepts)
- [x] Prof. Teeters (validates HAP's readiness at the end)

### HAP's arc

**Starting state:**
HAP understands computational thinking but has never used Git, GitHub, or developer tools. He feels intimidated by terms like "fork" and "clone."

**Key question:**
How do developers actually work with code that other people wrote? How do I get started without breaking anything?

**Ending state:**
HAP has successfully forked, cloned, explored, and run Magic Quotes locally. He feels confident that he's ready to contribute and understands this is how all developers start.

---

## Prof. Teeters moment

**Frequency:** Once (late station, after HAP completes setup)

**Purpose:** Validation of readiness

**Context:** After HAP successfully runs `npm run validate` and sees everything working

**Her key line:**
"HAP, what you did today—forking, cloning, setting up a project—this is what professional developers do every day. You didn't write any code yet, but you learned the workflow. That matters more than you think."

---

## Grace Hopper moments

**Frequency:** Two moments (conceptual framing, then terminology precision)

**Moment 1 - Conceptual framing (early station):**

**Context:** HAP asks how developers work with projects they didn't create

**Her key line:**
"Developers do not start from nothing. They fork repositories to create their own workspace, clone them to work locally, and contribute when they are ready. This is not stealing—it is how collaboration works."

**Moment 2 - Terminology precision (mid-station, after forking):**

**Context:** HAP is nervous about cloning affecting the original repository

**Her key line:**
"Your fork is your copy. Your local clone is another copy of your fork. The original repository cannot be affected by anything you do in your workspace. You have three separate versions: the original, your fork, and your local files."

---

## HAP's confessions

1. **"I thought Git and GitHub were the same thing."**
   Grace corrected me: Git tracks changes on my computer. GitHub hosts repositories online. They work together but they're different tools. 😳

2. **"I assumed forking was like copying someone's homework—something I shouldn't do."**
   Prof. Teeters explained that forking is the expected way to contribute. It's built into GitHub's design. I was avoiding the right approach because I misunderstood the terminology.

3. **"I was terrified to run npm install because I didn't understand what 'dependencies' meant."**
   When I finally ran it, I realized it just means 'tools this project needs to work.' The package manager downloaded them automatically. I had built up anxiety over something that took 30 seconds.

4. **"I thought I needed to understand all the code before I could contribute."**
   But Magic Quotes is designed so I only need to understand the JSON file structure. I can contribute meaningfully without reading the JavaScript. That made it feel accessible.

---

## Code example contract

**Primary role:** [x] Illustrative

**Central artifact:**
Magic Quotes repository (<https://github.com/cynthiateeters/magic-quotes>)

**Code shown:**

- JSON file structure (annotated to show required fields)
- Bash commands: `npm install`, `npm run dev`, `npm run validate`
- VS Code Source Control screenshots (forking, cloning via GUI)

**Constraints:**

- No JavaScript explanation required
- No Git terminal commands (use VS Code GUI)
- JSON shown as a template to observe, not to master
- Focus on workflow, not syntax

**Student interaction:**

- **What they watch HAP do:** Fork on GitHub, clone via VS Code, explore files, run npm commands, validate setup
- **What they should notice:** Repository structure, documentation hierarchy, JSON pattern, localhost running
- **What they should NOT do yet:** Create files, make commits, push changes (all Station 6)

---

## HAP pose selection

| Location                | Pose intent              | Cognitive state            | Image filename                                              |
| ----------------------- | ------------------------ | -------------------------- | ----------------------------------------------------------- |
| Intro                   | Nervous but curious      | Intimidated by new tools   | hap-laptop_xiewar                                           |
| Early confession        | Admitting misconceptions | Embarrassed but learning   | hap-broke-things_qtbum4 OR hap-confused-map_q8q0ej          |
| After npm run dev works | Excitement at success    | Confident and accomplished | hap-celebrating_bljvgl (use sparingly) OR hap-waving_dgzacg |
| End readiness           | Calm confidence          | Ready for next step        | HAP-learner_dvehmt                                          |

**Note:** Verify all filenames against skills/hap-image-validation/hap-cloudinary-complete-inventory.md before implementation.

---

## Station flow skeleton

1. **What You'll Learn at This Station** - Three insight cards + HAP's confession about intimidation
2. **HAP Meets Git and GitHub** - Conceptual framing (Grace introduces version control, forking, local vs. remote)
3. **Forking Magic Quotes on GitHub** - HAP forks the repository (screenshots, safe workspace concept)
4. **Cloning with VS Code** - HAP uses VS Code to clone his fork locally (GUI-based, gentle introduction)
5. **Exploring the Repository Structure** - HAP reads README files and locates key files (documentation in context)
6. **Setting Up and Validating** - HAP runs npm install, npm run dev, npm run validate (development tools introduction)
7. **Understanding the JSON Structure** - HAP studies example files to see the contribution pattern (template observation)
8. **HAP's Readiness Moment** - Prof. Teeters validates his workflow learning, transition to Station 6
9. **Quick Reference** - Git/GitHub workflow summary (4 cards: forking, cloning, local vs. remote, documentation)

---

## Scene framing

**Previous station (Station 4) ended with:**
HAP understanding that computational thinking is the approach developers use to solve problems

**This station opens with:**
HAP wondering: "Now that I can think computationally, how do real developers actually work with code? How do they contribute to projects?"

**Connection point:**
Computational thinking prepared HAP to understand structure and patterns. Now he needs to learn the workflow that lets him apply that thinking to real projects.

**This station ends with:**
HAP has a working local copy of Magic Quotes, understands the contribution model, and feels ready to create his first contribution (quote-hap.json in Station 6)

---

## Central artifact visibility

**Magic Quotes repository must be clearly established as:**

- Real, not hypothetical (link to live site: magic-quotes.netlify.app)
- Intentionally beginner-friendly (one file per contributor, zero merge conflicts)
- Already deployed and working (students see production code)
- Designed for learning (clear documentation, validation tools, safe structure)

**Students must understand:**

- The GitHub repository is the source of truth
- The Netlify site is built from that repository
- Their fork is their personal workspace
- Their local clone is where they'll do the work

---

## VS Code integration approach

**HAP uses VS Code for:**

- Cloning repositories (via Source Control panel, not terminal `git clone`)
- Exploring file structure (built-in file explorer)
- Reading documentation (built-in markdown preview)
- Running npm commands (integrated terminal for `npm install`, `npm run dev`, `npm run validate`)

**Gentle introductions needed for:**

- **Integrated terminal:** "This is like the command line, but built into VS Code"
- **npm:** "The package manager that installs the tools this project needs"
- **package.json:** "The file that lists project dependencies and commands"
- **Vite:** "The development server that runs the website locally"

**NOT covered yet:**

- Git commands via terminal (VS Code GUI only)
- Creating/editing files (Station 6)
- Committing via Source Control panel (Station 6)

---

## Technical prerequisites handling

**Before Station 5 begins, HAP states these are already installed:**

- VS Code (primary editor)
- Git (available to VS Code)
- Node.js and npm (for running the project)
- GitHub account (for forking)

**Important narrative approach:**

- HAP acknowledges these exist but mentions this is his first time USING them
- Brief explanation of what each tool does when first encountered
- No installation instructions (assumed complete)
- Focus on workflow, not tool setup

---

## Commands taught in Station 5

**Via VS Code integrated terminal:**

| Command            | Purpose                        | When introduced |
| ------------------ | ------------------------------ | --------------- |
| `npm install`      | Install project dependencies   | Section 6       |
| `npm run dev`      | Start local development server | Section 6       |
| `npm run validate` | Check JSON file validity       | Section 6       |

**Via VS Code GUI (Source Control):**

- Forking (GitHub web interface, Section 3)
- Cloning (VS Code Source Control panel, Section 4)

**Explicitly NOT taught (deferred to Station 6):**

- `git add` (not needed - VS Code GUI in Station 6)
- `git commit` (not needed - VS Code GUI in Station 6)
- `git push` (not needed - VS Code GUI in Station 6)

---

## Success criteria

Station 5 is successful when:

1. **Students understand the workflow sequence**
   - Fork → Clone → Explore → Setup → Validate is now familiar
   - This workflow applies to any open source contribution

2. **Students feel confidence through completed tasks**
   - Successfully forked a real repository
   - Successfully cloned it locally
   - Successfully ran the development server
   - Know they're ready for Station 6

3. **Documentation reading feels purposeful, not burdensome**
   - READMEs were referenced while exploring files
   - Students know where to find information when stuck
   - Reading happened in context, not in isolation

4. **VS Code and npm feel approachable, not intimidating**
   - Integrated terminal is demystified
   - npm commands are explained in plain language
   - Tools feel helpful, not overwhelming

5. **Station 6 onboarding is frictionless**
   - No setup time wasted in Station 6
   - Students already have working local repos
   - Can start creating quote-hap.json immediately

---

## Design constraints

### What makes this station different from current Station 5

**Current Station 5:** Passive reading of documentation
**New Station 5:** Active workflow practice with documentation as support

### Time investment breakdown

- Reading/conceptual sections: 15 minutes
- Forking and cloning via VS Code: 10 minutes
- Setup (npm install, run dev): 10 minutes
- Exploration and documentation: 15 minutes
- Understanding JSON schema: 10 minutes

**Total:** ~60 minutes of active learning (vs. passive reading)

### Balance of HAP narrative vs. direct instruction

**Students watch HAP:**

- Fork the repository (HAP narrates his process)
- Clone via VS Code (HAP shows screenshots)
- Run commands (HAP explains what each does)
- Explore files (HAP discovers the structure)

**Students can replicate:**

- All of HAP's actions are reproducible
- Screenshots show exact buttons to click
- Commands are provided verbatim
- HAP's narrative reduces anxiety about trying

---

## Pre-writing checklist

Before starting prose:

- [x] Primary concept is ONE sentence (developers prepare by forking/cloning/exploring/validating)
- [x] Non-goals are explicit (no git terminal, no file creation, no commits)
- [x] HAP's arc has clear start/end states (intimidated → confident and ready)
- [x] Prof. Teeters appears ≤1 time (validation at end)
- [x] Grace appears for precision moments (Git/GitHub concepts, terminology)
- [x] At least 2 specific confessions listed (4 listed)
- [x] Code role is declared (illustrative - JSON template + npm commands)
- [x] All images have stated reasons (nervous, confession, success, readiness)
- [x] Flow skeleton complete (9 sections mapped)
- [x] Central artifact (Magic Quotes) is real and accessible
- [x] VS Code approach is defined (GUI for Git, terminal for npm)
- [x] Technical prerequisites are stated and handled narratively

---

## Transition to Station 6

**Station 5 ending state:**
HAP has Magic Quotes forked, cloned, and running locally. He understands the JSON structure and knows what fields are required. He's ready to create his contribution.

**Station 6 opening:**
HAP needs to create quote-hap.json. He could write quotes manually, but wonders: could AI help generate developer wisdom quotes? Prof. Teeters says yes—but with responsibility and verification.

**What Station 6 will teach:**

- Using AI to generate quote content (prompt engineering)
- Creating quote-hap.json file in VS Code
- Using VS Code Source Control to stage, commit, and push
- Opening a pull request on GitHub
- Responsible AI use and verification

**Handoff is clean because:**

- No setup friction (already done)
- Clear task (create one JSON file)
- Tools are familiar (VS Code, validation)
- Workflow is established (fork → clone → edit → validate)

---

_Full documentation references:_

- _docs/designing-labs/hap-narrative-and-scene-design.md_
- _docs/reference-cards/hap-voice-card.md_
- _docs/reference-cards/character-quick-ref.md_
