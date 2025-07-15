import React from "react";
import Card3DList from "./Card3DList";
import { MovieListResponse } from "@/app/_types/movie";
import Link from "next/link";
import Badge from "../atoms/Badge";

const PopularSection = ({ data }: { data: MovieListResponse }) => {
  return (
    <section>
      <div className="flex justify-end">
        <Link href="/popular" className="mb-2">
          <Badge className="text-xs text-[#B7B508] border-[#B7B508]  rounded-xl cursor-pointer relative font-semibold bg-transparent  hover:text-white transition-all duration-200">
            더보기
          </Badge>
        </Link>
      </div>
      <div className="flex flex-wrap gap-[1rem]">
        <Card3DList
          data={data}
          count={4}
          className="w-[calc((100%-1rem)/2)] max-sm:w-full aspect-[16/9] max-sm:aspect-[3/4]"
        />
      </div>
    </section>
  );
};

export default PopularSection;
