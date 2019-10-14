import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";
import History from "./History.js";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
    history: {
      totalHistory: null, // this.state.total
      nextHistory: null,
      // next2History: null,
      operationHistory: null
    }
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <History totalHistory={this.state.history.totalHistory || null} operationHistory={this.state.history.operationHistory || null} nextHistory={this.state.history.nextHistory || null}></History>
        <Display value={this.state.next || this.state.operation || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
