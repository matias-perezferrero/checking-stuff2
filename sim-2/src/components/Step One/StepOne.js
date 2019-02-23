import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import {
  changePropertyName,
  changeAddress,
  changeCity,
  changeState,
  changeZip
} from "../../ducks/reducer";

class StepOne extends Component {
  // handleInputChange = e => {
  //   console.log(e.target.id);
  //   this.setState({
  //     [e.target.id]: e.target.value
  //   });
  // };

  render() {
    const {
      changePropertyName,
      changeAddress,
      changeCity,
      changeState,
      changeZip
    } = this.props;
    return (
      <div>
        <h1>Step One</h1>
        <input
          placeholder="property name"
          value={this.props.property_name}
          // id="property_name"
          onChange={e => changePropertyName(e.target.value)}
        />
        <input
          placeholder="address"
          value={this.props.address}
          // id="address"
          onChange={e => changeAddress(e.target.value)}
        />
        <input
          placeholder="city"
          value={this.props.city}
          // id="city"
          onChange={e => changeCity(e.target.value)}
        />
        <input
          placeholder="state"
          value={this.props.state}
          // id="state"
          type="text"
          maxLength="2"
          onChange={e => changeState(e.target.value)}
        />
        <input
          placeholder="zip code"
          value={this.props.zip}
          // id="zip"
          type="number"
          onChange={e => changeZip(e.target.value)}
        />

        <Link to="/wizard/step2">
          <button>Next Step</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => state;
//   const {property_name, address, city, state, zip} = state

//   return {
//     property_name, address, city, state, zip
// };

export default connect(
  mapStateToProps,
  { changePropertyName, changeAddress, changeCity, changeState, changeZip }
)(StepOne);
