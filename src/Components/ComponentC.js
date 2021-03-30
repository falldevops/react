import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentC extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>hello {username}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentC;
