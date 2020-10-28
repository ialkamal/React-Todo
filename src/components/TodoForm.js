import React, { useState } from "react";

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
      <input
        type="text"
        placeholder="New Task..."
        value={task}
        onChange={handleChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

export default TodoForm;
