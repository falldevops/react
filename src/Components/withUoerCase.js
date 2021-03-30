import React, { Component } from "react";
const withUoerCase = (WrappedComponent, nom) => {
  class WithUoerCase extends Component {
    constructor(props) {
      super(props);

      this.state = {
        title: "ogggg",
      };
    }

    upperCase = () => {
      this.setState({
        title: "Oumar",
      });
    };

    render() {
      return (
        <WrappedComponent
          title={this.state.title}
          upperCase={this.upperCase}
          {...this.props}
        />
      );
    }
  }

  return WithUoerCase;
};

export default withUoerCase;
