import Pokedex from "./Pokedex";
import Pokecard from "./Pokecard";


interface Playerprops {
  id: number;
  hand: [];
}

export default function Player({ id, hand }: Playerprops): JSX.Element {

  

  return (
    <>
      <h3>player {id}</h3>
      <div className="cards">{hand.map((hands) => hands)}</div>
    </>
  );
}
