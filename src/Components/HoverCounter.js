import React, { Component } from "react";

export class HoverCounter extends Component {
  render() {
    const { count, incrementCounter } = this.props;
    return (
      <div>
        <div onMouseOver={incrementCounter}>Number of X{count}</div>
      </div>
    );
  }
}

export default HoverCounter;
