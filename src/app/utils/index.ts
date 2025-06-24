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
