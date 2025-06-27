"use client";
import { SvgIcon } from "@mui/material";
import Search from "@mui/icons-material/Search";
import Close from "@mui/icons-material/Close";
import Menu from "@mui/icons-material/Menu";

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

    return (
      <div className={className} style={{ cursor: "pointer" }} {...rest}>
        <Icon fontSize="inherit" color="inherit" onClick={onClick} />
      </div>
    );
  };

  return IconWithStyle;
}

export const CloseIcon = withIconStyle(Close);

export const SearchIcon = withIconStyle(Search);

export const HamburgerIcon = withIconStyle(Menu);
