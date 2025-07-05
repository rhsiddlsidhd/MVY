"use client";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const title = "MovieYoung";

  return (
    <Link
      href="/"
      className="inline-flex items-center text-[3vw] max-sm:text-[1.5rem] font-bold text-[#B7B508] bg-[#272727] group  p-[0_2rem_0_0.25rem] rounded-br-[100px]"
    >
      {title.split("").map((char, idx) => {
        const isUpper = char === char.toUpperCase();

        if (isUpper) {
          return (
            <span key={idx} className="inline-block ">
              {char}
            </span>
          );
        }

        return (
          <span
            key={idx}
            className="inline-block overflow-hidden max-w-0 opacity-0 translate-x-[-0.5rem]
              group-hover:max-w-[2ch] group-hover:opacity-100 group-hover:translate-x-0
              transition-all duration-300 ease-in-out"
            style={{ transitionDelay: `${idx * 40}ms` }}
          >
            <span className="inline-block">{char}</span>
          </span>
        );
      })}
    </Link>
  );
};

export default Logo;
