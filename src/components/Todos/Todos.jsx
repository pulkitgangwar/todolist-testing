import React from "react";

// importing components
import Todo from "../Todo/Todo";

const Todos = ({ todos, toggleEditState, saveEditTodo, removeTodo }) => {
  return (
    <div className="todos">
      {todos.length
        ? todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              saveEditTodo={saveEditTodo}
              removeTodo={removeTodo}
            />
          ))
        : "Please Enter a todo"}
    </div>
  );
};

export default Todos;
