import React, { useState } from 'react';

export default function PropertyManager({ players }) {
  const [properties, setProperties] = useState([]);
  const [propertyName, setPropertyName] = useState('');
  const [owner, setOwner] = useState('');

  const addProperty = () => {
    if (!propertyName || !owner) return;
    setProperties([...properties, { name: propertyName, owner }]);
    setPropertyName('');
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Properties</h2>
      <div className="flex gap-2 mb-2">
        <input
          className="border px-2 py-1"
          placeholder="Property Name"
          value={propertyName}
          onChange={(e) => setPropertyName(e.target.value)}
        />
        <select className="border px-2 py-1" onChange={(e) => setOwner(e.target.value)} value={owner}>
          <option value="">Select Owner</option>
          {players.map((p, i) => (
            <option key={i} value={p.name}>{p.name}</option>
          ))}
        </select>
        <button className="bg-purple-500 text-white px-3 py-1" onClick={addProperty}>
          Add
        </button>
      </div>
      <ul>
        {properties.map((prop, idx) => (
          <li key={idx} className="py-1">
            🏠 <strong>{prop.name}</strong> owned by {prop.owner}
          </li>
        ))}
      </ul>
    </div>
  );
}
