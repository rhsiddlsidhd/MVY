"use client";
import { MovieReviws } from "@/app/_types/movie";
import React from "react";
import Img from "./Img";
import { StarRateIcon } from "./Icon";

const ReviewCard = ({ data }: { data: MovieReviws }) => {
  return (
    <li className="flex gap-4 bg-white/10 rounded-lg p-5 shadow-md">
      <div className="relative flex-shrink-0 w-14 h-14">
        {data.author_details.avatar_path && (
          <Img
            alt="avatar"
            src={data.author_details.avatar_path}
            className="w-14 h-14 rounded-full border-2 border-white bg-gray-700 object-cover object-center"
          />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-bold text-white text-lg truncate">
            {data.author}
          </span>
          {data.author_details.rating && (
            <span className="inline-flex items-center gap-1 px-2 bg-yellow-400 text-black rounded font-semibold text-[14px]">
              <StarRateIcon className="w-[14px] aspect-1/1" />
              <span>{data.author_details.rating}</span>
            </span>
          )}
          <span className="ml-auto text-xs text-gray-300">
            {new Date(data.created_at).toLocaleDateString()}
          </span>
        </div>
        <p className="text-white text-sm whitespace-pre-line break-words max-h-40 overflow-y-auto scrollbar-hide ">
          {data.content}
        </p>
      </div>
    </li>
  );
  {
    /* {data.length === 0 && (
            <li className="text-white text-center">리뷰가 없습니다.</li>
          )} */
  }
  {
    /* {data.map((review, i) => (
            
          ))} */
  }
};

export default ReviewCard;
