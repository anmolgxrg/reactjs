import React, { Component } from "react";

export class Variables extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      status: false,
    };
  }

  show() {
    this.setState({
      status: !this.state.status,
    });
  }
  render() {
    if (this.state.status) {
      return (
        <div>
          <h1>{this.state.count}</h1>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>
          <br />
          <h1>This is true</h1>
          <br />
          <button onClick={() => this.show()}>Switch</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>{this.state.count}</h1>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            -
          </button>
          <br />
          <h1>This is False</h1>
          <br />
          <button onClick={() => this.show()}>Switch</button>
        </div>
      );
    }
  }
}

export default Variables;
