import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import SelectLang from "./containers/SelectLang";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <div id="banner">
        <h1>Jonathan's Pokedex</h1>
      </div>
      <BrowserRouter>
        <header className="browserRouter">
          <Link to="/About">
            <button>About</button>
          </Link>
          <Link to="/SelectLang">
            <button>Pokemon Gallery</button>
          </Link>
        </header>

        <div>
          <Route path="/About" component={About} />
          <Route path="/SelectLang" component={SelectLang} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
