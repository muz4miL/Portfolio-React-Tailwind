import { useState, useEffect } from 'react';

// Navigation items with their corresponding section IDs (moved outside component)
const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Resume', id: 'resume' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero'); // Track active section

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

  // Active section detection using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -50% 0px', // Account for navbar height and center detection
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array since navItems is static

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  // Smooth scroll to section function
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    closeMenu(); // Close mobile menu after clicking
  }

  return (
    <nav className="fixed top-0 right-0 left-0 z-[9999] mb-2 rounded-b-xl border-b border-gray-800/50 bg-gradient-to-r from-black/95 via-black/90 to-black/95 shadow-2xl backdrop-blur-md">
      <div className="mt-1 bg-black/80 backdrop-blur-sm md:mt-1 lg:mt-3">
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
                {navItems.map((item) => (
                  <li
                    key={item.name}
                    className={`cursor-pointer text-2xl font-semibold transition-colors ${
                      activeSection === item.id
                        ? 'text-yellow-400'
                        : 'text-gray-200 hover:text-yellow-400'
                    }`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          )}          {/* Desktop nav links only on xl and above */}
          <ul className="mr-4 hidden gap-x-5 space-x-8 text-lg font-normal md:mr-16 xl:mr-65 xl:flex">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`group relative cursor-pointer font-normal transition-colors ${
                  activeSection === item.id
                    ? 'text-yellow-400'
                    : 'text-white hover:text-yellow-400'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded bg-yellow-400 transition-transform duration-300 ${
                    activeSection === item.id
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
