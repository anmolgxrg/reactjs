import React, { Component, PureComponent } from "react";

export class Comprendercheck extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      h1Value: 1,
    };
  }

  handleClick = () => {
    this.setState({ h1Value: 2 });
  };

  render() {
    console.log("Eg");

    return (
      <div>
        <h1>{this.state.h1Value}</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default Comprendercheck;
