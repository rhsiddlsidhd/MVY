import { getFilteredMovies, getMovieGenres } from "@/app/_services/movie";
import { GenreResponse } from "../page";
import { Genre, MovieListResponse, MovieWithGenres } from "@/app/upcoming/page";
import BannerList from "@/app/_components/organisms/BannerList";

const CategoryDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const categoryDetailRes = getFilteredMovies<MovieListResponse>(Number(slug));
  const genreRes = getMovieGenres<GenreResponse>();
  const [data, genreData] = await Promise.all([categoryDetailRes, genreRes]);

  const moviesWithGenres: MovieWithGenres[] = data.results.map((movie) => {
    const { genre_ids, ...movieWithoutGenreIds } = movie;
    return {
      ...movieWithoutGenreIds,
      genres: genre_ids
        .map((id) => genreData?.genres.find((genre) => genre.id === id))
        .filter(Boolean) as Genre[],
    };
  });

  return <BannerList data={moviesWithGenres} />;
};

export default CategoryDetailPage;
