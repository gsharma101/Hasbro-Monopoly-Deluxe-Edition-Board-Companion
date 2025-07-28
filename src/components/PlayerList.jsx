import React, { useState } from 'react';

export default function PlayerList({ players, setPlayers }) {
  const [name, setName] = useState('');

  const addPlayer = () => {
    setPlayers([...players, { name, balance: 1500, properties: [] }]);
    setName('');
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Players</h2>
      <div className="flex gap-2 mb-2">
        <input
          className="border px-2 py-1"
          placeholder="Player Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-3 py-1" onClick={addPlayer}>
          Add Player
        </button>
      </div>
      <ul>
        {players.map((p, idx) => (
          <li key={idx} className="py-1">
            {p.name} – 💰 ${p.balance}
          </li>
        ))}
      </ul>
    </div>
  );
}
