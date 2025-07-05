import React from "react";
import Text from "../atoms/Text";
import Link from "next/link";

const Nav = ({ fn }: { fn?: () => void }) => {
  const nav = ["home", "category", "upcoming", "favorite"];

  return (
    <ul className="m-auto">
      {nav.map((tab, idx) => {
        return (
          <li className="flex justify-end mb-[0.25rem]" key={idx}>
            <Link href={`/${tab === "home" ? "" : tab}`} onClick={fn}>
              <Text className="font-bold text-white hover:text-[#B7B508] transition-colors duration-300 cursor-pointer">
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
