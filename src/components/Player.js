import { useNavigate, useSearchParams } from "react-router-dom";

function Player() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name");
  const lastname = searchParams.get("lastname");
  const height = searchParams.get("height");
  const position = searchParams.get("position");
  const team = searchParams.get("team");

  return (
    <div className="player-box">
      <h2 className="player">
        {name} {lastname}
      </h2>
      <p className="player">
        Position: {position === "" ? "no info" : position}
      </p>
      <p className="player">
        Height: {height === "null" ? "no info" : `${height}"`}
      </p>
      <p className="player">Plays for: {team}</p>
      <button
        className="player-button"
        type="back"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        New search
      </button>
    </div>
  );
}

export default Player;
