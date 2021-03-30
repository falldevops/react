import React, { Component } from "react";
import ComponentC from "./ComponentC";
import UserContext from "./userContext";

class ComponentB extends Component {
  // Work only if you have an unique context type see capture
  static contextType = UserContext;
  render() {
    return (
      <div>
        <div>ComponentC context {this.context}</div>
        <ComponentC />
      </div>
    );
  }
}
// Work only if you have an unique context type see capture
// ComponentB.contextType = UserContext;

export default ComponentB;
