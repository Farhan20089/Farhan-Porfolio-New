# 🌌 Futuristic 3D Creative Portfolio

> A personal portfolio website for an aspiring creative technologist and AI-assisted web developer. Built with **React 19**, **Three.js**, **React Three Fiber**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Live Local Preview

The Vite development server is running locally at:
```bash
http://127.0.0.1:5173/
```

To run it manually anytime:
```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🎨 Design Philosophy & Features

- **Futuristic & Cinematic Visuals**: Deep obsidian palette (`#03050c`), midnight navy accents, electric violet glows (`#8b5cf6`), and neon cyan highlights (`#06b6d4`).
- **Interactive 3D Centerpiece**: A metallic geometric sculpture and ambient star particle field created with **React Three Fiber** and **Three.js**, reacting dynamically to mouse movement.
- **Fail-Safe WebGL Fallback**: If WebGL is unavailable or the user enables `prefers-reduced-motion`, a clean CSS/SVG 3D geometric card renders seamlessly without interrupting the experience.
- **Custom Desktop Cursor**: GPU-accelerated spring cursor follower that scales up on interactive buttons, links, and project cards.
- **Top Reading Scroll Indicator**: Dynamic animated gradient line tracking scroll position.
- **Dynamic Projects Gallery**: 6 editable showcase projects featuring 3D tilt perspective on hover, category filters, and interactive case study modals.
- **Transparent & Sticky Navbar**: Glassmorphism navbar with active section indicators and a responsive mobile menu.
- **Verified Skills Grid**: Categorized capabilities (Frontend Core, Dev Tools, AI & Modern Workflow) without arbitrary proficiency percentages.
- **Interactive Timeline**: Vertical roadmap detailing completed milestones, current technical focus, and future engineering ambitions.
- **Contact Form with Fallbacks**: Real-time validation, automatic celebration confetti, EmailJS integration, and an instant `mailto:` fallback.

---

## 📂 Project Architecture

```
my-portfolio/
├── index.html                 # Google Fonts, SVG favicon & SEO metadata
├── tailwind.config.js         # Color tokens, glassmorphism & animation keyframes
├── src/
│   ├── data/
│   │   └── portfolio.ts       # ⭐️ CENTRAL DATA STORE (Edit your profile, projects & skills here)
│   ├── components/
│   │   ├── Navbar.tsx         # Glassmorphic header with active section tracking
│   │   ├── Hero.tsx           # Full-screen hero with CTAs & 3D viewport
│   │   ├── Scene3D.tsx        # React Three Fiber 3D scene & particle field
│   │   ├── SceneFallback.tsx  # CSS/SVG 3D fallback for non-WebGL devices
│   │   ├── About.tsx          # Biography, development philosophy & metrics
│   │   ├── Skills.tsx         # Filterable technical arsenal & capability badges
│   │   ├── Projects.tsx       # Showcase gallery with category filtering
│   │   ├── ProjectCard.tsx    # 3D mouse tilt card with tech tags
│   │   ├── ProjectModal.tsx   # Case study detail modal
│   │   ├── Services.tsx       # 5 editable service cards with deliverables
│   │   ├── Timeline.tsx       # Vertical milestone and roadmap tree
│   │   ├── Contact.tsx        # Form validation, EmailJS integration & mailto fallback
│   │   ├── CustomCursor.tsx   # Desktop pointer aura and micro-interactions
│   │   ├── Footer.tsx         # Social links, copyright & back-to-top button
│   │   └── Icons.tsx          # Crisp SVG brand icons (GitHub, LinkedIn)
│   ├── hooks/
│   │   ├── useActiveSection.ts # Section detection during window scroll
│   │   └── useWebGLSupport.ts  # WebGL availability detector
│   ├── App.tsx                # Master assembly with scroll progress bar
│   ├── main.tsx               # React 19 root mount
│   └── index.css              # Tailwind layers, glassmorphism & custom scrollbars
├── .env.example               # Template for optional EmailJS credentials
└── package.json
```

---

## ⚙️ How to Customize Your Portfolio

All your personal details, text, links, skills, and projects live in **one single file**:
👉 [`src/data/portfolio.ts`](file:///d:/software/website/My%20porfolio/src/data/portfolio.ts)

You do **not** need to modify layout components to update:
1. **Your Name, Role & Headline**: Update `personal.name`, `personal.role`, and `personal.headline`.
2. **Social Links**: Add your real GitHub, LinkedIn, and WhatsApp URLs under `personal.github`, etc.
3. **Projects**: Edit or add projects under `projects` array with your actual demo URLs and GitHub repos.
4. **Skills**: Modify `skills.frontend`, `skills.tools`, and `skills.creativeWorkflow`.
5. **Services**: Update `services` array to customize your service offerings and deliverables.
6. **Timeline**: Update `timeline` entries to reflect your real learning journey and achievements.

---

## 📬 Contact Form & EmailJS Setup

The contact section includes:
1. **Out-of-the-Box Fallback**: If no API keys are provided, clicking "Send Message" triggers your default mail client with pre-filled subject and body (`mailto:`), ensuring zero lost leads.
2. **Automated Sending via EmailJS (Optional)**:
   - Create a free account at [https://www.emailjs.com/](https://www.emailjs.com/).
   - Create a copy of `.env.example` named `.env`:
     ```env
     VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
     ```
   - Restart the dev server (`npm run dev`). The form will automatically transmit messages via EmailJS with confetti feedback!

---

## 🌐 Production Deployment

### Option 1: Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel automatically detects Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add any environment variables (e.g. EmailJS keys) in the Vercel dashboard.
5. Click **Deploy**.

### Option 2: Netlify
1. Connect your repository on [netlify.com](https://www.netlify.com).
2. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **Deploy Site**.

### Option 3: GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. In `vite.config.ts`, set `base: '/<repo-name>/'`.
3. Add deploy script in `package.json`: `"deploy": "vite build && gh-pages -d dist"`
4. Run `npm run deploy`.

---

## 🛡 Performance & Accessibility

- **Semantic HTML5 Elements**: Proper landmarks (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Reduced Motion Support**: Automatically disables particle animations and 3D canvas physics when `prefers-reduced-motion` is detected in system preferences.
- **Fail-Safe WebGL**: Automatic canvas error boundary that falls back to an animated SVG/CSS centerpiece if the device lacks WebGL.
- **Zero Heavy External Icon Fonts**: Crisp inline SVG icons with minimal payload size.
