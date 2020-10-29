import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ClearIcon from "@material-ui/icons/Clear";

function TodoForm({ addItem, clearCompleted }) {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    addItem({ task, id: Date.now(), completed: false });
    setTask("");
  };

  return (
    <div>
      <TextField
        type="text"
        placeholder="New Task..."
        value={task}
        onChange={handleChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
      />
      <AddBoxIcon onClick={handleAdd} />
      <ClearIcon onClick={clearCompleted} />
    </div>
  );
}

export default TodoForm;
