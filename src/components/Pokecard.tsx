interface PokecardProps {
    id: number;
    name: string;
    type: string;
    exp: number;
}

export default function Pokecard({ id, name, type, exp }: PokecardProps) {
    return <div className="pokecard">
        <h3 className="poke-name">{name}</h3>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} className="poke-img"/>
        <p className="poke-type">Type: {type}</p>
        <p className="poke-exp">EXP: {exp}</p>
    </div>
}

