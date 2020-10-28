import React from "react";

const Todo = ({ item, handleComplete }) => {
  return (
    <div style={{ cursor: "pointer" }}>
      <span
        onClick={() => handleComplete(item)}
        style={{ textDecoration: item.completed ? "line-through" : "none" }}
      >
        {item.task}
      </span>
    </div>
  );
};

export default Todo;
