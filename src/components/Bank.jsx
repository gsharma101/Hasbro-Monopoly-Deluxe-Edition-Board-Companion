import React, { useState } from 'react';

export default function Bank({ players, setPlayers }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');

  const transfer = () => {
    const amt = parseInt(amount);
    if (isNaN(amt) || amt <= 0) return;

    setPlayers(prev =>
      prev.map(p => {
        if (p.name === from) return { ...p, balance: p.balance - amt };
        if (p.name === to) return { ...p, balance: p.balance + amt };
        return p;
      })
    );

    setAmount('');
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Banking</h2>
      <div className="flex flex-wrap gap-2 mb-2">
        <select className="border px-2 py-1" onChange={(e) => setFrom(e.target.value)}>
          <option value="">From</option>
          {players.map((p, i) => (
            <option key={i} value={p.name}>{p.name}</option>
          ))}
          <option value="Bank">Bank</option>
        </select>

        <select className="border px-2 py-1" onChange={(e) => setTo(e.target.value)}>
          <option value="">To</option>
          {players.map((p, i) => (
            <option key={i} value={p.name}>{p.name}</option>
          ))}
          <option value="Bank">Bank</option>
        </select>

        <input
          type="number"
          placeholder="Amount"
          className="border px-2 py-1 w-28"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button className="bg-green-500 text-white px-3 py-1" onClick={transfer}>
          Transfer
        </button>
      </div>
    </div>
  );
}
