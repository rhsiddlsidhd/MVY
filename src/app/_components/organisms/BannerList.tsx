"use client";

import { MovieWithGenres } from "@/app/upcoming/page";
import React, { useEffect, useRef, useState } from "react";
import Banner from "../atoms/Banner";

const BannerList = ({ data }: { data: MovieWithGenres[] }) => {
  const containerRef = useRef<HTMLHRElement | null>(null);
  const [page, setPage] = useState<number>(1);
  const [bannerData, setBannerData] = useState<MovieWithGenres[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        if (entry.isIntersecting) setPage((prev) => prev + 1);
      });
    });
    intersectionObserver.observe(containerRef.current);
  }, []);

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <ul className=" relative">
      {data.map((movie, i) => {
        return (
          <li key={i}>
            <a href={`/detail/${movie.id}`}>
              <Banner data={movie} />
            </a>
          </li>
        );
      })}
      <hr
        ref={containerRef}
        className="absolute bottom-0 w-full h-[1rem] bg-transparent border-none"
      />
    </ul>
  );
};

export default BannerList;
