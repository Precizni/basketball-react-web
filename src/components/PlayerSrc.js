import React, { useEffect, useState } from "react";

import PlayerSubmit from "./PlayerSubmit";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import PlayerList from "./PlayerList";

function PlayerSrc() {
  const [players, setPlayers] = useState([]);
  const [playName, setPlayName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function fetchPlayers() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://www.balldontlie.io/api/v1/players?search=${playName}`
          );
          if (!res.ok) throw new Error("There is a problem with fetching data");
          const data = await res.json();
          setPlayers(data.data);
        } catch (err) {
          console.error(err.message);
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchPlayers();
    },
    [playName]
  );

  return (
    <>
      <PlayerSubmit playName={playName} onSetPlayName={setPlayName} />
      <div className="box">
        {isLoading && <Loader />}
        {!isLoading && !error && (
          <PlayerList playName={playName} players={players} />
        )}
        {error && <ErrorMessage message={error} />}
      </div>
    </>
  );
}

export default PlayerSrc;
