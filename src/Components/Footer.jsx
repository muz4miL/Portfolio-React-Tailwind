const Footer = ({ todoItems, setTodoItems }) => {
  let itemsLeft = todoItems.filter((item) => !item.completed).length;

  function handleClearCompleted() {
    setTodoItems((prev) => prev.filter((item) => !item.completed));
  }

  return (
    <footer className="border-scooter-900/10 text-scooter-600 lg:bm-4 mt-8 flex flex-col items-center justify-center gap-2 border-t px-4 pt-6 text-sm sm:flex-row sm:justify-between sm:gap-4 sm:text-base md:mb-2 dark:border-gray-700">
      <span className="mb-2 font-medium tracking-wide sm:mb-0 md:ml-2 lg:ml-4">
        {itemsLeft} items left
      </span>
      <button
        className="btn-clear mb-2 font-semibold sm:mb-0"
        onClick={handleClearCompleted}
      >
        Clear Completed
      </button>
    </footer>
  );
};

export default Footer;
