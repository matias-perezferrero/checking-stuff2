import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class StepOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      property_name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
  }

  handleInputChange = e => {
    console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Step One</h1>
        <input
          placeholder="property name"
          id="property_name"
          onChange={this.handleInputChange}
        />
        <input
          placeholder="address"
          id="address"
          onChange={this.handleInputChange}
        />
        <input placeholder="city" id="city" onChange={this.handleInputChange} />
        <input
          placeholder="state"
          id="state"
          type="text"
          maxLength="2"
          onChange={this.handleInputChange}
        />
        <input
          placeholder="zip code"
          id="zip"
          type="number"
          onChange={this.handleInputChange}
        />

        <Link to="/wizard/step2">
          <button>Next Step</button>
        </Link>

        <button onClick={this.handleAddHouse}>Complete</button>
      </div>
    );
  }
}

export default StepOne;
