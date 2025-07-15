export interface TMDBBaseResponse {
  success?: boolean;
  status_code?: number;
  status_message?: string;
}

const key = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

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

export const fetchMovies = async <T extends TMDBBaseResponse>({
  endpoint,
  language,
  page,
}: {
  endpoint: string;
  language: string;
  page: number;
}): Promise<T | null> => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${key}`,
    },
  };

  const url = `${baseUrl}${endpoint}?language=${language}&page=${page}&region=KR`;

  const res = await fetch(url, options);

  if (res.status === 404) {
    // const message = await res.json().then((error) => error.status_message);
    // throw new Error(message ?? `영화 정보를 찾을 수 없습니다`);
    return null;
  }
  if (!res.ok) {
    // throw new Error(`API 요청중 실패하였습니다.`);
    return null;
  }

  const data: T = await res.json();

  return data;
};
