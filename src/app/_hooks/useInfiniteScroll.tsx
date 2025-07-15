"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { Movie, MovieListResponse } from "../_types/movie";

interface UseInfiniteScrollProps {
  ref: React.RefObject<HTMLHRElement | null>;
  totalPage: number;
  lang: string;
  fetchFn: (params: {
    page: number;
    language: string;
  }) => Promise<MovieListResponse | null>;
  onData: React.Dispatch<React.SetStateAction<Movie[]>>;
}

const useInfiniteScroll = ({
  ref,
  totalPage,
  lang,
  fetchFn,
  onData,
}: UseInfiniteScrollProps) => {
  /**
   *
   * props: 감지할 요소의 ref, 추가 데이터를 불러오는 함수,  총 페이지 수
   */
  const loadingRef = useRef<boolean>(false);
  const page = useRef(1);
  const prevLang = useRef<string>(lang);

  const fetchData = useCallback(
    async (pageNum: number, language: string) => {
      if (loadingRef.current) return;
      loadingRef.current = true;
      try {
        const res = await fetchFn({ page: pageNum, language });
        if (res && res.results) {
          onData((prev) => [...prev, ...res.results]);
        }
      } catch (e) {
        if (e instanceof Error) {
          console.error(e.message);
        }
      } finally {
        loadingRef.current = false;
      }
    },
    [fetchFn, onData]
  );

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (
          e.isIntersecting &&
          page.current < totalPage &&
          !loadingRef.current
        ) {
          page.current += 1;
          fetchData(page.current, lang);
        }
      });
    });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [totalPage, lang, ref, fetchData]);

  useEffect(() => {
    if (page.current === 1 && prevLang.current === lang) return;
    onData([]);
    prevLang.current = lang;
    page.current = 1;
    fetchData(1, lang);
  }, [lang, fetchData, onData]);

  return null;
};

export default useInfiniteScroll;
