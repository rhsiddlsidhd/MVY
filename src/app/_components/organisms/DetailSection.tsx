"use client";

import React, { useState } from "react";
import { MovieDetail } from "@/app/_types/movie";
import Text from "../atoms/Text";
import Img from "../atoms/Img";
import {
  HandThumbUp,
  PersonIcon,
  StarRateIcon,
  LanguageIcon,
} from "../atoms/Icon";

const DetailSection = ({ data }: { data: MovieDetail }) => {
  const [showAllCompanies, setShowAllCompanies] = useState(false);

  const {
    title,
    overview,
    poster_path,
    backdrop_path,
    release_date,
    vote_average,
    runtime,
    tagline,
    genres,
    production_companies,
    original_title,
    budget,
    production_countries,
    belongs_to_collection,
    vote_count,
    popularity,
    revenue,
    imdb_id,
    status,
    original_language,
    spoken_languages,
    homepage,
    id,
  } = data;

  // 수익률 계산
  const profitMargin =
    budget > 0 && revenue > 0 ? ((revenue - budget) / budget) * 100 : 0;

  // 언어 코드를 한국어로 변환
  const getLanguageName = (code: string) => {
    const languages: Record<string, string> = {
      en: "영어",
      ko: "한국어",
      ja: "일본어",
      zh: "중국어",
      fr: "프랑스어",
      de: "독일어",
      es: "스페인어",
      it: "이탈리아어",
      ru: "러시아어",
      pt: "포르투갈어",
      hi: "힌디어",
      ar: "아랍어",
    };
    return languages[code] || code.toUpperCase();
  };

  const handleFavorite = (movieId: number) => {
    const getItem = localStorage.getItem(`favorite_${movieId}`);
    if (!getItem) {
      localStorage.setItem(`favorite_${movieId}`, JSON.stringify(data));
      alert("즐겨찾기에 추가되었습니다.");
    } else {
      alert("이미 즐겨찾기에 추가된 영화입니다.");
    }
  };

  return (
    <div className="relative">
      {/* 배경 이미지 (선택사항) */}
      {backdrop_path && (
        <div className="absolute inset-0 -z-10">
          <Img
            src={backdrop_path}
            alt={`${title || original_title} 배경`}
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#272727] via-[#272727]/80 to-transparent" />
        </div>
      )}

      <div className="relative px-[5vw] py-[1rem] max-w-7xl mx-auto">
        {/* 제목 섹션 */}
        <div className="mb-8">
          <Text className="block w-full text-[#B7B508] font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
            {original_title}
          </Text>
          {title && title !== original_title && (
            <Text className="text-[#B7B508] font-bold text-2xl md:text-3xl lg:text-4xl mt-2">
              ( {title} )
            </Text>
          )}
          {tagline && (
            <Text className="block text-white/80 text-lg md:text-xl mt-4 italic">
              &ldquo;{tagline}&rdquo;
            </Text>
          )}
        </div>

        {/* 메인 컨텐츠 섹션 */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 포스터 이미지 */}
          <div className="flex-shrink-0">
            <div className="relative w-64 md:w-80 lg:w-96 aspect-[2/3] mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-2xl">
              <Img
                alt={`${title || original_title} 포스터`}
                src={poster_path}
                className="object-cover"
              />
            </div>
          </div>

          {/* 영화 정보 */}
          <div className="flex-1 space-y-6">
            {/* 기본 정보 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Text className="text-[#B7B508] font-bold text-lg">
                  개봉일{" "}
                </Text>
                <Text className="text-white/90">{release_date}</Text>
              </div>
              <div className="space-y-1">
                <Text className="text-[#B7B508] font-bold text-lg">평점</Text>
                <div className="flex items-center gap-2">
                  <StarRateIcon className="text-[#B7B508] w-5 h-5" />
                  <Text className="text-white/90">
                    {vote_average?.toFixed(1)} / 10
                  </Text>
                </div>
              </div>
              {runtime && (
                <div className="space-y-1">
                  <Text className="text-[#B7B508] font-bold text-lg">
                    러닝타임{" "}
                  </Text>
                  <Text className="text-white/90">{runtime}분</Text>
                </div>
              )}
              <div className="space-y-1">
                <Text className="text-[#B7B508] font-bold text-lg">원어 </Text>
                <Text className="text-white/90">
                  {getLanguageName(original_language)}
                </Text>
              </div>
            </div>

            {/* 줄거리 */}
            {overview && (
              <div className="space-y-3">
                <Text className="text-[#B7B508] font-bold text-xl">
                  줄거리{" "}
                </Text>
                <Text className="text-white/90 leading-relaxed text-base md:text-lg">
                  {overview}
                </Text>
              </div>
            )}

            {/* 장르 태그 */}
            {genres && genres.length > 0 && (
              <div className="space-y-3">
                <Text className="text-[#B7B508] font-bold text-lg">장르</Text>
                <div className="flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-3 py-1 bg-[#B7B508]/20 text-[#B7B508] rounded-full text-sm font-medium border border-[#B7B508]/30 hover:bg-[#B7B508]/30 transition-colors cursor-pointer"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 제작사 */}
            {production_companies && production_companies.length > 0 && (
              <div className="space-y-3">
                <Text className="text-[#B7B508] font-bold text-lg">제작사</Text>
                <div className="flex flex-wrap gap-3">
                  {(showAllCompanies
                    ? production_companies
                    : production_companies.slice(0, 4)
                  ).map((company) => (
                    <div
                      key={company.id}
                      className="flex items-center gap-3 bg-white/5 rounded-lg p-3 min-w-0"
                    >
                      {company.logo_path && (
                        <div className="relative w-12 h-8 flex-shrink-0 bg-white rounded p-1">
                          <Img
                            src={company.logo_path}
                            alt={`${company.name} 로고`}
                            className="object-contain w-full h-full"
                          />
                        </div>
                      )}
                      <Text className="text-white/90 text-sm truncate flex-1">
                        {company.name}
                      </Text>
                    </div>
                  ))}
                </div>
                {production_companies.length > 4 && (
                  <button
                    onClick={() => setShowAllCompanies(!showAllCompanies)}
                    className="text-[#B7B508] hover:text-[#B7B508]/80 transition-colors text-sm font-medium underline"
                  >
                    {showAllCompanies
                      ? "접기"
                      : `+${production_companies.length - 4}개 제작사 더 보기`}
                  </button>
                )}
              </div>
            )}

            {/* 시리즈/컬렉션 정보 */}
            {belongs_to_collection && (
              <div className="space-y-3">
                <Text className="text-[#B7B508] font-bold text-lg">시리즈</Text>
                <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3">
                  {belongs_to_collection.poster_path && (
                    <div className="relative w-12 h-18 rounded overflow-hidden flex-shrink-0">
                      <Img
                        src={belongs_to_collection.poster_path}
                        alt={`${belongs_to_collection.name} 컬렉션`}
                        className="object-cover"
                      />
                    </div>
                  )}
                  <Text className="text-white/90 flex-1">
                    {belongs_to_collection.name}
                  </Text>
                </div>
              </div>
            )}

            {/* 재정 정보 */}
            {(budget > 0 || revenue > 0) && (
              <div className="space-y-3">
                <Text className="text-[#B7B508] font-bold text-lg">
                  재정 정보
                </Text>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {budget > 0 && (
                    <div className="bg-white/5 rounded-lg p-3 space-y-1">
                      <Text className="text-[#B7B508] font-bold text-sm">
                        제작비{" "}
                      </Text>
                      <Text className="text-white/90">
                        ${budget.toLocaleString()}
                      </Text>
                    </div>
                  )}
                  {revenue > 0 && (
                    <div className="bg-white/5 rounded-lg p-3 space-y-1">
                      <Text className="text-[#B7B508] font-bold text-sm">
                        박스오피스{" "}
                      </Text>
                      <Text className="text-green-400">
                        ${revenue.toLocaleString()}
                      </Text>
                    </div>
                  )}
                  {budget > 0 && revenue > 0 && (
                    <div className="bg-white/5 rounded-lg p-3 space-y-1">
                      <Text className="text-[#B7B508] font-bold text-sm">
                        수익률{" "}
                      </Text>
                      <Text
                        className={`font-bold ${
                          profitMargin > 0 ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {profitMargin > 0 ? "+" : ""}
                        {profitMargin.toFixed(1)}%
                      </Text>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 통계 정보 */}
            <div className="space-y-3">
              <Text className="text-[#B7B508] font-bold text-lg">통계</Text>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <PersonIcon className="w-5 h-5 text-[#B7B508]" />
                    <Text className="text-[#B7B508] font-bold text-sm">
                      투표수
                    </Text>
                  </div>
                  <Text className="text-white font-bold text-sm">
                    {vote_count?.toLocaleString()}
                  </Text>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <HandThumbUp className="w-5 h-5 text-[#B7B508]" />
                    <Text className="text-[#B7B508] font-bold text-sm">
                      인기도
                    </Text>
                  </div>
                  <Text className="text-white font-bold text-sm">
                    {popularity?.toFixed(0)}
                  </Text>
                </div>
                {spoken_languages && spoken_languages.length > 0 && (
                  <div className="bg-white/5 rounded-lg p-3 md:col-span-2">
                    <div className="flex items-center gap-2 mb-2">
                      <LanguageIcon className="w-5 h-5 text-[#B7B508]" />
                      <Text className="text-[#B7B508] font-bold text-sm">
                        사용 언어
                      </Text>
                    </div>
                    <Text className="text-white/90 text-sm">
                      {spoken_languages
                        .slice(0, 3)
                        .map((lang) => lang.name)
                        .join(", ")}
                      {spoken_languages.length > 3 &&
                        ` +${spoken_languages.length - 3}`}
                    </Text>
                  </div>
                )}
              </div>
            </div>

            {/* 추가 정보 */}
            {(status || homepage || production_countries?.length > 0) && (
              <div className="bg-gradient-to-r from-[#B7B508]/10 to-transparent rounded-lg p-4 border-l-4 border-[#B7B508] space-y-3">
                <Text className="text-[#B7B508] font-bold text-lg">
                  추가 정보
                </Text>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {status && (
                    <div className="space-y-1">
                      <Text className="text-[#B7B508] font-bold text-sm">
                        상태{" "}
                      </Text>
                      <Text className="text-white/90 text-sm">{status}</Text>
                    </div>
                  )}
                  {production_countries && production_countries.length > 0 && (
                    <div className="space-y-1">
                      <Text className="text-[#B7B508] font-bold text-sm">
                        제작 국가{" "}
                      </Text>
                      <Text className="text-white/90 text-sm">
                        {production_countries.map((c) => c.name).join(", ")}
                      </Text>
                    </div>
                  )}
                  {homepage && (
                    <div className="space-y-1 md:col-span-2">
                      <Text className="text-[#B7B508] font-bold text-sm">
                        공식 웹사이트
                      </Text>
                      <a
                        href={homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors underline text-sm"
                      >
                        홈페이지 방문
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 액션 버튼 */}
            <div className="flex flex-wrap gap-3 pt-2">
              {imdb_id && (
                <a
                  href={`https://www.imdb.com/title/${imdb_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors"
                >
                  <span>🎬</span>
                  <Text className="font-medium">IMDb</Text>
                </a>
              )}
              <button
                onClick={() => handleFavorite(id)}
                className="flex items-center gap-2 px-4 py-2 bg-[#B7B508] hover:bg-[#B7B508]/80 text-black rounded-lg transition-colors font-medium"
              >
                <span>❤️</span>
                <Text>즐겨찾기</Text>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
