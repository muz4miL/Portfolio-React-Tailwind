const TodoList = ({ todoItems, setTodoItems, filter }) => {
  let appliedFilter = todoItems;
  if (filter === 'active') {
    appliedFilter = todoItems.filter((item) => !item.completed);
  } else if (filter === 'completed') {
    appliedFilter = todoItems.filter((item) => item.completed);
  }

  function handleToggleCompleted(id) {
    setTodoItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }

  function handleDeleteTodo(id) {
    setTodoItems((prev) => prev.filter((item) => item.id !== id));
  }
  return (
    <section className="section-bg-light rounded-4xl px-4 py-6 sm:px-8 lg:px-10">
      <ul
        className="todo-list scrollbar-thin scrollbar-thumb-scooter-300 scrollbar-track-transparent overflow-hidden rounded-2xl"
        role="list"
      >
        {todoItems.length === 0 && (
          <div className="bg-scooter-50 flex flex-col items-center justify-center rounded-2xl py-16 shadow-inner dark:bg-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 48 48"
              className="text-scooter-300 mb-4 h-16 w-16"
              aria-hidden="true"
            >
              <rect
                x="8"
                y="12"
                width="32"
                height="28"
                rx="6"
                fill="currentColor"
                opacity="0.15"
              />
              <rect
                x="14"
                y="18"
                width="20"
                height="4"
                rx="2"
                fill="currentColor"
                opacity="0.3"
              />
              <rect
                x="14"
                y="26"
                width="12"
                height="4"
                rx="2"
                fill="currentColor"
                opacity="0.3"
              />
              <rect
                x="14"
                y="34"
                width="8"
                height="4"
                rx="2"
                fill="currentColor"
                opacity="0.3"
              />
              <rect
                x="8"
                y="12"
                width="32"
                height="28"
                rx="6"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <span className="text-scooter-400 text-lg font-semibold">
              Your list is ready for its first superstar task!
            </span>
          </div>
        )}
        {appliedFilter.map((todo) => (
          <li
            key={todo.id}
            className="card gap-4 shadow-lg transition-transform duration-300 hover:shadow-2xl dark:bg-gray-800"
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleCompleted(todo.id)}
                className="accent-scooter-500 mr-2 h-6 w-6 cursor-pointer"
                aria-label="Mark as completed"
              />
              <span>{todo.text}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{todo.date}</span>
              <button
                aria-label="Delete todo"
                className="text-scooter-400 ml-4 transition-colors hover:scale-105 hover:text-red-500"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 7h12M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m2 0v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7m3 4v6m4-6v6"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
