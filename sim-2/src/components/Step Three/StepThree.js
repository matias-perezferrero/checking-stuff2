import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import {
  changeMonthlyMortgage,
  changeDesiredRent,
  cancel
} from "../../ducks/reducer";

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
    console.log("hit", this.props);
    const {
      property_name,
      address,
      city,
      state,
      zip,
      image_url,
      monthly_mortgage_amount,
      desired_rent
    } = this.props;
    axios
      .post("api/house", {
        property_name,
        address,
        city,
        state,
        zip,
        image_url,
        monthly_mortgage_amount,
        desired_rent
      })
      .then(res => {
        this.props.history.push("/");
        this.props.cancel();
      });
  }

  render() {
    const { changeDesiredRent, changeMonthlyMortgage, cancel } = this.props;
    return (
      <div>
        <h1>Step Three</h1>
        <input
          // id="monthly_mortgage_amount"
          value={this.props.desired_rent}
          placeholder="Desired Monthly Rent"
          type="number"
          onChange={e => changeDesiredRent(e.target.value)}
        />
        <input
          // id="desired_rent"
          value={this.props.monthly_mortgage_amount}
          type="number"
          placeholder="Monthly Mortgage"
          onChange={e => changeMonthlyMortgage(e.target.value)}
        />

        <Link to="/wizard/step2">
          <button>Previous Step</button>
        </Link>

        <button onClick={this.handleAddHouse}>Complete</button>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { changeDesiredRent, changeMonthlyMortgage, cancel }
)(StepThree);
