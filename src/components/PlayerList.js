import PlayerItem from './PlayerItem';

function PlayerList({ playName, players }) {
  return (
    <ul className="list">
      {playName &&
        players?.map((play) => <PlayerItem play={play} key={play.id} />)}
    </ul>
  );
}

export default PlayerList;
