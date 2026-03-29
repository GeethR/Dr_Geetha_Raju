interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
  status?: string;
  year?: string;
  collaborators?: string[];
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  status,
  year,
  collaborators
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        {status && (
          <span className={`text-sm px-2 py-1 rounded-full ${
            status.toLowerCase() === 'completed'
              ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
              : status.toLowerCase() === 'ongoing'
              ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}>
            {status}
          </span>
        )}
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-sm px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {(year || collaborators) && (
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 space-y-1">
          {year && <div>Year: {year}</div>}
          {collaborators && collaborators.length > 0 && (
            <div>Collaborators: {collaborators.join(', ')}</div>
          )}
        </div>
      )}

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
