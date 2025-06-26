"use client";
import { SvgIcon } from "@mui/material";
import Close from "@mui/icons-material/Close";

export interface IconButtonProps {
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  className?: string;
  backgroundColor?: string;
  size?: number;
}

function withIconStyle(
  Icon: typeof SvgIcon
): React.ComponentType<IconButtonProps> {
  const IconWithStyle = (props: IconButtonProps) => {
    const { onClick, className, ...rest } = props;
    const cursor = onClick ? "pointer" : "default";

    return (
      <div
        className={className}
        style={{ cursor: cursor, width: "fit-content" }}
        {...rest}
      >
        <Icon fontSize="inherit" color="inherit" onClick={onClick} />
      </div>
    );
  };

  return IconWithStyle;
}

export const CloseIcon = withIconStyle(Close);
