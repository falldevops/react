import React, { Component } from "react";

const withCounter = (WrappedComponent) => {
  class WithCounter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        counter: 0,
      };
    }

    onClickHandler = () => {
      this.setState((prevState) => {
        return { counter: prevState.counter + 1 };
      });
    };
    render() {
      return (
        <WrappedComponent
          counter={this.state.counter}
          increment={this.onClickHandler}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
