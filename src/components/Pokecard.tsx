import { motion } from "motion/react";


interface PokecardProps {
    id: number;
    name: string;
    type: string;
    exp: number;
}

export default function Pokecard({ id, name, type, exp }: PokecardProps) {
    return <motion.div 
    className="bg-gray-200 p-6 rounded-lg shadow-xl"
    drag
    dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }} >

        <h3 className="font-bold">{name}</h3>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} className="bg-white rounded-xl my-3"/>
        <p className="poke-type">Type: {type}</p>
        <p className="poke-exp">EXP: {exp}</p>
    </motion.div>
}

