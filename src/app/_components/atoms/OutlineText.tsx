import React, { ReactNode } from "react";

interface OutlineTextProps {
  children: ReactNode;
  className?: string;
  strokeColor?: string;
  strokeWidth?: string | number;
  style?: React.CSSProperties;
}

const OutlineText = ({
  children,
  className = "text-[4vw]",
  strokeColor = "#b7b508",
  strokeWidth = "1px",
  style = {},
}: OutlineTextProps) => {
  return (
    <span
      className={`${className} text-transparent break-keep`}
      style={{
        WebkitTextStroke: `${strokeWidth} ${strokeColor}`,
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </span>
  );
};

export default OutlineText;
