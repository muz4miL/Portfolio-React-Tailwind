import Header from './Components/Header';
import InputTodo from './Components/InputTodo';
import FiltersTodo from './Components/FiltersTodo';
import TodoList from './Components/TodoList';
import Footer from './Components/Footer';
import { useState, useEffect } from 'react';

export default function App() {
  const [todoItems, setTodoItems] = useState(() => {
    const response = localStorage.getItem('todoItems');
    return response ? JSON.parse(response) : [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <div className="font-inter from-scooter-100 to-scooter-200 text-scooter-900 flex min-h-screen w-full items-center justify-center bg-gradient-to-br p-4 transition-colors duration-500 sm:p-6 dark:bg-gray-900 dark:text-gray-100">
      <div
        className="border-scooter-900/10 shadow-3xl shadow-scooter-900/10 w-[95%] overflow-hidden rounded-4xl border bg-white sm:w-[90%] md:w-[85%] lg:max-w-5xl dark:border-gray-700 dark:bg-gray-800 dark:shadow-none"
        role="region"
        aria-label="Todo Application"
      >
        <Header />
        <InputTodo setTodoItems={setTodoItems} />
        <FiltersTodo filter={filter} setFilter={setFilter} />
        <TodoList
          todoItems={todoItems}
          setTodoItems={setTodoItems}
          filter={filter}
        />
        <Footer todoItems={todoItems} setTodoItems={setTodoItems} />
      </div>
    </div>
  );
}
