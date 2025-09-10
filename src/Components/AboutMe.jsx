import myImage from '../assets/myImage.png';

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript (ES6+)', level: 85 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'HTML5 & CSS3', level: 80 },
  { name: 'Python', level: 70 },
  { name: 'Git & GitHub', level: 70 },
  { name: 'SQL', level: 50 },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-4 py-16 text-white md:px-8 lg:px-16 xl:px-24"
    >
      {/* Header Section - IMPROVED CENTERING */}

      <div className="relative mb-12 flex flex-col items-center justify-center">
        {/* Watermark background text */}
        <span className="pointer-events-none absolute top-1/2 left-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden text-center text-6xl font-extrabold text-white opacity-10 select-none sm:text-8xl md:text-[6rem] lg:text-[8rem] xl:text-[10rem]">
          ABOUT
        </span>
        {/* Small heading above watermark */}
        <span className="relative z-10 text-center text-3xl font-bold tracking-widest text-yellow-500 uppercase lg:mt-6">
          About Me
        </span>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Get to know more about my background, skills, and passion for
          development
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 xl:gap-16">
          {/* Left Column: About Text & Details */}
          <div className="flex flex-col justify-center space-y-8">
            {/* About Description - IMPROVED READABILITY */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300">
                I'm a Computer Science undergraduate and aspiring frontend
                developer with a growing focus on{' '}
                <span className="font-semibold text-yellow-400">
                  React and Tailwind CSS
                </span>
                . Over the past months, I've built real-world projects like a
                To-Do App, Notes App, and an Advice Generator.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                My background in teaching and leadership has given me strong
                communication and problem-solving skills, and my{' '}
                <span className="font-semibold text-yellow-400">
                  year-long exchange program in the United States
                </span>{' '}
                taught me adaptability, collaboration, and global perspective.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                I'm passionate about creating clean, user-friendly web
                experiences, and I'm committed to growing into a{' '}
                <span className="font-semibold text-yellow-400">
                  full-stack developer
                </span>{' '}
                while contributing value through innovative and reliable
                solutions.
              </p>
            </div>

            {/* Details Grid - ENHANCED STYLING */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                {
                  label: 'Profile',
                  value: 'Frontend Developer (React + Tailwind)',
                },
                { label: 'Domain', value: 'Web Frontend Development, UI/UX' },
                {
                  label: 'Education',
                  value: 'Bachelor of Computer Science (2027)',
                },
                {
                  label: 'Languages',
                  value: 'English, Urdu, Pushto, Punjabi & Persian',
                },
                {
                  label: 'Tech Stack',
                  value: 'React, Tailwind CSS, JavaScript (ES6+)',
                },
                {
                  label: 'Core Strengths',
                  value: 'Problem-Solving, Communication, Leadership',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-gray-800 bg-gray-900/50 p-4 transition-all duration-300 hover:border-yellow-400/30"
                >
                  <span className="block text-sm font-bold tracking-wide text-yellow-400 uppercase">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-gray-300">
                    {item.value}
                  </span>
                </div>
              ))}
              <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-4 transition-all duration-300 hover:border-yellow-400/30 sm:col-span-2">
                <span className="block text-sm font-bold tracking-wide text-yellow-400 uppercase">
                  Interests
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-gray-300">
                  Coding, Music, Travel Photography, Teaching, Exploring
                  Cultures
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Card & Skills */}
          <div className="flex flex-col gap-8">
            {/* Enhanced Profile Card */}
            <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-xl transition-all duration-300 hover:border-yellow-400/30">
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <div className="relative">
                  <img
                    src={myImage}
                    alt="Muzamil Shiraz"
                    className="h-32 w-32 rounded-xl border-4 border-yellow-500 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute -right-2 -bottom-2 rounded-full bg-green-500 p-2">
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-white">
                    Muzamil Shiraz
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-semibold text-yellow-400">
                        Role:
                      </span>{' '}
                      <span className="text-gray-300">Frontend Developer</span>
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold text-yellow-400">
                        Experience:
                      </span>{' '}
                      <span className="text-gray-300">2+ months hands-on</span>
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold text-yellow-400">
                        Location:
                      </span>{' '}
                      <span className="text-gray-300">Peshawar, Pakistan</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Skills Section */}
            <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-xl">
              <h3 className="mb-6 text-xl font-bold text-yellow-500">
                Technical Skills
              </h3>
              <div className="space-y-5">
                {skills.map((skill, i) => (
                  <div key={i} className="group">
                    <div className="mb-2 flex justify-between">
                      <span className="text-sm font-semibold tracking-wide text-white uppercase transition-colors group-hover:text-yellow-400">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-yellow-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-700">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          boxShadow: '0 0 10px rgba(251, 191, 36, 0.5)',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
