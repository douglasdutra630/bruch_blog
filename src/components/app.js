import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationComponent from "./nav/navbar";

import Home from "./pages/home";
import About from "./pages/about";
import Coding from "./pages/coding";
import Anime from "./pages/anime";
import Gaming from "./pages/gaming";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavigationComponent />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/anime" component={Anime} />
              <Route path="/coding" component={Coding} />
              <Route path="/gaming" component={Gaming} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
