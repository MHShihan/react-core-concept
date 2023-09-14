import { useState } from "react";

export default function Players() {
  const [player, setPlayer] = useState(10);

  const handleAdd = () => {
    const newPlayer = player + 1;
    setPlayer(newPlayer);
  };

  const handleRemove = () => {
    const newPlayer = player - 1;
    setPlayer(newPlayer);
  };

  const teamStyle = {
    border: "2px solid purple",
    borderRadius: "15px",
    margin: "40px 0",
    padding: "20px",
  };
  return (
    <div style={teamStyle}>
      <h3>Player Counter: {player}</h3>
      <button onClick={handleAdd}>Add Player</button>
      <button onClick={handleRemove}>Remove Player</button>
    </div>
  );
}
