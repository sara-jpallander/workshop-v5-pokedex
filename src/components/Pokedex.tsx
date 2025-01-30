import Pokecard from "./Pokecard";

interface Pokemon {
  id: number;
  name: string;
  type: string;
  base_experience: number;
}

const Pokedex: Pokemon[] = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

const shuffle = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

let newRandomArray: [] = shuffle(Pokedex);
const damagePlayer1 = newRandomArray
  .slice(0, 4)
  .reduce((acc, total) => acc + total.base_experience, 0);
const damagePlayer2 = newRandomArray
  .slice(4, 7)
  .reduce((acc, total) => acc + total.base_experience, 0);

export default function Player() {
  return (
    <>
      {newRandomArray.slice(0, 4).map((card) => (
        <Pokecard
          id={card.id}
          name={card.name}
          type={card.type}
          exp={card.base_experience}
        />
      ))}
      <p>{damagePlayer1}</p>
      <p>{damagePlayer1 > damagePlayer2 ? "Winner" : "Loser"}</p>
      <div>
        -----------------------------------------------------------------------------------------------------------------
      </div>
      {newRandomArray.slice(4, 8).map((card) => (
        <Pokecard
          id={card.id}
          name={card.name}
          type={card.type}
          exp={card.base_experience}
        />
      ))}
      <p>{damagePlayer2}</p>
      <p>{damagePlayer2 > damagePlayer1 ? "Winner" : "Loser"}</p>
    </>
  );
}
