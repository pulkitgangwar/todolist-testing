import React, { useState } from "react";

const AddTodoForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      return;
    }

    console.log(value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input form__input--todo"
        type="text"
        placeholder="Enter a todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default AddTodoForm;
