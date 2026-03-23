export default function Credentials() {
  const education = [
    {
      degree: 'Ph.D. in Computer Science',
      institution: 'University Name',
      year: '2020',
    },
    {
      degree: 'Master in Computer Science',
      institution: 'University Name',
      year: '2018',
    },
  ];

  const experience = [
    {
      title: 'Senior Researcher',
      company: 'Company Name',
      duration: '2020 - Present',
    },
    {
      title: 'Research Associate',
      company: 'Previous Company',
      duration: '2018 - 2020',
    },
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
