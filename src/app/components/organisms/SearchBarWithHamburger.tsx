"use client";
import React, { useState } from "react";
import Hamburger from "../molecules/Hamburger";
import SearchBar from "../molecules/SearchBar";
import Nav from "../molecules/Nav";

const SearchBarWithHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-[20vw] rounded-bl-4xl p-[1rem_1rem_1rem_2rem] bg-[#272727]">
      <div className="flex align-center max-sm:justify-end min-w-fit gap-[1rem] z-10 overflow-hidden">
        <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        <SearchBar boxClassname="max-sm:hidden" />
      </div>
      <div
        className={`w-[20vw] absolute right-0 top-0 rounded-bl-4xl p-[6rem_1rem_1rem_1rem] transform-gpu ${
          isOpen ? "translate-y-0 " : "-translate-y-full "
        } z-[-1] transition-transform duration-500 ease-in-out bg-[#272727] text-[3vw] max-sm:text-[1.5vw]`}
      >
        <Nav />
      </div>
    </div>
  );
};

export default SearchBarWithHamburger;
