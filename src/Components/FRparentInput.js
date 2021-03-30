import React, { Component } from "react";
import FRinput from "./FRinput";

class FRparentInput extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  onClickHandler = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <FRinput ref={this.inputRef} name="toto" />
        <button onClick={this.onClickHandler}>focus</button>
      </div>
    );
  }
}

export default FRparentInput;
