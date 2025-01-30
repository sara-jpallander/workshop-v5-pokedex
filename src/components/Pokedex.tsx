import Pokecard from "./Pokecard";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

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

function shuffleArray(array: Pokemon[]): Pokemon[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

const newRandomArray: Pokemon[] = shuffleArray(Pokedex);
const damagePlayer1 = newRandomArray
  .slice(0, 4)
  .reduce((acc, total) => acc + total.base_experience, 0);
const damagePlayer2 = newRandomArray
  .slice(4, 7)
  .reduce((acc, total) => acc + total.base_experience, 0);


export default function Player() {

    const damage1 = useMotionValue(0);
    const damage2 = useMotionValue(0);

    const roundedScore1 = useTransform(() => Math.round(damage1.get()));
    const roundedScore2 = useTransform(() => Math.round(damage2.get()));

/*     const myTimeout1 = setTimeout(() => { damagePlayer1 > damagePlayer2 ? "Winner" : "Loser" }, 6000);
    const myTimeout2 = setTimeout(() => { damagePlayer2 > damagePlayer1 ? "Winner" : "Loser" }, 6000); */

    useEffect(() => {
        const controls1 = animate(damage1, damagePlayer1, {duration: 5})
        const controls2 = animate(damage2, damagePlayer2, {duration: 5})
    
        return () => {
            controls1.stop();
            controls2.stop();
        };
    }, []);


  return (
    <>
    <div className="text-center place-items-center">
        <div className="flex gap-5 my-10">
            {newRandomArray.slice(0, 4).map((card) => (
                <Pokecard
                id={card.id}
                name={card.name}
                type={card.type}
                exp={card.base_experience}
                />
            ))}
        </div>
        <motion.p>
            {/* Animate damagePlayer1 */}
            {roundedScore1}
        </motion.p>
        <p>
            {damagePlayer1 > damagePlayer2 ? "Winner" : "Loser"}
        </p>
    </div>


      <div>
        -----------------------------------------------------------------------------------------------------------------
      </div>
    <div className="text-center place-items-center">
        <div className="flex gap-5 my-10">
            {newRandomArray.slice(4, 8).map((card) => (
                <Pokecard
                id={card.id}
                name={card.name}
                type={card.type}
                exp={card.base_experience}
                />
            ))}
        </div>
        <motion.p>
            {/* Animate damagePlayer2 */}
            {roundedScore2}
        </motion.p>

        <p>
            {damagePlayer2 > damagePlayer1 ? "Winner" : "Loser"}
        </p>
    </div>
    </>
  );
}
