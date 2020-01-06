import React, { Component } from "react";
import Axios from "axios";
import { ucfirst } from "../helpers/helpers";

// naam van de pokemon in de titel

class Detail extends Component {
  state = {
    pokemon: undefined
  };

  componentDidMount() {
    Axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + this.props.match.params.pokemonId
    ).then(response => {
      this.setState({
        pokemon: response.data
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.pokemon ? (
          <h1>
            {this.props.match.params.pokemonId}
            {". "}
            {ucfirst(this.state.pokemon.name)}
          </h1>
        ) : (
          <div>Loading</div>
        )}
      </div>
    );

    /*

    if (this.state.pokemon) {
      return (
        <div>
          <h1>Detail {this.props.match.params.pokemonId}</h1>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }

    return (
        <div>
        {this.state.pokemon && (
            <h1>Detail {this.props.match.params.pokemonId}</h1>
        )}
        </div>
    );

    */
  }
}

export default Detail;
