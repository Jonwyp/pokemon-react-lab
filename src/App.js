import React from "react";
import "./App.css";
import PokemonSearch from "./containers/PokemonSearch"
import SelectLang from "./containers/SelectLang"

function App() {
  return (
    <div className="App">
    <div id="banner">
      <h1>Jonathan's PokeDex</h1>
    </div>
    <SelectLang />
    {/* <PokemonSearch /> */}
    </div>
  );
}

export default App;
