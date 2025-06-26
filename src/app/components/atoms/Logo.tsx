"use client";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const title = "MoVieYoung";

  return (
    <Link
      href="/"
      className="itmes-center text-[2vw]  text-white group bg-[#272727] rounded-br-4xl top-0  p-[1rem_2rem_1rem_1rem] "
    >
      {[...title].map((w, idx) => {
        const isUpper = w === w.toUpperCase();

        let customTranslate = "";
        if (w === "V") {
          customTranslate = "-translate-x-[4px]";
        } else if (w === "Y") {
          customTranslate = "-translate-x-[14px]";
        }

        return (
          <span
            key={idx}
            className={`inline-block transition-all duration-500  ${
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
