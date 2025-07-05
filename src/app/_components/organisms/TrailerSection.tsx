import React from "react";
import { TrailerKeysResponse } from "@/app/upcoming/page";
import YoutubeEmbed from "../atoms/YoutubeEmbed";

const TrailerSection = ({ data }: { data: TrailerKeysResponse }) => {
  return (
    <div className="h-[50vh] min-h-fit">
      <YoutubeEmbed
        className="inline-block w-full h-full min-h-[750px]"
        videoKey={data.key}
      />
    </div>
  );
};

export default TrailerSection;
