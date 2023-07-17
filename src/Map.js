import React, { Component } from "react";

export class Map extends Component {
  constructor() {
    super();

    this.state = {
      Courses: ["React", "Angular", "Vue"],
      data: [
        { name: "Abc", course: "React" },
        { name: "Abc", course: "React" },
        { name: "Abc", course: "React" },
      ],
    };
  }
  // show() {
  //   this.setState({
  //     Courses: [...this.state.Courses, "Java"],
  //           })
  // }
  render() {
    return (
      <div>
        <h1>Mapping</h1>
        <h2>{this.state.data.name}</h2>
        {/* <ul> */}
        {/* this.state.data.map((key, index) => (
            <li key={ObjectId}>{this.state.data[key]}</li>
          )) */}
        {/* {this.state.Courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))} */}
        {/* </ul> */}
        {/* <button onClick={this.show.bind(this)}>+</button> */}
      </div>
    );
  }
}

export default Map;
