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
      className="relative px-4 py-16 overflow-hidden text-white bg-black md:px-12 lg:px-24"
    >
      {/* Layered heading design */}
      <div className="relative flex flex-col items-center justify-center mb-12">
        {/* Watermark background text */}
        <span className="pointer-events-none absolute top-1/2 left-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 text-center text-6xl font-extrabold whitespace-nowrap text-white opacity-10 select-none sm:text-8xl md:text-[8rem] lg:text-[10rem] xl:text-[12rem]">
          ABOUT
        </span>
        {/* Small heading above watermark */}
        <span className="relative z-10 text-lg font-bold tracking-widest text-center text-yellow-500 uppercase">
          About Me
        </span>
      </div>
      {/* Responsive grid */}
      <div className="relative z-10 grid items-start grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left: About text & details */}
        <div className="flex flex-col justify-center">
          <p className="mb-8 text-lg leading-relaxed text-gray-300">
            I’m a Computer Science undergraduate and aspiring frontend developer
            with a growing focus on React and Tailwind CSS. Over the past
            months, I’ve built real-world projects like a To-Do App, Notes App,
            and an Advice Generator, which have sharpened my skills in
            JavaScript, React, and responsive UI design. My background in
            teaching and leadership has given me strong communication and
            problem-solving skills, and my year-long exchange program in the
            United States taught me adaptability, collaboration, and global
            perspective. I’m passionate about creating clean, user-friendly web
            experiences, and I’m committed to growing into a full-stack
            developer while contributing value through innovative and reliable
            frontend solutions.
          </p>
          <div className="grid grid-cols-1 text-gray-300 gap-x-8 gap-y-4 sm:grid-cols-2">
            <p>
              <span className="font-bold text-white">Profile:</span> Frontend
              Developer (React + Tailwind)
            </p>
            <p>
              <span className="font-bold text-white">Domain:</span> Web Frontend
              Development, UI/UX, Responsive Design
            </p>
            <p>
              <span className="font-bold text-white">Education:</span> Bachelor
              of Computer Science (2027)
            </p>
            <p>
              <span className="font-bold text-white">Languages:</span> English,
              Urdu, Pushto, Punjabi & Persian
            </p>
            <p>
              <span className="font-bold text-white">Tech Stack:</span> React,
              Tailwind CSS, JavaScript (ES6+), Git & GitHub
            </p>
            <p>
              <span className="font-bold text-white">Core Strengths:</span>{' '}
              Problem-Solving, AI Tools, Communication, Leadership, Teamwork,
              Creativity,
            </p>
            <p className="sm:col-span-2">
              <span className="font-bold text-white">Interests:</span> Coding,
              Music, Travel Photography, Teaching, Exploring Cultures
            </p>
          </div>
        </div>
        {/* Right: Profile card & skills */}
        <div className="flex flex-col items-center gap-8 lg:items-start">
          <div className="flex flex-row items-center w-full gap-6">
            <img
              src={myImage}
              alt="Muzamil Shiraz"
              className="object-cover w-32 h-32 border-4 border-yellow-500 shadow-lg rounded-xl"
            />
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold">
                Job Role:{' '}
                <span className="text-gray-300">Frontend Developer</span>
              </p>
              <p className="text-lg font-semibold">
                Experience:{' '}
                <span className="text-gray-300">
                  2+ months of hands-on project
                </span>
              </p>
              <p className="text-lg font-semibold">
                Location:{' '}
                <span className="text-gray-300">Peshawar, Pakistan</span>
              </p>
            </div>
          </div>
          {/* Skills */}
          <div className="w-full">
            <h3 className="mb-4 text-xl font-bold text-yellow-500">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-semibold tracking-wide uppercase">
                      {skill.name}
                    </span>
                    <span className="text-sm font-semibold text-yellow-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded">
                    <div
                      className="h-2 bg-yellow-500 rounded"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
