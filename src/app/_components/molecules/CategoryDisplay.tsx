"use client";

import Link from "next/link";
import React from "react";
import OutlineText from "../atoms/OutlineText";
import { MergedGenre } from "../../_contexts/GenreContext";

const CategoryDisplay = ({
  data,
  selected,
}: {
  data: MergedGenre[];
  selected?: number;
}) => {
  return (
    <div
      className={`relative h-[25vh] min-h-[500px] flex items-center justify-center gap-[1rem] `}
    >
      {data.map(({ id, ko }) => (
        <Link
          key={id}
          href={`/category/${id}`}
          className={`absolute ${
            selected === id
              ? "opcaity-100 cursor-pointer"
              : "opacity-0 pointer-events-none"
          } transform-opacity duration-300 ease-in `}
        >
          <OutlineText className="text-[10vw] ">{ko}</OutlineText>
        </Link>
      ))}
    </div>
  );
};

export default CategoryDisplay;
