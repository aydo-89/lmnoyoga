# LMNO Yoga - Brand Guidelines

## Brand Identity

**Name**: LMNO Yoga  
**Tagline**: Yoga, Sound Healing & Mindful Movement for Body and Soul  
**Voice**: Serene, elegant, minimal, calming, authentic

## Color Palette - "Serene Elegance"

### Primary Colors

```css
Sage Green: #9DBBAE
- Primary accent color
- Used for: CTAs, headers, hero overlays, borders
- RGB: 157, 187, 174
```

```css
Rich Black: #1A1A1A
- Primary text color
- Used for: Body text, headings, navigation
- RGB: 26, 26, 26
```

### Secondary Colors

```css
Light Gray: #F4F4F4
- Used for: Light backgrounds, sections
- RGB: 244, 244, 244
```

```css
Pale Blue: #E0E8F0
- Used for: Card backgrounds, secondary surfaces
- RGB: 224, 232, 240
```

```css
Silver: #D3D9DF
- Used for: Borders, subtle accents, dividers
- RGB: 211, 217, 223
```

```css
Background: #ECECEC
- Used for: Page background
- RGB: 236, 236, 236
```

## Typography

### Fonts

**Headings**: Inter (Bold, 700 weight)  
- Clean, modern sans-serif
- High contrast and clarity
- All caps for logo: "LMNO YOGA"

**Body**: Inter (Regular, 400 weight)  
- Same family for consistency
- Excellent readability

**Accent/Secondary**: Lora (serif)  
- Used sparingly for quotes or special sections
- Adds warmth and elegance

### Type Scale

```
Hero H1: 56px-64px (3.5rem-4rem)
Section H2: 48px (3rem)
Card H3: 32px (2rem)
Body: 16px (1rem)
Small: 14px (0.875rem)
```

## Logo Usage

**Primary Logo**: LMNO YOGA  
- All caps, bold sans-serif (Inter)
- Sage green (#9DBBAE) or white depending on background
- Minimum size: 120px width
- Clear space: Equal to height of "O" on all sides

**Color Variations**:
- **Light backgrounds**: Sage green (#9DBBAE)
- **Dark backgrounds**: White (#FFFFFF)
- **Hero/overlays**: White with sage overlay

## Hero Video

**Files**:
- `/public/hero-bg.webm` (preferred, 620KB)
- `/public/hero-bg.mp4` (fallback, 2.3MB)

**Treatment**:
- Looping, muted, autoplay
- Sage green overlay (70% opacity): `rgba(157, 187, 174, 0.7)`
- White text on top
- Smooth fade-in on load

## Design Principles

1. **Generous Whitespace**: Let content breathe
2. **Minimal & Serene**: No clutter, intentional use of elements
3. **Sage as Anchor**: Use sage green consistently for CTAs and accents
4. **Smooth Transitions**: 200ms duration for hover states
5. **Mobile-First**: Design for mobile, enhance for desktop
6. **Accessibility**: High contrast ratios (WCAG AA minimum)

## UI Components

### Buttons

**Primary (CTA)**:
- Background: Sage (#9DBBAE)
- Text: White
- Hover: Darker sage (#5d8d7e)
- Padding: 12px 32px
- Border-radius: 8px
- Font-weight: 600

**Secondary**:
- Background: White/Transparent
- Border: 2px solid Sage or Silver
- Text: Rich Black or Sage
- Hover: Background pale blue

### Cards

- Background: Pale Blue (#E0E8F0) or White
- Border-radius: 8px
- Shadow: Subtle (0 2px 4px rgba(0,0,0,0.05))
- Padding: 32px
- Border-left accent: 4px solid Sage

### Inputs

- Border: 1px solid Silver (#D3D9DF)
- Focus: 2px ring Sage
- Border-radius: 8px
- Padding: 12px 16px

## Photography Style

- **Mood**: Calm, serene, natural light
- **Subjects**: People in yoga poses, close-ups of hands/props, nature elements
- **Filters**: Desaturated slightly, warm tones, soft focus
- **Overlays**: Sage green gradient overlays for hero sections

## Iconography

- **Style**: Line icons (2px stroke)
- **Color**: Sage or Rich Black
- **Size**: 24px standard, 48px for feature highlights
- **Source**: Heroicons or similar minimal icon set

## Voice & Tone

- **Authentic**: Real, human, no corporate speak
- **Calming**: Slow pace, breathing room in copy
- **Encouraging**: Supportive, not prescriptive
- **Inclusive**: All bodies, all levels welcome
- **Grounded**: Practical wisdom over mystical jargon

## Writing Guidelines

- Use active voice
- Short paragraphs (2-3 sentences)
- Conversational but professional
- No AI-isms ("delve", "tapestry", "leverage")
- Emphasis on transformation, not perfection

## Asset Locations

- **Logo**: Text-based, "LMNO YOGA" in Inter Bold
- **Hero Videos**: `/public/hero-bg.webm`, `/public/hero-bg.mp4`
- **Favicon**: Sage green with "L" initial
- **OG Image**: 1200x630px (to be created)

## Tailwind Classes Reference

```css
bg-sage         /* Sage green background */
bg-pale-blue    /* Pale blue background */
bg-light-gray   /* Light gray background */
bg-background   /* Page background */
text-rich-black /* Primary text */
text-sage       /* Sage text/accent */
border-silver   /* Silver borders */
```

## Contact

For brand asset requests or questions:
- Email: hello@lmnoyoga.com
- Web: lmnoyoga.com
