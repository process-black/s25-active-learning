import React from 'react';

interface LoopingVideoProps {
  url: string;
  controls?: boolean;
  muted?: boolean;
}

export default function LoopingVideo({ url, controls = false, muted = true }: LoopingVideoProps) {
  return (
    <video 
      src={url}
      controls={controls}
      autoPlay
      loop
      muted={muted}
      playsInline
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '100%',
        display: 'block',
        margin: '1rem 0'
      }}
    />
  );
}