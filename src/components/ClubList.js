import { useEffect, useState } from "react";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

function ClubList() {
  const [apiData, setApiData] = useState([]);
  const [conSort, setConSort] = useState("default");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // console.log(apiData);

  useEffect(function () {
    async function fetchClubs() {
      try {
        setIsLoading(true);
        const res = await fetch("https://www.balldontlie.io/api/v1/teams");

        if (!res.ok) throw new Error("There is a problem with fetching data");

        const data = await res.json();

        setApiData(data.data);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchClubs();
  }, []);

  return (
    <>
      <form className="nav-bar">
        <h1>Show league clubs 🏀</h1>

        <select
          className="search1"
          value={conSort}
          onChange={(e) => setConSort(e.target.value)}
        >
          <option value={"default"}>select</option>
          <option value={""}>All clubs</option>
          <option value={"West"}>West conference</option>
          <option value={"East"}>East conference</option>
        </select>
      </form>
      <div className="box">
        <ul className="list">
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <>
              {apiData
                ?.filter((list) => list.conference.includes(conSort))
                .map((conf) => (
                  <li key={conf.id}>{conf.full_name}</li>
                ))}
            </>
          )}
          {error && <ErrorMessage message={error} />}
        </ul>
      </div>
    </>
  );
}

export default ClubList;
