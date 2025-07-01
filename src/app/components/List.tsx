"use client";
import React from "react";

interface GenreResponse {
  id: number;
  name: string;
}
const List = ({ genres }: { genres: GenreResponse[] }) => {
  return (
    <div className=" ">
      {/* <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <a href={`/category/${genre.id}`}>{genre.name}</a>
          </li>
        ))}
      </ul> */}
      {/* <div className="fixed w-[80%] aspect-[1/1] left-[10%] bottom-[10%] border-2 rounded-full">
        <div className="border-2 w-[15vw] h-[50px] absolute left-0 top-[50%] -translate-x-[60%] rotate-0">
          1
        </div>
        <div className="border-2 w-[15vw] h-[50px] absolute left-0 top-[45%] -translate-x-[57%] rotate-3">
          2
        </div>
        <div className="border-2 w-[15vw] h-[50px] absolute left-0 top-[40%] -translate-x-[54%] rotate-6">
          3
        </div>
        <div className="border-2 w-[15vw] h-[50px] absolute left-0 top-[35%] -translate-x-[51%] rotate-9">
          4
        </div>
        <div className="border-2 w-[15vw] h-[50px] absolute left-0 top-[30%] -translate-x-[48%] rotate-12">
          5
        </div>
        <div className="border-2 w-[15vw] h-[50px] absolute left-0 top-[25%] -translate-x-[45%] rotate-15">
          6
        </div>
      </div> */}
      <div className="relative w-[300px] aspect-square border-2 border-black rounded-full">
        {Array.from({ length: 19 }).map((_, i) => {
          const angle = (360 / 19) * i;

          const itemSize = 40;
          const radius = 150;

          const extraOffset = itemSize / 2;
          const offset = radius - itemSize / 2 + extraOffset;

          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm "
              style={{
                width: `${itemSize}px`,
                height: `${itemSize}px`,
                transform: `rotate(${angle}deg) translateY(-${offset}px) rotate(-${angle}deg) `,
                transformOrigin: "center",
              }}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
