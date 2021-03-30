import React, { Component } from "react";
import withCounter from "./withCounter";

class CounterA extends Component {
  render() {
    const { counter, increment, date } = this.props;
    return (
      <div>
        <button onClick={increment}>{counter}</button>
        <span> {date} </span>
      </div>
    );
  }
}

export default withCounter(CounterA);
