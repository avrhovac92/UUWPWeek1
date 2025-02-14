import React, { Component } from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome"
    };
  }

  changeTitle(title) {
    this.setState({ title });
  }

  render() {
    return (
      <div>
        <Header
          changeTitle={this.changeTitle.bind(this)}
          title={this.state.title}
        />
        <div>This is what i wrote in Layout.js</div>
        <Footer />
      </div>
    );
  }
}
