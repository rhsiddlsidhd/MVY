import Card from "../components/atoms/Card";
import { getMovieGenres, getNowPlayingMovies } from "../services/movie";
import { notFound } from "next/navigation";
import { TMDBBaseResponse } from "../utils";
import { GenreResponse } from "../category/page";

export type MovieList = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export interface MovieListResponse extends TMDBBaseResponse {
  dates: { maximum: string; minimum: string };
  page: number;
  results: MovieList[];
  total_pages: number;
  total_results: number;
}

const Upcoming = async () => {
  // UPCOMING PAGE
  // UPCOMING API 호출 후 data에 따른 UI 구성
  // 클릭시 Detail 페이지로 이동

  try {
    // const res = await getNowPlayingMovies<MovieListResponse>();
    const [movieRes, genreRes] = await Promise.all([
      getNowPlayingMovies<MovieListResponse>(),
      getMovieGenres<GenreResponse>(),
    ]);

    // const data = res.results[0];

    const movie = movieRes.results[0];

    const genreMap = genreRes.genres.reduce((acc, genre) => {
      acc[genre.id] = genre.name;
      return acc;
    }, {} as Record<number, string>);

    return (
      <div className="h-[100vh] flex justify-center items-center">
        {/* <h1>Category</h1> */}
        {/* {res.results.slice()} */}
        <Card
          data={movie}
          genreMap={genreMap}
          className="w-[100%] aspect-[16/9]"
        />
      </div>
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      notFound();
    }
  }
};

export default Upcoming;
