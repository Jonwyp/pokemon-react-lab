import React from "react"
import PokemonCard from "./PokemonCard";
import "./PokemonGallery.css";

function PokemonGallery({arr, lang}) {
  return (
  <div className="pokemon-gallery"> {arr.map(p => {
return <PokemonCard pokemon={p} lang={lang}/>})}
  </div>)
}

export default PokemonGallery;