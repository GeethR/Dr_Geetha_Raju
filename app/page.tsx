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
          AI Governance Expert specializing in responsible AI adoption, policy frameworks, and institutional readiness for scientific AI at scale.
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
          <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">26+</div>
          <div className="text-gray-600 dark:text-gray-400">Invited Speeches & Events</div>
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
