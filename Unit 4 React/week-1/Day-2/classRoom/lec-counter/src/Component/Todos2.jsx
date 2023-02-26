import React from "react";

const Todos2 = () => {
  const [txt, setTxt] = React.useState("");
  const [show, setShow] = React.useState([]);

  let getInput = (e) => {
    // console.log(e.target.value);
    setTxt(e.target.value);
  };
  return (
    <>
      <h1> New Todos | Practice </h1>
      <input
        value={txt}
        onChange={getInput}
        placeholder=" Enter what to do ? "
      />
      <button
        onClick={() => {
          setShow([...show, { name: txt }]);
          setTxt("");
        }}>
        Add 📝
      </button>

      {show.map((ele) => (
        <h3>{ele.name}</h3>
      ))}
    </>
  );
};

export default Todos2;
