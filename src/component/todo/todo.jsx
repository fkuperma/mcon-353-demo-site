import React, { useState } from "react";
import "./todo.css";
//hmwk: add delete and replace with material ui to div

export const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([
    "Cook for Shabbos",
    "College Work",
    "Hang out with Friends",
  ]);

  const onInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const addTodo = () => {
    // todos.push(input);
    setTodos([...todos, input]);
  };
  return (
    <div>
      <h1>Todos</h1>
      <input onInput={onInput} />

      <button onClick={addTodo}>Add</button>
      {todos.map((todo) => (
        <p>
          <input type="checkbox" />
          {todo}
        </p>
      ))}
    </div>
  );
};
