import MovieListSection from "../_components/organisms/MovieListSection";

import { getUpcomingMovies } from "../_services/movie";
import { MovieListResponse } from "../_types/movie";

const Upcoming = async () => {
  const res = await getUpcomingMovies<MovieListResponse>({
    page: 1,
    language: "ko-KR",
  });

  if (!res) return <div>로딩중</div>;
  return (
    <MovieListSection
      data={res.results}
      totalPage={res.total_pages}
      type="upcoming"
    />
  );
};

export default Upcoming;
