import React from "react";

export default class LifecycleTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: null,
      message: ""
    };
  }

  handleClick = () => {
    let value = this.state.counter + 1;
    this.setState({ counter: value });
    if (this.state.counter > 9) {
      this.setState({ message: "Ilość kliknięć: " });
    }
  };

  shouldComponentUpdate = () => {
    return this.state.counter > 9;
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Kliknij 11 razy aby uzyskać efekt!</button>
        <p>
          {this.state.message}
          {this.state.counter}
          
        </p>
      </div>
    );
  }
}