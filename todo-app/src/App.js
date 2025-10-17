"use client"

import { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (!inputValue) return; 

    const newTodo = {
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue(''); 
  };

  const tick = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={clearTodos}>Clear all todos</button>

      <ul id="todoList">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => tick(index)}
            />
            <label>{todo.text}</label>
          </li>
        ))}
      </ul>

      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
        }
        #todoList {
          list-style-type: none;
          padding: 0;
        }
        #todoList li {
          margin: 5px 0;
          font-size: 16px;
        }
        .completed {
          text-decoration: line-through;
          color: gray;
        }
      `}</style>
    </div>
  );
};

export default TodoApp;
