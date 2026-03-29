export default function Speeches() {
  const speeches = [
    {
      id: 1,
      title: "Governing Scientific AI at Scale: Exploring Safety, Evaluation, and Institutional Readiness",
      event: "India-AI Impact Summit 2026",
      date: "February 20, 2026",
      location: "Bharat Mandapam, New Delhi, India",
      role: "Panelist",
      organization: "RAND Europe",
      socialLinks: ["https://twitter.com/example/status/123"],
      photos: ["https://example.com/photo1.jpg"]
    },
    {
      id: 2,
      title: "Closed-Door Discussion by ICAIN and Swissnex: Building Global AI Infrastructure through International Collaboration",
      event: "India-AI Impact Summit 2026",
      date: "February 18, 2026",
      location: "Bharat Mandapam, New Delhi, India",
      role: "Speaker",
      organization: "ICAIN and Swissnex",
      socialLinks: [],
      photos: []
    },
    {
      id: 3,
      title: "Enterprise Adoption of Responsible AI: Discussing the real-world challenges, frameworks, and solutions",
      event: "India-AI Impact Summit 2026",
      date: "February 16, 2026",
      location: "Bharat Mandapam, New Delhi, India",
      role: "Panelist",
      organization: "PrivaSapien",
      socialLinks: [],
      photos: []
    },
    {
      id: 4,
      title: "The Future of Local LLMs: Reimagining the public value of broadcasting to create virtuous data production for local language models",
      event: "India-AI Impact Summit 2026",
      date: "February 16, 2026",
      location: "Bharat Mandapam, New Delhi, India",
      role: "Panelist",
      organization: "Research ICT Africa",
      socialLinks: [],
      photos: []
    },
    {
      id: 5,
      title: "Open-Source & Low-Resource AI: Building for Bharat and Beyond",
      event: "Conclave on 'Building Better with AI - Sustainability as a Blueprint for India'",
      date: "February 2, 2026",
      location: "Andhra Pradesh",
      role: "Panellist",
      organization: "Vignan University, Andhra Pradesh; Coalition for Responsible Evolution of AI (CoRE-AI)",
      socialLinks: [],
      photos: []
    },
    {
      id: 6,
      title: "Democratising AI Infrastructure: Towards an AI Commons",
      event: "Democratising AI Infrastructure: Towards an AI Commons",
      date: "January 22, 2026",
      location: "The Leela Palace, Chennai",
      role: "Speaker",
      organization: "Factly in collaboration with Meta",
      socialLinks: [],
      photos: []
    },
    {
      id: 7,
      title: "Building Trustworthy AI Systems for India",
      event: "Building Trustworthy AI Systems for India",
      date: "December 23, 2025",
      location: "College of Engineering, Guindy, Anna University, Chennai",
      role: "Speaker",
      organization: "IEEE Madras Section Technical Activity Sub-Committee",
      socialLinks: [],
      photos: []
    },
    {
      id: 8,
      title: "Governing AI systems through the lens of trust",
      event: "AI for the Modern Engineer (AIME): Fundamentals, Applications, and Future Trends",
      date: "December 22, 2025",
      location: "SSN College of Engineering, Chennai",
      role: "Speaker",
      organization: "SSN College of Engineering",
      socialLinks: [],
      photos: []
    },
    {
      id: 9,
      title: "Fireside chat on strengthening human capital for the AI era",
      event: "Conclave on Strengthening Human Capital for the AI Era",
      date: "December 19, 2025",
      location: "IIT Madras, Chennai",
      role: "Moderator",
      organization: "CeRAI",
      socialLinks: [],
      photos: []
    },
    {
      id: 10,
      title: "Shaping the New Techno-Order: AI, Infrastructure, and Inclusion - Resilient Futures: Advancing Sustainable Livelihoods in India & Africa",
      event: "Cape Town Conversation 2025",
      date: "November 25, 2025",
      location: "Cape Town",
      role: "Speaker",
      organization: "Observer Research Foundation (India); Thabo Mbeki Foundation",
      socialLinks: [],
      photos: []
    },
    {
      id: 11,
      title: "Workshop on Safe AI Adoption at Scale",
      event: "Cape Town Conversation 2025",
      date: "November 25, 2025",
      location: "Cape Town",
      role: "Speaker",
      organization: "Observer Research Foundation (India); Thabo Mbeki Foundation",
      socialLinks: [],
      photos: []
    },
    {
      id: 12,
      title: "AI Content and Reality",
      event: "TIACon2025",
      date: "November 6, 2025",
      location: "India Habitat Centre, New Delhi",
      role: "Panelist",
      organization: "TIACon2025",
      socialLinks: [],
      photos: []
    },
    {
      id: 13,
      title: "National Level 24-hour Hackathon inauguration",
      event: "CIEL KINGSTON VIBEAITHON 2025",
      date: "September 29, 2025",
      location: "Kingston Engineering College, Vellore",
      role: "Keynote speaker",
      organization: "Kingston Engineering College",
      socialLinks: [],
      photos: []
    },
    {
      id: 14,
      title: "AI governance and policy frameworks for responsible AI adoption",
      event: "Conclave on Applied AI",
      date: "September 24, 2025",
      location: "SRM IST Chennai, Chennai",
      role: "Session facilitator / invited speaker",
      organization: "Department of Data Science & Business Systems, SRM IST Chennai",
      socialLinks: [],
      photos: []
    },
    {
      id: 15,
      title: "Exploring AI Risk Management in Indian AI ecosystem",
      event: "Exploring AI Risk Management in Indian AI ecosystem",
      date: "April 2025",
      location: "SRM Institute of Science and Technology, Chennai",
      role: "Speaker",
      organization: "SRM Institute of Science and Technology",
      socialLinks: [],
      photos: []
    },
    {
      id: 16,
      title: "Unlocking the potential of AI in healthcare and agriculture for India",
      event: "Unlocking the potential of AI in healthcare and agriculture for India",
      date: "March 18, 2025",
      location: "New Delhi",
      role: "Roundtable participant",
      organization: "Google; CeRAI; BCG",
      socialLinks: [],
      photos: []
    },
    {
      id: 17,
      title: "GenAI and Misinformation",
      event: "MisInfoCon India 2025",
      date: "March 2025",
      location: "Bangalore",
      role: "Lightning talk speaker",
      organization: "Tattle",
      socialLinks: [],
      photos: []
    },
    {
      id: 18,
      title: "Decentralising components of the AI Stack",
      event: "Workshop on Democratizing AI",
      date: "February 2025",
      location: "Kolkata",
      role: "Paper Presenter / Speaker",
      organization: "Observer Research Foundation (India); Thabo Mbeki Foundation",
      socialLinks: [],
      photos: []
    },
    {
      id: 19,
      title: "Risk Management for GenAI Systems - Global and Indian Context",
      event: "FDP on GenAI for Sequential Data: Speech, Language, and More",
      date: "February 2025",
      location: "SSN College of Engineering, Chennai",
      role: "Speaker",
      organization: "SSN College of Science and Technology",
      socialLinks: [],
      photos: []
    },
    {
      id: 20,
      title: "AI Policies and AI Governance in India",
      event: "AI Policies and AI Governance in India",
      date: "February 3, 2025",
      location: "Ministry of Electronics and Information Technology (MeitY), New Delhi",
      role: "Trainer / podcast speaker",
      organization: "Capacity Building Division, National e-Governance Division (NeGD)",
      socialLinks: [],
      photos: []
    },
    {
      id: 21,
      title: "WSAI Exhibitor",
      event: "CODS - COMAD 2024",
      date: "December 17-20, 2024",
      location: "IIT Jodhpur, Jodhpur",
      role: "Exhibitor",
      organization: "CODS - COMAD 2024",
      socialLinks: [],
      photos: []
    },
    {
      id: 22,
      title: "Determining Legal Base for Processing Personal Data for AI Innovation",
      event: "Determining Legal Base for Processing Personal Data for AI Innovation",
      date: "December 13, 2024",
      location: "New Delhi",
      role: "Roundtable participant",
      organization: "The Dialogue in partnership with Cyril Amarchand Mangaldas",
      socialLinks: [],
      photos: []
    },
    {
      id: 23,
      title: "Exploring Women's Digital Trust",
      event: "Trust Mamla: Exploring Women's Digital Trust",
      date: "November 12-13, 2024",
      location: "Aapti Institute, Bangalore",
      role: "Participant",
      organization: "Aapti Institute",
      socialLinks: [],
      photos: []
    },
    {
      id: 24,
      title: "Sustainable Product Development for a Better Tomorrow",
      event: "IEEE Women in Engineering - International Leadership Summit (WIEILS) 2024",
      date: "October 5, 2024",
      location: "Anna University, Chennai",
      role: "Panelist",
      organization: "IEEE Women in Engineering",
      socialLinks: [],
      photos: []
    },
    {
      id: 25,
      title: "Responsible AI / RAI Sandpit",
      event: "UK RAI Sandpit",
      date: "September 2024",
      location: "Neemrana Fort Palace, New Delhi",
      role: "Participant",
      organization: "UK RAI Sandpit",
      socialLinks: [],
      photos: []
    },
    {
      id: 26,
      title: "AI and Ethics - A Sociotechnical Perspective",
      event: "AI and Ethics - A Sociotechnical Perspective",
      date: "September 12, 2024",
      location: "SSN College of Engineering, Chennai",
      role: "Speaker",
      organization: "AICTE-approved ATAL Faculty Development Program",
      socialLinks: [],
      photos: []
    }
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
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{speech.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">{speech.event}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">{speech.role}</p>
                <p className="text-sm text-gray-500">{speech.organization}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{speech.date}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{speech.location}</p>
              </div>
            </div>

            {/* Social Media Links */}
            {speech.socialLinks && speech.socialLinks.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Social Media Posts:</h4>
                <div className="flex flex-wrap gap-2">
                  {speech.socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition"
                    >
                      🔗 Post {index + 1}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Photos */}
            {speech.photos && speech.photos.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Event Photos:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {speech.photos.map((photo, index) => (
                    <a
                      key={index}
                      href={photo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <img
                        src={photo}
                        alt={`Event photo ${index + 1}`}
                        className="w-full h-20 object-cover rounded-lg hover:opacity-80 transition"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
