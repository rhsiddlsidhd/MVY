"use client";

import React from "react";

const Input = () => {
  return (
    <div className="relative w-full">
      <input
        id="input-basic"
        className="h-full w-full border-b-2 border-[#B7B508] bg-transparent text-#0C0C0C placeholder-[#B7B508] focus:outline-none focus:border-[#B7B508] overflow-hidden text-[1.5vw] focus:text-[#B7B508] pl-1 pb-1"
        placeholder="Search"
      />
    </div>
  );
};

export default Input;
