// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group4Icon(props: Group4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 10"}
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
        d={
          "M8.28 0v9.47H7.14a1.1 1.1 0 01-.43-.08c-.11-.05-.23-.15-.34-.28L1.9 3.46c.02.17.03.33.04.49.01.16 0 .31 0 .45v5.08H0V.01h1.16c.1 0 .18 0 .24.01s.12.02.18.05c.05.02.1.06.15.1.05.04.1.1.16.18l4.5 5.69c-.02-.18-.04-.36-.05-.53 0-.17-.01-.33-.01-.48V.02h1.94L8.28 0zm4.04 1.69V3.9h2.98v1.62h-2.98v2.26h3.89v1.69h-6.1V0h6.1v1.69h-3.89zM30.46 0l-2.92 9.47h-1.99L23.77 3.6c-.03-.09-.07-.19-.1-.3-.03-.11-.06-.23-.09-.35-.03.12-.06.24-.09.35-.03.11-.06.21-.1.3l-1.81 5.87h-1.99L16.66 0h1.85c.19 0 .35.04.48.13s.21.2.25.34l1.3 4.94a19.96 19.96 0 01.24 1.09c.08-.41.17-.77.29-1.08L22.6.48c.04-.12.12-.23.25-.33s.28-.15.46-.15h.65c.19 0 .34.04.46.13s.21.2.27.34l1.52 4.94c.11.3.21.65.29 1.03.03-.19.07-.38.11-.55.04-.17.07-.33.11-.48l1.3-4.94a.6.6 0 01.25-.33c.13-.09.29-.14.47-.14h1.73-.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
