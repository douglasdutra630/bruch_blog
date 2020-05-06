import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Anime extends Component {
  render() {
    return (
      <div className="app">
        <h1>ANIME</h1>
        <div>
          <Link to="/about-me">Read more about it</Link>
        </div>
      </div>
    );
  }
}
