import React, { useState } from 'react';

export default function ReactionRateSim() {
  const [concentration, setConcentration] = useState(1);
  // simple model: rate proportional to concentration squared
  const rate = concentration * concentration;

  return (
    <div style={{ maxWidth: 400 }}>
      <label>
        Concentration (M):
        <input
          type="range"
          min="0"
          max="5"
          step="0.1"
          value={concentration}
          onChange={(e) => setConcentration(Number(e.target.value))}
          style={{ marginLeft: '0.5rem' }}
        />
        {concentration.toFixed(1)}
      </label>
      <p>Relative Rate: {rate.toFixed(2)}</p>
    </div>
  );
}
