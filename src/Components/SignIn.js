import React, { Component } from "react";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  onChangeHandler(event) {
    this.setState({
      name: event.target.value,
    });
  }
  render() {
    return (
      <form>
        <div>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onChangeHandler.bind(this)}
          />
        </div>
        <span>{this.state.name}</span>
      </form>
    );
  }
}
