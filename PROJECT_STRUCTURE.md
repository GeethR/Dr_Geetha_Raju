# Portfolio Website - Project Structure & Setup Guide

This is a complete blueprint for your Next.js portfolio website. After installing Node.js, use this to set up the project.

## 📁 Project Folder Structure

```
Geeth_Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── publications/
│   │   └── page.tsx
│   ├── credentials/
│   │   └── page.tsx
│   ├── speeches/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── PublicationCard.tsx
│   ├── ThemeToggle.tsx
│   └── SearchBar.tsx
├── data/
│   ├── projects.json
│   ├── publications.json
│   ├── credentials.json
│   └── speeches.json
├── public/
│   ├── resume.pdf
│   └── favicon.ico
├── styles/
│   └── globals.css
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🚀 Setup Steps

### 1. Install Node.js
- Download from [nodejs.org](https://nodejs.org/) (LTS version)
- Or install via Homebrew: `brew install node`

### 2. Initialize Next.js Project
```bash
cd /Users/geetharaju/VSCode_Workspace/Geeth_Portfolio
npm create next-app@latest . --typescript --tailwind --eslint --no-git --import-alias '@/*'
```

### 3. Install Additional Dependencies
```bash
npm install next-themes
```

### 4. Create Folder Structure
```bash
mkdir -p app/projects app/publications app/credentials app/speeches app/contact
mkdir -p components data public styles
mkdir -p .github/workflows
```

## 📝 Key Files to Create

### `next.config.js` - Next.js Configuration
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.BASE_PATH || '',
};

module.exports = nextConfig;
```

### `tailwind.config.ts` - Tailwind CSS Configuration
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937',
        secondary: '#6366f1',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
export default config
```

### `package.json` - Dependencies
```json
{
  "name": "portfolio-website",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next": "^14.0.0",
    "next-themes": "^0.2.1"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@types/node": "^20.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.3.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0"
  }
}
```

## 🎨 Component Files

### `components/Navbar.tsx` - Navigation Bar with Dark Mode Toggle
```typescript
'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Publications', href: '/publications' },
    { label: 'Credentials', href: '/credentials' },
    { label: 'Speeches', href: '/speeches' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Portfolio
          </Link>

          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {isMounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
```

### `components/Footer.tsx` - Footer Component
```typescript
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400">
              Professional portfolio showcasing research, publications, and credentials.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:text-white transition">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/credentials" className="hover:text-white transition">
                  Credentials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:your-email@example.com" className="hover:text-white transition">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
```

### `components/ProjectCard.tsx` - Project Card Component
```typescript
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-sm px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
        >
          View Project →
        </a>
      )}
    </div>
  );
}
```

## 📄 Page Files

### `app/layout.tsx` - Root Layout
```typescript
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Professional portfolio showcasing research, publications, and credentials.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### `app/page.tsx` - Home Page
```typescript
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Showcasing my research, publications, academic credentials, and professional achievements.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/projects"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-lg text-center">
          <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">10+</div>
          <div className="text-gray-600 dark:text-gray-400">Publications</div>
        </div>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-lg text-center">
          <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">5+</div>
          <div className="text-gray-600 dark:text-gray-400">Major Projects</div>
        </div>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-lg text-center">
          <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">20+</div>
          <div className="text-gray-600 dark:text-gray-400">Invited Speeches</div>
        </div>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-lg text-center">
          <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">15+</div>
          <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
        </div>
      </section>

      {/* Featured Section */}
      <section>
        <h2 className="text-4xl font-bold mb-8">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Recent Publications</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Explore my latest research papers and publications.
            </p>
            <Link href="/publications" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
              View Publications →
            </Link>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Credentials</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Academic background and professional certifications.
            </p>
            <Link href="/credentials" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
              View Credentials →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
```

### `app/projects/page.tsx` - Projects Page
```typescript
'use client';

import ProjectCard from '@/components/ProjectCard';
import { useState, useMemo } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Research Project 1',
    description: 'Description of your research project and its impact.',
    tags: ['Research', 'AI', 'Data Science'],
    link: 'https://example.com',
  },
  {
    id: 2,
    title: 'Research Project 2',
    description: 'Another significant research project.',
    tags: ['Machine Learning', 'NLP'],
    link: 'https://example.com',
  },
  // Add more projects
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    return projectsData.filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-4">Projects & Research</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Explore my portfolio of research projects and professional work.
        </p>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">No projects found matching your search.</p>
        </div>
      )}
    </div>
  );
}
```

### `app/publications/page.tsx` - Publications Page
```typescript
export default function Publications() {
  const publications = [
    {
      id: 1,
      title: 'Publication Title 1',
      authors: 'Your Name, Co-author',
      venue: 'Journal/Conference Name',
      year: 2024,
      link: 'https://example.com',
    },
    // Add more publications
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-4">Publications</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          My research and academic publications.
        </p>
      </div>

      <div className="space-y-6">
        {publications.map((pub) => (
          <div key={pub.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{pub.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{pub.authors}</p>
            <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-4">
              {pub.venue} • {pub.year}
            </p>
            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
              >
                Read Publication →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
```

### `app/credentials/page.tsx` - Credentials Page
```typescript
export default function Credentials() {
  const education = [
    {
      degree: 'Ph.D. in Computer Science',
      institution: 'University Name',
      year: '2020',
    },
    // Add more education
  ];

  const experience = [
    {
      title: 'Senior Researcher',
      company: 'Company Name',
      duration: '2020 - Present',
    },
    // Add more experience
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-4">Credentials</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          My academic and professional background.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-indigo-600 pl-4">
                <h3 className="font-bold text-lg">{edu.degree}</h3>
                <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-indigo-600 pl-4">
                <h3 className="font-bold text-lg">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

### `app/speeches/page.tsx` - Speeches Page
```typescript
export default function Speeches() {
  const speeches = [
    {
      id: 1,
      title: 'Speech Title 1',
      event: 'Event/Conference Name',
      date: 'Date',
      location: 'Location',
    },
    // Add more speeches
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-4">Invited Speeches</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Notable presentations and talks.
        </p>
      </div>

      <div className="space-y-6">
        {speeches.map((speech) => (
          <div key={speech.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">{speech.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{speech.event}</p>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">
              {speech.date} • {speech.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### `app/contact/page.tsx` - Contact Page
```typescript
'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          I'd love to hear from you. Send me a message!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
        <div>
          <label className="block text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>

        {submitted && (
          <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 p-4 rounded-lg">
            Message sent successfully!
          </div>
        )}

        {error && (
          <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 p-4 rounded-lg">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
```

## 📊 Data Files

### `data/projects.json`
```json
[
  {
    "id": 1,
    "title": "Project Title",
    "description": "Project description",
    "tags": ["tag1", "tag2"],
    "link": "https://example.com"
  }
]
```

### `data/publications.json`
```json
[
  {
    "id": 1,
    "title": "Publication Title",
    "authors": "Author Names",
    "venue": "Journal/Conference",
    "year": 2024,
    "link": "https://example.com"
  }
]
```

### `data/credentials.json`
```json
{
  "education": [
    {
      "degree": "Ph.D.",
      "institution": "University",
      "year": "2020"
    }
  ],
  "experience": [
    {
      "title": "Position",
      "company": "Company",
      "duration": "2020 - Present"
    }
  ]
}
```

### `data/speeches.json`
```json
[
  {
    "id": 1,
    "title": "Speech Title",
    "event": "Event Name",
    "date": "Date",
    "location": "Location"
  }
]
```

## 🔧 GitHub Pages Deployment

### `.github/workflows/deploy.yml`
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: './out'

      - name: Deploy
        uses: actions/deploy-pages@v2
```

## 🚀 Running the Project

After creating all files:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000

# Build for production
npm run build

# Test static export
npm start
```

## ✅ Next Steps

1. Install Node.js
2. Create folder structure
3. Copy all files from this blueprint
4. Replace placeholder content with your actual data
5. Update `FORMSPREE_ID` in contact form
6. Push to GitHub
7. Enable GitHub Pages in repository settings
8. Customize colors and branding in `tailwind.config.ts`
