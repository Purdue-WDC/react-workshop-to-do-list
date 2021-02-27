import React from "react";
import "./InputTask.css";

class InputTask extends React.Component {
  render() {
    return (
      <div class="add-task">
        <input
          name="task-input"
          type="text"
          class="text-input"
          placeholder="Enter your next task"
          onChange={this.handleTextChange}
        ></input>
        <button className="add-button">Add task</button>
      </div>
    );
  }
}

export default InputTask;
