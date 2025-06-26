"use client";
import React from "react";
import Hamburger from "../molecules/Hamburger";
import SearchBar from "../molecules/SearchBar";

const SearchBarWithHamburger = () => {
  return (
    <div className="flex gap-3 rounded-bl-4xl p-[1rem_1rem_1rem_2rem] bg-[#272727] ">
      <Hamburger />
      <SearchBar />
    </div>
  );
};

export default SearchBarWithHamburger;
