import React, { useState } from "react";

const EditTodo = ({ todo, saveEditTodo, toggleEditState }) => {
  const [value, setValue] = useState(todo.text);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);

    const newTodoObj = {
      text: value,
      id: todo.id,
    };

    saveEditTodo(newTodoObj);
    toggleEditState();
  };

  return (
    <form className="edittodo" onSubmit={handleSubmit}>
      <input
        type="text"
        className="edittodo__input edittodo__todo"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default EditTodo;
