import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Calculator from "../functional/Calculator";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/compound-interest-calculator" component={Calculator} />
        </Switch>
      </div>
    );
  }
}
