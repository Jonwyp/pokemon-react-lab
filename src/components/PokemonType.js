import React from "react"
import "./PokemonType.css"

const getTypeClassName = type => {
  switch (type.toLowerCase()) {
    case "fire":
      return "fire";
    case "water":
      return "water"
    case "grass":
      return "grass"
    case "poison":
      return "poison"
    case "electric":
      return "electric"
    default:
      return "default";
  }
}

function PokemonType({type: aSingleType}) {

  return <span className={`pokemon-card__type ${getTypeClassName(aSingleType)}`}>{aSingleType}</span>
}

export default PokemonType;

