
import Pokedex from "./components/Pokedex";

function App() {
  return (
    <>
      <h1 className="text-4xl text-center font-bold">Pokefake</h1>
      {/* <Pokecard id={4} name="Charmander" type="fire" exp={62}/> */}
      <Pokedex />
    </>
  );
}

export default App;
