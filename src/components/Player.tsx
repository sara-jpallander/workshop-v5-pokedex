interface Playerprops {
  id: number;
  hand: React.ReactElement[];
}

export default function Player({ id, hand }: Playerprops): JSX.Element {
  return (
    <>
      <h3>player {id}</h3>
      <div className="cards">
        {hand.map((card): JSX.Element => {
          return <div key={card.props.id}>{card}</div>;
        })}
      </div>
    </>
  );
}
