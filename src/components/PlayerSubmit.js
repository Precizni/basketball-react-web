function PlayerSubmit({ playName, onSetPlayName }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className="nav-bar" onSubmit={handleSubmit}>
      <h1>Search players 🔎⛹️‍♂️</h1>
      <input
        className="search"
        type="text"
        placeholder="submit..."
        value={playName}
        onChange={(e) => onSetPlayName(e.target.value)}
      />
    </form>
  );
}

export default PlayerSubmit;
