import {
  getMovieGenres,
  getPopularMovies,
  getTopRatedMovies,
  getTrailerKeysFromNowPlaying,
} from "./services/movie";
import { GenreResponse } from "./category/page";
import NowPlayingSection from "./components/organisms/NowPlayingSection";
import { MovieListResponse } from "./upcoming/page";
import PopularSection from "./components/organisms/PopularSection";
import CategorySection from "./components/organisms/CategorySection";

import TopRatedSection from "./components/organisms/TopRatedSection";

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

  return (
    <div className="flex flex-col gap-[3rem]">
      {trailerKeys && <NowPlayingSection data={trailerKeys[0]} />}
      {topRated && genreRes && (
        <TopRatedSection data={topRated} genreRes={genreRes} />
      )}
      {genreRes && <CategorySection data={genreRes} />}
      {popular && genreRes && (
        <PopularSection genreRes={genreRes} data={popular} />
      )}
    </div>
  );
};

export default Home;
