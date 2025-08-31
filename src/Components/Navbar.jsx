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
    <nav className="sticky top-0 z-50 mb-2 rounded-b-xl bg-gradient-to-r from-black/80 via-black/60 to-black/80 shadow-2xl backdrop-blur-lg">
      <div className="mt-1 bg-black md:mt-1 lg:mt-3">
        <div className="flex w-full items-center justify-between py-3 lg:ml-2">
          <a
            href="/"
            className="font-poppins ml-4 text-2xl font-extrabold tracking-wide text-white md:ml-26 lg:ml-56 lg:text-3xl"
          >
            Muzamil Shiraz
          </a>

          {/* Hamburger button visible below xl (1280px) */}
          <div className="mr-4 flex cursor-pointer items-center md:mr-26 xl:hidden">
            <button
              aria-label="Open menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
              className="rounded p-2 transition hover:bg-gray-700 focus:outline-none"
            >
              <span className="my-1 block h-0.5 w-6 rounded bg-gray-400"></span>
              <span className="my-1 block h-0.5 w-6 rounded bg-gray-400"></span>
              <span className="my-1 block h-0.5 w-6 rounded bg-gray-400"></span>
            </button>
            <span className="font-poppins ml-2 text-base font-semibold tracking-wide text-gray-300 uppercase sm:text-lg">
              Menu
            </span>
          </div>

          {/* Mobile menu overlay below xl (1280px) */}
          {isOpen && (
            <div className="font-poppins fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 xl:hidden">
              <button
                aria-label="Close menu"
                onClick={closeMenu}
                className="absolute top-6 right-6 rounded-full bg-gray-800 p-2 text-gray-200 hover:bg-gray-700 focus:outline-none"
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
              <ul className="flex w-full flex-col items-center justify-center gap-8">
                {['Home', 'About', 'Resume', 'Projects', 'Contact'].map(
                  (link) => (
                    <li
                      key={link}
                      className="cursor-pointer text-2xl font-semibold text-gray-200 transition-colors hover:text-yellow-400"
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
          <ul className="mr-4 hidden gap-x-5 space-x-8 text-lg font-normal md:mr-16 xl:mr-65 xl:flex">
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
      </div>
    </nav>
  );
};

export default Navbar;
