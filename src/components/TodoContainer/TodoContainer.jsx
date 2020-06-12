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

  const saveEditTodo = (todo) => {
    const EditedTodoArr = [...todos].map((singleTodo) => {
      if (singleTodo.id.toString() === todo.id.toString()) {
        return {
          id: todo.id,
          text: todo.text,
        };
      }
      return singleTodo;
    });

    // const todoObj = {
    //   id: todo.id,
    //   text: todo.text,
    // };

    setTodos([...EditedTodoArr]);
  };

  return (
    <div className="todocontainer">
      <div className="todocontainer__wrapper">
        <div className="todocontainer__form">
          <AddTodoForm addTodo={addTodo} />
        </div>
        <div className="todocontainer__todos">
          <Todos
            todos={todos}
            removeTodo={removeTodo}
            saveEditTodo={saveEditTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
