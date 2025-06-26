"use client";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const title = "MoVieYoung";

  return (
    <Link
      href="/"
      className="w-[30%] min-w-fit text-white text-[5vw] group inline-block"
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
            className={`inline-block text-[3rem] transition-all duration-500 ${
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
