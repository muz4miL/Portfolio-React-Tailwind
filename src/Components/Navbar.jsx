const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
        <div className="mt-3 pl-8 font-mono text-3xl font-extrabold tracking-wide text-white">
          Muzamil Shiraz
        </div>
        <ul className="flex space-x-8">
          {['Home', 'About', 'Resume', 'Projects', 'Contact'].map((link) => (
            <li
              key={link}
              className="cursor-pointer font-bold text-white hover:text-yellow-400"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
