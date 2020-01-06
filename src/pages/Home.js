import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { ucfirst } from "../helpers/helpers";

// in u render filter je de pokemons wiens naam, de searchSting bevat.
// .filter & indexOf

class Home extends Component {
  state = {
    pokemon: [],
    searchString: ""
  };

  componentDidMount() {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=964").then(response => {
      this.setState({ pokemon: response.data.results });
    });
  }

  getIdFromUrl = url => {
    const urlParts = url.split("/");
    const lastPart = urlParts[urlParts.length - 2];

    return lastPart;
  };

  handleKeyPress = e => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    const filteredPokemon = this.state.pokemon.filter(
      poke => poke.name.indexOf(this.state.searchString) !== -1
    );

    return (
      <div>
        <div className="input-group p-3">
          <input
            type="text"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
            onChange={this.handleKeyPress}
          />
          <div className="input-group-append">
            <span className="input-group-text">Search</span>
          </div>
        </div>
        <div className="list-group p-3 pt-0">
          {filteredPokemon.map(poke => (
            <Link
              key={poke.name}
              to={"pokemon/" + this.getIdFromUrl(poke.url)}
              className="list-group-item list-group-item-action"
            >
              {this.getIdFromUrl(poke.url)}. {ucfirst(poke.name)}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
