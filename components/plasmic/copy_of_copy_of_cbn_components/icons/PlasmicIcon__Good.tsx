// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GoodIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GoodIcon(props: GoodIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M15.653 9.613a5.493 5.493 0 11-2.601-4.506l1.245-1.513a7.439 7.439 0 103.29 5.698l-1.934.32z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M9.666 13.583l-3.572-3.448a.92.92 0 01-.282-.66.92.92 0 01.282-.662.957.957 0 01.68-.274.985.985 0 01.68.274l2.212 2.136 6.07-5.853a.957.957 0 01.681-.275.984.984 0 01.68.275.92.92 0 01.285.657.894.894 0 01-.285.656l-7.43 7.174z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GoodIcon;
/* prettier-ignore-end */
