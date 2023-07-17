import React, { Component } from "react";
import "./Abc.css";

export class Create extends Component {
  render() {
    return React.createElement("div", { className: `${this.props.name}` } , React.createElement("h1", null, "Hello World"));
  }
}

export default Create;
