import React, { Component } from "react";
import Two from "./Two";

export class One extends Component {
  render() {
    return (
      <div>
        This is one
        <Two name={this.props.name} course={this.props.course} />
      </div>
    );
  }
}

export default One;
