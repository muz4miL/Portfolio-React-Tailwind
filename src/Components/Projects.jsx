import premium from '../assets/premium.png';
import pizza from '../assets/pizza.png';
import TodoApp1 from '../assets/TodoApp1.png';
import TravelList from '../assets/TravelList.png';

const projects = [
  {
    image: premium,
    title: 'Digital Music Store Data Analysis using SQL',
    description:
      'Analyzed music store data using advanced SQL queires to identify gaps and increase the business growth.',
  },
  {
    image: pizza,
    title: 'Data Analysis using Python Project for Beginners',
    description:
      'Performed exploratory data analysis on diwali sales data using Python to improve the customer experience.',
  },
  {
    image: TodoApp1,
    title: 'Todo App',
    description: 'A simple todo app built with React and Tailwind CSS.',
  },
  {
    image: TravelList,
    title: 'Sales Forecast- Time Series Forecasting',
    description:
      'Used multiple machine learning models to forecast sales (retail store) and performed time series analysis.',
  },
  {
    image: '/assets/customer-segmentation.jpg',
    title: 'Customer Segmentation using clustering model',
    description:
      'Developed a ML model to give various recommendations of financial products & services on target customer groups.',
  },
];

const stats = [
  { value: '20', label: 'Achievements' },
  { value: '30', label: 'Projects' },
  { value: '1,000', label: 'Mentored Students' },
  { value: '500', label: 'Cups of coffee' },
];

export default function Projects() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 text-white">
      {/* Watermark and heading */}
      <div className="relative mb-12 flex flex-col items-center justify-center">
        <span className="pointer-events-none absolute top-1/2 left-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 text-center text-7xl font-extrabold whitespace-nowrap text-white uppercase opacity-10 select-none sm:text-8xl md:text-[8rem] lg:text-[10rem] xl:text-[12rem]">
          Projects
        </span>
        <span className="relative z-10 mt-6 text-center text-5xl font-extrabold text-yellow-500 uppercase">
          Projects
        </span>
        <p className="relative z-10 mt-4 max-w-2xl text-center text-lg text-gray-400">
          A collection of projects that demonstrate my skills in front-end
          development using React, Tailwind, and core web technologies.
        </p>
      </div>
      {/* Responsive space after heading/watermark */}
      <div className="mb-10 md:mb-16 lg:mb-24"></div>

      {/* Projects grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="flex flex-col overflow-hidden rounded-xl bg-gray-900 shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-2xl font-bold text-white">
                {project.title}
              </h3>
              <p className="text-base text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats section */}
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="min-w-[200px] rounded-xl bg-gray-900 px-12 py-8 text-center shadow-lg"
          >
            <div className="mb-2 text-4xl font-extrabold text-yellow-400">
              {stat.value}
            </div>
            <div className="text-lg font-medium text-gray-300">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Github CTA section */}
      <div className="mt-16 text-center">
        <h2 className="mb-2 text-4xl font-extrabold text-white">
          More projects on <span className="text-yellow-400">Github</span>
        </h2>
        <p className="mb-6 text-lg text-gray-300">
          I love to solve business problems & uncover hidden data stories
        </p>
        <a
          href="#" // Replace with actual Github link
          className="inline-block transform rounded-full bg-yellow-400 px-8 py-3 font-bold text-black uppercase shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-yellow-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
      </div>
    </section>
  );
}
