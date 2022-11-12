import React from "react";
import { useState } from "react";
import { TaskItem } from "./TaskItem";
function Task() {
  const [getData, setGetData] = useState("");
  const [showData, setShowData] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setGetData(value);
  };

  const handleShow = () => {
    let payload = {
      title: getData,
      status: false,
    };
    let data = [...showData, payload];
    setShowData(data);
  };

  return (
    <>
      <h2>Add Task here 👇 </h2>
      <input
        value={getData}
        onChange={handleChange}
        placeholder="Add Your Task"
      />
      <button onClick={handleShow}> Add It </button>
      <div>
        {/* 
        <h1>
          {showData.map((item) => (
            <div>{item.title}</div>
          ))}
        </h1>
         */}
        <h3>
          {showData.map((ele, index) => (
            <TaskItem color={index % 2 === 0 ? "red" : "green"} {...ele} />
          ))}
        </h3>
      </div>
    </>
  );
}
export { Task };
