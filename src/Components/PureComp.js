import React, { Component } from "react";

export default class PureComp extends React.PureComponent {
  render() {
    console.log("******PureComp******");
    return (
      <div>
        <h1> test {this.props.name}</h1>
      </div>
    );
  }
}
