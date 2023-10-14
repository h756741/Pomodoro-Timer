import React from 'react';

function TodoItem({ id, title, completed, onToggle, onDelete }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          className="todo-checkbox" 
          checked={completed}
          onChange={() => onToggle(id)}
        />
        <label className="todo-text" style={{ textDecoration: completed ? 'line-through' : 'none', color: '#5B5750' }}>
          {title}
        </label>
      </div>
      <button className="todo-delete-btn" onClick={() => onDelete(id)}>X</button>
    </div>
  );
}

export default TodoItem;
