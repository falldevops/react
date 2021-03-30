import "./App.css";
/* import Welcome from "./Components/Welcome";
import Header from "./Components/Header"; */
import LifeCycleA from "./Components/LifeCycleA";
import ParentPureComp from "./Components/ParentPureComp";
import RefComponent from "./Components/RefComponent";
import FRparentInput from "./Components/FRparentInput";
import CounterA from "./Components/CounterA";
import CounterHover from "./Components/CounterHover";
import User from "./Components/User";
import Count from "./Components/Count";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";

function App() {
  return (
    <div className="App">
      <CounterA date="30-03-2021" />
      {/*       <Header />
      <Welcome /> */}
      {/* <ParentPureComp />
      <LifeCycleA /> */}
      {/*  <RefComponent />
      <FRparentInput />
      <CounterA />
      <CounterHover /> */}
      {/* <User name={() => "Oumar"} /> */}
      <Count
        render={(count, incrementCounter) => (
          <ClickCounter count={count} incrementCounter={incrementCounter} />
        )}
      />
      <Count
        render={(count, incrementCounter) => (
          <HoverCounter count={count} incrementCounter={incrementCounter} />
        )}
      />
    </div>
  );
}

export default App;
