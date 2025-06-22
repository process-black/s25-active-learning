import React, { useState } from 'react';

export default function CircuitBuilderSim() {
  const [voltage, setVoltage] = useState(5);
  const [resistance, setResistance] = useState(10);
  const current = voltage / resistance;

  return (
    <div style={{ maxWidth: 400 }}>
      <label>
        Voltage (V):
        <input
          type="range"
          min="1"
          max="10"
          value={voltage}
          onChange={(e) => setVoltage(Number(e.target.value))}
          style={{ marginLeft: '0.5rem' }}
        />
        {voltage}
      </label>
      <br />
      <label>
        Resistance (Ω):
        <input
          type="range"
          min="1"
          max="20"
          value={resistance}
          onChange={(e) => setResistance(Number(e.target.value))}
          style={{ marginLeft: '0.5rem' }}
        />
        {resistance}
      </label>
      <p>Current: {current.toFixed(2)} A</p>
    </div>
  );
}
