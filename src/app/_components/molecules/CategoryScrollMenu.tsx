"use client";

import React, { useRef } from "react";
import Text from "../atoms/Text";
import { MergedGenre } from "../../_contexts/GenreContext";

const CategoryScrollMenu = ({
  data,
  selected,
  onClick,
}: {
  data: MergedGenre[];
  selected?: number;
  onClick?: (id: number) => void;
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const onMouseLeaveOrUp = () => {
    isDown.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const scroll = scrollRef.current;
    const x = e.pageX - scroll.offsetLeft;
    const walk = x - startX.current;
    scroll.scrollLeft = scrollLeft.current - walk;
  };
  return (
    <div
      ref={scrollRef}
      className="w-full overflow-x-scroll text-[2vw] flex flex-nowrap gap-[1rem]  scrollbar-hide cursor-grab active:cursor-grabbing"
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeaveOrUp}
      onMouseUp={onMouseLeaveOrUp}
      onMouseMove={onMouseMove}
    >
      {data.map(({ id, ko }) => (
        <div
          className="relative pb-[0.5rem]"
          key={id}
          onClick={() => onClick && onClick(id)}
        >
          <div
            className={`absolute w-full h-[1px] bottom-0 left-0 border-2 text-[#B7B508] z-[-10] transition-transform ${
              selected === id ? "scale-100" : "scale-0"
            } duration-300 ease-in origin-bottom-left`}
          />
          <Text className={`whitespace-nowrap text-white`}>{ko}</Text>
        </div>
      ))}
    </div>
  );
};

export default CategoryScrollMenu;
