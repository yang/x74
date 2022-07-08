// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SubtractIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SubtractIcon(props: SubtractIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 394 134"}
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
          "M0 3.829h2V2h2.02V0H0v3.829zM10.051 0h8.041v2h-8.04V0zm14.072 1V0h8.04v2h-8.04V1zm14.071 0V0h8.04v2h-8.04V1zm14.071 0V0h8.041v2h-8.04V1zm14.072 0V0h8.04v2h-8.04V1zm14.071 0V0h8.041v2h-8.04V1zM94.48 1V0h8.04v2h-8.04V1zm14.071 0V0h8.041v2h-8.041V1zm14.072 0V0h8.04v2h-8.04V1zm14.071 0V0h8.041v2h-8.041V1zm14.071 0V0h8.041v2h-8.041V1zm14.072 0V0h8.041v2h-8.041V1zm14.071 0V0h8.041v2h-8.041V1zm14.072 0V0h8.04v2h-8.04V1zm14.071 0V0h8.041v2h-8.041V1zm14.071 0V0h8.041v2h-8.041V1zm14.072 0V0h8.041v2h-8.041V1zm14.071 0V0h8.041v2h-8.041V1zm14.072 0V0h8.041v2h-8.041V1zm14.071 0V0h8.041v2h-8.041V1zm14.072 0V0h8.04v2h-8.04V1zm14.071 0V0h8.041v2h-8.041V1zm14.071 0V0h8.041v2h-8.041V1zm14.072 0V0h8.041v2h-8.041V1zm14.071 0V0h8.041v2h-8.041V1zm14.072 0V0h8.041v2h-8.041V1zm14.071 0V0h8.041v2h-8.041V1zm14.072 0V0H394v3.829h-2V2h-2.02V1zM393 9.571h1v7.658h-2V9.57h1zm0 13.4h1v7.658h-2V22.97h1zm0 80.4h1v7.658h-2v-7.658h1zm0 13.4h1v7.658h-2v-7.658h1zm0 13.4h1V134h-4.021v-2H392v-1.829h1zM383.949 133v1h-8.041v-2h8.041v1zm-14.072 0v1h-8.04v-2h8.04v1zm-14.071 0v1h-8.041v-2h8.041v1zm-14.071 0v1h-8.041v-2h8.041v1zm-14.072 0v1h-8.041v-2h8.041v1zm-14.071 0v1h-8.041v-2h8.041v1zm-14.072 0v1h-8.04v-2h8.04v1zm-14.071 0v1h-8.041v-2h8.041v1zm-14.071 0v1h-8.041v-2h8.041v1zm-14.072 0v1h-8.041v-2h8.041v1zm-14.071 0v1h-8.041v-2h8.041v1zm-14.072 0v1h-8.041v-2h8.041v1zm-14.071 0v1h-8.041v-2h8.041v1zm-14.072 0v1h-8.04v-2h8.04v1zm-14.071 0v1h-8.041v-2h8.041v1zm-14.071 0v1h-8.041v-2h8.041v1zm-14.072 0v1h-8.041v-2h8.041v1zm-14.071 0v1h-8.041v-2h8.041v1zm-14.072 0v1h-8.041v-2h8.041v1zm-14.071 0v1h-8.041v-2h8.041v1zm-14.072 0v1h-8.04v-2h8.04v1zm-14.071 0v1h-8.04v-2h8.04v1zm-14.071 0v1h-8.041v-2h8.04v1zm-14.072 0v1h-8.04v-2h8.04v1zm-14.071 0v1h-8.041v-2h8.04v1zm-14.072 0v1h-8.04v-2h8.04v1zm-14.071 0v1H10.05v-2h8.04v1zM4.02 133v1H0v-3.829h2V132h2.02v1zM1 124.429H0v-7.658h2v7.658H1zm0-13.4H0v-7.658h2v7.658H1zm0-13.4H0V89.97h2v7.658H1zm0-13.4H0V76.57h2v7.658H1zm0-13.4H0V63.17h2v7.658H1zm0-13.4H0V49.77h2v7.658H1zm0-13.4H0V36.37h2v7.658H1zm0-13.4H0V22.97h2v7.658H1zm0-13.4H0V9.57h2v7.658H1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SubtractIcon;
/* prettier-ignore-end */
