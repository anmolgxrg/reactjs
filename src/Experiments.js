import React, { Component } from "react";
import { c } from "tar";

export class Experiments extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }
  
  show() {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);  
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.show.bind(this)}>+</button>
      </div>
    );
  }
}

export default Experiments;
