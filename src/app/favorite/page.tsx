"use client";

import { useFavoriteMovies } from "../_hooks/useFavoriteMovies";
import { StarRateIcon } from "../_components/atoms/Icon";
import Text from "../_components/atoms/Text";
import Img from "../_components/atoms/Img";

const Favorite = () => {
  const { favorites, removeFavorite, allRevmoeFavorite } = useFavoriteMovies();

  console.log(favorites);
  return (
    <div className="relative min-sm:p-[5vw] pt-[2rem] flex flex-col items-center min-h-[60vh]">
      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-1">
          <StarRateIcon className="mb-4 opacity-60 text-[80px] text-[#B7B508]" />
          <p className="text-lg text-gray-400 mb-2">
            아직 즐겨찾기한 영화가 없습니다.
          </p>
          <p className="text-sm text-gray-500">
            마음에 드는 영화를 추가해보세요!
          </p>
        </div>
      ) : (
        <div className="w-full max-w-5xl min-w-fit">
          <div className="flex items-center justify-between  gap-4 p-2 border-b-2 border-b-[#39390a]/30">
            <Text className="text-[#B7B508] font-bold">즐겨찾기</Text>
            <button
              className="ml-2 px-3 py-1 rounded-lg bg-[#B7B508] text-black text-xs font-bold shadow hover:bg-[#b7b508cc] transition"
              onClick={() => allRevmoeFavorite()}
              title="즐겨찾기 해제"
            >
              전체 삭제
            </button>
          </div>
          <ul className="divide-y divide-[#39390a]/30">
            {favorites.map((movie, i) => (
              <li
                key={i}
                className="flex items-center gap-4 p-2 hover:bg-[#232323]/60 transition rounded-xl group"
              >
                <div className="relative w-20 h-28 rounded-lg overflow-hidden flex-shrink-0 shadow-md bg-black/30">
                  <Img src={movie.poster_path} alt="poster-path" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-white truncate text-base group-hover:text-[#B7B508] transition">
                    {movie.title}
                  </div>
                  <div className="text-xs text-gray-400 truncate mt-1">
                    {movie.release_date}
                  </div>
                </div>
                <button
                  className="ml-2 px-3 py-1 rounded-lg bg-[#B7B508] text-black text-xs font-bold shadow hover:bg-[#b7b508cc] transition"
                  onClick={() => removeFavorite(movie.id)}
                  title="즐겨찾기 해제"
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Favorite;
