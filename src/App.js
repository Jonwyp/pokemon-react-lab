import React from "react";
import "./App.css";
import PokemonGallery from "./components/PokemonGallery";
import SelectLang from "./components/SelectLang"

function App() {
  return (
    <div className="App">
    <div id="banner">
      <h1>Jonathan's PokeDex</h1>
    </div>
      <PokemonGallery />
    </div>
  );
}

export default App;
