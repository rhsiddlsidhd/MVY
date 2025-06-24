import { fetchMovies, TMDBBaseResponse } from "../utils";

export const getTopRatedMovies = () => fetchMovies("/movie/top_rated");

export const getPopularMovies = () => fetchMovies("/movie/popular");

export const getNowPlayingMovies = () => fetchMovies("/movie/now_playing");

export const getUpcomingMovies = () => fetchMovies("/movie/now_playing");

export const getMovieGenres = async <
  T extends TMDBBaseResponse
>(): Promise<T> => {
  const language = "ko";
  const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
  const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  };

  const url = `${baseUrl}/genre/movie/list?language=${language}`;

  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error(`API 요청중 실패하였습니다.`);
  }

  const data: T = await res.json();

  if (data.success === false) {
    throw new Error(data.status_message);
  }

  return data;
};

export const getLatestMovies = async <
  T extends TMDBBaseResponse
>(): Promise<T> => {
  const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
  const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  };

  const url = `${baseUrl}/movie/latest`;

  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error(`API 요청중 실패하였습니다.`);
  }

  const data: T = await res.json();

  if (data.success === false) {
    throw new Error(data.status_message);
  }

  return data;
};
