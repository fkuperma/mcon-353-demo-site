//Fraidy Kuperman
//import * as React from "react";

import "./App.css";
import { Home } from "./component/home/home";
import { Todo } from "./component/todo/todo";
import { Header } from "./component/header/header";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        {/* http://localhost:3000/#/ */}
        <Route path="/" element={<Home />} />
        {/* http://localhost:3000/#/todo */}
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
