import React from "react";
import { MovieListResponse } from "../_types/movie";
import { getTopRatedMovies } from "../_services/movie";
import GlobalLoading from "../loading";
import MovieListSection from "../_components/organisms/MovieListSection";

const page = async () => {
  const res = await getTopRatedMovies<MovieListResponse>({
    page: 1,
    language: "ko-KR",
  });
  if (!res) return <GlobalLoading />;
  return (
    <MovieListSection
      data={res.results}
      totalPage={res.total_pages}
      type="topRated"
    />
  );
};

export default page;
