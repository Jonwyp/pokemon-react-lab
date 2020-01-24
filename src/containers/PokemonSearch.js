import React from "react";
import PokemonGallery from "../components/PokemonGallery";
import pokemonData from "../pokemon/pokemon";
import "./PokemonSearch.css";

class PokemonSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  searchArr = pokemonData => {
    return pokemonData.filter(p => {
      return p.name.english.toLowerCase().includes(this.state.value);
    });
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <span>Search: </span>
        <input
          type="text"
          placeholder="Search Pokemon Name Here"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div>
          <PokemonGallery arr={this.searchArr(pokemonData)} />
        </div>
      </div>
    );
  }
}

export default PokemonSearch;
