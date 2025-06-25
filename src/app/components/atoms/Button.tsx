import React from "react";

const Button = () => {
  return (
    <button
      className="text-[#E2DE00] border-[#E2DE00] overflow-hidden border-2 pt-[.5rem] pb-[.5rem] pl-[1.5rem] pr-[1.5rem] rounded-4xl cursor-pointer relative  before:content-[''] before:absolute before:bg-[#E2DE00] before:top-0 before:left-0 before:w-full before:h-full before:rounded-4xl before:scale-0 hover:before:scale-100 before:transition-transform before:duration-300 before:origin-top-left
     hover:text-black"
    >
      <span className="relative">버튼</span>
    </button>
  );
};

export default Button;
