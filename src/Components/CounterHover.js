import React, { Component } from "react";
import withCounter from "./withCounter";

class CounterHover extends Component {
  render() {
    const { counter, increment } = this.props;

    return (
      <div>
        <div onMouseOver={increment}>Mouse {counter}</div>
      </div>
    );
  }
}

export default withCounter(CounterHover);
