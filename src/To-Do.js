import React, { useState, useEffect } from 'react';
import TodoItem from './To-Do_item'; 

function TodoList() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('userTodos')) || []
  );
  const [newTodoTitle, setNewTodoTitle] = useState("");

  useEffect(() => {
    localStorage.setItem('userTodos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!newTodoTitle) return; 
    const newTodo = {
      id: new Date().getTime(), 
      title: newTodoTitle,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTodoTitle(""); 
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2 className="to-do-title">To-Do</h2>
      <input
        type="text"
        className="todo-input" 
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') addTodo(); }}
        />
      <button onClick={addTodo} className="todo-add-btn">+</button>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onToggle={toggleTodo}
          onDelete={deleteTodo} 
        />
      ))}
    </div>
  );
}

export default TodoList;
