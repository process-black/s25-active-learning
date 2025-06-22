import React from 'react';

interface EmilyH1Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function EmilyH1({ children, className = '', style = {} }: EmilyH1Props) {
  return (
    <h1 
      className={className}
      style={{
        fontFamily: "'Emilys Candy', cursive",
        fontSize: '3rem',
        fontWeight: 'normal',
        margin: '0.67em 0',
        ...style
      }}
    >
      {children}
    </h1>
  );
}