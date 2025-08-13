import { useState } from 'react';

const InputTodo = ({ setTodoItems }) => {
  const [inputText, setInputText] = useState('');

  const handleAddTodo = () => {
    if (inputText.trim()) {
      setTodoItems((prevItems) => [
        ...prevItems,
        {
          id: Date.now(),
          text: inputText,
          completed: false,
          date: new Date().toLocaleDateString,
        },
      ]);
      setInputText('');
    }
  };

  return (
    <section className="section-border section-bg-light px-4 py-6 sm:px-8 lg:px-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <input
          type="text"
          placeholder="What do you need to do?"
          className="input-primary w-full sm:flex-1"
          aria-label="Add new task"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          aria-label="Add task"
          className="btn-primary w-full sm:w-auto"
          type="button"
          onClick={handleAddTodo}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 sm:h-7 sm:w-7"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 4a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H5a1 1 0 110-2h6V5a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default InputTodo;
