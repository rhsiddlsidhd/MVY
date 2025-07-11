"use client";
import Image from "next/image";
import React from "react";

const Img = ({
  alt,
  src,
  className,
}: {
  alt: string;
  src: string | null;
  className?: string;
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_IMAGE_URL;
  const finalSrc = src ? `${baseUrl}/${src}` : "/no-image.svg";
  return (
    <Image
      className={`${className} `}
      alt={alt}
      src={finalSrc}
      fill={true}
      sizes="100%"
      priority={true}
    />
  );
};

export default Img;
