import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="sticky top-0 z-50 border-none shadow-none">
      <div className="mt-1 mb-2 flex w-full items-center justify-between py-4 md:mt-1 lg:mt-3">
        <a
          href="/"
          className="font-poppins ml-4 text-2xl font-extrabold tracking-wide text-white md:ml-26 lg:ml-56 lg:text-3xl"
        >
          Muzamil Shiraz
        </a>

        <div
          onClick={toggleMenu}
          className="mr-4 flex cursor-pointer items-center md:mr-26 lg:hidden"
        >
          <button onClick={() => toggleMenu()} className="focus:outline-none">
            <span className="my-1 block h-0.5 w-4 rounded bg-gray-500"></span>
            <span className="my-1 block h-0.5 w-4 rounded bg-gray-500"></span>
            <span className="my-1 block h-0.5 w-4 rounded bg-gray-500"></span>
          </button>
          <span className="font-poppins ml-2 font-semibold tracking-wide text-gray-400 uppercase">
            Menu
          </span>
        </div>

        {isOpen && (
          <ul className="font-poppins absolute top-full left-0 z-40 flex w-full flex-col items-center justify-center bg-black py-8 lg:hidden">
            {['Home', 'About', 'Resume', 'Projects', 'Contact'].map((link) => (
              <li
                key={link}
                className="mb-6 cursor-pointer text-xl text-gray-200 transition-colors hover:text-yellow-400"
              >
                {link}
              </li>
            ))}
          </ul>
        )}

        <ul className="mr-4 hidden gap-x-5 space-x-8 text-lg font-normal md:mr-16 lg:mr-65 lg:flex">
          {['Home', 'About', 'Resume', 'Projects', 'Contact'].map((link) => (
            <li
              key={link}
              className="group relative cursor-pointer font-normal text-white hover:text-yellow-400"
            >
              {link}
              <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded bg-yellow-400 transition-transform duration-300 group-hover:scale-x-100"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
