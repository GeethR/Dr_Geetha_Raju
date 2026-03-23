export default function Speeches() {
  const speeches = [
    {
      id: 1,
      title: 'Speech Title 1',
      event: 'Event/Conference Name',
      date: 'Date',
      location: 'Location',
    },
    {
      id: 2,
      title: 'Speech Title 2',
      event: 'Event/Conference Name',
      date: 'Date',
      location: 'Location',
    },
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
