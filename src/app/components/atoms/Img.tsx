import Image from "next/image";
import React from "react";

const Img = ({ alt, src }: { alt: string; src: string }) => {
  return (
    <Image
      className="object-cover"
      alt={alt}
      src={src}
      fill
      placeholder="blur"
    />
  );
};

export default Img;
