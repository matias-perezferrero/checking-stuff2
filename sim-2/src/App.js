import React, { Component } from "react";
// import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import routes from "./components/routes";
import House from "./components/House";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
