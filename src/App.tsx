import React, { useState } from 'react';
import './App.css';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

  export default function App() {

  const [inputValue, setInputValue] = useState<string>('');
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return;
    const newTodo: TodoItem = {
      id: todos.length + 1,
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodoCompletion = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add a new todo..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodoCompletion(todo.id)}
              data-testid={'todo-checkbox'}
            />
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};