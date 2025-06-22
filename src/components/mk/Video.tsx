import React from 'react';

interface VideoProps {
  url: string;
  controls?: boolean;
  autoplay?: boolean;
  muted?: boolean;
}

export default function Video({ url, controls = true, autoplay = false, muted = false }: VideoProps) {
  return (
    <video 
      src={url}
      controls={controls}
      autoPlay={autoplay}
      muted={muted}
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