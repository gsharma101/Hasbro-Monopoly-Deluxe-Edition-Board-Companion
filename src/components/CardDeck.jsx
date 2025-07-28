import React, { useState } from 'react';

const chanceCards = [
  'Advance to GO',
  'Bank pays you dividend of $50',
  'Go to Jail',
  'Your building loan matures – collect $150',
  'Speeding fine – Pay $15',
  // Add more cards here...
];

const communityCards = [
  'Doctor’s fee – Pay $50',
  'From sale of stock you get $50',
  'Life insurance matures – collect $100',
  'Pay hospital fees of $100',
  'You inherit $100',
  // Add more cards here...
];

export default function CardDeck() {
  const [type, setType] = useState('');
  const [card, setCard] = useState('');

  const drawCard = () => {
    let cards = type === 'Chance' ? chanceCards : communityCards;
    const random = cards[Math.floor(Math.random() * cards.length)];
    setCard(random);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Card Drawer</h2>
      <div className="flex gap-2 mb-2">
        <select className="border px-2 py-1" onChange={(e) => setType(e.target.value)} value={type}>
          <option value="">Select Deck</option>
          <option value="Chance">Chance</option>
          <option value="Community">Community Chest</option>
        </select>
        <button className="bg-orange-500 text-white px-3 py-1" onClick={drawCard} disabled={!type}>
          Draw
        </button>
      </div>
      {card && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4">
          <p className="font-semibold">{type} Card:</p>
          <p>{card}</p>
        </div>
      )}
    </div>
  );
}
