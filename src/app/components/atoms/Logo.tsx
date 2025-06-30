"use client";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const title = "MoVieYoung";

  return (
    <Link
      href="/"
      className="relative flex items-center text-[3vw] max-sm:text-[1.5rem] group rounded-br-[10px] top-0 p-[0rem_2rem_0rem_0.25rem] text-nowrap"
    >
      <div className="absolute inset-0 w-full h-full bg-[#272727] rounded-br-[100px] -translate-x-1/3 group-hover:translate-x-0 transition-transform duration-300 transform-gpu " />

      {[...title].map((w, idx) => {
        const isUpper = w === w.toUpperCase();

        let customTranslate = "translate-x-0";
        if (w === "V") {
          customTranslate = "-translate-x-[4px]";
        } else if (w === "Y") {
          customTranslate = "-translate-x-[12px]";
        }

        return (
          <span
            key={idx}
            className={`inline-block font-bold transition-all duration-300 text-[#B7B508] ${
              isUpper
                ? `${customTranslate} group-hover:translate-x-0`
                : "opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0"
            }`}
          >
            {w}
          </span>
        );
      })}
    </Link>
  );
};

export default Logo;
