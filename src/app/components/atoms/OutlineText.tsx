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
      className={`${className} text-transparent`}
      style={{ WebkitTextStroke: "0.5px #FFFFFF" }}
    >
      {children}
    </span>
  );
};

export default OutlineText;
