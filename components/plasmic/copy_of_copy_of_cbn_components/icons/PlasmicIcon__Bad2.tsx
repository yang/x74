// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Bad2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Bad2Icon(props: Bad2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
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
          "M10.729 8.773a4.8 4.8 0 110-4.546l1.603-.601a6.5 6.5 0 100 5.749l-1.603-.602z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M13 6.5a1 1 0 01-1 1H5a1 1 0 110-2h7a1 1 0 011 1z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Bad2Icon;
/* prettier-ignore-end */
