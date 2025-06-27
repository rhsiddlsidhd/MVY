"use client";

import React from "react";

const Input = () => {
  return (
    <div className="relative w-full ">
      <input
        id="input-basic"
        className="peer h-full w-full border-b-2 border-gray-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-[#FFD230] overflow-hidden text-[1.5vw] focus:text-[#FFD230]"
        placeholder="Search"
      />
    </div>
  );
};

export default Input;
