import React from "react";

const Toddo = () => {
  //   let arr = "abcdefg".split("");
  const [newtxt, setNewtxt] = React.useState("");
  const [data, setData] = React.useState([]);
  let getData = (e) => {
    // console.log(e.target.value);
    setNewtxt(e.target.value);
  };
  return (
    <>
      <h1>Toddo List | React JS</h1>
      <input value={newtxt} onChange={getData} placeholder="Enter Data" />
      <button
        onClick={() => {
          setData([...data, { id: Date.now(), name: newtxt }]);
          setNewtxt("");
        }}>
        {" "}
        🚀{" "}
      </button>
      {data.map((ele) => (
        <div key={ele.id}>
          <input type={"checkbox"} />
          <span>{ele.name}</span>
        </div>
      ))}
    </>
  );
};

export default Toddo;
