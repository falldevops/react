import React, { Component } from "react";

export class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  };

  render() {
    return (
      <div>
        {/* {this.props.render(this.state.counter, this.incrementCounter)} */}

        {this.props.children(this.state.counter, this.incrementCounter)}
      </div>
    );
  }
}

export default Count;
