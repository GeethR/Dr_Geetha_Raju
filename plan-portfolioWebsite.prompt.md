# Plan: Next.js Professional Portfolio Website

## TL;DR

Build a static Next.js portfolio site deployed to GitHub Pages, featuring a project gallery, search, dark mode, contact form, and CV download. Use Tailwind CSS, Formspree for contact backend, and GitHub Actions for deployment.

## Steps

### Phase 1: Project Setup (Day 1)

1. Initialize Next.js project with TypeScript and Tailwind CSS
2. Set up folder structure: `pages/`, `components/`, `public/`, `data/`
3. Configure `next.config.js` for static export (`output: 'export'`)
4. Create GitHub repository and enable GitHub Pages
5. Set up GitHub Actions workflow for automated deployment

### Phase 2: Core Components & Layout (Day 1-2)

6. Build layout wrapper with navbar, footer, and dark/light mode toggle (using `next-themes`)
7. Create components: Navbar, ProjectCard, Publication Card, Timeline/Credentials, Search bar, Footer

### Phase 3: Pages & Content Structure (Day 2)

8. Create pages: `/` (home), `/projects`, `/publications`, `/credentials`, `/speeches`
9. Create JSON data files: `projects.json`, `publications.json`, `credentials.json`, `speeches.json`
10. Implement client-side search/filter across projects and publications

### Phase 4: Features (Day 2-3)

11. Add CV/resume PDF download (upload to `public/`, add download button)
12. Build contact form page with Formspree integration
13. Implement dark/light mode toggle with `next-themes` (localStorage persistence)

### Phase 5: Styling & Polish (Day 3)

14. Apply Tailwind CSS for responsive design (mobile-first)
15. Add animations and transitions; test responsiveness

### Phase 6: Deployment (Day 3)

16. Configure GitHub Pages in `next.config.js`
17. Test static build locally
18. Deploy via GitHub Actions

## Key Files to Create

- `next.config.js` — Static export config
- Pages: `pages/index.tsx`, `pages/projects.tsx`, `pages/publications.tsx`, `pages/credentials.tsx`, `pages/speeches.tsx`, `pages/contact.tsx`
- Components: `Navbar`, `ProjectCard`, `Footer`
- Data: `data/projects.json`, `data/publications.json`, `data/credentials.json`, `data/speeches.json`
- Deployment: `.github/workflows/deploy.yml`
- Public: `public/resume.pdf`

## Technology Stack

- Next.js 14+ with TypeScript
- Tailwind CSS (responsive styling)
- `next-themes` (dark/light mode)
- Formspree (contact form)
- GitHub Pages + GitHub Actions

## Verification Checklist

1. Local build: `npm run build` with no errors
2. Dark mode toggle persists on refresh
3. Search filters projects/publications correctly
4. Contact form submits to Formspree successfully
5. PDF downloads/opens correctly
6. All pages responsive on mobile/tablet/desktop
7. GitHub Actions workflow runs and deploys successfully
8. Live site accessible at your GitHub Pages URL

## Requirements Captured

- **Tech Stack**: Next.js with TypeScript and Tailwind CSS
- **Hosting**: GitHub Pages (free, static site)
- **Custom Features**: 
  - PDF download for CV/resume
  - Contact form (using Formspree)
  - Project gallery/portfolio grid with search
  - Search functionality
  - Dark/light mode toggle
- **Content Status**: Partially ready (needs organizing)
- **Timeline**: ASAP (this week)
- **Content Sections**: Research, invited speeches, academic credentials, professional background, publications
