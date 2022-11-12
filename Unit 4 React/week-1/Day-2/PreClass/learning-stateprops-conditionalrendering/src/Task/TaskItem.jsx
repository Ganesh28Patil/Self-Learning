import React from "react";

function TaskItem({ title, status, color }) {
  return (
    <>
      <div style={{ color }}>{`${title} -<|>- ${status}`}</div>
    </>
  );
}
export { TaskItem };
