"use client";

import React from "react";

export interface CardProps {
  ko: string;
  en: string;
  hoverIndex: boolean;
}

const Card = ({ ko, en, hoverIndex }: CardProps) => {
  return (
    <div
      className={`relative w-full h-full`}
      style={{
        perspective: "800px",
      }}
    >
      <div
        className="w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: hoverIndex ? "rotateY(180deg)" : "rotateY(0deg)",
          width: "100%",
          height: "100%",
        }}
      >
        {/* front */}
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center text-white rounded-xl shadow-lg bg-[#B7B508]"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {ko}
        </div>
        {/* back */}
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center text-white rounded-xl shadow-lg bg-[#222]"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {en}
        </div>
      </div>
    </div>
  );
};

export default Card;
