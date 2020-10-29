// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, handleComplete, search }) => {
  //console.log("IAK: TodoList: TodoList: todoList (props)", todoList);
  if (search === "")
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
  else
    return (
      <div>
        {todoList.map((todoItem) => {
          if (todoItem.task.includes(search))
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
