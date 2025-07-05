import { getMovieGenres } from "../_services/movie";
import List from "../_components/List";
import { TMDBBaseResponse } from "../_utils";

export interface GenreResponse extends TMDBBaseResponse {
  genres: { id: number; name: string }[];
}
const Category = async () => {
  const res = await getMovieGenres<GenreResponse>();

  return res && <List genres={res.genres} />;
};

export default Category;
