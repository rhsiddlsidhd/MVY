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
/**
 *<input
        id="input-basic"
        className="peer h-full w-full border-b-2 border-gray-400 bg-transparent text-white placeholder-transparent focus:outline-none focus:border-yellow-400 overflow-hidden text-[2vw]"
        placeholder="Search"
      />
      <label
        htmlFor="input-basic"
        className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top- peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-yellow-400"
      >
        Search
      </label>
 */
