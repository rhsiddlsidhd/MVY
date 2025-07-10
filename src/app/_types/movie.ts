// 중앙 집중화된 영화 관련 타입 정의
import { TMDBBaseResponse } from "../_utils";

// 기본 영화 타입 (기존 MovieList와 동일)
export interface Movie {
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
}

// 영화 상세 정보 타입 (Movie 확장)
export interface MovieDetail extends Movie {
  belongs_to_collection?: {
    id: number;
    name: string;
    backdrop_path: string;
    poster_path: string;
  } | null;
  budget: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage?: string;
  imdb_id?: string;
  production_companies: Array<{
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline?: string;
}

// API 응답 타입들
export interface MovieListResponse extends TMDBBaseResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
  dates?: { maximum: string; minimum: string };
}

export interface MovieVideosResponse extends TMDBBaseResponse {
  id: number;
  results: Array<{
    key: string;
    site: string;
    name: string;
    type: string;
    official: boolean;
    published_at: string;
  }>;
}

export interface MovieCreditsResponse extends TMDBBaseResponse {
  id: number;
  cast: Array<{
    id: number;
    name: string;
    character: string;
    profile_path: string | null;
    order: number;
  }>;
  crew: Array<{
    id: number;
    name: string;
    job: string;
    department: string;
    profile_path: string | null;
  }>;
}
