/**
 * @author Shayne Marques - Purdue Web Development Club 2021 <marques.shayne24@gmail.com>
 * @summary Component to enter a task and add it to the list
 */

import React from "react";
import "./App.css";

class AddTask extends React.Component {
  render() {
    return (
      <div className="add-task">
        <input
          name="task-input"
          type="text"
          id="task"
          className="text-input"
          placeholder="Enter your next task..."
          onChange={this.props.handleTextChange}
          autoComplete="off"
        />
        <button onClick={this.props.handleAddButton} className="add-button">
          Add task
        </button>
      </div>
    );
  }
}

export default AddTask;
