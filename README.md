# Thanusri P — Portfolio Website

A premium, modern, fully responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS v4**.

## Features

- **Hero Section** with animated typewriter effect and floating profile image
- **About Me** with skills, services, and experience highlights
- **Featured Projects** with live project links and tech stack tags
- **Certificates** showcasing continuous learning
- **Testimonials** from clients and collaborators
- **Contact Form** with direct email integration
- **Responsive Design** — works beautifully on mobile, tablet, and desktop
- **SEO Optimized** with proper meta tags and OpenGraph data
- **Dark Theme** with glassmorphism effects and custom animations

## Tech Stack

- React 19
- Vite 6
- TypeScript
- Tailwind CSS v4
- Lucide React (icons)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (recommended: 20+)
- npm (comes with Node.js)

### Installation

1. **Clone or extract the project**

   ```bash
   cd thanusri-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`

4. **Build for production**

   ```bash
   npm run build
   ```

   The production-ready files will be in the `dist/` folder.

## Project Structure

```
thanusri-portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/
│   │   └── thanusri.jpeg   # Profile photo
│   ├── App.tsx             # Main portfolio component (all sections)
│   ├── main.tsx            # App entry point
│   ├── styles.css          # Tailwind v4 theme + custom utilities
│   └── vite-env.d.ts       # Vite type declarations
├── index.html              # HTML entry
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript config
├── vite.config.ts          # Vite config
├── vercel.json             # Vercel SPA routing
├── netlify.toml            # Netlify SPA routing
└── README.md               # This file
```

## Deployment

### Vercel

1. Push the project to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Use default settings (framework preset: Vite)
4. Deploy — the `vercel.json` handles SPA routing automatically

### Netlify

1. Push the project to GitHub
2. Connect the repository on [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. The `netlify.toml` handles SPA routing automatically

### GitHub Pages

1. Update `vite.config.ts` to add `base: '/your-repo-name/'`
2. Build the project: `npm run build`
3. Deploy the `dist/` folder to GitHub Pages

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Select dist as the public directory
firebase deploy
```

## Customization

- **Profile Photo**: Replace `src/assets/thanusri.jpeg` with your own image
- **Personal Info**: Edit `src/App.tsx` — update name, email, links, and project details
- **Colors & Theme**: Edit CSS custom properties in `src/styles.css` under `:root`
- **Projects**: Modify the `PROJECTS` array in `src/App.tsx`
- **Skills**: Update the `SKILLS` array in `src/App.tsx`

## Contact

- **Email**: thanusripalraj@gmail.com
- **LinkedIn**: [thanusri-p](https://www.linkedin.com/in/thanusri-p-589b60386)
- **GitHub**: [thanu-sri5](https://github.com/thanu-sri5)
