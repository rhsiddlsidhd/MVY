import { notFound } from "next/navigation";
import {
  getMovieGenres,
  getNowPlayingMovies,
  getPopularMovies,
} from "./services/movie";
import { GenreResponse } from "./category/page";
import NowPlayingSection from "./components/organisms/NowPlayingSection";
import { MovieListResponse } from "./upcoming/page";
import PopularSection from "./components/organisms/PopularSection";

const Home = async () => {
  try {
    const nowPlaying = await getNowPlayingMovies<MovieListResponse>();
    const popular = await getPopularMovies<MovieListResponse>();
    const genreRes = await getMovieGenres<GenreResponse>();

    const genreMap = genreRes.genres.reduce((acc, genre) => {
      acc[genre.id] = genre.name;
      return acc;
    }, {} as Record<number, string>);

    return (
      <div className="h-[200vh]">
        <NowPlayingSection genreMap={genreMap} data={nowPlaying} />
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
