import {
  getMovieGenres,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from "./services/movie";
import { GenreResponse } from "./category/page";
import NowPlayingSection from "./components/organisms/NowPlayingSection";
import { MovieListResponse } from "./upcoming/page";
import PopularSection from "./components/organisms/PopularSection";
import CategorySection from "./components/organisms/CategorySection";
import { notFound } from "next/navigation";
import TopRatedSection from "./components/organisms/TopRatedSection";

const Home = async () => {
  try {
    const nowPlaying = await getNowPlayingMovies<MovieListResponse>();
    const popular = await getPopularMovies<MovieListResponse>();
    const genreRes = await getMovieGenres<GenreResponse>();
    const topRated = await getTopRatedMovies<MovieListResponse>();

    const genreMap = genreRes.genres.reduce((acc, genre) => {
      acc[genre.id] = genre.name;
      return acc;
    }, {} as Record<number, string>);

    return (
      <div className="flex flex-col gap-[3rem]">
        <NowPlayingSection genreMap={genreMap} data={nowPlaying} />
        <TopRatedSection data={topRated} genreMap={genreMap} />
        <CategorySection data={genreRes} />
        <PopularSection genreMap={genreMap} data={popular} />
      </div>
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      notFound();
    }
  }
};

export default Home;
