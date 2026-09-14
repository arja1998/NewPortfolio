# DESIGN SYSTEM SPECIFICATION — ARIJIT KOLEY PORTFOLIO & FREELANCE WEB APP

> **Role & Brand Authority:** Arijit Koley — Laravel & Full-Stack Web Developer | Custom Website & Web Application Developer  
> **Brand Tone:** Modern, High-Precision, Developer-Grade, Professional Commercial Freelance & Enterprise Ready.

---

## 1. Color System & Design Tokens

### Primary Palette (Dark Theme Default)
* **`--bg-primary`**: `#0a0e17` (Deep space canvas)
* **`--bg-secondary`**: `#111827` (Card & container surfaces)
* **`--bg-tertiary`**: `#1a2234` (Elevated cards & interactive elements)
* **`--bg-card`**: `rgba(17, 24, 39, 0.85)` (Glassmorphism card surface)
* **`--bg-card-hover`**: `rgba(26, 34, 52, 0.95)` (Active hover surface)
* **`--border-color`**: `rgba(255, 255, 255, 0.08)` (Subtle crisp division)
* **`--border-color-hover`**: `rgba(59, 130, 246, 0.4)` (Active focus ring & hover outline)

### Accent & Semantic Hues
* **`--accent-primary`**: `#3b82f6` (Vibrant tech blue — Primary CTAs & active states)
* **`--accent-primary-hover`**: `#2563eb` (Deep blue hover)
* **`--accent-laravel`**: `#f43f5e` (Signature Laravel crimson / rose accent)
* **`--accent-emerald`**: `#10b981` (Success, active availability badges, high-conversion accents)
* **`--accent-amber`**: `#f59e0b` (Ratings, warnings, key metrics)

### Typography Colors
* **`--text-primary`**: `#f8fafc` (High-contrast headline & body text)
* **`--text-secondary`**: `#94a3b8` (Descriptive paragraphs & subtitles)
* **`--text-muted`**: `#64748b` (Meta labels, tags, breadcrumbs)

### Light Theme Override (`body.light-theme`)
* **`--bg-primary`**: `#f8fafc`
* **`--bg-secondary`**: `#ffffff`
* **`--bg-tertiary`**: `#f1f5f9`
* **`--bg-card`**: `#ffffff`
* **`--border-color`**: `#e2e8f0`
* **`--text-primary`**: `#0f172a`
* **`--text-secondary`**: `#475569`
* **`--text-muted`**: `#64748b`

---

## 2. Typography System

* **Primary Font Family**: `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
* **Code / Monospace Font Family**: `'JetBrains Mono', 'Fira Code', 'Courier New', monospace`

### Scale & Hierarchy
* **Hero Display Title**: `clamp(2.5rem, 5vw, 3.75rem)` | Weight: `800` | Line-height: `1.12` | Tracking: `-0.03em`
* **Section Headings (H2)**: `clamp(2rem, 3.5vw, 2.6rem)` | Weight: `700` | Line-height: `1.2` | Tracking: `-0.02em`
* **Card Headings (H3)**: `1.25rem - 1.45rem` | Weight: `600` | Line-height: `1.35`
* **Lead / Intro Body**: `1.125rem` | Weight: `400` | Line-height: `1.65`
* **Body Regular**: `0.95rem - 1rem` | Weight: `400` | Line-height: `1.6`
* **Meta / Eyebrow / Badges**: `0.75rem - 0.85rem` | Weight: `600` | Tracking: `0.05em` | Case: Uppercase/Titlecase

---

## 3. Elevation, Spacing & Corner Radii

### Corner Radii
* **`--radius-sm`**: `6px` (Tech tags, micro-badges)
* **`--radius-md`**: `12px` (Inputs, buttons, small cards)
* **`--radius-lg`**: `18px` (Service cards, project cards, dialog modals)
* **`--radius-xl`**: `28px` (Feature banners, hero cards)
* **`--radius-full`**: `9999px` (Pill badges, status indicators, theme toggle)

### Elevation & Shadows
* **`--shadow-subtle`**: `0 2px 8px rgba(0, 0, 0, 0.2)`
* **`--shadow-card`**: `0 10px 30px -10px rgba(0, 0, 0, 0.5)`
* **`--shadow-card-hover`**: `0 20px 40px -15px rgba(59, 130, 246, 0.15)`
* **`--shadow-modal`**: `0 25px 60px -15px rgba(0, 0, 0, 0.8)`

---

## 4. Component Standards

### 1. Navigation Header
* Fixed frosted glass bar (`backdrop-filter: blur(16px)`).
* Responsive hamburger navigation drawer with smooth backdrop blur.
* Dark / Light mode toggle switch with localStorage persistence.

### 2. Service Cards
* Interactive commercial cards with clear offering title, bulleted feature sets, tech stack chips, and instant "Request This Service" trigger.
* Hover animation with subtle upward translation (`translateY(-4px)`) and border glow.

### 3. Project Showcase & Deep-Dive Modal
* Multi-category filtering: `All`, `Laravel Applications`, `PHP / Full-Stack`, `E-Commerce / Systems`.
* Cards with project preview images, badge labels, architectural summaries, and direct links.
* Modal popup (`#projectModal`) displaying comprehensive system architecture, key features, verified tech stack, and GitHub repository links.

### 4. Interactive Contact System
* Dual-path submission:
  1. Client-side verified form preparing structured enquiry.
  2. Direct mailto launcher to `arjakoley@gmail.com` with formatted parameters.
* Direct contact chips with 1-click clipboard copy (`arjakoley@gmail.com`, `+91 8910007940`) accompanied by real-time toast feedback.
