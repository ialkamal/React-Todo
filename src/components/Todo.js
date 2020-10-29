import React from "react";
import Typography from "@material-ui/core/Typography";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const Todo = ({ item, handleComplete }) => {
  return (
    <div style={{ cursor: "pointer" }}>
      <div style={{ display: "flex" }}>
        <ArrowRightIcon />
        <Typography
          onClick={() => handleComplete(item)}
          style={{ textDecoration: item.completed ? "line-through" : "none" }}
        >
          {item.task}
        </Typography>
      </div>
    </div>
  );
};

export default Todo;
