import {
  getMovieGenres,
  getPopularMovies,
  getTopRatedMovies,
  getTrailerKeysFromNowPlaying,
} from "./_services/movie";

import { GenreResponse } from "./category/page";
import { MovieListResponse } from "./upcoming/page";

import HomeSection from "./_components/templates/HomeSection";

const Home = async () => {
  const popularData = getPopularMovies<MovieListResponse>();
  const genreResData = getMovieGenres<GenreResponse>();
  const topRatedData = getTopRatedMovies<MovieListResponse>();
  const trailerKeysData = getTrailerKeysFromNowPlaying();
  const [popular, genreRes, topRated, trailerKeys] = await Promise.all([
    popularData,
    genreResData,
    topRatedData,
    trailerKeysData,
  ]);

  if (!genreRes || !popular || !topRated || !trailerKeys) return;

  return (
    <HomeSection
      popular={popular}
      genreRes={genreRes}
      topRated={topRated}
      trailerKeys={trailerKeys}
    />
  );
};

export default Home;
