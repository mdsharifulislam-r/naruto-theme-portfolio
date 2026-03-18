# 忍 MD Shariful Islam — Shadow Coder Portfolio

A dark ninja / Naruto-inspired portfolio for a Backend Developer, built with:

- **Next.js 14** (App Router)
- **Tailwind CSS 3** (custom ninja theme)
- **Framer Motion 11** (scroll reveals, hover animations, mobile menu)
- **GSAP 3 + ScrollTrigger** (hero text reveal, code line stagger, project grid)
- **Canvas API** (connected particle web background)

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🗂 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout — Google Fonts, metadata
│   ├── page.tsx            # Main page — assembles all sections
│   └── globals.css         # Tailwind base + custom utilities
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx      # GSAP name reveal + Framer Motion avatar rings
│   │   ├── AboutSection.tsx     # GSAP staggered code block + scroll trigger
│   │   ├── SkillsSection.tsx    # Framer Motion staggered card grid
│   │   ├── ProjectsSection.tsx  # GSAP ScrollTrigger project cards
│   │   └── ContactSection.tsx   # Framer Motion form + link hover
│   └── ui/
│       ├── Cursor.tsx           # Custom chakra cursor (RAF smooth follow)
│       ├── Navbar.tsx           # Sticky nav with active section detection
│       ├── ParticleCanvas.tsx   # Connected particle web (Canvas API)
│       ├── KanjiRain.tsx        # Floating kanji characters
│       └── Footer.tsx
├── lib/
│   └── data.ts             # All content: nav links, skills, projects, kanji
├── tailwind.config.js      # Ninja color palette + custom animations
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Color Palette

| Token              | Value       | Usage                    |
|--------------------|-------------|--------------------------|
| `ninja-bg`         | `#0D0D0D`   | Page background          |
| `ninja-card`       | `#1F1F1F`   | Card / panel backgrounds |
| `ninja-orange`     | `#FF6E1A`   | Chakra accent / primary  |
| `ninja-blue`       | `#58A6FF`   | Tech accent / secondary  |
| `ninja-text`       | `#C9D1D9`   | Body text                |
| `ninja-muted`      | `#6E7681`   | Subdued text / labels    |
| `ninja-border`     | `#30363D`   | Card borders             |

---

## 🎬 Animation Inventory

| Effect                        | Library           |
|-------------------------------|-------------------|
| Hero name letter reveal       | GSAP `from` x/y   |
| Navbar slide-down on load     | Framer Motion     |
| Code lines stagger (About)    | GSAP stagger      |
| Skill card bounce-in          | Framer Motion variants |
| Project cards ScrollTrigger   | GSAP ScrollTrigger |
| Contact panels slide-in       | Framer Motion x offset |
| Avatar orbit rings            | CSS `spin` keyframes |
| Custom chakra cursor          | Vanilla JS RAF loop |
| Particle web background       | Canvas API RAF    |
| Floating kanji characters     | CSS `kanjiFloat` keyframes |
| Hover shimmer sweep           | CSS `shimmer` keyframes |
| Scroll line indicator         | CSS `scrollLine` keyframes |

---

## 🖼 Adding Your Photo

Replace the avatar placeholder in `HeroSection.tsx`:

```tsx
// Find this in HeroSection.tsx and replace with:
<img
  src="/your-photo.jpg"           // place photo in /public/
  alt="MD Shariful Islam"
  className="w-full h-full object-cover"
/>
```

---

## 📦 Build for Production

```bash
npm run build
npm start
```

Or deploy instantly to **Vercel**:

```bash
npx vercel
```

---

## ✏️ Customization

All portfolio content lives in `lib/data.ts` — update skills, projects, and nav links there.

Personal info (name, tagline, stats) is in `components/sections/HeroSection.tsx`.

Social links and email are in `components/sections/ContactSection.tsx`.
