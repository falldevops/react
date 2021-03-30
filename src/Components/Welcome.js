import React, { Component } from "react";
import SignIn from "./SignIn";

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      message: "Welcome to Social Network",
      date: new Date().toDateString(),
      myClass: {
        color: "red",
      },
    };
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  isLoggedIn(name) {
    this.setState(
      {
        name: name,
      },
      () => {
        console.log(this.state.name);
      }
    );
  }
  mouseOver = (prevState) => {
    this.setState({
      name: "toto",
      myClass: {
        color: "blue",
      },
    });

    console.log(prevState.target.innerHTML);
  };

  render() {
    const style = {
      color: "black",
      fontSize: 80,
    };
    const { message, date, name } = this.state;
    return (
      <div>
        <h1 style={style}>
          {message} {name}
        </h1>
        <span>{date}</span>
        <SignIn isLoggedIn={this.isLoggedIn} />
      </div>
    );
  }
}
export default Welcome;
