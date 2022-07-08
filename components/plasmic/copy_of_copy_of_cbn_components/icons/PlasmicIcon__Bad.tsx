// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BadIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BadIcon(props: BadIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
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
          "M12.278 10.04a5.493 5.493 0 110-5.203l1.835-.688a7.439 7.439 0 100 6.579l-1.835-.688z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M14.877 7.439c0 .632-.512 1.144-1.144 1.144h-8.01a1.144 1.144 0 110-2.289h8.01c.632 0 1.144.513 1.144 1.145z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BadIcon;
/* prettier-ignore-end */
