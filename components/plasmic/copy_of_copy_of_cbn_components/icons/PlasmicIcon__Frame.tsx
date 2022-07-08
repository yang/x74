// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FrameIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FrameIcon(props: FrameIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 22"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17 4.59L12.41 0H3v19h14V4.59zm-5-2.17l2.59 2.59H12v-2.6.01zm3 14.59H5V2h5v5h5v10.01z"
        }
        fill={"currentColor"}
      ></path>

      <path d={"M0 4v18h13v-2H2V4H0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default FrameIcon;
/* prettier-ignore-end */
