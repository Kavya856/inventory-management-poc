import React, { Component } from "react";

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header className="header">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>Product Management App</div>
          </nav>
        </header>
      </div>
    );
  }
}
