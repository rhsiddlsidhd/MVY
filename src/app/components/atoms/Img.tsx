import Image from "next/image";
import React from "react";

const Img = ({ alt, src }: { alt: string; src: string }) => {
  const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_IMAGE_URL;
  return (
    <Image
      className="object-cover rounded-4xl"
      alt={alt}
      src={`${baseUrl}/${src}`}
      fill
      // placeholder="blur"
    />
  );
};

export default Img;
