import React from "react";
import Text from "./Text";

const Badge = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`aspect-square flex items-center justify-center ${className}`}
    >
      <Text className="text-[2vw] px-2 py-0.5">{children}</Text>
    </div>
  );
};

export default Badge;
