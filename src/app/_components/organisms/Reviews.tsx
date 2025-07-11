"use client";
import { MovieReviewsResponse, MovieReviws } from "@/app/_types/movie";
import React, { useRef, useState } from "react";

import ReviewCard from "../atoms/ReviewCard";
import { getMovieReviews } from "@/app/_services/movie";

const Reviews = ({
  data,
  totalPage,
  totalResults,
  id,
}: {
  data: MovieReviws[];
  totalPage: number;
  totalResults: number;
  id: string;
}) => {
  const [reviews, setReviews] = useState<MovieReviws[]>(data);
  const [visibleCount, setVisibleCount] = useState<number>(5);
  const page = useRef<number>(1);

  const handleLoadMore = async () => {
    if (visibleCount < reviews.length) {
      setVisibleCount((prev) => Math.min(prev + 5, reviews.length));
      return;
    }

    if (page.current < totalPage) {
      const nextPage = page.current + 1;

      const res = await getMovieReviews<MovieReviewsResponse>(id, nextPage);

      setReviews((prev) => [...prev, ...res.results]);
      page.current = nextPage;
      setVisibleCount((prev) => prev + 5);
    }
  };

  return (
    <div className="relative ">
      <div className="px-[5vw] py-[1rem] max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-white">
          리뷰 ({totalResults})
        </h2>
        <ul className="space-y-6">
          {reviews.length === 0 ? (
            <li className="text-white text-center">리뷰가 없습니다.</li>
          ) : (
            reviews.slice(0, visibleCount).map((review, idx) => {
              return <ReviewCard key={idx} data={review} />;
            })
          )}
        </ul>
        {visibleCount < totalResults && (
          <button
            onClick={handleLoadMore}
            className="w-full mt-6 bg-white/10 p-5 shadow-md rounded-lg font-bold text-white cursor-pointer hover:bg-white/20 transition-colors"
          >
            더보기
          </button>
        )}
      </div>
    </div>
  );
};

export default Reviews;
