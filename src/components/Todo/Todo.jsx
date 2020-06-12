import React, { useState } from "react";

// importing components
import EditTodo from "../EditTodo/EditTodo";

const Todo = ({ todo, removeTodo, saveEditTodo }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { id, text } = todo;

  const handleRemove = (e) => {
    const id = e.target.parentElement.parentElement.id;

    removeTodo(id);
  };

  const toggleEditState = () => {
    setIsEditing(!isEditing);
  };

  if (isEditing) {
    return (
      <div className="todo">
        <EditTodo
          todo={todo}
          saveEditTodo={saveEditTodo}
          toggleEditState={toggleEditState}
        />
      </div>
    );
  }

  return (
    <div className="todo" id={id}>
      <div className="todo__text__wrapper">
        <h1 className="todo__text">{text}</h1>
      </div>
      <div className="todo__cta">
        <button className="todo__remove btn" onClick={handleRemove}>
          remove
        </button>
        <button className="todo__edit btn" onClick={toggleEditState}>
          edit
        </button>
      </div>
    </div>
  );
};

export default Todo;
