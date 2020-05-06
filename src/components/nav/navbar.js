import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavLink exact to="/" activeClassName="nav-link-active">
          Home
        </NavLink>
        <NavLink to="/about-me" activeClassName="nav-link-active">
          About
        </NavLink>
        <NavLink to="/anime" activeClassName="nav-link-active">
          Anime
        </NavLink>
        <NavLink to="/coding" activeClassName="nav-link-active">
          Coding
        </NavLink>
        <NavLink to="/gaming" activeClassName="nav-link-active">
          Gaming
        </NavLink>
      </div>
    );
  }
}
