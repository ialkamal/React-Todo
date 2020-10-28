// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, handleComplete }) => {
  //console.log("IAK: TodoList: TodoList: todoList (props)", todoList);
  return (
    <div>
      {todoList.map((todoItem) => {
        return (
          <div key={todoItem.id}>
            <Todo item={todoItem} handleComplete={handleComplete} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
