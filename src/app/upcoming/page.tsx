import { getMovieGenres, getNowPlayingMovies } from "../_services/movie";
import { TMDBBaseResponse } from "../_utils";
import { Genre, GenreResponse } from "../_contexts/GenreContext";

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
  page: number;
  results: MovieList[];
  total_pages: number;
  total_results: number;
  dates?: { maximum: string; minimum: string };
}

interface MovieVideos {
  key: string;
  site: string;
  name: string;
  [key: string]: unknown;
}

export interface MovieVideosResponse extends TMDBBaseResponse {
  id: number;
  results: MovieVideos[];
}

export interface TrailerKeysResponse extends TMDBBaseResponse {
  id: number;
  key: string;
  name: string;
}

const Upcoming = async () => {
  // UPCOMING PAGE
  // UPCOMING API 호출 후 data에 따른 UI 구성
  // 클릭시 Detail 페이지로 이동

  const [movieRes, genreRes] = await Promise.all([
    getNowPlayingMovies<MovieListResponse>(),
    getMovieGenres<GenreResponse>(),
  ]);

  return (
    <div className="h-[100vh] flex justify-center items-center">
      {/* <Card3D
          data={movie}
          genreMap={genreMap}
          className="w-[50%] aspect-[16/9]"
        /> */}
    </div>
  );
};

export default Upcoming;
