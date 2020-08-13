import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Calculator from "./Calculator";
import Timer from "./Timer";
import "./header.less";
export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/timer">Timer</Link>
        </div>

        <Switch>
          <Route path="/calculator" component={Calculator} />
          <Route path="/timer" component={Timer} />
          <Route path="*" component={Home} />
        </Switch>
      </div>
    );
  }
}
