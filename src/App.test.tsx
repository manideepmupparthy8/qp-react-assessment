import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('Todo Application', () => {
  test('renders Todo Application title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Todo List/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText(/Add Todo/i);

    fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);

    const todoElement = screen.getByText(/Test Todo/i);
    expect(todoElement).toBeInTheDocument();
  });

  test('marks a todo as completed', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Add a new todo/i);
    const addButton = screen.getByText(/Add Todo/i);

    fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);

    const checkbox = screen.getByTestId('todo-checkbox');

    fireEvent.click(checkbox);
  });
});
