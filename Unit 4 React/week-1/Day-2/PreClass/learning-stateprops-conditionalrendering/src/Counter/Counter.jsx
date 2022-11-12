import React from "react";

function Counter() {
  const [counter, setCounter] = React.useState(0);

  // destructuring
  // React.useState => [value, setValue]
  const handleIncrement = (value) => {
    setCounter(counter + value);
  };
  return (
    <>
      <h2> Counter No 1</h2>
      <h1>{counter}</h1>
      <button onClick={() => handleIncrement(1)}>Add</button>
      <button onClick={() => handleIncrement(-1)}>Reduce</button>
    </>
  );
}
export default Counter;
