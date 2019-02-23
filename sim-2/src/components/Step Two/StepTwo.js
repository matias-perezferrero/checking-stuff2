import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { changeImageURL } from "../../ducks/reducer";

class StepTwo extends Component {
  // handleInputChange = e => {
  //   this.setState({
  //     [e.target.id]: e.target.value
  //   });
  // };

  render() {
    const { changeImageURL } = this.props;
    return (
      <div>
        <h1>Step Two</h1>
        <input
          value={this.props.image_url}
          // id="image_url"
          placeholder="Image Url"
          onChange={e => changeImageURL(e.target.value)}
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

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { changeImageURL }
)(StepTwo);
