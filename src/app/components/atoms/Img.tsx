import Image from "next/image";
import React from "react";

const Img = ({
  alt,
  src,
  className,
}: {
  alt: string;
  src: string;
  className?: string;
}) => {
  const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_IMAGE_URL;
  return (
    <Image
      className={`${className} object-cover`}
      alt={alt}
      src={`${baseUrl}/${src}`}
      fill
      sizes="100%"
      priority={true}
    />
  );
};

export default Img;
