import React, { Component } from "react";

export class ClickCounter extends Component {
  render() {
    const { count, incrementCounter } = this.props;
    return (
      <div>
        <button onClick={incrementCounter}>{count}</button>
      </div>
    );
  }
}

export default ClickCounter;
