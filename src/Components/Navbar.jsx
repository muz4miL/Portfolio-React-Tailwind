import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 mb-2 shadow-2xl rounded-b-xl bg-gradient-to-r from-black/80 via-black/60 to-black/80 backdrop-blur-lg">
      <div className="mt-1 bg-black md:mt-1 lg:mt-3">
        <div className="flex items-center justify-between w-full py-4">
          <a
            href="/"
            className="ml-4 text-2xl font-extrabold tracking-wide text-white font-poppins md:ml-26 lg:ml-56 lg:text-3xl"
          >
            Muzamil Shiraz
          </a>

          {/* Hamburger button visible below xl (1280px) */}
          <div className="flex items-center mr-4 cursor-pointer md:mr-26 xl:hidden">
            <button
              aria-label="Open menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
              className="p-2 transition rounded hover:bg-gray-700 focus:outline-none"
            >
              <span className="my-1 block h-0.5 w-6 rounded bg-gray-400"></span>
              <span className="my-1 block h-0.5 w-6 rounded bg-gray-400"></span>
              <span className="my-1 block h-0.5 w-6 rounded bg-gray-400"></span>
            </button>
            <span className="ml-2 text-base font-semibold tracking-wide text-gray-300 uppercase font-poppins sm:text-lg">
              Menu
            </span>
          </div>

          {/* Mobile menu overlay below xl (1280px) */}
          {isOpen && (
            <div className="fixed inset-0 z-50 flex flex-col items-center justify-center font-poppins bg-black/90 xl:hidden">
              <button
                aria-label="Close menu"
                onClick={closeMenu}
                className="absolute p-2 text-gray-200 bg-gray-800 rounded-full top-6 right-6 hover:bg-gray-700 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <ul className="flex flex-col items-center justify-center w-full gap-8">
                {['Home', 'About', 'Resume', 'Projects', 'Contact'].map(
                  (link) => (
                    <li
                      key={link}
                      className="text-2xl font-semibold text-gray-200 transition-colors cursor-pointer hover:text-yellow-400"
                      onClick={closeMenu}
                    >
                      {link}
                    </li>
                  ),
                )}
              </ul>
            </div>
          )}

          {/* Desktop nav links only on xl and above */}
          <ul className="hidden mr-4 space-x-8 text-lg font-normal gap-x-5 md:mr-16 xl:mr-65 xl:flex">
            {['Home', 'About', 'Resume', 'Projects', 'Contact'].map((link) => (
              <li
                key={link}
                className="relative font-normal text-white cursor-pointer group hover:text-yellow-400"
              >
                {link}
                <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded bg-yellow-400 transition-transform duration-300 group-hover:scale-x-100"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
