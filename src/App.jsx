import React from "react";

// importing components
import TodoContainer from "./components/TodoContainer/TodoContainer";

const App = () => {
  console.log(
    "%c This project was made for practising react-testing-library and git",
    "color:red;font-size:1rem;"
  );
  return (
    <div>
      <TodoContainer />
    </div>
  );
};

export default App;
