import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import ComponentName from "./components/";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <ComponentName someprop={value} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
