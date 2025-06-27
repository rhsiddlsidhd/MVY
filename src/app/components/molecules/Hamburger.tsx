"use client";
import React from "react";
import { CloseIcon, HamburgerIcon } from "../atoms/Icon";

const Hamburger = ({
  onClick,
  isOpen,
}: {
  onClick?: () => void;
  isOpen?: boolean;
}) => {
  return (
    <button
      className="relative h-full w-[2vw] max-sm:w-fit flex items-center max-sm:justify-end z-50"
      onClick={onClick}
    >
      <CloseIcon
        className={`cursor-pointer max-sm:text-[1.5rem] text-[2vw] absoulte  ${
          isOpen ? "opacity-100" : "opacity-0"
        } transform-gpu transition-opacity duration-300 `}
      />
      <HamburgerIcon
        className={`cursor-pointer max-sm:text-[1.5rem] text-[2vw] absolute   ${
          isOpen ? "opacity-0" : "opacity-100"
        }  transform-gpu transition-opacity duration-300`}
      />
    </button>
  );
};

export default Hamburger;
