import { getFilteredMovies } from "@/app/_services/movie";
import { TMDBBaseResponse } from "@/app/_utils";

interface CategoryDetailResponse extends TMDBBaseResponse {
  page: number;
  results: {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
  total_pages: number;
  total_results: number;
}

const CategoryDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const data = await getFilteredMovies<CategoryDetailResponse>(Number(slug));

  return (
    <div>
      <h1>카테고리 리스트 페이지</h1>
      <ul>
        {data.results.map((movie, i) => {
          return (
            <li key={i}>
              <a href={`/detail/${movie.id}`}>
                <h2>{movie.title}</h2>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryDetailPage;
