import React, { Component } from "react";
import Input from "./input";

class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.focusComp = React.createRef();
  }

  onClickFocus = () => {
    this.focusComp.current.focusInput();
  };
  render() {
    return (
      <div>
        <Input ref={this.focusComp} />
        <button onClick={this.onClickFocus}> click </button>
      </div>
    );
  }
}

export default FocusInput;
