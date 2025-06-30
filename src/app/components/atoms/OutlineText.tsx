import React, { ReactNode } from "react";

const OutlineText = ({
  children,
  className = "text-[4vw]",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={`${className} text-transparent break-keep`}
      style={{
        WebkitTextStroke: "1px #B7B508",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}
    >
      {children}
    </span>
  );
};

export default OutlineText;
