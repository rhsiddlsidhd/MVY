"use client";
import { Movie } from "@/app/_types/movie";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Badge from "../atoms/Badge";

const UpcomingSection = ({ data }: { data: Movie[] }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div className="relative min-sm:p-[5vw]">
      <div className="px-2">
        <button
          className="z-10 min-sm:hidden"
          onClick={() => setIsVisible(!isVisible)}
        >
          <Badge className="bg-black/20 rounded-2xl">
            <CodeBracketIcon className="w-[16px]" />
          </Badge>
        </button>
      </div>
      <div
        className="sm:hidden absolute w-3/4 h-[100vh] bg-[#272727] p-2 border-amber-300 border-4 flex items-center flex-col justify-center "
        style={{
          transform: `${isVisible ? "translateX(0)" : "translateX(-200%)"}`,
          transition: `transform 0.3s ease `,
        }}
      >
        <ul className="w-full border-2 border-white">
          {Array.from({ length: 4 }, (_, i) => {
            return <li key={i}>{i + 1}</li>;
          })}
        </ul>
        <button>버튼</button>
      </div>
      <div className="z-10 px-2 border-2 border-white flex">
        <div className={`min-w-44 max-sm:hidden`}>SIDEBAR</div>
        <div className="flex-1">MAIN</div>
      </div>
    </div>
  );
};

export default UpcomingSection;
