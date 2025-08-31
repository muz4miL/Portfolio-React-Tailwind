const experience = [
  {
    title: 'Frontend Developer',
    company: 'Personal Projects',
    period: 'Jun 2025 - Present',
    bullets: [
      'Built multiple React and Tailwind CSS projects.',
      'Focused on responsive UI and clean code.',
      'Collaborated with designers to deliver premium user experiences.',
    ],
  },
  {
    title: 'Programming Tutor',
    company: 'Freelance',
    period: 'Jan 2025 - May 2025',
    bullets: [
      'Taught basics of programming and web development to beginners.',
      'Created interactive lessons and coding challenges.',
    ],
  },
];

const education = [
  {
    degree: 'BSc Computer Science',
    school: 'University of Peshawar',
    period: '2023 - 2027',
    description:
      'Studying core CS concepts, software engineering, and web development.',
  },
  {
    degree: 'Exchange Program',
    school: 'US High School',
    period: '2022 - 2023',
    description: 'Focused on leadership, teamwork, and global perspective.',
  },
];

export default function Resume() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 text-white">
      {/* Watermark Resume text behind header and intro */}
      <div className="pointer-events-none absolute top-12 right-0 left-0 z-0 flex items-center justify-center select-none">
        <h1 className="text-[12vw] leading-none font-extrabold whitespace-nowrap text-gray-800 opacity-10 md:text-[9vw] lg:text-[8vw]">
          Resume
        </h1>
      </div>

      {/* Main container above watermark */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-5xl font-bold text-white md:text-6xl">
          Resume
        </h2>
        <div className="mx-auto mt-4 mb-8 h-1 w-24 rounded-full bg-yellow-400"></div>
        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-300">
          Experienced educator and content creator with strong skills in
          teaching, communication, and digital media.
          <br />
          Proficient in coding, photography, and social media management. Adept
          at simplifying complex concepts and leading collaborative projects
          with effective time management.
        </p>
        {/* Experience & Education Sections */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Experience Section */}
          <div>
            <h2 className="mb-4 text-center text-4xl font-bold text-white">
              Experience
            </h2>
            <div className="mx-auto mb-12 h-1 w-24 rounded-full bg-yellow-400"></div>
            <div className="grid grid-cols-1 gap-8">
              {experience.map((item, idx) => (
                <div key={idx} className="rounded-lg bg-gray-800 p-6 shadow-lg">
                  <p className="mb-2 text-xl font-semibold text-yellow-400">
                    {item.period}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-semibold tracking-wide text-gray-400 uppercase">
                    {item.company}
                  </p>
                  <ul className="mt-3 list-inside list-disc space-y-2 text-gray-300">
                    {item.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="mb-4 text-center text-4xl font-bold text-white">
              Education
            </h2>
            <div className="mx-auto mb-12 h-1 w-24 rounded-full bg-yellow-400"></div>
            <div className="grid grid-cols-1 gap-8">
              {education.map((item, idx) => (
                <div key={idx} className="rounded-lg bg-gray-800 p-6 shadow-lg">
                  <p className="mb-2 text-xl font-semibold text-yellow-400">
                    {item.period}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-white">
                    {item.degree}
                  </h3>
                  <p className="mt-1 font-semibold tracking-wide text-gray-400 uppercase">
                    {item.school}
                  </p>
                  <p className="mt-3 text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="mt-16 text-center">
          <a
            href="#" // Replace with actual CV link
            className="inline-block transform rounded-full bg-yellow-400 px-8 py-3 font-bold text-black uppercase shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-yellow-500"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
