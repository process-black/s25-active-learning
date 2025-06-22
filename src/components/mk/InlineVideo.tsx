import React from 'react';

interface InlineVideoProps {
  url: string;
  controls?: boolean;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  width?: string;
}

export default function InlineVideo({ 
  url, 
  controls = true, 
  autoplay = false, 
  muted = false, 
  loop = false,
  width = '200px'
}: InlineVideoProps) {
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
        display: 'inline-block',
        verticalAlign: 'top',
        margin: '0 0.5rem'
      }}
    />
  );
}