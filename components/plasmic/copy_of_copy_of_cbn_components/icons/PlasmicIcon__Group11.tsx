// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group11Icon(props: Group11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 23"}
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
          "M14.111 1H2.966C1.88 1 1 1.85 1 2.9v16.8c0 1.048.88 1.899 1.966 1.899h11.145c1.086 0 1.966-.85 1.966-1.9V2.9c0-1.049-.88-1.899-1.966-1.899z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={
          "M14.111 1H2.966C1.88 1 1 1.85 1 2.9v16.8c0 1.048.88 1.899 1.966 1.899h11.145c1.086 0 1.966-.85 1.966-1.9V2.9c0-1.049-.88-1.899-1.966-1.899z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group11Icon;
/* prettier-ignore-end */
