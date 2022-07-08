// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8evnTWPVwZ7FqJMVwJ5kQX
// Component: 2_hTV3Sfsq3o8U
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import BadgePlace from "../../BadgePlace"; // plasmic-import: n0PXMRjCTSzSo/component
import CasinoBadge from "../../CasinoBadge"; // plasmic-import: yyGss2xztyl36/component

import { useScreenVariants as useScreenVariantsnwCq1TNqK1ZjKa } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: NWCq1TNqK1ZjKa/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_copy_of_cbn_components.module.css"; // plasmic-import: 8evnTWPVwZ7FqJMVwJ5kQX/projectcss
import sty from "./PlasmicBrandBox.module.css"; // plasmic-import: 2_hTV3Sfsq3o8U/css

export type PlasmicBrandBox__VariantMembers = {
  badge: "badge";
  place: "place";
};

export type PlasmicBrandBox__VariantsArgs = {
  badge?: SingleBooleanChoiceArg<"badge">;
  place?: SingleBooleanChoiceArg<"place">;
};

type VariantPropType = keyof PlasmicBrandBox__VariantsArgs;
export const PlasmicBrandBox__VariantProps = new Array<VariantPropType>(
  "badge",
  "place"
);

export type PlasmicBrandBox__ArgsType = {
  slot22?: React.ReactNode;
  brandImage?: React.ReactNode;
};

type ArgPropType = keyof PlasmicBrandBox__ArgsType;
export const PlasmicBrandBox__ArgProps = new Array<ArgPropType>(
  "slot22",
  "brandImage"
);

export type PlasmicBrandBox__OverridesType = {
  root?: p.Flex<"div">;
  logoBrandName?: p.Flex<"div">;
  logoPlacerX58?: p.Flex<"div">;
  badgePlace?: p.Flex<typeof BadgePlace>;
  casinoBadge?: p.Flex<typeof CasinoBadge>;
};

export interface DefaultBrandBoxProps {
  slot22?: React.ReactNode;
  brandImage?: React.ReactNode;
  badge?: SingleBooleanChoiceArg<"badge">;
  place?: SingleBooleanChoiceArg<"place">;
  className?: string;
}

function PlasmicBrandBox__RenderFunc(props: {
  variants: PlasmicBrandBox__VariantsArgs;
  args: PlasmicBrandBox__ArgsType;
  overrides: PlasmicBrandBox__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = Object.assign(
    {},

    props.args
  );
  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnwCq1TNqK1ZjKa()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"logoBrandName"}
        data-plasmic-override={overrides.logoBrandName}
        hasGap={true}
        className={classNames(projectcss.all, sty.logoBrandName)}
      >
        <div
          data-plasmic-name={"logoPlacerX58"}
          data-plasmic-override={overrides.logoPlacerX58}
          className={classNames(projectcss.all, sty.logoPlacerX58)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__yCdTk)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={
                  "https://www.casinoshub.com/sites/default/files/ozwin-casino-logo.png" as const
                }
              />
            ),

            value: args.brandImage,
            className: classNames(sty.slotTargetBrandImage)
          })}
        </div>

        {p.renderPlasmicSlot({
          defaultContents: "Ozwin Casino - Review",
          value: args.slot22,
          className: classNames(sty.slotTargetSlot22)
        })}
      </p.Stack>

      {(
        hasVariant(variants, "badge", "badge") &&
        hasVariant(variants, "place", "place")
          ? true
          : hasVariant(variants, "place", "place")
          ? true
          : true
      ) ? (
        <BadgePlace
          data-plasmic-name={"badgePlace"}
          data-plasmic-override={overrides.badgePlace}
          className={classNames("__wab_instance", sty.badgePlace, {
            [sty.badgePlaceplace]: hasVariant(variants, "place", "place"),
            [sty.badgePlaceplace_badge]:
              hasVariant(variants, "badge", "badge") &&
              hasVariant(variants, "place", "place")
          })}
        />
      ) : null}
      {(
        hasVariant(variants, "badge", "badge") &&
        hasVariant(variants, "place", "place")
          ? true
          : hasVariant(variants, "place", "place")
          ? true
          : hasVariant(variants, "badge", "badge")
          ? true
          : hasVariant(globalVariants, "screen", "_1044")
          ? true
          : hasVariant(globalVariants, "screen", "max")
          ? true
          : true
      ) ? (
        <CasinoBadge
          data-plasmic-name={"casinoBadge"}
          data-plasmic-override={overrides.casinoBadge}
          className={classNames("__wab_instance", sty.casinoBadge, {
            [sty.casinoBadgebadge]: hasVariant(variants, "badge", "badge"),
            [sty.casinoBadgeplace]: hasVariant(variants, "place", "place"),
            [sty.casinoBadgeplace_badge]:
              hasVariant(variants, "badge", "badge") &&
              hasVariant(variants, "place", "place")
          })}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "logoBrandName", "logoPlacerX58", "badgePlace", "casinoBadge"],
  logoBrandName: ["logoBrandName", "logoPlacerX58"],
  logoPlacerX58: ["logoPlacerX58"],
  badgePlace: ["badgePlace"],
  casinoBadge: ["casinoBadge"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  logoBrandName: "div";
  logoPlacerX58: "div";
  badgePlace: typeof BadgePlace;
  casinoBadge: typeof CasinoBadge;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBrandBox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBrandBox__VariantsArgs;
    args?: PlasmicBrandBox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBrandBox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBrandBox__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicBrandBox__ArgProps,
      internalVariantPropNames: PlasmicBrandBox__VariantProps
    });

    return PlasmicBrandBox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBrandBox";
  } else {
    func.displayName = `PlasmicBrandBox.${nodeName}`;
  }
  return func;
}

export const PlasmicBrandBox = Object.assign(
  // Top-level PlasmicBrandBox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logoBrandName: makeNodeComponent("logoBrandName"),
    logoPlacerX58: makeNodeComponent("logoPlacerX58"),
    badgePlace: makeNodeComponent("badgePlace"),
    casinoBadge: makeNodeComponent("casinoBadge"),

    // Metadata about props expected for PlasmicBrandBox
    internalVariantProps: PlasmicBrandBox__VariantProps,
    internalArgProps: PlasmicBrandBox__ArgProps
  }
);

export default PlasmicBrandBox;
/* prettier-ignore-end */
