/**
 * @author Shayne Marques - Purdue Web Development Club 2021 <marques.shayne24@gmail.com>
 * @summary Component to create heading from text passed to it
 */

import React from "react";
import "../App.css";

class MainHeader extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

export default MainHeader;
