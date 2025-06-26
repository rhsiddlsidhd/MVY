"use client";

import { SearchIcon } from "../atoms/Icon";
import Input from "../atoms/Input";

const SearchBar = () => {
  return (
    <div className="flex gap-2 max-w-[15vw]">
      <Input />
      <SearchIcon
        className="flex items-center text-[2vw] hover:scale-120 transition-all duration-500"
        onClick={() => console.log("클릭")}
      />
    </div>
  );
};

export default SearchBar;
