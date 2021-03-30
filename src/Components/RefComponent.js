import React, { Component } from "react";
import withUoerCase from "./withUoerCase";
class RefComponent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    // this.inputRef.current.value = "toto";
  }

  render() {
    const { title, upperCase } = this.props;
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <h2 onMouseOver={upperCase}> {title} </h2>
      </div>
    );
  }
}
export default withUoerCase(RefComponent, "toto");
