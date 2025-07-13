import UpcomingSection from "../_components/organisms/UpcomingSection";
import { getUpcomingMovies } from "../_services/movie";
import { MovieListResponse } from "../_types/movie";

const Upcoming = async () => {
  // UPCOMING PAGE
  // UPCOMING API 호출 후 data에 따른 UI 구성
  // 클릭시 Detail 페이지로 이동

  const res = await getUpcomingMovies<MovieListResponse>();
  console.log(res);
  if (!res) return <div>로딩중</div>;
  return <UpcomingSection data={res.results} />;
};

export default Upcoming;
