// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame1593IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame1593Icon(props: Frame1593IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 28"}
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
          "M27.1 27.001V5.911c0-2.579-2.513-4.687-5.587-4.687H6.587C3.513 1.224 1 3.332 1 5.912v21.09"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M23 8c0-1.654-.98-3-2.185-3H7.185C5.981 5 5 6.346 5 8m0 15c0 1.654.98 3 2.185 3h13.63C22.019 26 23 24.654 23 23M33.248 5.3c1.193 0 2.16-.963 2.16-2.15 0-1.188-.967-2.15-2.16-2.15-1.192 0-2.16.962-2.16 2.15 0 1.187.968 2.15 2.16 2.15zm-2.639 11.48h2.634V5.3m-5.676 9.092h2.858v4.738h-2.858"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6.585 13.355H9.18L7.35 17.66m5.513-4.305h2.595l-1.83 4.305m5.512-4.305h2.596l-1.83 4.305"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M24.253 10.672H4.068v9.565h20.185v-9.565z"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M10.803 16.604v3.544m6.725-3.544v3.544"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Frame1593Icon;
/* prettier-ignore-end */
