import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class StepThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monthly_mortgage_amount: "",
      desired_rent: ""
    };

    this.handleAddHouse = this.handleAddHouse.bind(this);
  }

  handleInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleAddHouse() {
    const { property_name, address, city, state, zip } = this.state;
    axios
      .post("api/house", { property_name, address, city, state, zip })
      .then(res => {
        this.props.history.push("/");
      });
  }

  render() {
    return (
      <div>
        <h1>Step Three</h1>
        <input
          id="monthly_mortgage_amount"
          placeholder="Monthly Mortgage"
          onChange={this.handleInputChange}
        />
        <input
          id="desired_rent"
          placeholder="Desired Monthly Rent"
          onChange={this.handleInputChange}
        />

        <Link to="/wizard/step2">
          <button>Previous Step</button>
        </Link>

        <button onClick={this.handleAddHouse}>Complete</button>
      </div>
    );
  }
}

export default StepThree;
