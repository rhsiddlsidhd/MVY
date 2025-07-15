import React from "react";
import { getPopularMovies } from "../_services/movie";
import { MovieListResponse } from "../_types/movie";
import GlobalLoading from "../loading";
import MovieListSection from "../_components/organisms/MovieListSection";

const page = async () => {
  const res = await getPopularMovies<MovieListResponse>({
    page: 1,
    language: "ko-KR",
  });
  if (!res) return <GlobalLoading />;
  return (
    <MovieListSection
      data={res.results}
      totalPage={res.total_pages}
      type="popular"
    />
  );
};

export default page;
