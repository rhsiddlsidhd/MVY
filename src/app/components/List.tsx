"use client";

import React from "react";
i;

interface GenreResponse {
  id: number;
  name: string;
}

const List = ({ genres }: { genres: GenreResponse[] }) => {
  // const containerSize = 80;
  // const itemSize = 10;
  // const radius = containerSize / 2;
  // const offset = radius - itemSize / 2;
  // const hoverOffset = offset + 5;

  // const itemCount = 19;
  // const startAngle = 270;
  // const endAngle = 90;

  // const angleStep = ((endAngle + 360 - startAngle) % 360) / (itemCount - 1);

  // const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="h-dvh flex justify-center items-center"></div>
    // <div
    //   className="fixed bottom-0"
    //   style={{
    //     width: `${containerSize}vw`,
    //     aspectRatio: "1 / 1",
    //     border: "2px solid black",
    //     borderRadius: "50%",
    //   }}
    // >
    //   {Array.from({ length: itemCount }).map((_, i) => {
    //     const angle = startAngle + angleStep * i;
    //     const isHovered = hoverIndex === i;

    //     // hover 시 translateY 값을 늘려줌
    //     const translateDistance = isHovered ? -hoverOffset : -offset;

    //     return (
    //       <div
    //         key={i}
    //         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white flex items-center justify-center text-sm cursor-pointer rounded-full transition-transform duration-300"
    //         style={{
    //           width: `${itemSize}vw`,
    //           aspectRatio: "1 / 1",
    //           transform: `
    //             rotate(${angle}deg)
    //             translateY(${translateDistance}vw)
    //           `,
    //           transformOrigin: "center",
    //         }}
    //         onMouseEnter={() => setHoverIndex(i)}
    //         onMouseLeave={() => setHoverIndex(null)}
    //       >
    //         {genres[i]?.name ?? i + 1}
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default List;
