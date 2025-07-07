"use client";

import React from "react";

export interface CardProps {
  angle: number;
  name: string;
  translateDistance: number;
  itemSize: number;
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
  itemSize,
  onMouseEnter,
  onMouseLeave,
  style,
}: CardProps) => {
  return (
    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex items-center justify-center text-sm cursor-pointer rounded-3xl`}
      style={{
        width: `max(${itemSize}%, 5rem)`,
        aspectRatio: "1 / 1",
        transform: `rotate(${angle}deg) translateY(${translateDistance}vw)`,
        // transform: `rotate(${angle}deg) translateY(300%)`,
        // transform: `rotate(${angle}deg) translateY(200%)`,
        transformOrigin: "center",
        perspective: "800px",
        ...style,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="relative w-full h-full  transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: hoverIndex ? "rotateY(180deg)" : "rotateY(0deg)",
          width: "100%",
          height: "100%",
        }}
      >
        {/* front */}
        <div
          className="absolute w-full h-full flex items-center justify-center bg-[#B7B508] text-white rounded-3xl text-nowrap"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {name}
        </div>
        {/* back */}
        <div
          className="absolute w-full h-full flex items-center justify-center bg-[#B7B508] text-white rounded-3xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          eng
        </div>
      </div>
    </div>
  );
};

export default Card;
