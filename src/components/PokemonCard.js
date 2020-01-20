import React from "react";
import "./PokemonCard.css"
import PokemonType from "./PokemonType"


function PokemonCard({ pokemon }) {
  const { id, name, type, base } = pokemon;
  const baseArr = Object.keys(base)
  return (
    <div className="pokemon-card">
      <img className="pokemon-card__image" src={process.env.PUBLIC_URL + `pokemonImage/${id}.png`} alt="PokemonCard"/>
  <div className="pokemon-name">{name.english}</div>
      <div>{type.map(t => (
        <PokemonType type={t} />
        ))}</div>
      <div>{baseArr.map((key) => (
        <p className="pokemon-card__base">{`${[key]}: ${base[key]}`}</p>)
        )} </div>
    </div>
  );
}

export default PokemonCard;