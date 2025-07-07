import {
  getMovieGenres,
  getPopularMovies,
  getTopRatedMovies,
  getTrailerKeysFromNowPlaying,
} from "./_services/movie";

import { GenreResponse } from "./category/page";
import { MovieListResponse } from "./upcoming/page";

import TrailerSection from "./_components/organisms/TrailerSection";
import TopRatedSection from "./_components/organisms/TopRatedSection";
import CategorySection from "./_components/organisms/CategorySection";
import PopularSection from "./_components/organisms/PopularSection";

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

  if (!genreRes || !popular || !topRated || !trailerKeys)
    return <div>Loading</div>;

  return (
    <div className="flex flex-col gap-[3rem]">
      <TrailerSection data={trailerKeys[0]} />
      <TopRatedSection data={topRated} genreRes={genreRes} />
      <CategorySection data={genreRes} />
      <PopularSection genreRes={genreRes} data={popular} />
    </div>
  );
};

export default Home;
