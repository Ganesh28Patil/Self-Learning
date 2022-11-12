import React from "react";
import { TodoData } from "./TodoData";

function Todo() {
  const [todo, setTodo] = React.useState("");
  const [getTodo, setGetTodo] = React.useState([]);
  //    const [list,setList] = React.useState([]);
  const addTodo = (e) => {
    const { value } = e.target;
    setTodo(value);
  };
  const showTodo = () => {
    let payload = {
      title: todo,
      status: false,
    };
    let data = [...getTodo, payload];
    setGetTodo(data);
  };
  return (
    <>
      <div>
        <h3> Todo List 📝</h3>

        <input value={todo} onChange={addTodo} placeholder="Add ur Todo" />
        <button onClick={showTodo}>Add Todo</button>
        {/* <h2>
          {getTodo.map((ele) => (
            <div>{ele.title}</div>
          ))}
        </h2> */}
        <div>
          {getTodo.map((item, index) => (
            <TodoData {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

export { Todo };
