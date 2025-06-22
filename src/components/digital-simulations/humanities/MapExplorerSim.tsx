import React, { useState } from 'react';

export default function MapExplorerSim() {
  const [year, setYear] = useState(1900);

  return (
    <div style={{ maxWidth: 400 }}>
      <label>
        Year:
        <input
          type="range"
          min="1800"
          max="2000"
          step="10"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          style={{ marginLeft: '0.5rem' }}
        />
        {year}
      </label>
      <p>Map changes for {year}</p>
    </div>
  );
}
