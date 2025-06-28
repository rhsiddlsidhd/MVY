import Image from "next/image";
import React from "react";

const Img = ({ alt, src }: { alt: string; src: string }) => {
  const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_IMAGE_URL;
  return (
    <Image
      className="object-cover"
      alt={alt}
      src={`${baseUrl}/${src}`}
      fill
      priority={true}
      // placeholder="blur"
    />
  );
};

export default Img;
