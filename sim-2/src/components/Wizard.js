import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import StepOne from "./Step One/StepOne";
import StepTwo from "./Step Two/StepTwo";
import StepThree from "./Step Three/StepThree";

class Wizard extends Component {
  render() {
    return (
      <div>
        <h1>Wizard</h1>
        <Switch>
          <Route component={StepOne} path="/wizard/step1" />
          <Route component={StepTwo} path="/wizard/step2" />
          <Route component={StepThree} path="/wizard/step3" />
        </Switch>

        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}

export default Wizard;
