import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  /*
  Mounting Lifcycle Methods
   Call once when component is created
   Initialize state 
   Binding the event handlers
*/
  constructor(props) {
    super(props);

    this.state = {
      name: "oumar",
    };
    console.log("LifeCycleA constructor");
  }

  /*
  Mounting or Updating Lifcycle Methods
    Call when the state depends on changes in props overtime
    set the state (no need to use this )
  */
  static getDerivedStateFromProps(props, state) {
    //
    console.log(props, state);
    console.log("LifeCycleA getDerivedStateFromProps");

    return null;
  }

  /*
  Mounting Lifcycle Methods
  ** Call only once & immediatly after a component and his children
     have been rendered (render methode) to the DOM
     perfect place to call side effect (HTTP, AJAX or fetch) to load Data
  **
  */
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  /* 
  Updating Lifcycle Methods
   Dictate if the components should re-render or not
   By default it return true
   used for performance optimization
  */
  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  /*
Updating Lifcycle Methods
Called rigth before the changes from the Virtual DOM are to be reflected in the DOM
ex: Capture some information from the DOM , scroll position
return Null or a value
 */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  /*
  Updating Lifcycle Methods
  Called after the render is finisehd the re-render cycles
   -> here the 'snapshot' is the value of getSnapshotBeforeUpdate method
   we can call side effect (HTTP , ajax)  but make sure that  the state/props have been changed
   prevState != currentSate
  */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifeCycleA componentDidUpdate");
  }

  onClickEvent = (event) => {
    this.setState({
      name: "FALL ",
    });
  };

  /*
Unmounting Phase Methods
Invoked immediatly before a component is unmounted or destroy
U can cancel any network request, removing event handlers, cancelling subscription...etc

*/
  componentWillUnmount() {}

  render() {
    console.log("LifeCycleA Render");
    return (
      <div>
        LifeCycle A
        <div>
          <LifeCycleB prenom={this.state} />
          <button onClick={this.onClickEvent}>click</button>
        </div>
      </div>
    );
  }
}

export default LifeCycleA;
