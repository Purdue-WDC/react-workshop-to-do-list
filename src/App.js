/**
 * @author Shayne Marques - Purdue Web Development Club 2021 <marques.shayne24@gmail.com>
 * @summary To-Do List app used to add, complete and delete tasks
 */

import React from "react";
import List from "./components/List";
import AddTask from "./components/AddTask";
import MainHeader from "./components/MainHeader";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.handleAddButton = this.handleAddButton.bind(this);
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // Used to change the state of the checkbox
  toggleCheckboxChange(event) {
    const listCopy = this.state.list;
    const foundIndex = this.state.list.findIndex(
      (item) => item.name === event.target.name
    );
    listCopy.splice(foundIndex, 1, {
      name: this.state.list[foundIndex].name,
      complete: !this.state.list[foundIndex].complete,
    });
    this.setState((state) => ({
      list: [...listCopy],
    }));
  }

  // Used to delete a task from the list
  handleDelete(event) {
    const listCopy = this.state.list;
    const foundIndex = this.state.list.findIndex(
      (item) => item.name === event.target.id
    );
    listCopy.splice(foundIndex, 1);
    this.setState((state) => ({
      list: [...listCopy],
    }));
    console.log(listCopy);
  }

  // Used to add a task to the list
  handleAddButton(event) {
    const name = document.getElementById("task").value;
    if (name !== "") {
      this.setState((state) => ({
        list: [...state.list, { name: name, complete: false }],
      }));
    }
    document.getElementById("task").value = "";
  }

  // Render method for React
  render() {
    return (
      <div className="app">
        <header className="header">
          <MainHeader text="TO-DO LIST" />
        </header>
        <main className="content">
          <AddTask handleAddButton={this.handleAddButton} />
          <List
            taskList={this.state.list}
            toggleCheckboxChange={this.toggleCheckboxChange}
            handleDelete={this.handleDelete}
          />
        </main>
      </div>
    );
  }
}
export default App;
