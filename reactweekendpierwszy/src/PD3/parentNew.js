  
import React from "react";
import Calc from "./calc.js";

export default class newParent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sum: 0
    };
  }

  setNumber = () => {
    let newNumber = prompt("Podaj liczbę:");
    let newSum = this.state.sum + Number(newNumber);
    this.setState({ sum: newSum });
  };

  finishSum = () => {
    this.setState({ sum: 0 });
  };

  render() {
    return (
      <div>
        <Calc nextNumber={this.setNumber} />
        <p>Suma: {this.state.sum}</p>
        <button onClick={this.finishSum}>Wyczyść</button>
      </div>
    );
  }
}