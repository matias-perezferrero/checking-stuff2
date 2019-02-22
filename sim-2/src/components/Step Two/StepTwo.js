import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class StepTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image_url: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Step Two</h1>
        <input
          id="image_url"
          placeholder="Image Url"
          onChange={this.handleInputChange}
        />

        <Link to="/wizard/step1">
          <button>Previous Step</button>
        </Link>

        <Link to="/wizard/step3">
          <button>Next Step</button>
        </Link>
      </div>
    );
  }
}

export default StepTwo;
