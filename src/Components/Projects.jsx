import premium from '../assets/premium.png';
import pizza from '../assets/pizza.png';
import TodoApp1 from '../assets/TodoApp1.png';
import TravelList from '../assets/TravelList.png';
import bg1 from '../assets/bg_1.jpg';

const projects = [
  {
    image: premium,
    title: 'Premium Landing Page',
    description:
      'Designed a premium landing page for a music store using Figma and implemented it using React and Tailwind CSS.',
    live: 'https://landingpage-premium-ui.vercel.app/', // Replace with actual live link
  },
  {
    image: pizza,
    title: 'Pizza Ordering Website',
    description:
      'Developed a pizza ordering website using React, Tailwind CSS, and Firebase for authentication and database management.',
    live: 'https://pizza-ordering-app-react-tanstack-c.vercel.app/', // Replace with actual live link
  },
  {
    image: TodoApp1,
    title: 'Todo App',
    description: 'A simple todo app built with React and Tailwind CSS.',
    live: 'https://todo-app-react-tailwind-nu.vercel.app/', // Replace with actual live link
  },
  {
    image: TravelList,
    title: 'Travel List App',
    description: 'A travel list app built with React and Tailwind CSS.',
    live: 'https://muz4mil.github.io/Travel-List/', // Replace with actual live link
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-x-hidden bg-black px-4 py-16 text-white"
    >
      {/* Header Section */}
      <div className="relative mb-16 flex flex-col items-center justify-center">
        {/* Watermark background text */}
        <span className="pointer-events-none absolute top-1/2 left-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden text-center text-6xl font-extrabold text-white opacity-10 select-none sm:text-8xl md:text-[6rem] lg:text-[8rem] xl:text-[10rem]">
          PROJECTS
        </span>

        {/* Main heading - FIXED POSITIONING */}
        <div className="relative z-10 translate-y-2 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Below are the sample Web Development projects on React, Tailwind CSS
            & JavaScript.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 to-gray-800 transition-all duration-300 hover:border-yellow-400/30"
              onClick={() => window.open(project.live, '_blank')}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110 lg:h-56"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Overlay content on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="translate-y-4 transform rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-black transition-transform duration-300 group-hover:translate-y-0">
                    View Live Project
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">
                  {project.title}
                </h3>
                <p className="line-clamp-3 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>
              </div>

              {/* Subtle gradient border effect */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>

      {/* Overlapping stats and vivid background section */}
      <div className="relative mt-26 flex flex-col items-center justify-center">
        {/* Stats cards - overlap effect */}
        <div className="absolute top-0 left-1/2 z-20 flex w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 flex-wrap justify-center gap-8">
          <div className="bg-opacity-95 min-w-[220px] rounded-xl bg-[#232323] px-12 py-8 text-center shadow-2xl">
            <div className="mb-2 text-3xl font-extrabold text-yellow-400 md:text-4xl">
              20
            </div>
            <div className="text-base font-semibold text-white md:text-lg">
              Achievements
            </div>
          </div>
          <div className="bg-opacity-95 min-w-[220px] rounded-xl bg-[#232323] px-12 py-8 text-center shadow-2xl">
            <div className="mb-2 text-3xl font-extrabold text-yellow-400 md:text-4xl">
              30
            </div>
            <div className="text-base font-semibold text-white md:text-lg">
              Projects
            </div>
          </div>
          <div className="bg-opacity-95 min-w-[220px] rounded-xl bg-[#232323] px-12 py-8 text-center shadow-2xl">
            <div className="mb-2 text-3xl font-extrabold text-yellow-400 md:text-4xl">
              1,000
            </div>
            <div className="text-base font-semibold text-white md:text-lg">
              Mentored Students
            </div>
          </div>
          <div className="bg-opacity-95 min-w-[220px] rounded-xl bg-[#232323] px-12 py-8 text-center shadow-2xl">
            <div className="mb-2 text-3xl font-extrabold text-yellow-400 md:text-4xl">
              500
            </div>
            <div className="text-base font-semibold text-white md:text-lg">
              Cups of coffee
            </div>
          </div>
        </div>
        {/* Background image with vivid effect */}
        <div
          className="relative m-0 flex w-full flex-col items-center justify-center pt-30 pb-16"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="relative z-10 flex flex-col items-center justify-center">
            <h2 className="mb-2 text-4xl font-extrabold text-white md:text-4xl lg:text-4xl">
              More projects on <span className="text-yellow-400">Github</span>
            </h2>
            <p className="mb-8 text-lg font-light text-gray-100 md:text-2xl md:font-normal">
              I love to solve business problems & uncover hidden data stories
            </p>
            <a
              href="#" // Replace with actual Github link
              className="inline-block transform rounded-full bg-yellow-400 px-10 py-3 text-lg font-bold tracking-wide text-black uppercase shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-yellow-500 md:px-12 md:py-4 md:text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
