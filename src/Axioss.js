import axios from "axios";
import React, { Component } from "react";

export class Axioss extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      num: 1,
      error: null,
    };
  }

  handleChange = (event) => {
    this.setState({ num: event.target.value });

  };

  fetchData() {
    const { num } = this.state;
    if (num >= 1 && num <= 100) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${num}`)
        .then((response) => {
          console.log(response);
          this.setState({ data: response.data, error: null });
        })
        .catch((error) => {
          console.log(error);
          this.setState({ error: "Error fetching", data: {} });
        });
    } else {
      this.setState({ error: "enter a number between 1 and 100", data: {} });
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.num !== this.state.num) {
      this.fetchData();
    }
  }

  render() {
    const { num, data, error } = this.state;
    return (
      <div>
        <p>Enter Post Number</p>
        <input value={num} onChange={(e) => this.handleChange(e)} />
        {error && <div>{error}</div>}
        {data && !error && <div>{JSON.stringify(data)}</div>}
      </div>
    );
  }
}

export default Axioss;
