import React from "react";
/*
let People = (props) => {
  return (
    <>
      <div>
        My name is {props.name} & I am from {props.place}
      </div>
    </>
  );
};
*/
let People = ({ name, place }) => {
  return (
    <>
      <div>
        My name is {name} & I am from {place}
      </div>
    </>
  );
};

export default People;
