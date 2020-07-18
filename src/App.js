// f(data) => ui

//library that only accepts numbers
//button for fetching random numb from api
import React from "react";
// var validate = require("validate.js"); // handles input validation

class App extends React.Component {
  //Main function
  constructor(props) {
    super(props);

    this._handleChange = this._handleChange.bind(this);
    this.state = { value: "", regexp: /^[0-9\b]+$/ };
  }
  _handleChange = (x) => {
    // class method
    // set the state => trigger ui change
    let value = x.target.value;

    // if (value.length === 0) {
    //   this.setState({ [x.target.name]: value });
    // }
    // if (!Number(value)) {
    //   return;
    // }
    if (value === "" || this.state.regexp.test(value)) {
      this.setState({ [x.target.name]: value });
    }
  };

  render() {
    return (
      <form>
        <label></label>
        <input
          // type="number"
          name="value"
          placeholder="Enter n for nth Fibonacci digit"
          value={this.state.value}
          onChange={this._handleChange}
        />
        <p>{fibonacci(this.state.value)}</p>
      </form>
    );
  }
}

function fibonacci(n) {
  // n cannot be 1
  // n cannot be 0

  if (n.length === 0) {
    return;
  }

  // parseInt(n);
  if (n < 0) {
    return;
  }

  if (n === 0) {
    return 1;
  }
  // what line of the comments relate to line 79

  // reject negative numbers inputs

  // what happens when you input different strings into line 74.

  // any integer > 1 works
  // in constructor: this.state.value = 1 works
  // in _handleChange method: event.target.value = 1 does not work, why is it different

  // figure out what is the difference between 55 from 53-54.
  if (n === 1) {
    console.log("you are here");
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // Mathematical operations convert values to numbers.
}
export default App;
