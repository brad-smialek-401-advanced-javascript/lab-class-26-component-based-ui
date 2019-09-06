import React from "react";
import "./counter.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = e => {
    e.preventDefault();
    let counter = this.state.counter + 1;
    this.setState({ counter });
    console.log(this.state);
  };

  decrement = e => {
    e.preventDefault();
    let counter = this.state.counter - 1;
    this.setState({ counter });
    console.log(this.state);
  };

  render() {
    return (
      <div id="clickCount">
        <button class="clicker" id="clickdown" onClick={this.decrement}>
          -1
        </button>
        <h4 id="counter">{this.state.counter}</h4>
        <button class="clicker" id="clickup" onClick={this.increment}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
