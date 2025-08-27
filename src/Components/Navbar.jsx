const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-none shadow-none">
      <div className="mt-1 mb-2 flex w-full items-center justify-between py-4 md:mt-2 lg:mt-3">
        <a
          href="/"
          className="font-poppins ml-4 text-2xl font-extrabold tracking-wide text-white md:ml-24 lg:ml-56 lg:text-3xl"
        >
          Muzamil Shiraz
        </a>
        <ul className="mr-4 hidden gap-x-5 space-x-8 text-lg font-normal md:mr-16 lg:mr-65 lg:flex">
          {['Home', 'About', 'Resume', 'Projects', 'Contact'].map((link) => (
            <li
              key={link}
              className="cursor-pointer font-normal text-white hover:text-yellow-400"
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
