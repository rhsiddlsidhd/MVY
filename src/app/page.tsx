import getMoviesNowPlaying from "./services/movie/getMovieNowPlaying";

export default async function Home() {
  const data = await getMoviesNowPlaying();
  console.log(data);
  return <div></div>;
}
