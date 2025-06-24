interface TMDBBaseResponse {
  success?: boolean;
  status_code?: number;
  status_message?: string;
}
const getMoviesNowPlaying = async <
  T extends TMDBBaseResponse
>(): Promise<T> => {
  const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  };
  const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
  const page = 1;
  const language = "ko-KR";

  const res = await fetch(
    `${baseUrl}/movie/now_playing?language=${language}&page=${page}`,
    options
  );

  if (!res.ok) {
    throw new Error(`API 요청중 실패하였습니다.`);
  }

  const data: T = await res.json();

  if (data.success === false) {
    throw new Error(data.status_message);
  }
  console.log(data);
  return data;
};

export default getMoviesNowPlaying;
