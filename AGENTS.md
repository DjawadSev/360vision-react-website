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

### current task : 

add the following contact information to the hero section and the contact page "Cité Saidi ahmed CICAD part N47 Bureau N17 Brodj el kiffan
contact@360vision.io
+213 770072036" 

changes the services to 


"3D Visualization
Discover captivating 3D visualization and animation services with 360 Vision.
From photorealistic product renders to immersive brand experiences, our expert team transforms your concepts into high-impact visuals that boost engagement, increase conversions, and strengthen brand recall.

Digital Marketing
Achieve real results with our full-service digital marketing solutions at 360 Vision.
From data-driven SEO and PPC to engaging social campaigns and conversion-focused content, we help brands expand their visibility, attract qualified leads, and improve their return on investment (ROI).

Flatlay of a business analytics report, keyboard, pen, and smartphone on a wooden desk.

Branding & Creative Design Services
At 360 Vision, we craft brands that stand out and leave a lasting impression.
From logo creation to complete visual identity systems, we combine strategic thinking with artistic precision to design visuals that capture attention, build trust, and tell your story with impact."

add an about us section in the home page that contains : "
About Us.
We’re not just a social media agency. We’re a growth partner.
360 Vision is a full-stack creative and marketing agency built by strategists, designers, developers, and analysts — all focused on one thing: helping brands grow with precision and impact.
From content creation to paid media, 3D production to CRM integration, we don’t just offer services — we build systems that convert attention into results."








