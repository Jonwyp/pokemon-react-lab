import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h2>About: Pokedex</h2>
      <p>
        {`This Pokedex lists out the first 52 Pokemon in running order. 
        Language selection can be done using the drop down box on the top left. 
        Pokemon can also be searched for using the search bar`}
      </p>
    </div>
  );
}

export default About;
