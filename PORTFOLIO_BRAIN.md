# Kunal Portfolio — Brain & System Operating Manual

This document is the **Single Source of Truth** and operating manual for Kunal's developer portfolio. Whenever Kunal requests any update, modification, or addition, consult this manual first to know **which file is where, how data flows, and which rules must never be broken**.

---

## 1. Quick File Map & Responsibilities

| File Path | Purpose & Responsibilities |
| :--- | :--- |
| [`src/data/portfolioData.ts`](file:///s:/Antigravity/Kunal%20portfolio/src/data/portfolioData.ts) | **Single Source of Truth**. All personal info, bio, tech stack, project details, modules, responsibilities, screenshots, and metadata live here. Update here first! |
| [`src/app/page.tsx`](file:///s:/Antigravity/Kunal%20portfolio/src/app/page.tsx) | **Home Page Router**. Controls the top-level section order: `Hero` &rarr; `Projects` &rarr; `Experience` &rarr; `SkillsMatrix` (Technologies & Core Tools). (Contact moved to `/contact`). |
| [`src/app/template.tsx`](file:///s:/Antigravity/Kunal%20portfolio/src/app/template.tsx) | **Page Transition Engine**. Next.js template that re-mounts on every route change, firing a hardware-accelerated slide/fade-in and an Aqua top progress indicator. |
| [`src/app/contact/page.tsx`](file:///s:/Antigravity/Kunal%20portfolio/src/app/contact/page.tsx) | **Dedicated Contact Page**. Full separate route (`/contact`) with direct communication channels, verified profiles, scope cards, and interactive message form. |
| [`src/app/projects/[slug]/page.tsx`](file:///s:/Antigravity/Kunal%20portfolio/src/app/projects/[slug]/page.tsx) | **Dynamic Project Detail Router**. Renders `/projects/[slug]` with headers, modules, architecture diagrams, and screenshot galleries. |
| [`src/components/ProjectScreenshotGallery.tsx`](file:///s:/Antigravity/Kunal%20portfolio/src/components/ProjectScreenshotGallery.tsx) | **Interactive Gallery & Fullscreen Lightbox Modal**. Handles scrollable in-phone viewports, desktop browser frames, and full-resolution modal with &larr; / &rarr; arrow key navigation. |
| [`src/components/Projects.tsx`](file:///s:/Antigravity/Kunal%20portfolio/src/components/Projects.tsx) | **Home Page Projects Grid**. Renders the preview cards (device frames, title, tags, client/achievement badge, and "View Project" link). |
| [`src/components/Hero.tsx`](file:///s:/Antigravity/Kunal%20portfolio/src/components/Hero.tsx) | **Hero Section**. Left-aligned intro, bio, tech stack symbols, status pill, and 4:5 portrait photo frame on the right with section-wise 3D pop-up lift hover animation, top right "Open to Work" status badge, and clean name signature. |
| [`src/components/SkillsMatrix.tsx`](file:///s:/Antigravity/Kunal%20portfolio/src/components/SkillsMatrix.tsx) | **Tech Stack Section**. Clean 4-card grid for core symbols (Python, Java, React.js, HTML/CSS). NO fake percentage bars. |
| [`src/components/TechnicalArchitecture.tsx`](file:///s:/Antigravity/Kunal%20portfolio/src/components/TechnicalArchitecture.tsx) | **Project 1 Architecture**. Dark-slab interactive diagram for VishEdge Social (Android &harr; FastAPI &harr; MongoDB &amp; Google Cloud &amp; AI). |
| [`src/components/HotelArchitecture.tsx`](file:///s:/Antigravity/Kunal%20portfolio/src/components/HotelArchitecture.tsx) | **Project 2 Architecture**. Dark-slab interactive diagram for Sanskriti Rajasthan Hotel System (React 19 &harr; FastAPI &harr; Supabase PostgreSQL &amp; RBAC). |
| [`src/components/Navbar.tsx`](file:///s:/Antigravity/Kunal%20portfolio/src/components/Navbar.tsx) | **Header Navigation**. Fixed Ice Blue navbar with brand logo, smooth scroll links, and "Let's Talk" pill. |
| [`src/components/MobileNav.tsx`](file:///s:/Antigravity/Kunal%20portfolio/src/components/MobileNav.tsx) | **Mobile Bottom Dock**. Responsive navigation bar that hides on scroll down and reveals on scroll up. |
| [`src/components/Contact.tsx`](file:///s:/Antigravity/Kunal%20portfolio/src/components/Contact.tsx) | **Contact Section**. Direct channels, copy email button, and interactive message form. |
| [`src/components/Experience.tsx`](file:///s:/Antigravity/Kunal%20portfolio/src/components/Experience.tsx) | **Experience & Journey**. Clean timeline for professional roles, apprenticeships, and engineering contributions. |
| [`src/components/Footer.tsx`](file:///s:/Antigravity/Kunal%20portfolio/src/components/Footer.tsx) | **Footer**. Minimalist footer with copyright and back-to-top button. |
| [`src/app/globals.css`](file:///s:/Antigravity/Kunal%20portfolio/src/app/globals.css) | **Global Styles & CSS Tokens**. Defines base colors, smooth scrolling, `clean-card`, and custom scrollbars. |
| [`public/images/`](file:///s:/Antigravity/Kunal%20portfolio/public/images) | **Permanent Image Store**. All project screenshots, splash previews, and architecture diagrams are placed here. |

---

## 2. Strict Design Rules & Tokens (Never Violate)

1. **The 60-30-10 Color System**:
   - **60% Ice Blue Canvas (`#EBF3F6`)**: Background surface (`bg-ice-canvas`). Clean, calm, and crisp.
   - **30% Ocean Blue (`#102A45`)**: Text headers, structural body copy, and secondary dark cards (`text-ocean-900`, `text-ocean-700`).
   - **10% Aqua Green (`#2FD3A0`)**: High-contrast action triggers, badges, pills, and active states (`bg-aqua`, `text-aqua-darkText`).
2. **Strictly Flat Design with Deep Curved Modern Silhouettes**:
   - Never inject arbitrary radial gradient blobs (`bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl`).
   - All cards use `clean-card` with bold, deep curved corners (`border-radius: 2.5rem` / `rounded-[40px]` / `rounded-[32px]`).
   - On hover, every card exhibits a refined, omnidirectional Aqua (`#2FD3A0`) contour glow that hugs the exact curve of the card (`border-color: rgba(47, 211, 160, 0.75); box-shadow: 0 0 10px 0 rgba(47, 211, 160, 0.35), inset 0 0 10px 0 rgba(47, 211, 160, 0.12)`). Never use rectangular `clipPath` on parent wrappers (`MaskReveal`) that would chop the shadow into a rectangular box, and avoid excessive blur radii that spill into straight envelopes.
3. **Typography & Hierarchy**:
   - Left-aligned headlines on all major sections.
   - Uppercase tracking pill badges (`text-xs font-bold uppercase tracking-wider`).
   - Clean system fonts with deliberate line heights and generous spacing (`py-20 sm:py-24`).
4. **Touch Ergonomics & Accessibility**:
   - All interactive elements must have minimum 44×44px touch targets.
   - Mobile navigation docks comfortably in the lower thumb zone and auto-hides on scroll down.

---

## 3. How-To Operating Procedures

### A. How to Add a New Project
1. Open [`src/data/portfolioData.ts`](file:///s:/Antigravity/Kunal%20portfolio/src/data/portfolioData.ts).
2. Append a new object to the `portfolioData.projects` array conforming to the `Project` interface:
   ```ts
   {
     id: "unique-slug",
     slug: "unique-slug",
     title: "Project Name",
     subtitle: "Optional Subtitle",
     tagline: "One line value statement",
     shortDescription: "Short preview paragraph for home card",
     fullDescription: "Comprehensive deep-dive overview for project page",
     category: "Category Name (e.g. Web Platform / Android App)",
     client: "Client Name (if applicable)",
     tags: ["Tech1", "Tech2", "Tech3"],
     role: "Your Exact Role",
     status: "Developed & Deployed / Published App",
     achievement: "Key milestone or quantifiable achievement",
     image: "/images/your-project-preview.jpg", // for home preview card
     platformType: "web" | "mobile",
     metaDetails: [
       { label: "STACK", value: "React / Python / ..." },
       { label: "DATABASE", value: "PostgreSQL / ..." },
     ],
     screenshots: [
       { label: "Screen 1 Title", caption: "Screen 1 description", image: "/images/screen1.jpg" },
     ]
   }
   ```
3. Put screenshots into [`public/images/`](file:///s:/Antigravity/Kunal%20portfolio/public/images).
4. The project automatically generates on the home page and at `/projects/unique-slug`!

### B. How to Add or Replace Project Screenshots
1. Save high-resolution images to [`public/images/`](file:///s:/Antigravity/Kunal%20portfolio/public/images).
   *(Keep desktop screens around 1500px wide, and mobile screens at uncompressed 1080p resolution).*
2. Update the `image` path in `portfolioData.projects[i].screenshots`:
   ```ts
   image: "/images/new-screenshot.jpg"
   ```
3. The interactive [`ProjectScreenshotGallery.tsx`](file:///s:/Antigravity/Kunal%20portfolio/src/components/ProjectScreenshotGallery.tsx) automatically enables:
   - In-frame vertical scrolling for mobile screens.
   - One-click full-screen Lightbox Modal view.
   - Left/Right keyboard and button navigation.

### C. How to Update Kunal's Bio, Stack, or Contacts
- **Bio & Tagline**: Edit `portfolioData.personal.bio` and `tagline` in [`src/data/portfolioData.ts`](file:///s:/Antigravity/Kunal%20portfolio/src/data/portfolioData.ts).
- **Portrait Photo**: Drop Kunal's photo into [`public/images/kunal-portrait.jpg`](file:///s:/Antigravity/Kunal%20portfolio/public/images) and update `src/components/Hero.tsx`.
- **Tech Stack**: Update `portfolioData.techStack` in [`src/data/portfolioData.ts`](file:///s:/Antigravity/Kunal%20portfolio/src/data/portfolioData.ts).
- **Contact Channels**: Update `portfolioData.personal.email` and `linkedin` in [`src/data/portfolioData.ts`](file:///s:/Antigravity/Kunal%20portfolio/src/data/portfolioData.ts).

### D. Server Commands
- **Dev Server**: `npm.cmd run dev` (Runs on `http://localhost:3000`)
- **Production Build**: `npm.cmd run build`
- **Start Production**: `npm.cmd start`
