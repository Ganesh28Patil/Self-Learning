import React from "react";

const Counter = () => {
  //   let count = 0;
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const incrementCount = () => {
    setCount(count + 1);
    console.log(count);
  };
  const decrementCount = () => {
    // count--;
    setCount(count - 1);
    console.log(count);
  };

  return (
    <>
      <h3>Hello React | Counter</h3>
      <h2>{count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <h5>creating onClick using FAT ARROW function 👇 </h5>

      <h3>{count2}</h3>
      <button onClick={() => setCount2(count2 + 1)}>+</button>
      <button onClick={() => setCount2(count2 - 1)}>-</button>
    </>
  );
};

export { Counter };
