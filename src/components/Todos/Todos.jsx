import React from "react";

const Todos = ({ todos }) => {
  return (
    <div className="todos">
      {todos.length
        ? todos.map((todo) => (
            <h1 key={todo.id} id={todo.id}>
              {todo.text}
            </h1>
          ))
        : "Please Enter a todo"}
    </div>
  );
};

export default Todos;
