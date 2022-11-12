import React from "react";

function TodoData({ title, status }) {
  return (
    <>
      <div>{`${title} 👉 ${
        title.length % 2 === 0 ? "👨‍✈️" : "👨"
      }| ${status}`}</div>
    </>
  );
}
export { TodoData };
