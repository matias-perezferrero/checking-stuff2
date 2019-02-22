import React, { Component } from "react";
import House from "./House";
import axios from "axios";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: []
    };

    this.handleDeleteHouse = this.handleDeleteHouse.bind(this);
    // this.handleGetAllHouses = this.handleGetAllHouses.bind(this);
  }

  ///handleGetAllHouses doesn't work as componentdidmount?!?

  componentDidMount() {
    axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data
      });
    });
  }

  // handleGetAllHouses() {
  //   console.log("hit");
  //   axios.get("/api/houses").then(res => {
  //     console.log(res.data);
  //     this.setState({
  //       houses: res.data
  //     });
  //   });
  // }

  handleDeleteHouse(id) {
    axios.delete(`/api/house/${id}`).then(res => {
      this.componentDidMount();
    });
  }

  render() {
    const mappedHouses = this.state.houses.map(house => {
      return (
        <House
          key={house.id}
          property_id={house.id}
          property_name={house.property_name}
          address={house.address}
          city={house.city}
          state={house.state}
          zip={house.zip}
          handleDeleteHouse={this.handleDeleteHouse}
        />
      );
    });
    return (
      <div>
        Dashboard
        {mappedHouses}
        <Link to="/wizard/Step1">
          <button>Add New Property</button>
        </Link>
      </div>
    );
  }
}

export default Dashboard;
