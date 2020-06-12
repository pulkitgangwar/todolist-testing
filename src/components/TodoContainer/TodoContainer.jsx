import React,{useState} from "react";

// importing components
import Todos from "../Todos/Todos";
import AddTodoForm from "../AddTodoForm/AddTodoForm";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todocontainer">
      <AddTodoForm />
      <Todos todos={todos} />
    </div>
  );
};

export default TodoContainer;
