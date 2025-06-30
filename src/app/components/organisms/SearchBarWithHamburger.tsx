"use client";
import React, { useState } from "react";
import Hamburger from "../molecules/Hamburger";
import SearchBar from "../molecules/SearchBar";
import Nav from "../molecules/Nav";

const SearchBarWithHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative w-[20vw] rounded-bl-[100px] p-[0.5rem_0.5rem_0.5rem_2rem] bg-[#272727] ">
        <div className="flex justify-between align-center h-full max-sm:justify-end min-w-fit gap-[0.25rem] z-20 overflow-hidden">
          <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          <SearchBar boxClassname="max-sm:hidden" />
        </div>
        <div
          className={`w-[20vw] absolute right-0 top-0 rounded-bl-[100px] p-[5rem_0.5rem_2rem_1rem] xl:p-[9rem_0.5rem_2rem_1rem] transform-gpu ${
            isOpen ? "translate-y-0 " : "-translate-y-full "
          } z-[-1] transition-transform duration-500 ease-in-out bg-[#272727] text-[3vw] max-sm:hidden`}
        >
          <Nav />
        </div>
      </div>
      <div
        className={`w-full h-full fixed top-0 bg-[#272727] flex items-center text-[10vw]  transform-gpu ${
          isOpen ? "-translate-y-0" : "-translate-y-full"
        } duration-300 ease-in sm:hidden`}
      >
        <Nav fn={() => setIsOpen(false)} />
      </div>
    </>
  );
};

export default SearchBarWithHamburger;
