import Pokedex from "./Pokedex";
import Pokecard from "./Pokecard";


interface Playerprops {
  id: number;
  hand: [];
}

function shuffleArray(array: []): [] {
  for (var i = array.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

export default function Player({ id, hand }: Playerprops): JSX.Element {

  const shuffledDex = shuffleArray(Pokedex);

  for(let i = 0; i < 4; i++) {

  }

  return (
    <>
      <h3>player {id}</h3>
      <div className="cards">{hand.map((hands) => hands)}</div>
    </>
  );
}
