import React, { useState } from 'react';

export default function PlayerList({ players, setPlayers }) {
  const [name, setName] = useState('');

  const addPlayer = () => {
    if (!name.trim()) return;
    setPlayers([...players, { name, balance: 1500, properties: [], eliminated: false }]);
    setName('');
  };

  const updateBalance = (index, change) => {
    setPlayers(players =>
      players.map((p, i) => {
        if (i === index) {
          const newBalance = p.balance + change;
          return {
            ...p,
            balance: newBalance,
            eliminated: newBalance <= 0
          };
        }
        return p;
      })
    );
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
          <li
            key={idx}
            className={`py-2 px-3 mb-2 rounded-lg shadow flex justify-between items-center ${
              p.eliminated ? 'bg-gray-200 text-gray-500 line-through' : 'bg-white'
            }`}
          >
            <span>{p.name} – 💰 ${p.balance}</span>
            {!p.eliminated && (
              <div className="space-x-2">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded"
                  onClick={() => updateBalance(idx, 100)}
                >
                  +100
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => updateBalance(idx, -100)}
                >
                  -100
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
