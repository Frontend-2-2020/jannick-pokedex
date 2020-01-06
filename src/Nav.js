import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Pokedex</span>
        </Link>
      </nav>
    );
  }
}

export default Nav;
