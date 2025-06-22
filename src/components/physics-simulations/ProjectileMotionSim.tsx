import React, {useRef, useEffect, useState} from 'react';

export default function ProjectileMotionSim() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [angle, setAngle] = useState(45);
  const [velocity, setVelocity] = useState(20);
  const width = 400;
  const height = 300;
  const g = 9.8; // acceleration due to gravity

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    // ground line
    ctx.beginPath();
    ctx.moveTo(0, height - 1);
    ctx.lineTo(width, height - 1);
    ctx.strokeStyle = '#000';
    ctx.stroke();

    ctx.strokeStyle = '#2980b9';
    ctx.lineWidth = 2;

    const angleRad = (angle * Math.PI) / 180;
    const vX = velocity * Math.cos(angleRad);
    const vY = velocity * Math.sin(angleRad);
    const tMax = (2 * vY) / g;
    const step = tMax / 50;

    ctx.beginPath();
    ctx.moveTo(0, height - 1);
    for (let t = 0; t <= tMax; t += step) {
      const x = vX * t;
      const y = vY * t - 0.5 * g * t * t;
      const canvasX = x * 10; // scale for visibility
      const canvasY = height - y * 10;
      if (canvasX > width) break;
      ctx.lineTo(canvasX, canvasY);
    }
    ctx.stroke();
  }, [angle, velocity]);

  return (
    <div>
      <label>
        Angle:
        <input
          type="range"
          min="10"
          max="80"
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
          style={{marginLeft: '0.5rem'}}
        />
        {angle}°
      </label>
      <br />
      <label>
        Velocity:
        <input
          type="range"
          min="5"
          max="30"
          value={velocity}
          onChange={(e) => setVelocity(Number(e.target.value))}
          style={{marginLeft: '0.5rem'}}
        />
        {velocity} m/s
      </label>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        style={{border: '1px solid #ccc', marginTop: '1rem', width: width, height: height}}
      />
    </div>
  );
}
