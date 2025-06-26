"use client";
import React from "react";
import { HamburgerIcon } from "../atoms/Icon";

const Hamburger = () => {
  return (
    <HamburgerIcon
      className="text-[2vw] flex items-center hover:scale-120 transition-all duration-500"
      onClick={() => console.log("클릭")}
    />
  );
};

export default Hamburger;
