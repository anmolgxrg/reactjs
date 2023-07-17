import React, { Component } from "react";

export class Ref extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.myRef.current);
    console.log(this.myRef.current.value);
    this.myRef.current.style.height = "200px";
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.myRef} />
      </div>
    );
  }
}

export default Ref;
