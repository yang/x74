// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector9Icon(props: Vector9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 16"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M25.576 1.01c4.9 1.254 8.19 3.602 8.19 6.288 0 4.009-7.336 7.258-16.385 7.258C8.33 14.556 1 11.307 1 7.298 1 4.602 4.31 2.25 9.23 1"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Vector9Icon;
/* prettier-ignore-end */
