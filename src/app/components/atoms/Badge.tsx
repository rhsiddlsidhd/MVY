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
      className={`min-w-[24px] aspect-square px-2 flex items-center justify-center ${className}`}
    >
      <Text className="w-full inline-block m-[0.15rem]">{children}</Text>
    </div>
  );
};

export default Badge;
