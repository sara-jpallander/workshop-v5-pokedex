import Pokedex from "./components/Pokedex";
import Pokecard from "./components/Pokecard";
import Player from "./components/Player";

function App() {
  const shuffeledArray = Pokedex.sort(() => Math.random() - 0.5);
  const playerOne = shuffeledArray.slice(0, 4);
  const playerTwo = shuffeledArray.slice(4, 8);

  let playerOneScore = playerOne.reduce((a, b) => a + b.base_experience, 0);
  let playerTwoScore = playerTwo.reduce((a, b) => a + b.base_experience, 0);

  let playerOneHand: React.ReactElement[] = playerOne.map((card) => (
    <Pokecard
      id={card.id}
      name={card.name}
      type={card.type}
      exp={card.base_experience}
    />
  ));

  let playerTwoHand: React.ReactElement[] = playerTwo.map((card) => (
    <Pokecard
      id={card.id}
      name={card.name}
      type={card.type}
      exp={card.base_experience}
    />
  ));

  return (
    <>
      <h1>Pokedex</h1>
      <div className="gameBoard">
        <div className="playerOne">
          <Player id={1} hand={playerOneHand} />
          <p>Total Experience: {playerOneScore}</p>
          {playerOneScore > playerTwoScore ? (
            <p className="winnerText">This mafakking hand wins</p>
          ) : (
            ""
          )}
        </div>
        <div className="playerTwo">
          <Player id={2} hand={playerTwoHand} />
          <p>Total Experience: {playerTwoScore}</p>
          {playerOneScore < playerTwoScore ? (
            <p className="winnerText">This mafakking hand wins</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default App;
