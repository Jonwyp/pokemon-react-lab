import React from "react"
import "./SelectLang.css"
import PokemonData from "../pokemon/pokemon"
import PokemonGallery from "../components/PokemonGallery";

class SelectLang extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "english"
    }
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
  return (<div><select id="myList" value={this.state.value} onChange={this.handleChange}>
            <option value = "english">English</option> 
            <option value = "japanese">日本語</option>
            <option value = "chinese">简体中文</option>
          </select>
          <PokemonGallery arr={PokemonData} lang={this.state.value} />
          </div>)

  }
}





export default SelectLang;