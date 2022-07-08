// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Good3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Good3Icon(props: Good3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M13.678 8.4a4.8 4.8 0 11-2.273-3.937l1.087-1.323a6.5 6.5 0 102.874 4.978l-1.688.281z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M8.447 11.869L5.325 8.855a.805.805 0 01-.246-.577c0-.216.088-.424.246-.577a.836.836 0 01.595-.24.86.86 0 01.594.24l1.933 1.866 5.304-5.114a.838.838 0 01.594-.24.86.86 0 01.595.24.806.806 0 01.249.573.782.782 0 01-.25.574l-6.491 6.27z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Good3Icon;
/* prettier-ignore-end */
