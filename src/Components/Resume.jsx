const experience = [
  {
    title: 'Frontend Developer',
    company: 'Personal Projects',
    period: 'Jun 2025 - Present',
    bullets: [
      'Built multiple React and Tailwind CSS projects.',
      'Focused on responsive UI and clean code.',
      'Delivered high-quality code and user experiences.',
    ],
  },
  {
    title: 'AI Sprint Extensive Internship',
    company: 'Brave Studios',
    period: 'Aug 2024 - Sep 2024',
    bullets: [
      'Attended workshops on AI and machine learning.',
      'Participated in interactive lessons and coding challenges.',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'Imsciences',
    period: '2023 - 2027',
    description:
      'Studying core CS concepts, software engineering, DSA and web development.',
  },
  {
    degree: 'YES Exchange Program',
    school: 'Centralia High School',
    period: '2019 - 2020',
    description: 'Focused on leadership, teamwork, and global perspective.',
  },
  {
    degree: 'Intermediate Computer Science',
    school: 'Edwards College Peshawar',
    period: '2020 - 2022',
    description:
      'Acquired foundational understanding of Computer Science and programming principles.',
  },
  {
    degree: 'Matriculation',
    school: 'LIMS',
    period: '2018 - 2020',
    description:
      'Completed Matriculation with a focus on science and mathematics.',
  },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-black px-4 py-16 text-white"
    >
      {/* Watermark and heading flex container */}
      <div className="relative mb-12 flex flex-col items-center justify-center">
        {/* Watermark background text */}
        <span className="pointer-events-none absolute top-1/2 left-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden text-center text-6xl font-extrabold text-white opacity-10 select-none sm:text-8xl md:text-[6rem] lg:text-[8rem] xl:text-[10rem]">
          RESUME
        </span>
        {/* Small heading above watermark */}
        <span className="relative z-10 text-center text-3xl font-bold tracking-widest text-yellow-500 uppercase lg:mt-6">
          Resume
        </span>
      </div>
      <div className="container mx-auto px-4">
        {/* Experience Section - styled like screenshot */}
        <section className="mt-16">
          <h2 className="mb-4 text-center text-5xl font-extrabold text-white">
            Experience
          </h2>
          <div className="mx-auto mb-12 h-0.5 w-full max-w-6xl rounded-full bg-gradient-to-r from-gray-600 via-yellow-400 to-gray-600"></div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {experience.map((item, idx) => (
              <div key={idx} className="rounded-xl bg-gray-800 p-8 shadow-lg">
                <p className="mb-2 text-2xl font-extrabold tracking-tight text-yellow-400">
                  {item.period}
                </p>
                <h3 className="mb-2 text-3xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mb-2 text-lg font-bold tracking-widest text-gray-400 uppercase">
                  {item.company}
                </p>
                <ul className="list-inside list-disc space-y-2 text-gray-300">
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section - full width */}
        <section className="mt-16">
          <h2 className="mb-4 text-center text-5xl font-extrabold text-white">
            Education
          </h2>
          <div className="mx-auto mb-12 h-0.5 w-full max-w-6xl rounded-full bg-gradient-to-r from-gray-600 via-yellow-400 to-gray-600"></div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {education.map((item, idx) => (
              <div key={idx} className="rounded-xl bg-gray-800 p-8 shadow-lg">
                <p className="mb-2 text-2xl font-extrabold tracking-tight text-yellow-400">
                  {item.period}
                </p>
                <h3 className="mb-2 text-3xl font-semibold text-white">
                  {item.degree}
                </h3>
                <p className="mb-2 text-lg font-bold tracking-widest text-gray-400 uppercase">
                  {item.school}
                </p>
                <p className="mt-2 text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

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
