"use client";
import React, { useRef, useState } from "react";
import OutlineText from "../atoms/OutlineText";
import Link from "next/link";
import Text from "../atoms/Text";
import { GenreResponse } from "@/app/category/page";

const CategorySection = ({ data }: { data: GenreResponse }) => {
  const [selected, setSelected] = useState<number>(28);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };

  const onMouseLeaveOrUp = () => {
    isDown.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section>
      <div
        className={`relative h-[25vh] min-h-fit flex items-center justify-center gap-[1rem] `}
      >
        {data.genres.map(({ id, name }) => (
          <Link
            key={id}
            href={`/category/${id}`}
            className={`absolute ${
              selected === id
                ? "opcaity-100 cursor-pointer"
                : "opacity-0 pointer-events-none"
            } transform-opacity duration-300 ease-in `}
          >
            <OutlineText className="text-[10vw] ">{name}</OutlineText>
          </Link>
        ))}
      </div>

      <div
        ref={scrollRef}
        className="w-full overflow-x-scroll text-[2vw] flex flex-nowrap gap-[1rem]  scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeaveOrUp}
        onMouseUp={onMouseLeaveOrUp}
        onMouseMove={onMouseMove}
      >
        {data.genres.map(({ id, name }) => (
          <div
            className="relative pb-[0.5rem]"
            key={id}
            onClick={() => setSelected(id)}
          >
            <div
              className={`absolute w-full h-[1px] bottom-0 left-0 border-2 text-[#B7B508] z-[-10] transition-transform ${
                selected === id ? "scale-100" : "scale-0"
              } duration-300 ease-in origin-bottom-left`}
            />
            <Text className={`whitespace-nowrap text-white`}>{name}</Text>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
