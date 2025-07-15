"use client";

import React from "react";
import Card3D from "../atoms/Card3D";
import { MovieListResponse } from "@/app/_types/movie";

const Card3DList = ({
  data,
  count = 4,
  className,
}: {
  data: MovieListResponse;
  count?: number;
  className?: string;
}) => {
  return (
    <>
      {data.results.slice(0, count).map((movie, i) => {
        return (
          <Card3D key={i} data={movie} lang={true} className={`${className}`} />
        );
      })}
    </>
  );
};

export default Card3DList;
