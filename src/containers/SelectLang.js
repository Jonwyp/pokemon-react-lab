import React from "react";
import "./SelectLang.css";
import PokemonData from "../pokemon/pokemon";
import PokemonGallery from "../components/PokemonGallery";

class SelectLang extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      langValue: "english",
      searchValue: ""
    };
  }

  handleChange(event, name) {
    this.setState({
      [name]: event.target.value
    });
  }

  searchArr = pokemonData => {
    return pokemonData.filter(p => {
      return p.name.english.toLowerCase().includes(this.state.searchValue);
    });
  };

  render() {
    return (
      <div>
        <select
          id="myList"
          value={this.state.langValue}
          onChange={e => this.handleChange(e, "langValue")}
        >
          <option value="english">English</option>
          <option value="japanese">日本語</option>
          <option value="chinese">简体中文</option>
        </select>
        <div>
          <span>Search: </span>
          <input
            type="text"
            placeholder="Search Pokemon Name Here"
            value={this.state.searchValue}
            onChange={e => this.handleChange(e, "searchValue")}
          />
        </div>
        <PokemonGallery
          arr={this.searchArr(PokemonData)}
          lang={this.state.langValue}
        />
      </div>
    );
  }
}

export default SelectLang;
