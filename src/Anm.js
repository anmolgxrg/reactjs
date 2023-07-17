import React, { Component } from "react";
import Liadd from "./Liadd";

class Anm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      msg: "",
    };
  }

  userChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  whileClick = () => {
    var { msg, users } = this.state;
    var newUser = { ...users };
    newUser[Date.now()] = msg;

    this.setState({
      users: newUser,
      msg: "",
    });
  };

  render() {
    var { users, msg } = this.state;

    return (
      <div>
        <input type="text" value={msg} onChange={this.userChange} />
        <ul>
          {Object.keys(users).map((key) => (
            <Liadd d={users[key]} key={key} />
          ))}
        </ul>
        <button onClick={this.whileClick}>+</button>
      </div>
    );
  }
}

export default Anm;
