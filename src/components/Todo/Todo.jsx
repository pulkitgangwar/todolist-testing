import React from "react";

const Todo = ({ todo }) => {
  const { id, text } = todo;
  return (
    <div className="todo" id={id}>
      <h1 className="todo__text">{text}</h1>
      <button className="todo__remove">remove</button>
      <button className="todo__edit">edit</button>
    </div>
  );
};

export default Todo;
