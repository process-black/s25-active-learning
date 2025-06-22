import React from 'react';

interface FloatingVideoProps {
  url: string;
  controls?: boolean;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  float?: 'left' | 'right';
}

export default function FloatingVideo({ 
  url, 
  controls = true, 
  autoplay = false, 
  muted = false, 
  loop = false,
  float = 'right'
}: FloatingVideoProps) {
  return (
    <video 
      src={url}
      controls={controls}
      autoPlay={autoplay}
      muted={muted}
      loop={loop}
      playsInline
      style={{
        width: '50%',
        height: 'auto',
        float: float,
        margin: float === 'left' ? '1rem 1rem 0 0' : '1rem 0 0 1rem',
        display: 'block'
      }}
    />
  );
}