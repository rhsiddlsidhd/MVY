"use client";
import {
  StarIcon,
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { ComponentType, SVGProps } from "react";

const withIconStyle = <P extends SVGProps<SVGSVGElement>>(
  IconComponent: ComponentType<P>
) => {
  const WrappedIcon = (props: P) => {
    return (
      <IconComponent
        className={`${props.className}`}
        onClick={props.onClick}
        {...props}
      />
    );
  };

  return WrappedIcon;
};

export const CloseIcon = withIconStyle(XMarkIcon);
export const SearchIcon = withIconStyle(MagnifyingGlassIcon);
export const HamburgerIcon = withIconStyle(Bars3Icon);
export const StarRateIcon = withIconStyle(StarIcon);
