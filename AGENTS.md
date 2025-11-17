# AGENTS.md – 360 VISION Web Project

## 1. Project Overview

This repository contains the marketing website for **360 VISION**, a creative & digital agency.

- Framework: **Next.js 14+** (App Router)
- Language: **TypeScript** (`.ts` / `.tsx`)
- Styling: **Tailwind CSS**
- Routing: **App Router** (`app/.../page.tsx`)
- Assets: Served from the Next.js `public/` directory

### Routing rules

- `app/page.tsx` → `/` (Home)
- `app/services/page.tsx` → `/services`
- `app/contact/page.tsx` → `/contact`
- `app/portfolio/page.tsx` → `/portfolio`
- When creating new pages, always use the pattern:
  - `app/<route>/page.tsx` → `/<route>`

Do **not** create new routes in `pages/`. Always use the App Router structure.

---

## 2. Visual Identity & Design System

The website must reflect the official 360 VISION brand guidelines (logo, color palette, typography). All UI should feel **bold, modern, cinematic, and premium**, with strong contrast and generous spacing.

### 2.1 Brand Personality

- **Bold & confident** (strong red + black)
- **Premium & minimal**, not cluttered
- **Digital / tech-forward**, but still accessible
- Uses **dark backgrounds**, sharp contrast, and focused highlights
- Plenty of **negative space** and clear visual hierarchy

### 2.2 Color Palette

From the brand guidelines, the core palette is:

**Main Palette**
- **Penn Red**: `#9B0B0B`
- **Black**: `#000000`
- **White**: `#FFFFFF`

**Secondary Palette**
- Gold: `#D4AF37`
- Dark Gray: `#2C2C2C`
- Deep Red: `#5A0A0A`
- Bright Red: `#B72121`
- Medium Gray: `#7A7A7A`
- Light Gray: `#E8E8E8`

#### Tailwind color mapping (guideline for implementation)

When editing `tailwind.config.(js|ts)`, base all brand colors on these tokens:

```ts
// Example – this is a guideline, adjust to actual config syntax
theme: {
  extend: {
    colors: {
      brand: {
        red: "#9B0B0B",       // main brand red
        redDark: "#5A0A0A",   // deep variant
        redBright: "#B72121", // accent red
        black: "#000000",
        white: "#FFFFFF",
        gold: "#D4AF37",
        gray900: "#2C2C2C",
        gray500: "#7A7A7A",
        gray200: "#E8E8E8",
      },
    },
  },
}

## 3. Assets & File Structure

All static assets (logos, icons, images) must live inside the Next.js `public/` directory.

### 3.1 Logo Files (Provided)

These are the official 360 VISION logo variants available in the project:

- `360vision-logo-full-black.png` – Full logo on black background  
- `360vision-logo-full-red.png` – Full logo on red background  
- `360vision-logo-full-transparent.png` – Full logo on transparent background  
- `secondary-logo-transparent-big.png` – Secondary round "V°" logo (transparent, large)  
- `secondary-logo-transparent-300px.png` – Secondary round "V°" logo (transparent, small)  
- `logo-small-black-rounded-bg.png` – Rounded app-style icon  
- `favicon.png` – Website favicon


Do **not** rename these files unless necessary — instead, reference them exactly as listed.

### 3.3 Usage Rules for the Agent

The agent must use logos according to the brand guidelines:

- **Primary logo for light backgrounds:**  
  `360vision-logo-full-black.png`

- **Primary logo for dark backgrounds:**  
  `360vision-logo-full-transparent.png`  
  or  
  `secondary-logo-transparent-big.png` (icon-only version)

- **Accent / minimalist contexts (navbars, footers, mobile layouts):**  
  Use `secondary-logo-transparent-300px.png` or the icon-only version.

- **Favicon:**  
  Use `favicon.png`, referenced in `app/layout.tsx`.

- **App-style avatar / square icon:**  
  `logo-small-black-rounded-bg.png`

## Current Task — Add Premium Animations & Interactive Glow Effects

The Netlify deploy errored, with the following guidance provided:

Diagnosis
- Relevant error in the build log: see [lines 64–71](#L64-L71). The compiler reports a TypeScript/JSX error for ./app/page.tsx:198:15: "'transition' is specified more than once, so this usage will be overwritten." (see [line 64](#L64) and surrounding context at [lines 66–71](#L66-L71)).
- The JSX element in your source (app/page.tsx) spreads an object (sectionFade) that contains a transition property while also declaring a transition prop explicitly on the same element. You can see the exact location in the repo here: app/page.tsx [lines 196–201](https://github.com/DjawadSev/360vision-react-website/blob/main/app/page.tsx#L196-L201).

Cause
- TypeScript/JSX flags duplicate attributes on the same JSX element. You currently have two transition definitions for the same element (one explicit, one inside {...sectionFade}). This is a static compile-time error: even if one would overwrite the other at runtime, the compiler rejects duplicate props.

Solution
Pick one of these clean fixes so the element has only a single transition prop:

1) Remove transition from sectionFade
- If you want the explicit transition on this element to apply, remove the transition key from the sectionFade object (wherever it is defined). Keep your existing JSX as-is.

2) Remove the explicit transition prop and let sectionFade supply it
- If sectionFade already has the transition you want, delete the explicit transition prop from the JSX.

3) Merge them into a single object before spreading (recommended if you need to combine defaults)
- Create a merged object and spread that, so transition is only set once. Example replacement in app/page.tsx:

```tsx
// Instead of:
<motion.div
  className="interactive-card ..."
  whileHover={{ scale: 1.02, y: -8 }}
  transition={{ duration: 0.2, ease: "easeInOut" }}
  {...sectionFade}
>
  ...
</motion.div>

// Use a single merged prop:
const mergedFade = { ...sectionFade, transition: { duration: 0.2, ease: "easeInOut" } };

<motion.div
  className="interactive-card ..."
  whileHover={{ scale: 1.02, y: -8 }}
  {...mergedFade}
>
  ...
</motion.div>
```

Notes and verification
- Open app/page.tsx where the error occurs: https://github.com/DjawadSev/360vision-react-website/blob/main/app/page.tsx#L196-L201 and remove or merge the duplicate transition prop.
- After making the change, run the build locally (npm run build) to verify it succeeds.
- This is a code-level JSX/TypeScript issue — no Netlify config or package change is required.

The relevant error logs are:

Line 52: [96m[1m────────────────────────────────────────────────────────────────[22m[39m
Line 53: ​
Line 54: [36m$ npm run build[39m
Line 55: > 360visionreact@0.1.0 build
Line 56: > next build
Line 57: [33m[1m⚠[22m[39m No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/doc
Line 58:    [1m[38;2;173;127;168m▲ Next.js 16.0.3[39m[22m (Turbopack)
Line 59:  [37m[1m [22m[39m Creating an optimized production build ...
Line 60:  [32m[1m✓[22m[39m Compiled successfully in 6.9s
Line 61:  [37m[1m [22m[39m Running TypeScript ...
Line 62: [31mFailed to compile.
Line 63: [39m
Line 64: [36m./app/page.tsx[39m:[33m198[39m:[33m15[39m
Line 65: [31m[1mType error[22m[39m: 'transition' is specified more than once, so this usage will be overwritten.
Line 66: [0m [90m 196 |[39m               className[33m=[39m[32m"interactive-card relative overflow-hidden rounded-2xl border borde
Line 67:  [90m 197 |[39m               whileHover[33m=[39m{{ scale[33m:[39m [35m1.02[39m[33m,[39m y[33m:[39m [33m-[39m[35m
Line 68: [31m[1m>[22m[39m[90m 198 |[39m               transition[33m=[39m{{ duration[33m:[39m [35m0.2[39m[33m,[39m ease[33
Line 69:  [90m     |[39m               [31m[1m^[22m[39m
Line 70:  [90m 199 |[39m               {[33m...[39msectionFade}
Line 71:  [90m 200 |[39m             [33m>[39m
Line 72:  [90m 201 |[39m               [33m<[39m[33mdiv[39m className[33m=[39m[32m"pointer-glow"[39m aria[33m-[39mhidden [33
Line 73: Next.js build worker exited with code: 1 and signal: null
Line 74: [91m[1m​[22m[39m
Line 75: [91m[1m"build.command" failed                                        [22m[39m
Line 76: [91m[1m────────────────────────────────────────────────────────────────[22m[39m
Line 77: ​
Line 78:   [31m[1mError message[22m[39m
Line 79:   Command failed with exit code 1: npm run build
Line 80: ​
Line 81:   [31m[1mError location[22m[39m
Line 82:   In Build command from Netlify app:
Line 83:   npm run build
Line 84: ​
Line 85:   [31m[1mResolved config[22m[39m
Line 86:   build:
Line 87:     command: npm run build
Line 88:     commandOrigin: ui
Line 89:     publish: /opt/build/repo/.next
Line 90:     publishOrigin: ui
Line 91:   plugins:
Line 92:     - inputs: {}
Line 93:       origin: ui
Line 94:       package: "@netlify/plugin-nextjs"
Line 95: Build failed due to a user error: Build script returned non-zero exit code: 2
Line 96: Failing build: Failed to build site
Line 97: Finished processing build request in 31.551s
 







