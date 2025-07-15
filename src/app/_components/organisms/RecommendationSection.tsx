"use client";
import { Movie, MovieListResponse } from "@/app/_types/movie";
import React, { useRef, useState } from "react";
import Card3D from "../atoms/Card3D";
import { getMovieRecommendations } from "@/app/_services/movie";

const RecommendationSection = ({
  data,
  totalPage,
  id,
}: {
  data: Movie[];
  totalPage: number;
  id: string;
}) => {
  const [visibleData, setVisibleData] = useState<Movie[]>(data);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const page = useRef<number>(1);

  const handleScroll = async () => {
    if (!scrollRef.current || loading) return;
    if (
      scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
      scrollRef.current.scrollWidth - 2
    ) {
      if (page.current < totalPage) {
        setLoading(true);
        try {
          page.current += 1;
          const res = await getMovieRecommendations<MovieListResponse>(
            id,
            page.current
          );
          setVisibleData((prev) => [...prev, ...res.results]);
        } catch (e) {
          if (e instanceof Error) {
            console.error(e.message);
          }
        } finally {
          setLoading(false);
        }
      }
    }
  };

  return (
    <section className="max-w-7xl px-[5vw] py-[1rem] mx-auto ">
      <div className="relative">
        <h2 className="text-2xl font-bold mb-6 text-white">추천 영화</h2>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
        >
          {visibleData.map((movie, idx) => (
            <Card3D
              key={idx}
              data={movie}
              className={`w-[calc((100%-3rem)/4)] shrink-0 aspect-[3/4] max-xl:w-[calc((100%-1rem)/2)]  max-sm:w-full max-sm:aspect-[16/9] snap-start`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;
