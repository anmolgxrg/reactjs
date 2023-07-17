import React, { Component } from "react";

export class UserFetch extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      num: 1,
    };
  }

  handleChange = (event) => {
    this.setState({ num: event.target.value });
  };

  async fetchData() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${this.state.num}`
    );
    const data = await response.json();
    console.log(data);
    this.setState({ data });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <p>Enter Post Number</p>
        <input value={this.state.num} onChange={(e) => this.handleChange(e)} />
        <button onClick={() => this.fetchData()}>Fetch</button>
        <div>{this.state.data && JSON.stringify(this.state.data)}</div>
      </div>
    );
  }
}

export default UserFetch;
