import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      value: "",
    };
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  toggleCheckboxChange(event) {
    const listCopy = this.state.list;
    console.log(listCopy);
    const foundIndex = this.state.list.findIndex(
      (item) => item.name === event.target.name
    );
    console.log(foundIndex);
    const isChecked = this.state.list[foundIndex].complete;
    console.log(isChecked);
    listCopy.splice(foundIndex, 1, {
      name: this.state.list[foundIndex].name,
      complete: !this.state.list[foundIndex].complete,
    });
    console.log(isChecked);
    this.setState((state) => ({
      list: [...listCopy],
      value: state.value,
    }));
  }
  handleTextChange(event) {
    this.setState((state) => ({
      list: [...state.list],
      value: event.target.value,
    }));
  }
  handleDelete(event) {
    const listCopy = this.state.list;
    const foundIndex = this.state.list.findIndex(
      (item) => item.name === event.target.name
    );
    listCopy.splice(foundIndex, 1);
    this.setState((state) => ({
      list: [...listCopy],
      value: state.value,
    }));
  }
  handleAddButton(event) {
    if (this.state.value !== "") {
      this.setState((state) => ({
        list: [...state.list, { name: state.value, complete: false }],
        value: "",
      }));
    }
    document.getElementById("task").value = "";
  }
  render() {
    // Any elements that need to be returned must be in a wrapper element like a <div> </div>
    return (
      <div className="app">
        {/* Main heading for the webpage */}
        <header className="header">
          <h1>TO-DO LIST</h1>
        </header>
        <main className="content">
          <div className="add-task">
            <input
              name="task-input"
              type="text"
              id="task"
              className="text-input"
              placeholder="Enter your next task..."
              onChange={this.handleTextChange}
            ></input>
            <button onClick={this.handleAddButton} className="add-button">
              Add task
            </button>
          </div>
          <div className="grid">
            <div className="active">
              <h1>Active</h1>
              <ul>
                {this.state.list.map((obj) => {
                  if (!obj.complete) {
                    return (
                      <li>
                        <input
                          type="checkbox"
                          name={obj.name}
                          checked={obj.complete}
                          onChange={this.toggleCheckboxChange}
                        />
                        <label htmlFor={obj.name}>{obj.name}</label>
                        <button
                          id={obj.name}
                          onClick={this.handleDelete}
                          className="del-button"
                        >
                          Del
                        </button>
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
            </div>
            <div className="completed">
              <h1>Completed</h1>
              <ul>
                {this.state.list.map((obj) => {
                  if (obj.complete) {
                    return (
                      <li>
                        <input
                          type="checkbox"
                          name={obj.name}
                          checked={obj.complete}
                          onChange={this.toggleCheckboxChange}
                        />
                        <label htmlFor={obj.name}>{obj.name}</label>
                        <button
                          id={obj.name}
                          onClick={this.handleDelete}
                          className="del-button"
                        >
                          Del
                        </button>
                      </li>
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
