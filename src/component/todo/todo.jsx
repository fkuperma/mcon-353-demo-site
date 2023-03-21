import React, { useState, useContext } from "react";
import "./todo.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { purple } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { TodoContext } from "../../state/todo/todo-context";
import { TodoActions } from "../../state/todo/todo.reducer";

export const Todo = () => {
  const [input, setInput] = useState("");
  const { todoState, todoDispatch } = useContext(TodoContext);

  const onInput = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const addTodo = () => {
    todoDispatch({
      type: TodoActions.ADD,
      todo: { title: input, isComplete: false },
    });
    setInput("");
  };

  const deleteTodo = (todo) => {
    todoDispatch({
      type: TodoActions.DELETE,
      todo,
    });
  };

  const toggleChecked = (todo) => {
    todoDispatch({ type: TodoActions.TOGGLE, todo });
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="full">
      <br></br>
      <h1>MY TO DO LIST </h1>
      <div className="box">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Enter a Task"
            defaultValue="Enter a Task"
            variant="standard"
            onInput={onInput}
            value={input}
            color="secondary"
          />

          <div className="addButton">
            <IconButton onClick={addTodo} edge="end" color="secondary">
              <AddIcon />
            </IconButton>
          </div>
        </Box>
      </div>
      <br></br>
      <div className="tasks">
        {todoState.todos.map((todo, index) => (
          <p key={index} index={index} deleteTodo={deleteTodo} draggable>
            <Checkbox
              {...label}
              icon={<CheckCircleOutlineIcon />}
              checkedIcon={<CheckCircleIcon />}
              checked={todo.isComplete}
              onChange={() => toggleChecked(todo)}
              sx={{
                color: purple[800],
                "&.Mui-checked": {
                  color: purple[600],
                },
              }}
            />

            <IconButton
              onClick={() => deleteTodo(index)}
              edge="start"
              color="secondary"
            >
              <DeleteOutlineIcon />
            </IconButton>

            {todo.title}
          </p>
        ))}

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div class="fab">
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab aria-label="like" color="secondary">
            <FavoriteIcon />
          </Fab>
        </Box>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
