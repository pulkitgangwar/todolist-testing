// snapshottest
import React from "react";
import { cleanup, render } from "@testing-library/react";

// importing the component to be tested
import Todos from "./Todos";

describe("<Todos />", () => {
  afterEach(cleanup);

  it("should match the snapshot", () => {
    // mocking functions
    const removeTodo = jest.fn();
    const toggleEditState = jest.fn();
    const saveEditTodo = jest.fn();
    const todos = [
      { id: 1, text: "Todo 1" },
      { id: 2, text: "Todo 2" },
      { id: 3, text: "Todo 3" },
    ];

    const renderedTodos = render(
      <Todos
        todos={todos}
        removeTodo={removeTodo}
        saveEditTodo={saveEditTodo}
        toggleEditState={toggleEditState}
      />
    );

    expect(renderedTodos).toMatchSnapshot();
  });
});
