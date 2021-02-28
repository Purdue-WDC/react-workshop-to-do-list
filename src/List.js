/**
 * @author Shayne Marques - Purdue Web Development Club 2021 <marques.shayne24@gmail.com>
 * @summary Component to create a List of pending and completed Tasks
 */

import React from "react";
import ListItem from "./ListItem";
import "./App.css";

class List extends React.Component {
  render() {
    return (
      <div className="grid">
        <div className="pending">
          <h1>Pending</h1>
          <ul>
            {this.props.taskList.map((obj) => (
              <ListItem
                name={obj.name}
                toggleCheckboxChange={this.props.toggleCheckboxChange}
                complete={obj.complete}
                handleDelete={this.props.handleDelete}
                taskComplete={false}
              />
            ))}
          </ul>
        </div>
        <div className="completed">
          <h1>Completed</h1>
          <ul>
            {this.props.taskList.map((obj) => (
              <ListItem
                name={obj.name}
                toggleCheckboxChange={this.props.toggleCheckboxChange}
                complete={obj.complete}
                handleDelete={this.props.handleDelete}
                taskComplete={true}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
