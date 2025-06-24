export interface TMDBBaseResponse {
  success?: boolean;
  status_code?: number;
  status_message?: string;
}

const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
const language = "ko-KR";
const page = 1;

export const fetcher = async (resource: RequestInfo, init?: RequestInit) => {
  const res = await fetch(resource, init);
  if (!res.ok) {
    const errorRes = await res.json();
    throw new Error(
      errorRes.status_message ?? `API 요청 중에 에러가 발생하였습니다.`
    );
  }

  return res.json();
};

export const fetchMovies = async <T extends TMDBBaseResponse>(
  endpoint: string
): Promise<T> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  };

  const url = `${baseUrl}${endpoint}?language=${language}&page=${page}`;

  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error(`API 요청중 실패하였습니다.`);
  }

  const data: T = await res.json();

  if (data.success === false) {
    throw new Error(data.status_message);
  }

  return data;
};
