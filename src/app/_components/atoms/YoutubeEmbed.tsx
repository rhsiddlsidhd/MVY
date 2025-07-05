"use client";

import React from "react";

export interface CardProps {
  videoKey: string;
  className?: string;
}

const YoutubeEmbed = ({ videoKey, className }: CardProps) => {
  return (
    <iframe
      className={`${className} relative rounded-4xl overflow-hidden `}
      src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoKey}`}
      title="YouTube video"
      allow="fullscreen; autoplay; encrypted-media ;"
    />
  );
};

export default YoutubeEmbed;
