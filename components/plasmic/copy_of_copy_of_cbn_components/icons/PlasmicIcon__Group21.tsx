// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group21Icon(props: Group21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 9"}
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
          "M4.302 5.443a1.152 1.152 0 00-.583-.427l-1.917-.641A1.176 1.176 0 011 3.26v-.328A1.17 1.17 0 012.172 1.76h1.172a1.17 1.17 0 011.172 1.172M1 6.458A1.17 1.17 0 002.172 7.63m.594-5.87V0"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Group21Icon;
/* prettier-ignore-end */
