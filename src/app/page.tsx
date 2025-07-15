import {
  getPopularMovies,
  getTopRatedMovies,
  getTrailerKeysFromNowPlaying,
} from "./_services/movie";

import TrailerSection from "./_components/organisms/TrailerSection";
import TopRatedSection from "./_components/organisms/TopRatedSection";
import CategorySection from "./_components/organisms/CategorySection";
import PopularSection from "./_components/organisms/PopularSection";
import { MovieListResponse } from "./_types/movie";
import GlobalLoading from "./loading";

const Home = async () => {
  const popularData = getPopularMovies<MovieListResponse>({
    page: 1,
    language: "ko-KR",
  });
  const topRatedData = getTopRatedMovies<MovieListResponse>({
    page: 1,
    language: "ko-KR",
  });
  const trailerKeysData = getTrailerKeysFromNowPlaying();
  const [popular, topRated, trailerKeys] = await Promise.all([
    popularData,
    topRatedData,
    trailerKeysData,
  ]);

  if (!popular || !topRated || !trailerKeys) return <GlobalLoading />;

  return (
    <div className="min-sm:p-[5vw] flex flex-col gap-[3rem]">
      <TrailerSection data={trailerKeys[0]} />
      <TopRatedSection data={topRated} />
      <CategorySection />
      <PopularSection data={popular} />
    </div>
  );
};

export default Home;
