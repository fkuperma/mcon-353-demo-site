//Fraidy Kuperman
import { useReducer } from "react";
import "./App.css";
import { Home } from "./component/home/home";
import { Todo } from "./component/todo/todo";
import { Header } from "./component/header/header";
import { HashRouter, Routes, Route } from "react-router-dom";
import { TodoContext } from "./state/todo/todo-context";
import { todoReducer } from "./state/todo/todo.reducer";
import { Chat } from "./component/chat/chat";

function App() {
  const [todoState, todoDispatch] = useReducer(todoReducer, {
    todos: [],
  });

  return (
    <HashRouter>
      <Header />
      <TodoContext.Provider value={{ todoState, todoDispatch }}>
        <Routes>
          {/* http://localhost:3000/#/ */}
          <Route path="/" element={<Home />} />
          {/* http://localhost:3000/#/todo */}
          <Route path="/todo" element={<Todo />} />
          {/* http://localhost:3000/#/chat */}
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </TodoContext.Provider>
    </HashRouter>
  );
}

export default App;
