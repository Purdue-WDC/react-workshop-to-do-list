/**
 * @author Shayne Marques - Purdue Web Development Club 2021 <marques.shayne24@gmail.com>
 * @summary Component to create a list item with a checkbox and a delete button
 */

import React from "react";
import "./App.css";

class ListItem extends React.Component {
  render() {
    if (this.props.complete === this.props.taskComplete) {
      return (
        <li>
          <input
            type="checkbox"
            name={this.props.name}
            checked={this.props.complete}
            onChange={this.props.toggleCheckboxChange}
          />
          <label htmlFor={this.props.name}>{this.props.name}</label>
          <button
            id={this.props.name}
            onClick={this.props.handleDelete}
            className="del-button"
          >
            Del
          </button>
        </li>
      );
    } else {
      return null;
    }
  }
}

export default ListItem;
