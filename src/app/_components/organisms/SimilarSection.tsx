"use client";

import { MovieList, MovieListResponse } from "@/app/upcoming/page";
import React, { useEffect, useRef, useState } from "react";
import Card3D from "../atoms/Card3D";
import { LeftArrowIcon, RightArrowIcon } from "../atoms/Icon";
import { getMovieSimilar } from "@/app/_services/movie";

const SimilarSection = ({
  data,
  totalPage,
  id,
}: {
  data: MovieList[];
  totalPage: number;
  id: string;
}) => {
  const [similarData, setSimilarData] = useState<MovieList[]>([...data]);

  const page = useRef<number>(1);

  return (
    <section className="max-w-7xl px-[5vw] py-[1rem] mx-auto ">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-300 "
          // style={{ transform: `translateX(-${slideX}px)` }}
        >
          {similarData.map((movie, idx) => (
            <Card3D
              key={idx}
              data={movie}
              className={`w-[calc((100%-3rem)/4)] shrink-0 aspect-[3/4] max-xl:w-[calc((100%-1rem)/2)]  max-sm:w-full max-sm:aspect-[16/9]`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarSection;
