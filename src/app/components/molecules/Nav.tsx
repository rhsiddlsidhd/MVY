import React from "react";
import Text from "../atoms/Text";
import Link from "next/link";

const Nav = () => {
  const nav = ["home", "category", "upcoming", "favorite"];

  return (
    <ul>
      {nav.map((tab, idx) => {
        return (
          <li className="flex justify-end mb-[0.25rem]" key={idx}>
            <Link href={`/${tab === "home" ? "" : tab}`}>
              <Text className="font-bold hover:text-[#FFD230] transition-colors duration-300 cursor-pointer">
                {tab.toUpperCase()}
              </Text>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
