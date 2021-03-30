import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
    console.log("LifeCycleB constructor");
  }

  /*
    Call when the state depends on changes in props overtime
    set the state (no need to use this )
  */
  static getDerivedStateFromProps(props, state) {
    state = props.prenom;
    console.log("LifeCycleB getDerivedStateFromProps");
    console.log(props, state);

    return null;
  }

  /*
  ** Call only one et immediatly after a component and his children
     have been rendered (render methode) to the DOM
     perfect place to call side effect (HTTP, AJAX or fetch) to load Data
  **
  */
  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }

  shouldComponentUpdate(props, state, snapshot) {
    console.log("LifeCycleB shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(props, state) {
    console.log("LifeCycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
  }

  render() {
    console.log("LifeCycleb Render");
    return <div>LifeCycle B {this.state.name}</div>;
  }
}

export default LifeCycleB;
