# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

**iluba.** is a landing page website for a two-founder digital studio offering design, development, and growth services. The site is built as a React SPA with i18n support (English and Croatian) and uses modern web development practices.

## Quick Start

```bash
# Install dependencies
npm install
# or
pnpm install

# Development server (runs on http://localhost:5173)
npm run dev

# Production build
npm run build
```

## Project Architecture

### Structure
```
src/
├── main.tsx                          # Entry point
├── app/
│   ├── App.tsx                      # Main component - renders all sections
│   ├── components/
│   │   ├── [Section].tsx            # Page sections: Hero, Services, Work, Process, Pricing, About, FAQ, Contact, Footer, Nav
│   │   ├── Testimonials.tsx         # (Currently commented out - removed fake testimonials)
│   │   ├── ui/                      # Radix UI component library (shadcn/ui style)
│   │   └── figma/
│   │       └── ImageWithFallback.tsx
│   └── hooks/
│       └── useReveal.ts             # Scroll animation trigger hook
├── i18n.ts                          # i18next configuration
├── locales/
│   ├── en/translation.json          # English translations
│   └── hr/translation.json          # Croatian translations
├── images/
└── styles/
    └── index.css                    # Global styles

```

### Page Sections Flow

The landing page renders sections in this order (see App.tsx):
1. **Nav** - Fixed navigation header
2. **Hero** - Full-height hero with headline, CTA, and stats
3. **Services** - 3-column grid (Design, Development, Digital Growth)
4. **Work** - Project portfolio with case studies (modal view)
5. **Process** - 4-step timeline (Discover → Design → Build → Launch)
6. **Pricing** - 3-tier pricing with "Contact for quote" instead of fixed prices
7. **About** - Founder info, company values, and stats
8. **FAQ** - 6 essential Q&A items (reduced from 9 for clarity)
9. **Contact** - Contact form (replaced Calendly embed) + info cards
10. **Footer** - Links and company info

## Key Technologies & Patterns

### React + TypeScript
- Functional components with hooks
- `useReveal()` hook for scroll-triggered animations
- `useState` for form state and modal controls
- `useTranslation()` from react-i18next for i18n

### Styling
- **Tailwind CSS** for utility classes (via @tailwindcss/vite)
- **Inline styles** for gradient backgrounds and custom colors (#FF5C35 orange theme)
- **Custom animations** in `<style>` tags within components (fadeInUp, float, pulse)
- No CSS modules — all styling is utility-first
- Color scheme: Clean, minimal with emphasis on #FF5C35 (orange), #0D0D0D (almost black), grays for text

### Internationalization (i18n)
- **i18next** + **react-i18next** for translations
- `useTranslation()` hook in components → `const { t } = useTranslation()`
- Translation keys organized hierarchically: `t("section.key")` → `hero.headline1`, `pricing.badge`, etc.
- Two languages: English (en) and Croatian (hr) in `src/locales/{lang}/translation.json`
- Language detection happens via `i18next-browser-languagedetector`

### UI Components
- Large library of **Radix UI** based components (Button, Dialog, Dropdown, etc.) in `src/app/components/ui/`
- These are provided but not heavily used in the landing page (which favors custom inline styling)
- Use Lucide React icons throughout (`.tsx` components render SVG icons)

### Icons
- **lucide-react** (v0.487.0) for all icons (ArrowRight, Star, Menu, X, etc.)
- Import: `import { IconName } from "lucide-react"` then `<IconName size={16} color="#FF5C35" strokeWidth={2} />`

## Important Implementation Details

### Color Palette
- Primary accent: `#FF5C35` (orange)
- Secondary accent: `#FF8A65` (lighter orange)
- Dark: `#0D0D0D` (almost black)
- Text: `#555`, `#666`, `#777`, `#888`, `#AAA`
- Backgrounds: `white`, `#FAFAF8` (warm off-white), `#F5F5F5` (light gray)
- Borders: `#EBEBEB`, `#E0E0E0`, `#F0F0F0`

### Animations
All animations are CSS-based (no JavaScript libraries needed):
- `fadeInUp` — opacity + translateY
- `float1`, `float2`, `float3` — looping translate + scale
- `pulse` — opacity pulsing
- Scroll-triggered animations via `useReveal()` hook (Intersection Observer)

### Forms
The **Contact** section now includes a custom form component (`ContactForm`) that:
- Accepts name, email, project type, and message
- Validates required fields (browser-native validation)
- Shows "Message sent! ✓" on submit (with button color change to green)
- Resets form after 3 seconds
- TODO: Wire up actual form submission (currently logs to console)

### Pricing Model
Changed to "Contact for quote" approach:
- No fixed prices displayed
- All plans show "Contact for quote" instead of dollar amounts
- Period labels (one-time/monthly) are hidden

### FAQ
Reduced to 6 essential questions only (removed "international clients", "payment structure", and "what makes us different"):
1. How long does a typical project take?
2. What's included in a web design and development project?
3. Do you provide digital marketing and growth services?
4. Can I book a call to discuss my project before committing?
5. How do you handle revisions and feedback?
6. Do you offer SEO as a standalone service?

### Removed Components
- **Testimonials** — Commented out in App.tsx (section felt inauthentic)
- **Calendly embed** — Replaced with custom contact form
- Calendly script loading — Removed from App.tsx useEffect

## Development Guidelines

### When Adding New Sections
1. Create component in `src/app/components/[SectionName].tsx`
2. Use `useReveal()` hook for scroll animations
3. Import translations in component: `const { t } = useTranslation()`
4. Add strings to both `src/locales/en/translation.json` and `src/locales/hr/translation.json`
5. Import component in `src/app/App.tsx` and add to render (or comment out if needed)
6. Export as named export: `export function SectionName() { ... }`

### When Modifying Styling
- Use Tailwind classes for layout/spacing
- Use inline styles for brand colors, gradients, and animations
- Keep colors consistent with the palette above
- Test on mobile (breakpoints: `md:` for ~768px+)

### When Adding Translations
- Keep keys organized hierarchically
- Update **both** `en` and `hr` translation files together
- Test language switcher in Nav (top right)
- Use `returnObjects: true` when fetching arrays/objects from translations

### Image Handling
- Project images in Work section are imported from `src/images/`
- FAQ and other sections use Lucide icons (React components) instead of static images
- Use next-themes setup if dark mode is needed later

## Build & Deployment

- **Vite** is configured with React plugin and Tailwind CSS
- Build output goes to `dist/` folder
- Gzip bundle size: ~92.6 KB (good for a landing page)
- No external Calendly embed in production (replaced with contact form)

## Common Tasks

### Run dev server with HMR
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Check bundle size
```bash
npm run build
# Check dist/ folder size
```

### Add a new language
1. Create `src/locales/[lang]/translation.json`
2. Add language to i18next config in `src/i18n.ts`
3. Update Nav language switcher logic if needed

### Test a specific section
- Scroll to that section in dev server, or
- Add `id="section-name"` and use navigation buttons to jump to it

## Notes for Future Development

- **Form submission**: The Contact form currently logs to console. Integrate with email service (Sendgrid, Mailgun, etc.) or backend endpoint.
- **Analytics**: SEO meta tags are minimal. Consider adding Open Graph tags, structured data (JSON-LD), and Plausible/Fathom analytics.
- **Performance**: Images in Work section could use next-image-like optimization (lazy load, srcset).
- **A/B Testing**: Consider adding conversion tracking for different CTA variations.
- **Real testimonials**: If authentic testimonials become available, uncomment Testimonials component and populate with real data.
