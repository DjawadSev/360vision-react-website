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

#### 3.3 Usage Rules for the Agent

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


netlify is failing deployment in the build step and returns this message :

4:16:03 PM: Netlify Build                                                 
4:16:03 PM: ────────────────────────────────────────────────────────────────
4:16:03 PM: ​
4:16:03 PM: ❯ Version
4:16:03 PM:   @netlify/build 35.3.4
4:16:03 PM: ​
4:16:03 PM: ❯ Flags
4:16:03 PM:   accountId: 64872a033cc8363d8885098d
4:16:03 PM:   baseRelDir: true
4:16:03 PM:   buildId: 691b3c257400281b23e75886
4:16:03 PM:   deployId: 691b3c257400281b23e75888
4:16:03 PM: ​
4:16:03 PM: ❯ Current directory
4:16:03 PM:   /opt/build/repo
4:16:03 PM: ​
4:16:03 PM: ❯ Config file
4:16:03 PM:   No config file was defined: using default values.
4:16:03 PM: ​
4:16:03 PM: ❯ Context
4:16:03 PM:   production
4:16:03 PM: ​
4:16:03 PM: ❯ Using Next.js Runtime - v5.14.5
4:16:04 PM: Next.js cache restored
4:16:04 PM: ​
4:16:04 PM: Build command from Netlify app                                
4:16:04 PM: ────────────────────────────────────────────────────────────────
4:16:04 PM: ​
4:16:04 PM: $ npm run build
4:16:04 PM: > 360visionreact@0.1.0 build
4:16:04 PM: > next build
4:16:05 PM:    ▲ Next.js 16.0.3 (Turbopack)
4:16:05 PM:    Creating an optimized production build ...
4:16:14 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2)
4:16:11 PM:  ✓ Compiled successfully in 6.1s
4:16:11 PM:    Running TypeScript ...
4:16:14 PM: Failed to compile.
4:16:14 PM: 
4:16:14 PM: ./app/page.tsx:198:15
4:16:14 PM: Type error: 'transition' is specified more than once, so this usage will be overwritten.
4:16:14 PM:   196 |               className="interactive-card relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[var(--brand-red-dark)]/40 via-black/60 to-black/60 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
4:16:14 PM:   197 |               whileHover={{ scale: 1.02, y: -4 }}
4:16:14 PM: > 198 |               transition={{ duration: 0.2, ease: "easeOut" }}
4:16:14 PM:       |               ^
4:16:14 PM:   199 |               {...sectionFade}
4:16:14 PM:   200 |             >
4:16:14 PM:   201 |               <div className="pointer-glow" aria-hidden />
4:16:14 PM: Next.js build worker exited with code: 1 and signal: null
4:16:14 PM: ​
4:16:14 PM: "build.command" failed                                        
4:16:14 PM: ────────────────────────────────────────────────────────────────
4:16:14 PM: ​
4:16:14 PM:   Error message
4:16:14 PM:   Command failed with exit code 1: npm run build (https://ntl.fyi/exit-code-1)
4:16:14 PM: ​
4:16:14 PM:   Error location
4:16:14 PM:   In Build command from Netlify app:
4:16:14 PM:   npm run build
4:16:14 PM: ​
4:16:14 PM:   Resolved config
4:16:14 PM:   build:
4:16:14 PM:     command: npm run build
4:16:14 PM:     commandOrigin: ui
4:16:14 PM:     publish: /opt/build/repo/.next
4:16:14 PM:     publishOrigin: ui
4:16:14 PM:   plugins:
4:16:14 PM:     - inputs: {}
4:16:14 PM:       origin: ui
4:16:14 PM:       package: "@netlify/plugin-nextjs"
4:16:14 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
4:16:14 PM: Failing build: Failed to build site
4:16:14 PM: Finished processing build request in 23.493s

go through the code analyse and detect possible issues and fix them
 run tests to make sure fixes are good, also make sure that animations trigger after a short period of time like 0.6 ms not just on scrolll
 







