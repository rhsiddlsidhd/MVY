import { notFound } from "next/navigation";

import { getMovieDetail } from "./services/movie";

export default async function Home() {
  try {
    const data = await getMovieDetail(127);

    return <div>HOMEPAGE</div>;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      notFound();
    }
  }
}
