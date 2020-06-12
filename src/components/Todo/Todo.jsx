import React, { useState } from "react";

// importing components
import EditTodo from "../EditTodo/EditTodo";

const Todo = ({ todo, removeTodo, saveEditTodo }) => {
  const [isEditing, setIsEditing] = useState(false);

  const { id, text } = todo;

  const handleRemove = (e) => {
    const id = e.target.parentElement.id;

    removeTodo(id);
  };

  const toggleEditState = () => {
    setIsEditing(!isEditing);
  };

  if (isEditing) {
    return (
      <div className="todo__edit">
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
      <h1 className="todo__text">{text}</h1>
      <button className="todo__remove" onClick={handleRemove}>
        remove
      </button>
      <button className="todo__edit" onClick={toggleEditState}>
        edit
      </button>
    </div>
  );
};

export default Todo;
