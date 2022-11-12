// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Counter from "./Counter/Counter";
import { Task } from "./Task/Task";
import { Todo } from "./Todo/Todo";

function App() {
  return (
    <div className="App">
      <h1>Learning states | Counter</h1>
      <Counter />
      <Task />
      <Todo />
    </div>
  );
}

export default App;
