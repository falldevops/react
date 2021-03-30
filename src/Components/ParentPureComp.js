import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

export default class ParentPureComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "oumar",
    };
  }

  componentDidMount() {}

  render() {
    console.log("********************ParentPureComp ***********");
    return (
      <div>
        <PureComp name={this.state.name} />
        <RegularComp name={this.state.name} />
      </div>
    );
  }
}
