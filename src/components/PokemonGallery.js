import React from "react"
import pokemonData from "../pokemon/pokemon";
import PokemonCard from "./PokemonCard";
import "./PokemonGallery.css";

function PokemonGallery() {
  return (
  <div className="pokemon-gallery"> {pokemonData.map(p => {
return <PokemonCard pokemon={p} />})}
  </div>)
}

export default PokemonGallery;