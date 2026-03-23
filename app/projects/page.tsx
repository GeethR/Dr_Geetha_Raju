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
