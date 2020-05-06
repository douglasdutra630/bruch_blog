import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NoMatch extends Component {
  render() {
    return (
      <div className="app">
        <h1>ANI'T SHIT HERE... WHERE YOU GOING?</h1>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}
