// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group10Icon(props: Group10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 6"}
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
          "M1 5.75C1 3.303 5.135 1.29 10.473 1m12.133 4.75c0-2.446-4.135-4.46-9.473-4.75"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group10Icon;
/* prettier-ignore-end */
