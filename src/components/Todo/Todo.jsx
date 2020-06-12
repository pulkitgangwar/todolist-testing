import React from "react";

const Todo = ({ todo, removeTodo }) => {
  const { id, text } = todo;

  const handleRemove = (e) => {
    const id = e.target.parentElement.id;

    removeTodo(id);
  };

  return (
    <div className="todo" id={id}>
      <h1 className="todo__text">{text}</h1>
      <button className="todo__remove" onClick={handleRemove}>
        remove
      </button>
      <button className="todo__edit">edit</button>
    </div>
  );
};

export default Todo;
