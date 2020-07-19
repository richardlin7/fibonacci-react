// f(data) => ui

//This is like Dark Souls but worse.

import React from "react";
const url = "http://localhost:8000/";

class App extends React.Component {
  //Main function
  constructor(props) {
    super(props);

    this._handleChange = this._handleChange.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this.state = { value: "" }; // this.state alterations makes react refresh ui, ONLY PUT WHAT IS NECESSARY OR IT SLOWS YOU DOWN (as a developer).
  }
  _handleChange = (x) => {
    // class method
    // set the state => trigger ui change
    let value = x.target.value;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      this.setState({ [x.target.name]: value });
    }
  };

  _handleClick = (e) => {
    e.preventDefault();
    console.log("Button clicked...");

    var x = 10;
    var y = 1;
    var value = { high: x, low: y };

    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then((value) => this.setState({ value }));
  };

  render() {
    return (
      <form>
        <label></label>
        <input
          // type="number"
          name="value"
          id="random"
          placeholder="Enter n for nth Fibonacci digit"
          value={this.state.value}
          onChange={this._handleChange}
        />
        <button onClick={this._handleClick}>Random Number</button>
        <p>{fibonacci(this.state.value)}</p>
      </form>
    );
  }
}

function fibonacci(n) {
  if (n.length === 0) {
    return;
  }
  if (n < 0) {
    return;
  }
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // Mathematical operations convert values to numbers.
}
export default App;
