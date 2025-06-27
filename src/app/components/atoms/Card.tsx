"use client";
import { MovieList } from "@/app/upcoming/page";
import React from "react";
import Img from "./Img";

const Card = ({ className, data }: { data: MovieList; className?: string }) => {
  const { backdrop_path } = data;
  console.log(backdrop_path);
  return (
    <div className={`${className} relative `}>
      <Img alt="이미지" src={backdrop_path} />
    </div>
  );
};

export default Card;
