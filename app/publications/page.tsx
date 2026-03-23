import PublicationCard from '@/components/PublicationCard';

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
    {
      id: 2,
      title: 'Publication Title 2',
      authors: 'Your Name, Co-author',
      venue: 'Journal/Conference Name',
      year: 2023,
      link: 'https://example.com',
    },
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
          <PublicationCard key={pub.id} {...pub} />
        ))}
      </div>
    </div>
  );
}
