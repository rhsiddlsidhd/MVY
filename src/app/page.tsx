import MovieHome from "./movieHome/page";
import { getLatestMovies, getMovieGenres } from "./services/movie";

export default async function Home() {
  const data = await getLatestMovies();

  return <MovieHome data={data}></MovieHome>;
}
