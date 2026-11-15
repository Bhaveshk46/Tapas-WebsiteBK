# TAPAS-PCE Website

The official web platform for **TAPAS-PCE** (Heartfulness Tapas Meditation and Wellness Club) at **Pillai College of Engineering (PCE), New Panvel**.

Formed on 16 October 2019 in collaboration with the Heartfulness Institute, TAPAS-PCE offers students, faculty, and newcomers a tranquil space to de-stress, meditate, recharge, and cultivate inner peace.

---

## 🛠️ Technologies & Stack

### Core Framework & Runtime
- **[Next.js 15.1 (App Router)](https://nextjs.org/)** — React framework with hybrid Server and Client components, file-system routing, and built-in image and font optimizations.
- **[React 19](https://react.dev/)** & **React DOM 19** — Modern declarative UI library.
- **[TypeScript 5.7](https://www.typescriptlang.org/)** — Strict type safety across components, event data, and navigation.

### Styling & Design System
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** — Utility-first CSS framework configured with custom brand tokens:
  - Custom brand palette: `tapas-bg`, `tapas-soft`, `tapas-sky`, `tapas-pastel`, `tapas-border`, `tapas-text`, `tapas-muted`, and `tapas-accent`.
  - Responsive breakpoints, custom CSS variables, and reduced-motion accessibility rules.
- **[PostCSS 8](https://postcss.org/)** & **[Autoprefixer](https://github.com/postcss/autoprefixer)** — CSS parsing and vendor prefixing.
- **Google Fonts** (preconnected via HTML head in `layout.tsx`):
  - **Heading Font:** `Lora` (Serif)
  - **Body Font:** `Plus Jakarta Sans` (Sans-serif)

### Code Quality & Developer Tooling
- **[ESLint 9](https://eslint.org/)** with `eslint-config-next` — Static code analysis.
- **[Prettier 3.4](https://prettier.io/)** — Consistent automated code formatting.
- **Native Inline SVGs** — Zero bloat, accessible, dependency-free icons.

---

## 📁 Project Structure

```text
tapas/
├── public/                 # Static assets
│   ├── images/             # Hero, logos, awards, and event photos
│   └── ...
├── src/
│   ├── app/                # Next.js App Router routes & layouts
│   │   ├── about/          # About TAPAS page (Hero, pillars, activities, FAQ)
│   │   ├── contact/        # Contact page
│   │   ├── events/         # Events & gallery page
│   │   ├── join/           # Registration & onboarding portal
│   │   ├── meditation/     # Meditation practices & guides
│   │   ├── resources/      # Reading materials & links
│   │   ├── team/           # Core team & mentors
│   │   ├── globals.css     # CSS root variables, Tailwind directives & typography
│   │   ├── layout.tsx      # Root HTML layout with Google fonts & metadata
│   │   └── page.tsx        # Homepage (Hero, Mission, Stats, Slideshow, Testimonials)
│   ├── components/         # Shared UI components
│   │   ├── Footer.tsx      # Heartfulness network links & socials
│   │   ├── GallerySlideshow.tsx # Interactive event carousel
│   │   ├── Loader.tsx      # Site entry animation
│   │   ├── Navbar.tsx      # Responsive navigation with mobile drawer
│   │   ├── SiteLayout.tsx  # Layout wrapper managing entry loading state
│   │   └── Stat.tsx        # Reusable metric statistic card
│   ├── data/               # Static datasets (events, testimonials)
│   └── types/              # Global TypeScript interfaces
├── tailwind.config.ts      # Tailwind color palette & font family extensions
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

---

## 🚀 How to Run the Project Locally

### 1. Prerequisites
Make sure you have installed on your computer:
- **Node.js** (v18.17.0 or higher recommended; Node v20+ or v24 supported)
- **npm** (comes bundled with Node.js) or **pnpm** / **yarn**

Verify your installation:
```bash
node -v
npm -v
```

---

### 2. Clone and Navigate to the Repository
```bash
git clone <repository-url>
cd tapas
```

---

### 3. Install Dependencies
Install all required project packages:

```bash
npm install
```

*(If you are on Windows PowerShell and experience script execution permission errors, use Command Prompt (`cmd`) or run `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` in PowerShell).*

---

### 4. Run the Development Server
Start the Next.js local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with Hot Module Replacement (HMR).

---

### 5. Other Useful Scripts

| Command | Purpose |
| :--- | :--- |
| `npm run build` | Compiles the production build into `.next/` |
| `npm run start` | Runs the compiled production build locally |
| `npm run lint` | Runs ESLint to check for code quality and errors |
| `npm run format` | Formats all code files using Prettier |
| `npm run format:check` | Validates code formatting without modifying files |

---

## 🧘 Key Features

- **About TAPAS Showcase**: Full breakdown of session structure (Relaxation, Meditation, Rejuvenation, Circle), eligibility, first-time step-by-step onboarding, and interactive FAQ filter accordion.
- **Heartfulness Integration**: Direct connection with Heartfulness meditation techniques, global guides, and Kanha Shanti Vanam resources.
- **Interactive Carousel**: Lightweight slideshow spotlighting community milestones, NAAC recognitions, and annual awards.
- **Accessibility & Performance**: Mobile-first design, semantic HTML5, zero external icon bloat, keyboard navigable dialogs and menus, and full reduced-motion preference compliance.
