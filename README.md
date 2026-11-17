# TAPAS Website

The official web platform for **TAPAS (Heartfulness Tapas Meditation and Wellness Club)** at **Pillai College of Engineering (PCE), New Panvel**.

Formed on 16 October 2019 in collaboration with the Heartfulness Institute, TAPAS provides students, faculty, and newcomers with a space to de-stress, meditate, recharge, and cultivate inner peace.

---

## Technologies and Stack

### Core Framework and Runtime

- [**Next.js 15**](https://nextjs.org/) — React framework using the App Router and file-system-based routing.
- [**React 19**](https://react.dev/) and React DOM 19 — Modern UI library.
- [**TypeScript 5.7**](https://www.typescriptlang.org/) — Static type checking across the application.

### Styling and Design System

- [**Tailwind CSS 3.4**](https://tailwindcss.com/) — Utility-first CSS framework.
  - Custom brand colors: `tapas-bg`, `tapas-soft`, `tapas-sky`, `tapas-pastel`, `tapas-border`, `tapas-text`, `tapas-muted`, `tapas-accent`, and `tapas-accent-hover`.
  - Responsive layouts, custom typography, and animation utilities.
- [**PostCSS 8**](https://postcss.org/) and [**Autoprefixer**](https://github.com/postcss/autoprefixer) — CSS processing and vendor prefixing.
- **Google Fonts**:
  - Heading Font: Lora (Serif)
  - Body Font: Plus Jakarta Sans (Sans-serif)

### Code Quality and Developer Tooling

- [**ESLint 9**](https://eslint.org/) with `eslint-config-next` — Code quality and static analysis.
- [**Prettier 3.4**](https://prettier.io/) — Automated code formatting.
- **Native Inline SVGs** — Lightweight, dependency-free icons.

---

## Project Structure

```text
tapas/
├── public/
│   └── images/
│       ├── events/
│       │   ├── best-heartful-campus.jpg
│       │   ├── centre-of-excellence.jpg
│       │   ├── core-team.jpg
│       │   ├── formation-2019.jpg
│       │   ├── naac-recognition.jpg
│       │   ├── recruitment-session.jpg
│       │   ├── yoga-with-youth.jpg
│       │   └── youth-ambassador-award.jpg
│       ├── hero.jpg
│       └── tapas-logo.png
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── events/
│   │   │   └── page.tsx
│   │   ├── join/
│   │   │   └── page.tsx
│   │   ├── meditation/
│   │   │   └── page.tsx
│   │   ├── resources/
│   │   │   └── page.tsx
│   │   ├── team/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── GallerySlideshow.tsx
│   │   ├── Loader.tsx
│   │   ├── Navbar.tsx
│   │   ├── SiteLayout.tsx
│   │   └── Stat.tsx
│   ├── data/
│   │   ├── events.ts
│   │   └── testimonials.ts
│   └── types/
│       └── index.ts
├── .eslintrc.json
├── .prettierrc
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js (18.18.0 or higher recommended)
- npm (included with Node.js)

Verify your installation:

```bash
node -v
npm -v
```

### 1. Clone the Repository

Replace the repository URL with your GitHub repository URL.

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies

Install the required project dependencies:

```bash
npm install
```

### 3. Run the Development Server

Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The development server supports Hot Module Replacement, allowing changes to appear during development.

---

## Available Scripts

| Command                | Description                                |
| :--------------------- | :----------------------------------------- |
| `npm run dev`          | Starts the Next.js development server.     |
| `npm run build`        | Creates an optimized production build.     |
| `npm run start`        | Starts the production server.              |
| `npm run lint`         | Runs the configured ESLint command.        |
| `npm run format`       | Formats source files using Prettier.       |
| `npm run format:check` | Checks formatting without modifying files. |

---

## Website Features

### Homepage

- Hero section introducing TAPAS-PCE and Heartfulness meditation.
- Mission and Vision sections.
- Impact statistics highlighting the club's activities.
- Interactive Events and Gallery slideshow.
- Student testimonials.

### Navigation and Layout

- Responsive navigation bar.
- Active-page navigation indicators.
- Mobile hamburger menu.
- Shared website header and footer.
- Introductory loading animation.

### Events and Gallery

- Event slideshow with previous and next navigation controls.
- Event photographs and descriptions sourced from the project dataset.
- Links to individual event routes.

### Heartfulness Integration

- Links to Heartfulness-related platforms and resources.
- Connections to Kanha Shanti Vanam and other Heartfulness initiatives.
- Introduction to meditation and inner well-being.

### Design and Accessibility

- Responsive, mobile-first layouts.
- Custom TAPAS-PCE brand color palette.
- Lora and Plus Jakarta Sans typography.
- Native SVG icons without an external icon library.
- Reduced-motion support for animations.

---

## Development Status

The project currently includes the homepage and shared website components.

The following routes have been created in the Next.js App Router:

- Home
- About
- Contact
- Events
- Join
- Meditation
- Resources
- Team

**Note:** The About, Contact, Events, Join, Meditation, Resources, and Team page components are currently placeholders and require implementation.

---

## About TAPAS

TAPAS is the Heartfulness Tapas Meditation and Wellness Club of Pillai College of Engineering, New Panvel.

Established on 16 October 2019 in collaboration with the Heartfulness Institute, the club encourages students and faculty to develop a balanced lifestyle through meditation, relaxation, rejuvenation, and community connection.

**Breathe. Balance. Belong.**
