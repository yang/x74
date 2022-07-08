// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
import * as p from "@plasmicapp/react-web";

export type ScreenValue =
  | "_1200"
  | "_1044"
  | "_992"
  | "_768"
  | "max"
  | "_496"
  | "_650";
export const ScreenContext = React.createContext<ScreenValue[] | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

/**
 *  @deprecated Plasmic now uses a custom hook for Screen variants, which is
 *  automatically included in your components. Please remove this provider
 *  from your code.
 */
export function ScreenVariantProvider(props: React.PropsWithChildren) {
  console.warn(
    "DEPRECATED: Plasmic now uses a custom hook for Screen variants, which is automatically included in your components. Please remove this provider from your code."
  );
  return props.children;
}

export const useScreenVariants = p.createUseScreenVariants(true, {
  _1200: "(max-width:1400px)",
  _1044: "(max-width:1199px)",
  _992: "(max-width:1043px)",
  _768: "(max-width:991px)",
  max: "(max-width:1920px)",
  _496: "(max-width:649px)",
  _650: "(max-width:767px)",
});

export default ScreenContext;
/* prettier-ignore-end */
