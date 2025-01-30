import React from "react";
import Pokedex from "./components/Pokedex";
import Pokecard from "./components/Pokecard";
import Player from "./components/Player";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <h1>Pokedex</h1>
      {/* <Pokecard id={4} name="Charmander" type="fire" exp={62}/> */}
      <Pokedex />
    </>
  );
}

export default App;
