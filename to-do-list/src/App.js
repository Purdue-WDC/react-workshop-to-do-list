import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      value: "",
    };
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event) {
    this.setState((state) => ({
      list: [...state.list],
      value: event.target.value,
    }));
  }

  handleAddButton(event) {
    if (this.state.value !== "") {
      this.setState((state) => ({
        list: [...state.list, { name: state.value, complete: false }],
        value: "",
      }));
    }
    console.log(this.state.list);
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
            </div>
            <div className="completed">
              <h1>Completed</h1>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

/*
  You can create functional components as well
  
  function App() {

  }
  
*/

export default App;
