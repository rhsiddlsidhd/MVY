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

  // ref로 상태 관리
  const pageRef = useRef<number>(1);
  const isLoadingRef = useRef<boolean>(false);
  const totalPageRef = useRef<number>(totalPage);

  // totalPage가 변경될 때만 업데이트
  useEffect(() => {
    totalPageRef.current = totalPage;
  }, [totalPage]);

  useEffect(() => {
    if (!containerRef.current) return;

    const fetchFilteredMovies = async () => {
      if (pageRef.current === 1) return;

      isLoadingRef.current = true;

      try {
        const res = await getFilteredMovies<MovieListResponse>(
          slug,
          pageRef.current
        );
        if (res) {
          setBannerData((prev) => [...prev, ...res.results]);
        }
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        isLoadingRef.current = false;
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          pageRef.current < totalPageRef.current &&
          !isLoadingRef.current
        ) {
          pageRef.current += 1;
          fetchFilteredMovies();
        }
      });
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [slug]);
  return (
    <ul className="relative pt-[5vw]">
      {bannerData.map((movie, i) => {
        return (
          <li key={movie.id}>
            <Link href={`/detail/${movie.id}`}>
              <Banner data={movie} isEven={i % 2 === 0} num={i + 1} />
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
