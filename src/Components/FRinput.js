import React, { Component } from "react";

/* class FRinput extends Component {
  render() {
    return <div></div>;
  }
} */

const FRinput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
      <p>{props.name}</p>
    </div>
  );
});
export default FRinput;
