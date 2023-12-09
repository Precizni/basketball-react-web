import { Link } from 'react-router-dom';

function PlayerItem({ play }) {
  const { first_name, height_feet, id, last_name, position, team } = play;

  return (
    <li className="list">
      <Link
        to={`${id}?name=${first_name}&lastname=${last_name}&height=${height_feet}&position=${position}&team=${team.full_name}&city=${team.city}`}
      >
        {first_name} {last_name}
      </Link>
    </li>
  );
}

export default PlayerItem;
