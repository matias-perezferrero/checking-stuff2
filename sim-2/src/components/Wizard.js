import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import StepOne from "./Step One/StepOne";
import StepTwo from "./Step Two/StepTwo";
import StepThree from "./Step Three/StepThree";
import { cancel } from "../ducks/reducer";

class Wizard extends Component {
  render() {
    const { cancel } = this.props;
    return (
      <div>
        <h1>Wizard</h1>
        <Switch>
          <Route component={StepOne} path="/wizard/step1" />
          <Route component={StepTwo} path="/wizard/step2" />
          <Route component={StepThree} path="/wizard/step3" />
        </Switch>

        <Link to="/">
          <button onClick={cancel}>Cancel</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { cancel }
)(Wizard);
