import {
  getMovieGenres,
  getPopularMovies,
  getTopRatedMovies,
  getTrailerKeysFromNowPlaying,
} from "./_services/movie";

import { MovieListResponse } from "./upcoming/page";

import TrailerSection from "./_components/organisms/TrailerSection";
import TopRatedSection from "./_components/organisms/TopRatedSection";
import CategorySection from "./_components/organisms/CategorySection";
import PopularSection from "./_components/organisms/PopularSection";

const Home = async () => {
  const popularData = getPopularMovies<MovieListResponse>();
  const topRatedData = getTopRatedMovies<MovieListResponse>();
  const trailerKeysData = getTrailerKeysFromNowPlaying();
  const [popular, topRated, trailerKeys] = await Promise.all([
    popularData,

    topRatedData,
    trailerKeysData,
  ]);

  if (!popular || !topRated || !trailerKeys) return <div>Loading</div>;

  return (
    <div className="p-[5vw] flex flex-col gap-[3rem]">
      <TrailerSection data={trailerKeys[0]} />
      <TopRatedSection data={topRated} />
      <CategorySection />
      <PopularSection data={popular} />
    </div>
  );
};

export default Home;
