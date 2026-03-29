# Geetha Raju - AI Governance Portfolio

A modern, responsive portfolio website for Geetha Raju, AI Governance Expert specializing in responsible AI adoption, policy frameworks, and institutional readiness for scientific AI at scale.

## About

This portfolio showcases Geetha Raju's extensive work in AI governance, featuring:
- **26+ Invited Speeches & Events** (2024-2026)
- AI policy frameworks and responsible AI adoption
- International collaborations and panel discussions
- Academic and industry partnerships
- Research in AI infrastructure and governance

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Theme**: next-themes
- **Build**: Static Export

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GeethR/Dr_Geetha_Raju.git
cd Geeth_Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

## Google Sheets Integration

The portfolio can dynamically load projects data from Google Sheets. To set this up:

### 1. Google Cloud Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API" and enable it

### 2. Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the details and create the account
4. Create a JSON key for the service account and download it

### 3. Share Google Sheet

1. Open your Google Sheet (ID: `1b3C54taIcGK_vcdH0KucBVVS__DLxHBx`)
2. Click "Share" and add the service account email as an editor

### 4. Environment Setup

1. Copy `.env.local.example` to `.env.local`
2. Replace the `GOOGLE_SHEETS_CREDENTIALS` value with your service account JSON (as a single line)

### 5. Sheet Structure

Your Google Sheet should have a "Projects" tab with columns:
- Column A: Title
- Column B: Description
- Column C: Tags (comma-separated)
- Column D: Link (optional)
- Column E: Status (optional)
- Column F: Year (optional)
- Column G: Collaborators (comma-separated, optional)

## Project Structure

```
Geeth_Portfolio/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── projects/            # Projects page
│   ├── publications/        # Publications page
│   ├── credentials/         # Credentials page
│   ├── speeches/            # Speeches page
│   └── contact/             # Contact page
├── components/              # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   └── PublicationCard.tsx
├── data/                    # JSON data files
│   ├── projects.json
│   ├── publications.json
│   ├── credentials.json
│   └── speeches.json
├── public/                  # Static assets
├── styles/                  # Global styles
└── .github/workflows/       # GitHub Actions
    └── deploy.yml           # Auto-deploy to GitHub Pages
```

## Customization

### Edit Personal Information

Update the following files with your information:
- `app/page.tsx` - Home page content
- `app/credentials/page.tsx` - Your education and experience
- `components/Footer.tsx` - Social links
- `data/` files - Your projects, publications, speeches

### Customize Styling

Edit `tailwind.config.ts` to change:
- Color scheme
- Font families
- Spacing
- Other design tokens

## Building for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

## Deployment

### GitHub Pages

The project includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages on every push to `main`.

1. Enable GitHub Pages in your repository settings
2. Push changes to trigger automatic deployment

### Other Platforms

The static export can be deployed to:
- Vercel
- Netlify
- Any static host

## Development

### Running Locally

```bash
npm run dev
```

### Linting

```bash
npm run lint
```

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback, visit the contact page on the portfolio.
