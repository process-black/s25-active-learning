import React, { useState } from 'react';

const artworks = [
  { year: '1500s', caption: 'Renaissance portrait' },
  { year: '1800s', caption: 'Impressionist landscape' },
  { year: '2000s', caption: 'Digital abstraction' },
];

export default function VirtualGallerySim() {
  const [index, setIndex] = useState(0);
  const artwork = artworks[index];

  return (
    <div style={{ maxWidth: 400 }}>
      <label>
        Era:
        <input
          type="range"
          min="0"
          max={artworks.length - 1}
          value={index}
          onChange={(e) => setIndex(Number(e.target.value))}
          style={{ marginLeft: '0.5rem' }}
        />
        {artwork.year}
      </label>
      <p>{artwork.caption}</p>
    </div>
  );
}
