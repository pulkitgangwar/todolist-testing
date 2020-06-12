import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";

// importing the component to be tested
import EditTodo from "./EditTodo";

describe("<EditTodo />", () => {
  afterEach(cleanup);

  it("should render the input element with default value", () => {
    const saveEditTodo = jest.fn();
    const toggleEditState = jest.fn();

    const todo = {
      id: 1,
      text: "Todo",
    };

    const { getByTestId } = render(
      <EditTodo
        todo={todo}
        saveEditTodo={saveEditTodo}
        toggleEditState={toggleEditState}
      />
    );

    expect(getByTestId("edittodo__todo").value).toEqual("Todo");
  });

  it("should update the state when the input changes", () => {
    const saveEditTodo = jest.fn();
    const toggleEditState = jest.fn();

    const todo = {
      id: 1,
      text: "Todo",
    };

    const { getByTestId } = render(
      <EditTodo
        todo={todo}
        saveEditTodo={saveEditTodo}
        toggleEditState={toggleEditState}
      />
    );

    // to clear the input
    fireEvent.change(getByTestId("edittodo__todo"), { target: { value: "" } });
    fireEvent.change(getByTestId("edittodo__todo"), {
      target: { value: "New Todo" },
    });

    expect(getByTestId("edittodo__todo").value).toEqual("New Todo");
  });

  it("should fire toggleEditState and saveEditTodo function when form is submitted", () => {
    const saveEditTodo = jest.fn();
    const toggleEditState = jest.fn();

    const todo = {
      id: 1,
      text: "Todo",
    };

    const { getByTestId } = render(
      <EditTodo
        todo={todo}
        saveEditTodo={saveEditTodo}
        toggleEditState={toggleEditState}
      />
    );

    // to clear the input
    fireEvent.change(getByTestId("edittodo__todo"), { target: { value: "" } });
    fireEvent.change(getByTestId("edittodo__todo"), {
      target: { value: "New Todo" },
    });

    fireEvent.submit(getByTestId("edittodo"));

    expect(saveEditTodo).toHaveBeenCalled();
    expect(toggleEditState).toHaveBeenCalled();
    expect(saveEditTodo).toHaveBeenCalledTimes(1);
    expect(toggleEditState).toHaveBeenCalledTimes(1);
  });
});
