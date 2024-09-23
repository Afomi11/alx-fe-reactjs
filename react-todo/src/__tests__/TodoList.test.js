// src/__tests__/TodoList.test.js

import React from 'react';
import { render, screen, fireEvent ,waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList'; // Adjust the import path as needed

test('renders TodoList component', () => {
  render(<TodoList />);

  // Verify initial render elements
  expect(screen.getByText('Todo List')).toBeInTheDocument();
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});
test('a dds a new todo', () => {
    render(<TodoList />);
  
    // Simulate user input and form submission
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add Todo'));
  
    // Verify that the new todo is added to the list
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });
  test('toggles a todo', () => {
    render(<TodoList />);
  
    // Simulate clicking the todo to toggle its completion status
    fireEvent.click(screen.getByText('Learn React'));
  
    // Verify that the todo's style has changed (e.g., strikethrough)
    expect(screen.getByText('Learn React')).toHaveStyle('text-decoration: line-through');
  });
  // test('deletes a todo', async () => {
  //   render(<TodoList />);
  
  //   // Get all delete buttons
  //   const deleteButtons = screen.getAllByText('Delete');
  
  //   // Click the first delete button
  //   fireEvent.click(deleteButtons[0]); // Clicks the first 'Delete' button
  
  //   // Wait for the DOM to update and verify that the todo is no longer in the document
  //   await waitFor(() => {
  //     expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  //   });
  // });