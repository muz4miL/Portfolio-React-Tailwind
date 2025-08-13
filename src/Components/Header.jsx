const Header = () => {
  return (
    <header className="header-gradient p-6 sm:p-8 lg:p-10">
      <div className="flex items-center gap-4 sm:gap-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-scooter-600 dark:text-scooter-400 h-10 w-10 transition-colors duration-300 sm:h-12 sm:w-12"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.3 7.3a1 1 0 00-1.4 0L11 13.17l-1.9-1.9a1 1 0 10-1.4 1.42l2.6 2.58a1 1 0 001.4 0l4.6-4.58a1 1 0 000-1.42z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-heading text-scooter-600 dark:text-scooter-400">
          Todo App
        </h2>
      </div>
      <span className="text-scooter-500 dark:text-scooter-400 mt-4 block text-base font-semibold sm:text-lg">
        Monday, Aug 11
      </span>
    </header>
  );
};

export default Header;
