"use client";

import { MovieList, MovieListResponse } from "@/app/upcoming/page";
import React, { useEffect, useRef, useState } from "react";
import Banner from "../atoms/Banner";
import Link from "next/link";
import { getFilteredMovies } from "@/app/_services/movie";

const BannerList = ({
  data,
  slug,
  totalPage,
}: {
  data: MovieList[];
  slug: number;
  totalPage: number;
}) => {
  const containerRef = useRef<HTMLHRElement | null>(null);
  const [bannerData, setBannerData] = useState<MovieList[]>(data);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.map((entry) => {
        if (entry.isIntersecting && page < totalPage)
          setPage((prev) => prev + 1);
      });
    });
    observer.observe(containerRef.current);
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (page === 1) return;
    const fetchFilteredMovies = async () => {
      const res = await getFilteredMovies<MovieListResponse>(slug, page);
      if (!res) return;
      setBannerData((prev) => [...prev, ...res.results]);
    };

    fetchFilteredMovies();
  }, [page]);

  return (
    <ul className="relative pt-[5vw]">
      {bannerData.map((movie, i) => {
        return (
          <li key={movie.id}>
            <Link href={`/detail/${movie.id}`}>
              <Banner data={movie} isEven={i % 2 === 0} />
            </Link>
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
