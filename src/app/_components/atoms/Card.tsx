"use client";

import React from "react";

export interface CardProps {
  angle: number;
  name: string;
  translateDistance: number;
  hoverIndex?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  style?: React.CSSProperties;
}

const Card = ({
  angle,
  name,
  translateDistance,
  hoverIndex,
  onMouseEnter,
  onMouseLeave,
  style,
}: CardProps) => {
  const itemSize = 10;

  return (
    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white flex items-center justify-center text-sm cursor-pointer rounded-full transition-transform duration-300 perspective-distant ${
        hoverIndex ? "rotate-y-180" : "rotate-0"
      }`}
      style={{
        width: `${itemSize}vw`,
        aspectRatio: "1 / 1",
        transform: `
                rotate(${angle}deg)
                translateY(${translateDistance}vw)
              `,
        transformOrigin: "center",
        ...style,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {name}
    </div>
  );
};

export default Card;
