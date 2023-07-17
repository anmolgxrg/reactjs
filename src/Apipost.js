import React, { Component } from "react";
import axios from "axios";

class Apipost extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      job: "",
      data: {},
    };
  }

  handleClick = () => {
    const postData = {
      name: this.state.name,
      job: this.state.job,
    };

    axios
      .post("https://reqres.in/api/users", postData)
      .then((response) => console.log(response))

      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <input
          type="text"
          name="job"
          value={this.state.job}
          onChange={(e) => this.setState({ job: e.target.value })}
        />
        <button onClick={() => this.handleClick()}>Click</button>
      </div>
    );
  }
}

export default Apipost;
