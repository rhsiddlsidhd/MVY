import { notFound } from "next/navigation";
import MovieHome from "./movieHome/page";

import { getMovieDetail } from "./services/movie";

export default async function Home() {
  try {
    const data = await getMovieDetail(127);

    return <MovieHome data={data}></MovieHome>;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      notFound();
    }
  }
}
