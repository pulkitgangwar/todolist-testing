import React, { useState } from "react";

// importing components
import Todos from "../Todos/Todos";
import AddTodoForm from "../AddTodoForm/AddTodoForm";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const todoObj = {
      text: todo,
      id: Math.random() * 100,
    };

    setTodos([...todos, todoObj]);
  };

  const removeTodo = (id) => {
    const filteredTodoArr = [...todos].filter(
      (todo) => todo.id.toString() !== id
    );

    setTodos(filteredTodoArr);
  };

  return (
    <div className="todocontainer">
      <AddTodoForm addTodo={addTodo} />
      <Todos todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default TodoContainer;
