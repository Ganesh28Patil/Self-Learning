import React from "react";

const Todos = () => {
  // const [data, setData] = React.useState(["ganesh", "ayaz"]);
  // const [data, setData] = React.useState([
  //   { id: 1, name: "Ganesh" },
  //   { id: 2, name: "Rakesh" },
  //   { id: 1, name: "Dipali" },
  //   { id: 2, name: "Asmita" },
  // ]);
  const [newData, setNewData] = React.useState("");
  const [data, setData] = React.useState([]);
  let handleChange = (e) => {
    setNewData(e.target.value);
  };
  return (
    <>
      <h1>Create ToDo List</h1>
      <input
        value={newData}
        onChange={handleChange}
        placeholder="Do You Know What to do ?"
      />
      <button
        onClick={() => {
          setData([...data, { id: Date.now(), name: newData }]);
          setNewData("");
        }}>
        ADD 👆{" "}
      </button>
      {data.map((ele) => (
        <div>{ele.name}</div>
      ))}
    </>
  );
};

export default Todos;
