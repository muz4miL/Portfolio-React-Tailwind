import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import Logo from '../utils/Logo.jsx';

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navLinks = ['Product', 'Pricing', 'Contact'];
  return (
    <section>
      <header className="flex items-center border-b border-gray-800 bg-black px-4 py-4 shadow-lg md:px-8">
        {/* Brand */}
        <div className="ml-12 flex flex-1 items-center gap-2 md:ml-48">
          <Logo />
        </div>
        {/* Desktop Nav */}
        <nav className="hidden flex-1 items-center justify-center gap-2 text-sm md:flex">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="rounded px-3 py-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
        {/* Desktop Actions */}
        <div className="mr-12 hidden flex-1 items-center justify-end gap-4 md:mr-48 md:flex">
          <a
            href="#"
            className="rounded px-3 py-2 text-sm text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
          >
            Log in
          </a>
          <a
            href="#"
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-900 shadow transition-colors hover:bg-white"
          >
            Sign up
          </a>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="flex items-center justify-center rounded p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white md:hidden"
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
      </header>
      {/* Mobile Menu with AnimatePresence for open/close animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-black shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center gap-2 py-4">
              {/* Close button */}
              <button
                className="mr-6 mb-2 self-end rounded p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </svg>
              </button>
              {navLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="w-11/12 rounded px-3 py-2 text-center text-base text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="mt-2 flex gap-2">
                <a
                  href="#"
                  className="rounded px-3 py-2 text-base text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="rounded-lg bg-gray-100 px-4 py-2 text-base text-gray-900 shadow transition-colors hover:bg-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign up
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
