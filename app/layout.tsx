import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { RootThemeProvider } from '@/components/RootThemeProvider';

export const metadata: Metadata = {
  title: 'Geetha Raju - AI Governance Expert',
  description: 'AI Governance Expert specializing in responsible AI adoption, policy frameworks, and institutional readiness for scientific AI at scale.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors">
        <RootThemeProvider>
          <Navbar />
          <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {children}
          </main>
          <Footer />
        </RootThemeProvider>
      </body>
    </html>
  );
}
