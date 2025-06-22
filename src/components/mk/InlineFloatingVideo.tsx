import React from 'react';

interface InlineFloatingVideoProps {
  url: string;
  controls?: boolean;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  float?: 'left' | 'right';
  width?: string;
}

export default function InlineFloatingVideo({ 
  url, 
  controls = true, 
  autoplay = false, 
  muted = false, 
  loop = false,
  float = 'right',
  width = '200px'
}: InlineFloatingVideoProps) {
  return (
    <video 
      src={url}
      controls={controls}
      autoPlay={autoplay}
      muted={muted}
      loop={loop}
      playsInline
      style={{
        width: width,
        height: 'auto',
        float: float,
        margin: float === 'left' ? '0.5rem 1rem 0.5rem 0' : '0.5rem 0 0.5rem 1rem',
        display: 'block'
      }}
    />
  );
}