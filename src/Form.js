import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <div>
        <h1>Form</h1>
        <form onSubmit={this.myform}>
          <select>
            <option value="React">React</option>
            <option value="Java">Java</option>
            <option value="JSX">JSX</option>
          </select>
          <button type="submit">Submit</button>
        </form>


        

      </div>
    );
  }
}

export default Form;
