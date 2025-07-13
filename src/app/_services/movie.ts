import { MovieListResponse, MovieVideosResponse } from "../upcoming/page";
import { fetchMovies, TMDBBaseResponse } from "../_utils";

export const getTopRatedMovies = <T extends TMDBBaseResponse>() =>
  fetchMovies<T>("/movie/top_rated");

export const getPopularMovies = <T extends TMDBBaseResponse>() =>
  fetchMovies<T>("/movie/popular");

export const getNowPlayingMovies = <T extends TMDBBaseResponse>() =>
  fetchMovies<T>("/movie/now_playing");

export const getUpcomingMovies = <T extends TMDBBaseResponse>() =>
  fetchMovies<T>("/movie/upcoming");

export const getMovieGenres = async <T extends TMDBBaseResponse>(
  language: string = "ko"
): Promise<T | null> => {
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
  if (res.status === 404) {
    return null;
  }
  if (!res.ok) {
    return null;
  }

  const data: T = await res.json();

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
  if (res.status === 404) {
    const message = await res.json().then((error) => error.status_message);
    throw new Error(message ?? `영화 정보를 찾을 수 없습니다`);
  }
  if (!res.ok) {
    throw new Error(`API 요청중 실패하였습니다.`);
  }

  const data: T = await res.json();

  return data;
};

export const getMovieDetail = async <T>(movieId: string): Promise<T> => {
  const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
  const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  };
  const language = "ko-KR";

  const url = `${baseUrl}/movie/${movieId}?language=${language}`;

  const res = await fetch(url, options);

  if (res.status === 404) {
    const message = await res.json().then((error) => error.status_message);
    throw new Error(message ?? `영화 정보를 찾을 수 없습니다`);
  }
  if (!res.ok) {
    throw new Error(`API 요청중 실패하였습니다.`);
  }

  const data: T = await res.json();

  return data;
};

export const getMovieSearch = async <T extends TMDBBaseResponse>(
  query: string,
  page: number = 1
): Promise<T> => {
  const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
  const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  };
  const language = "ko-KR";
  const include_adult = true;

  const url = `${baseUrl}/search/movie?query=${query}&language=${language}&include_adult=${include_adult}&page=${page}`;

  const res = await fetch(url, options);

  if (res.status === 404) {
    const message = await res.json().then((error) => error.status_message);
    throw new Error(message ?? `영화 정보를 찾을 수 없습니다`);
  }
  if (!res.ok) {
    throw new Error(`API 요청중 실패하였습니다.`);
  }

  const data: T = await res.json();

  return data;
};

export const getMovieVideos = async <T extends TMDBBaseResponse>(
  movieId: number //string > number 일시 수정
): Promise<T> => {
  const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
  const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  };
  const language = "ko-KR";

  const url = `${baseUrl}/movie/${movieId}/videos?language=${language}`;

  const res = await fetch(url, options);

  if (res.status === 404) {
    const message = await res.json().then((error) => error.status_message);
    throw new Error(message ?? `영화 정보를 찾을 수 없습니다`);
  }
  if (!res.ok) {
    throw new Error(`API 요청중 실패하였습니다.`);
  }

  const data: T = await res.json();

  return data;
};

export const getMovieReviews = async <T extends TMDBBaseResponse>(
  movieId: string,
  page: number = 1
): Promise<T> => {
  const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
  const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  };
  const language = "en-US";

  const url = `${baseUrl}/movie/${movieId}/reviews?language=${language}&=page=${page}`;

  const res = await fetch(url, options);

  if (res.status === 404) {
    const message = await res.json().then((error) => error.status_message);
    throw new Error(message ?? `영화 정보를 찾을 수 없습니다`);
  }
  if (!res.ok) {
    throw new Error(`API 요청중 실패하였습니다.`);
  }

  const data: T = await res.json();

  return data;
};

export const getMovieSimilar = async <T extends TMDBBaseResponse>(
  movieId: string,
  page: number = 1
): Promise<T> => {
  const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
  const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  };
  const language = "ko-KR";

  const url = `${baseUrl}/movie/${movieId}/similar?language=${language}&page=${page}`;

  const res = await fetch(url, options);

  if (res.status === 404) {
    const message = await res.json().then((error) => error.status_message);
    throw new Error(message ?? `영화 정보를 찾을 수 없습니다`);
  }
  if (!res.ok) {
    throw new Error(`API 요청중 실패하였습니다.`);
  }

  const data: T = await res.json();

  return data;
};

export const getMovieRecommendations = async <T extends TMDBBaseResponse>(
  movieId: string,
  page: number = 1
): Promise<T> => {
  const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
  const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  };
  const language = "ko-KR";

  const url = `${baseUrl}/movie/${movieId}/recommendations?language=${language}&=page=${page}`;

  const res = await fetch(url, options);

  if (res.status === 404) {
    const message = await res.json().then((error) => error.status_message);
    throw new Error(message ?? `영화 정보를 찾을 수 없습니다`);
  }
  if (!res.ok) {
    throw new Error(`API 요청중 실패하였습니다.`);
  }

  const data: T = await res.json();

  return data;
};

export const getFilteredMovies = async <T extends TMDBBaseResponse>(
  genre: number,
  page: number = 1
): Promise<T> => {
  const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
  const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  };
  const language = "ko-KR";
  const include_adult = true;
  const include_video = true;
  const sort_by = "popularity.desc";

  // const url = `${baseUrl}/discover/movie?genre=${genre}&include_adult=${include_adult}&include_video=${include_video}&language=${language}&sort_by=${sort_by}&page=${page}`;

  const url = `${baseUrl}/discover/movie?include_adult=${include_adult}&include_video=${include_video}&language=${language}&sort_by=${sort_by}&with_genres=${genre}&page=${page}`;

  const res = await fetch(url, options);
  if (res.status === 404) {
    const message = await res.json().then((error) => error.status_message);
    throw new Error(message ?? `영화 정보를 찾을 수 없습니다`);
  }
  if (!res.ok) {
    throw new Error(`API 요청중 실패하였습니다.`);
  }

  const data: T = await res.json();

  return data;
};

export const getTrailerKeysFromNowPlaying = async () => {
  const nowPlaying = await getNowPlayingMovies<MovieListResponse>();
  const ids = nowPlaying && nowPlaying.results.map((movie) => movie.id);

  const videoResults =
    ids &&
    (await Promise.all(
      ids.map(async (id) => {
        const res = await getMovieVideos<MovieVideosResponse>(id);
        if (!res || !res.results) return null;

        const trailer = res.results.find(
          (video) => video.site === "YouTube" && video.type === "Trailer"
        );

        return trailer ? { id, key: trailer.key, name: trailer.name } : null;
      })
    ));

  return (
    videoResults &&
    videoResults.filter(
      (video): video is { id: number; key: string; name: string } => !!video
    )
  );
};
