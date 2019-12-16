import React, { Component } from "react";
import Axios from "axios";
import { cpus } from "os";

// data die we van de api binnen krijgen in de state

class Home extends Component {
  state = {
    pokemon: []
  };
  componentDidMount() {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=964").then(response => {
      this.setState({ pokemon: response.data.results });
    });
  }
  render() {
    return (
      <div>
        <div className="input-group p-3">
          <input
            type="text"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
          <div className="input-group-append">
            <span className="input-group-text">Search</span>
          </div>
        </div>
        <div className="list-group p-3 pt-0">
          {this.state.pokemon.map(poke => (
            <a href="#" className="list-group-item list-group-item-action">
              {poke.name}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
