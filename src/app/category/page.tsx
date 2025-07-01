import { notFound } from "next/navigation";
import { getMovieGenres } from "../services/movie";
import List from "../components/List";
import { TMDBBaseResponse } from "../utils";

export interface GenreResponse extends TMDBBaseResponse {
  genres: { id: number; name: string }[];
}
const Category = async () => {
  try {
    const res = await getMovieGenres<GenreResponse>();

    return <List genres={res.genres} />;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      notFound();
    }
  }
};

export default Category;
