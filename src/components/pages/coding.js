import React, { Component } from "react";
import axios from "axios";

export default class Coding extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
    };
    this.getBlogItems = this.getBlogItems.bind(this);
  }

  getBlogItems() {
    /*API POINT NEEDED */ axios
      .get("", { withCredentials: true })
      .then((res) => {
        this.setState({
          blogItems: [] /*needs res.data.(whatever the api brings back)*/,
        });
      })
      .catch((err) => {
        console.log("getBlogItems error", err);
      });
  }

  componentWillMount() {
    this.getBlogItems();
  }

  render() {
    return (
      <div className="app">
        <h1>CODING</h1>
      </div>
    );
  }
}
