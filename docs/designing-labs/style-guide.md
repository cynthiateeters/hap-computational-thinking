# HAP's Learning Lab style guide

A comprehensive design system documentation for the static site generation learning platform.

---

## Color palette

The design system uses a warm, scientific color palette optimized for readability and accessibility.

### Primary colors

- **Warm orange** (`hsl(32, 76%, 37%)`) — Primary accent color used for HAP branding, buttons, and key UI elements
- **Soft orange** (`hsl(35, 83%, 74%)`) — Lighter companion for borders, hover states, and backgrounds
- **Peach background** (`hsl(32, 41%, 90%)`) — Subtle warm background for large sections and page gradients
- **Cream white** (`hsl(32, 100%, 98%)`) — Primary background color for cards, callouts, and text areas

### Text colors

- **Dark brown** (`hsl(28, 45%, 16%)`) — Primary text color for headings and body copy
- **Medium brown** (`hsl(22, 22%, 34%)`) — Secondary text for less prominent content
- **Light brown** (`hsl(24, 18%, 53%)`) — Tertiary text for explanatory or supporting content

### Accent colors

- **Teal accent** (`hsl(168, 28%, 44%)`) — Secondary accent for highlights and specific callouts
- **Teal darker** (`hsl(168, 34%, 33%)`) — Accessible variant for normal text (4.5:1 contrast ratio)
- **Success green** (`hsl(102, 41%, 56%)`) — Positive feedback, success states, and confirmations
- **Success darker** (`hsl(142, 76%, 36%)`) — Accessible variant for normal text on backgrounds
- **Warning red** (`hsl(349, 71%, 64%)`) — Error states, warnings, and destructive actions
- **Error darker** (`hsl(0, 73%, 50%)`) — Darker variant for better contrast on light backgrounds

### Backgrounds and supporting colors

- **HyBit gray** (`hsl(220, 12%, 57%)`) — Gray used for HAP avatar backgrounds and neutral UI
- **UI border light** (`hsl(0, 0%, 87%)`) — Light borders and subtle dividers
- **Text muted** (`hsl(0, 0%, 40%)`) — Disabled or less important text (check WCAG compliance)
- **Code background dark** (`hsl(0, 0%, 18%)`) — Dark background for code blocks
- **Code background darker** (`hsl(217, 33%, 17%)`) — Darker variant for special code blocks
- **Code text light** (`hsl(60, 30%, 96%)`) — Light text for code on dark backgrounds

### Semantic background colors

- **Success light** (`hsl(138, 76%, 97%)`) — Light green background for success examples
- **Error light** (`hsl(0, 86%, 97%)`) — Light red background for error examples
- **Teal light** (`hsl(168, 56%, 89%)`) — Light teal background for informational examples
- **Warning light** (`hsl(48, 100%, 90%)`) — Light yellow background for warnings

---

## Typography

The site uses two modern variable fonts for optimal performance and readability.

### Font families

**Nunito** (`'Nunito', system-ui, sans-serif`)

- Primary font for all UI text, headings, and body content
- Variable font with weight range 200-1000
- Includes italic variant for emphasis
- Local WOFF2 files preloaded for performance
- Font-display: swap for optimal loading experience

**Source Code Pro** (`'Source Code Pro'`)

- Monospace font used exclusively for code examples and technical content
- Variable font with weight range 200-900
- Includes italic variant for special code contexts
- Local WOFF2 files preloaded for performance
- Used in code blocks, inline code, and terminal examples

### Font sizes and hierarchy

All font sizes use `clamp()` for responsive scaling across devices.

#### Headings

- **h1** — Clamp 2rem to 3.5rem, using font-weight 700
- **h2** — Clamp 1.5rem to 2.5rem, using font-weight 700
- **h3** — Clamp 1.2rem to 1.5rem, using font-weight 700
- **h4** — Clamp 1rem to 1.15rem, using font-weight 700

#### Body text

- **Default body** — 1rem (16px), line-height 1.7
- **Large text** — 1.25rem, line-height 1.6
- **Small text** — 0.9rem, line-height 1.6
- **Helper text** — 0.85rem, color: var(--text-muted)

#### Line height

- Default: 1.7 for improved readability in body text
- Code blocks: 1.6 for compact code display
- Callouts: 1.6 for balance between spacing and readability

---

## Layout system

The site uses a flexible CSS Grid and Flexbox layout system with mobile-first responsive design.

### Container widths

- **Content container** — Max-width 1200px with responsive padding (clamp 1rem to 2rem)
- **Readable width standard** — 75ch for comfortable line length
- **Readable width narrow** — 65ch for dense content
- **Readable width wide** — 85ch for spacious layouts
- **Card max-width** — 900px for callouts and information boxes
- **Intro box max-width** — 800px for header introductions

### Grid system

**Overview grid** (3-column responsive)

- `grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr))`
- Gap: 2rem
- Used for insight cards and feature displays
- Responsive: stacks to single column on narrow screens

**Lighthouse checks grid** (2-column auto-fit)

- `grid-template-columns: auto 1fr`
- Column 1: check type labels (font-weight 700)
- Column 2: reason/description text
- Gap: 1rem 1.5rem
- Responsive: stacks on mobile with visual separator

**Analysis grid**

- Flexible grid for content analysis and structured information
- Adapts column count based on content

### Spacing system

- **Margin** — 2rem for major section separation
- **Padding** — 1.5rem standard for callouts and cards, 2rem for topic sections
- **Gap** — 1.5rem for flex and grid gaps in components, 2rem for larger separations
- **Border radius** — 16px (--radius) standard, 24px (--radius-lg) for larger containers

### Responsive breakpoints

- **Mobile** — Max-width: 768px (stack layouts, single column)
- **Desktop** — Min-width: 769px (multi-column layouts)

#### Mobile adjustments

- Flex containers stack to column direction
- HAP note callouts center-align with column direction
- Images adjust margin bottom instead of side gaps
- Grid layouts reduce to single column
- Font sizes remain responsive with clamp()

### Component patterns

**Header section**

- Cream white background with bottom border-radius
- Shadow: var(--shadow-sm)
- Padding: clamp(1rem, 4vw, 2rem)
- Margin-bottom: 3rem
- Background radial gradient effect (orange, 8% opacity)

**HAP note callout**

- Background: linear-gradient 135deg from cream-white to peach-background
- Border: 2px solid warm-orange
- Border-radius: 16px (var(--radius))
- Padding: 1.5rem
- Margin: 2rem auto
- Max-width: 900px
- Display: flex with gap 1.5rem
- Align-items: center (or flex-start depending on content)
- Justify-content: center
- Box-shadow: var(--shadow-sm)
- Mobile: flex-direction column, align-items center, text-align center
- Contains: HAP image (flex-shrink: 0) + content div (flex: 1)

**Insight card**

- Background: cream-white
- Border-radius: 16px
- Padding: 2rem
- Box-shadow: var(--shadow-md)
- Border: 2px solid transparent
- Hover: border-color becomes soft-orange, transform translateY(-4px)
- Transition: all 0.3s ease

**Topic section**

- Background: cream-white
- Border-radius: 24px
- Padding: 2rem
- Margin: 2rem 0
- Box-shadow: var(--shadow-md)

**Intro box**

- Background: peach-background
- Border: 2px solid soft-orange
- Border-radius: 16px (var(--radius))
- Padding: 1.5rem
- Margin: 2rem auto
- Max-width: 800px
- No flex layout (simple block container)
- Used for contextual information, learning objectives, or clarifying points

---

## Images

Images are served via Cloudinary CDN with optimized delivery and responsive sizing.

### HAP character images

All HAP images are stored on Cloudinary with specific filenames and version numbers.

#### Image endpoints

Base URL: `https://res.cloudinary.com/cynthia-teeters/image/upload/`

#### Cloudinary parameters

- `f_auto` — Automatic format selection (WebP when supported)
- `q_auto` — Automatic quality optimization
- `w_[SIZE]` — Width constraint (80, 150, or 200 pixels)
- `c_limit` — Limit scaling to prevent upscaling
- `v[VERSION]` — Version number for cache busting

#### Recommended sizes

- **Small icons** — w_80 (80px width)
- **Medium callouts** — w_150 (150px width)
- **Large hero images** — w_200 (200px width)

### HAP image usage

**Hero images** (fetchpriority="high")

- Used at page top or critical viewport
- HAP laptop learning image (w_200)
- Preload in `<head>` for performance
- Example: `hap-laptop_xiewar` with v1759495998

**Callout images** (loading="lazy")

- Used in mid-page HAP note callouts
- 150px width for balanced layout
- Lazy load for performance
- Examples:
  - HAP confused learning: `hap-confused-map_q8q0ej`
  - HAP learning with study guide: `HAP-learner_dvehmt`
  - HAP celebrating: `hap-celebrating_bljvgl`
  - HAP brain-explodes realization: `hap-brain-explodes_wu0or8`

**Footer images** (loading="lazy")

- Small images in footer or end of page
- 80-150px width
- Lazy load for performance
- Example: `hap-waving_dgzacg`

### Image attributes

All images use explicit dimensions for layout stability.

```html
<img
  src="https://res.cloudinary.com/cynthia-teeters/image/upload/f_auto,q_auto,w_150,c_limit/v1759495998/hap-laptop_xiewar.jpg"
  alt="HAP studying on his laptop"
  width="150"
  height="150"
  class="hap-note-image"
  decoding="async"
  loading="lazy"
/>
```

#### Required attributes

- `src` — Valid Cloudinary URL with format, quality, width, and version parameters
- `alt` — Descriptive text matching image content
- `width` and `height` — Explicit dimensions (80, 150, or 200)
- `class` — Either `hap-note-image` or `footer-hybit`
- `decoding="async"` — For performance
- `loading` — Either `"lazy"` (below-fold) OR omitted (above-fold with fetchpriority)
- `fetchpriority="high"` — For hero/LCP images only, omit for lazy-loaded images

### Responsive images

Images use srcset for pixel density optimization on hero images:

```html
<img
  src="https://res.cloudinary.com/cynthia-teeters/image/upload/f_auto,q_auto,w_120,c_limit/v1759495998/hap-waving_dgzacg.jpg"
  srcset="
    https://res.cloudinary.com/cynthia-teeters/image/upload/f_auto,q_auto,w_120,c_limit/v1759495998/hap-waving_dgzacg.jpg 1x,
    https://res.cloudinary.com/cynthia-teeters/image/upload/f_auto,q_auto,w_240,c_limit/v1759495998/hap-waving_dgzacg.jpg 2x
  "
  alt="HAP waving hello"
  width="120"
  height="120"
  decoding="async"
/>
```

### Favicon strategy

- 16x16 PNG for browser tabs
- 32x32 PNG for browser tabs (high DPI)
- 180x180 PNG for Apple touch icon
- 192x192 PNG for Android chrome
- All served via Cloudinary with `f_png` format parameter

---

## Shadows and visual depth

The design uses subtle shadows to create hierarchy and depth without visual clutter.

### Shadow definitions

- **Small shadow** (`--shadow-sm`) — `0 4px 6px hsl(28, 45%, 16% / 0.06)` — Used for light elevation on cards
- **Medium shadow** (`--shadow-md`) — `0 8px 12px hsl(28, 45%, 16% / 0.08)` — Used for prominent cards and callouts

### Shadow usage

- Header: `var(--shadow-sm)`
- Intro boxes: `var(--shadow-sm)`
- HAP note callouts: `var(--shadow-sm)`
- Insight cards: `var(--shadow-md)` with hover intensification
- Topic sections: `var(--shadow-md)`
- Navigation tabs (hover): `var(--shadow-sm)`

---

## Navigation patterns

The site uses consistent navigation patterns across all pages.

### Page navigation

`.page-navigation` class

- Display: flex with responsive gap
- Alignment: space-between or center depending on content
- Styling: nav-links with hover effects
- Sections: top navigation and bottom navigation on each page

### Navigation links

- `.nav-link` — Standard navigation link styling
- `.hub-link` — Special styling for link back to hub page
- Color: dark-brown
- Hover: warm-orange background or text-decoration underline

### Navigation tabs

- `.nav-tab` class for individual tab buttons
- Padding: 0.75rem 1.5rem, min-height: 80px
- Background: cream-white, border: 2px solid soft-orange
- Hover: soft-orange background, translateY(-2px), shadow-sm
- Active: warm-orange background with peach text
- Transition: all 0.3s ease
- Font: 600 weight, clamp(0.9rem to 1.2rem)

---

## Accessibility features

The design system includes multiple accessibility features for WCAG 2.2 Level AA compliance.

### Color contrast

All text colors meet WCAG AA standards:

- Normal text: 4.5:1 minimum contrast ratio
- Large bold text (≥18px or ≥14px bold): 3:1 minimum contrast ratio
- Dark brown text on cream background: 7.3:1 contrast ratio
- Teal darker on cream background: 5.1:1 contrast ratio

### Skip link

- Position: absolute, off-screen by default
- On focus: visible with dark-brown background, cream-white text
- Z-index: 9999 to appear above all content
- Keyboard accessible with Tab key

### Semantic HTML

- Header with navigation landmarks
- Main content area with id="main-content"
- Sections with appropriate heading hierarchy
- Buttons and links with descriptive text
- Form elements with proper labels

### Focus states

- All interactive elements have visible focus indicators
- Focus outline or background change on Tab navigation
- Navigation tabs show active state visually

---

## Performance optimizations

The design system includes performance-focused features.

### Font loading

- Variable fonts reduce file size (single file = multiple weights)
- WOFF2 format for modern browsers
- `font-display: swap` for non-blocking font loading
- Preload critical fonts in `<head>`

### Image optimization

- Cloudinary CDN for global distribution
- Automatic format selection (WebP when supported)
- Automatic quality optimization
- Responsive sizing with width parameters
- Lazy loading for below-fold images
- Fetchpriority="high" for above-fold images

### CSS variables

- Single source of truth in `:root` block
- Reduced redundant CSS
- Easy to audit and maintain
- Supports dynamic theme changes

### Layout stability

- Explicit width and height on images prevents layout shift
- Adequate padding prevents text reflow
- Fixed spacing maintains consistency

---

## Code examples

### Utility spacing classes

Use these utility classes for consistent vertical spacing:

- `.mt-1` — Margin-top: 1rem
- `.mt-2` — Margin-top: 2rem
- `.mb-1` — Margin-bottom: 1rem
- `.mb-2` — Margin-bottom: 2rem

### Section structure

Wrap all major content in `<section class="content-section">`:

```html
<section class="content-section">
  <h2 class="section-heading-centered">Section Title</h2>
  <!-- Section content -->
</section>
```

### Creating a new insight card

```html
<div class="insight-card">
  <h3><span class="insight-icon">🎯</span> Card title</h3>
  <p class="stat-large">Key Statistic</p>
  <p>Description text goes here.</p>
</div>
```

**Note:** Use `.stat-large` for highlighted statistics. Add `.stat-teal` or `.stat-brown` for colored variants.

### Creating a HAP note callout

```html
<div class="hap-note-callout">
  <img
    src="https://res.cloudinary.com/cynthia-teeters/image/upload/f_auto,q_auto,w_150,c_limit/v1763230414/hap-broke-things_qtbum4.jpg"
    alt="HAP looking embarrassed"
    width="150"
    height="150"
    class="hap-note-image"
    decoding="async"
    loading="lazy"
  />
  <div class="hap-note-content">
    <h3>HAP's Confession:</h3>
    <ul>
      <li>First mistake I made... 😳</li>
      <li>Second lesson I learned...</li>
    </ul>
  </div>
</div>
```

**Note:** HAP note callouts can contain paragraphs, lists, or other content. Use unordered lists for confessions.

### Creating a HAP note callout without image

When you want a simple callout without an image:

```html
<div class="hap-note-callout mt-2">
  <div class="hap-note-content">
    <h3>🟠 What I learned:</h3>
    <p>Key insight or lesson goes here.</p>
  </div>
</div>
```

### Creating an intro box

Used for contextual information or learning objectives:

```html
<div class="intro-box">
  <p><strong>HAP's Discovery:</strong> I used to think... But I learned...</p>
</div>
```

**Or with a bulleted list:**

```html
<div class="intro-box">
  <p><strong>Why this matters:</strong></p>
  <ul class="mt-1">
    <li><strong>Point 1</strong> — Description</li>
    <li><strong>Point 2</strong> — Description</li>
  </ul>
</div>
```

### Creating an overview grid

```html
<div class="overview-grid mt-2">
  <div class="insight-card">
    <h3><span class="insight-icon">🍴</span> Card title</h3>
    <p class="stat-large">Key Stat</p>
    <p>Description goes here.</p>
  </div>
  <div class="insight-card">
    <h3><span class="insight-icon">💻</span> Card title</h3>
    <p class="stat-large stat-teal">Key Stat</p>
    <p>Description goes here.</p>
  </div>
  <div class="insight-card">
    <h3><span class="insight-icon">✅</span> Card title</h3>
    <p class="stat-large stat-brown">Key Stat</p>
    <p>Description goes here.</p>
  </div>
</div>
```

### Creating an analysis grid

Used for side-by-side comparisons or related information:

```html
<div class="analysis-grid">
  <div class="analysis-point">
    <h3>Point Title 1</h3>
    <p>Description of first point.</p>
    <p class="mt-1"><strong>Why this matters:</strong> Additional context.</p>
  </div>
  <div class="analysis-point">
    <h3>Point Title 2</h3>
    <p>Description of second point.</p>
  </div>
</div>
```

### Creating a topic section

Wrap conceptual content in topic sections:

```html
<section class="content-section">
  <div class="topic-section">
    <h2>Main Topic Heading</h2>

    <p class="mb-2">Introduction paragraph explaining the concept.</p>

    <h3 class="mt-2">Subsection Heading</h3>

    <div class="analysis-grid">
      <!-- Analysis points -->
    </div>
  </div>
</section>
```

### Creating a warning box

For important warnings or common mistakes:

```html
<div class="warning-box mt-2">
  <h3>⚠️ Common Mistakes I Made</h3>

  <div class="mt-2">
    <h4>Mistake Title</h4>
    <p>Explanation of the mistake.</p>
  </div>

  <div class="mt-2">
    <h4>Another Mistake</h4>
    <p>What I learned from this.</p>
  </div>
</div>
```

### Creating code blocks (Astro sites)

For Astro-based sites using the CodeBlock component:

```astro
<CodeBlock
  code={`{
  "author": "Example Contributor",
  "about": "Demonstrating structure",
  "entries": [
    {
      "id": "example-001",
      "category": "developer-wisdom",
      "text": "Your quote here"
    }
  ]
}`}
  lang="json"
/>
```

**Note:** Use appropriate language identifiers: `html`, `css`, `javascript`, `json`, `bash`, `text`

**Automatic styling:**

The `CodeBlock` component automatically wraps code in a `.code-block-wrapper` with:

- Border: 2px solid dark brown (`hsl(22, 22%, 34%)`)
- No background (transparent for accessibility/contrast)
- Copy button in top-right corner (appears on hover)
- Responsive padding (1.5rem on desktop, 1rem on tablet, 0.75rem on mobile)
- Border-radius: 16px

The border-only approach maintains visual distinction while ensuring proper color contrast for accessibility compliance.

### Creating prompt boxes (HTML-based sites)

For HTML-based HAP labs showing code examples:

```html
<div class="prompt-box mt-2">
  <div class="prompt-label">What I Learned:</div>
  <pre><code class="language-css">.button {
  background: var(--primary);
}
.button:hover {
  background: color-mix(in srgb, var(--primary) 80%, white);
}</code></pre>
  <p class="code-comment mt-1">
    <strong>Educational note:</strong> Explanation of the code pattern.
  </p>
</div>
```

**Important:** Always include `class="language-[type]"` on `<code>` tags for proper syntax highlighting with Prism.js

---

## Component usage patterns

### When to use each component

**Intro box**

Use for:

- Learning objectives at the start of sections
- "Why this matters" explanations
- Contextual setup before diving into details
- Lists of key points or prerequisites

Don't use for:

- HAP's personal insights (use HAP note callout)
- Code examples (use prompt-box or CodeBlock)
- Warnings (use warning-box)

**HAP note callout**

Use for:

- HAP's confessions about mistakes
- Personal learning moments
- "What I learned" insights
- Breakthrough realizations

With image when:

- Expressing emotion (embarrassed, celebrating, confused)
- Major learning moments
- Confessions about mistakes

Without image when:

- Simple tips or insights
- Quick clarifications
- Brief observations

**Insight card** (in overview-grid)

Use for:

- Station introduction "What You'll Learn" sections
- Exactly 3 cards highlighting key concepts
- Statistics or key metrics
- High-level concept previews

Don't use for:

- Detailed explanations (use topic-section)
- Step-by-step instructions (use analysis-grid)
- Code examples

**Analysis grid**

Use for:

- Side-by-side comparisons
- Related information that should be scanned together
- Breaking down complex concepts into parts
- Git vs GitHub, Original vs Fork comparisons

**Topic section**

Use for:

- Major conceptual explanations
- Wrapping multiple subsections
- Teaching a complete topic
- Contains headings, paragraphs, analysis grids, code examples

**Warning box**

Use for:

- Common mistakes
- Important caveats
- Things to avoid
- Critical reminders

### Heading hierarchy within sections

```html
<section class="content-section">
  <h2 class="section-heading-centered">Main Section Title</h2>

  <div class="topic-section">
    <h2>Topic Heading (not centered)</h2>

    <p class="mb-2">Introduction paragraph.</p>

    <h3 class="mt-2">Subsection Heading</h3>

    <div class="analysis-grid">
      <div class="analysis-point">
        <h3>Point Title (within analysis-point)</h3>
        <p>Content.</p>
      </div>
    </div>

    <h4>Minor Heading (within warning-box or nested content)</h4>
  </div>
</section>
```

**Rules:**

- Section-level h2 gets `class="section-heading-centered"`
- Topic-section h2 is left-aligned (no class)
- Use h3 for subsections and analysis-point titles
- Use h4 for minor headings within warning boxes
- Never skip heading levels

### Lists within components

**Within intro-box:**

```html
<div class="intro-box">
  <p><strong>Why Magic Quotes works for learning:</strong></p>
  <ul class="mt-1">
    <li><strong>Real and deployed</strong> — Explanation</li>
    <li><strong>Beginner-friendly structure</strong> — Explanation</li>
  </ul>
</div>
```

**Within HAP note callout:**

```html
<div class="hap-note-callout">
  <div class="hap-note-content">
    <h3>HAP's Confession:</h3>
    <ul>
      <li>First mistake... 😳</li>
      <li>Second lesson...</li>
    </ul>
  </div>
</div>
```

**Rules:**

- Use `class="mt-1"` on lists after paragraphs for spacing
- Use unordered lists (`<ul>`) for non-sequential items
- Use ordered lists (`<ol>`) for steps or sequential instructions
- Keep list items concise and scannable

### Inline code vs code blocks

**Inline code:**

```html
<p>Running <code>npm install</code> gets the tools you need.</p>
```

**Code blocks (Astro):**

```astro
<CodeBlock code={`command here`} lang="bash" />
```

**Code blocks (HTML):**

```html
<div class="prompt-box">
  <pre><code class="language-bash">npm install</code></pre>
</div>
```

**Rules:**

- Use inline `<code>` for short commands, file names, or variables
- Use code blocks for multi-line examples
- Always specify language for syntax highlighting
- Add explanatory text with `class="code-comment mt-1"` after code blocks

---

## Design principles

The style guide follows these core principles:

- **Warm and approachable** — Orange and warm tones create a friendly, educational atmosphere
- **Accessible** — WCAG AA compliance ensures usability for all learners
- **Performant** — Optimized fonts, images, and CSS reduce load times
- **Semantic** — HTML structure reflects content meaning and hierarchy
- **Responsive** — Flexbox and Grid adapt to all screen sizes
- **Consistent** — Reusable components and patterns ensure visual coherence
- **Educational** — Visual hierarchy guides learner attention and comprehension

---

**Report created:** January 5, 2026
**Status:** Complete design system documentation
