interface PublicationCardProps {
  title: string;
  authors: string;
  venue: string;
  year: number;
  link?: string;
}

export default function PublicationCard({ title, authors, venue, year, link }: PublicationCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-2">{authors}</p>
      <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-4">
        {venue} • {year}
      </p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
        >
          Read Publication →
        </a>
      )}
    </div>
  );
}
