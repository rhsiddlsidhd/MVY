"use client";

import { SearchIcon } from "../atoms/Icon";
import Input from "../atoms/Input";

const SearchBar = ({ boxClassname }: { boxClassname?: string }) => {
  return (
    <div
      className={`${boxClassname} flex gap-[0.25rem] max-w-[15vw] items-center z-10`}
    >
      <Input />
      <SearchIcon
        className="flex w-[3vw] hover:scale-[1.2] transition-all duration-500 cursor-pointer"
        onClick={() => console.log("클릭")}
      />
    </div>
  );
};

export default SearchBar;
