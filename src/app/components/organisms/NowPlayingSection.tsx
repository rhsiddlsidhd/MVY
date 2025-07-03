"use client";
import React from "react";
import Card from "../atoms/Card";

import { TrailerKeysResponse } from "@/app/upcoming/page";

const NowPlayingSection = ({ data }: { data: TrailerKeysResponse }) => {
  return (
    <div className="h-[50vh] min-h-fit">
      <Card
        className="inline-block w-full h-full min-h-[750px]"
        videoKey={data.key}
      />
    </div>
  );
};

export default NowPlayingSection;
