import React from "react";
import Card3D from "../atoms/Card3D";
import { Movie } from "@/app/_types/movie";

const Card3DGallery = ({ data, lang }: { data: Movie[]; lang: string }) => {
  return (
    <div className="flex flex-wrap gap-[1rem]">
      {data.map((movie, i) => {
        return (
          <Card3D
            key={i}
            data={movie}
            lang={lang === "ko-KR"}
            className="w-[calc((100%-3rem)/4)] aspect-[3/4] max-xl:w-[calc((100%-1rem)/2)]  max-sm:w-full max-sm:aspect-[16/9]"
          />
        );
      })}
    </div>
  );
};

export default Card3DGallery;
