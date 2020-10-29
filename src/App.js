import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false,
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false,
        },
      ],
      search: "",
    };
  }

  componentDidMount() {
    this.setState({
      todos: JSON.parse(localStorage.getItem("todos")),
    });
  }

  handleComplete = (item) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (item.id === todo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    });
  };

  addItem = (item) => {
    this.setState({
      todos: [...this.state.todos, item],
    });
    localStorage.setItem("todos", JSON.stringify([...this.state.todos, item]));
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return !todo.completed;
      }),
    });
    localStorage.setItem(
      "todos",
      JSON.stringify(
        this.state.todos.filter((todo) => {
          return !todo.completed;
        })
      )
    );
  };

  handleSearchChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <input
          type="text"
          name="search"
          placeholder="Search Tasks..."
          onChange={this.handleSearchChange}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleSearchChange();
          }}
        />
        <TodoList
          todoList={this.state.todos}
          handleComplete={this.handleComplete}
          search={this.state.search}
        />
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
