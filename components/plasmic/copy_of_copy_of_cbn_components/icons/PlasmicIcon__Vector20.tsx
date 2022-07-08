// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector20Icon(props: Vector20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
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
          "M9.333 19.693A9.373 9.373 0 011 10.375 9.376 9.376 0 0110.375 1a9.373 9.373 0 019.318 8.333"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Vector20Icon;
/* prettier-ignore-end */
