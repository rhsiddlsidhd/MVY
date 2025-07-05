// src/app/test/page.tsx (서버 컴포넌트)

import Card3DList from "../_components/organisms/Card3DList";
import { getMovieGenres, getPopularMovies } from "../_services/movie"; // 예시 fetch 함수
import { GenreResponse } from "../category/page";
import { MovieListResponse } from "../upcoming/page";

export default async function TestPage() {
  const popularData = await getPopularMovies<MovieListResponse>();
  const genreRes = await getMovieGenres<GenreResponse>();
  if (!popularData || !genreRes) return;
  return <Card3DList data={popularData} genreRes={genreRes} />;
}
