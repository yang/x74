// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8evnTWPVwZ7FqJMVwJ5kQX
// Component: NTeLDgCmA5MpZC
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
import GeoBtn from "../../GeoBtn"; // plasmic-import: yX0kYWItvY_O_m/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_copy_of_cbn_components.module.css"; // plasmic-import: 8evnTWPVwZ7FqJMVwJ5kQX/projectcss
import sty from "./PlasmicBonusProp.module.css"; // plasmic-import: NTeLDgCmA5MpZC/css

import Line593StrokeIcon from "./icons/PlasmicIcon__Line593Stroke"; // plasmic-import: qx1xq773xV1uem/icon

export type PlasmicBonusProp__VariantMembers = {
  small: "small";
};

export type PlasmicBonusProp__VariantsArgs = {
  small?: SingleBooleanChoiceArg<"small">;
};

type VariantPropType = keyof PlasmicBonusProp__VariantsArgs;
export const PlasmicBonusProp__VariantProps = new Array<VariantPropType>(
  "small"
);

export type PlasmicBonusProp__ArgsType = {
  bonusLine2?: React.ReactNode;
  bonusLine1?: React.ReactNode;
  bonusLine3?: React.ReactNode;
  bonusLine4?: React.ReactNode;
  bonusName?: React.ReactNode;
};

type ArgPropType = keyof PlasmicBonusProp__ArgsType;
export const PlasmicBonusProp__ArgProps = new Array<ArgPropType>(
  "bonusLine2",
  "bonusLine1",
  "bonusLine3",
  "bonusLine4",
  "bonusName"
);

export type PlasmicBonusProp__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  geoBtn?: p.Flex<typeof GeoBtn>;
};

export interface DefaultBonusPropProps {
  bonusLine2?: React.ReactNode;
  bonusLine1?: React.ReactNode;
  bonusLine3?: React.ReactNode;
  bonusLine4?: React.ReactNode;
  bonusName?: React.ReactNode;
  small?: SingleBooleanChoiceArg<"small">;
  className?: string;
}

function PlasmicBonusProp__RenderFunc(props: {
  variants: PlasmicBonusProp__VariantsArgs;
  args: PlasmicBonusProp__ArgsType;
  overrides: PlasmicBonusProp__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = Object.assign(
    {},

    props.args
  );
  const $props = args;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root,
        { [sty.rootsmall]: hasVariant(variants, "small", "small") }
      )}
    >
      {(hasVariant(variants, "small", "small") ? true : true) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__jiRlf, {
            [sty.freeBoxsmall__jiRlfFAueN]: hasVariant(
              variants,
              "small",
              "small"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "no deposit bonus",
            value: args.bonusName,
            className: classNames(sty.slotTargetBonusName, {
              [sty.slotTargetBonusNamesmall]: hasVariant(
                variants,
                "small",
                "small"
              )
            })
          })}

          {(hasVariant(variants, "small", "small") ? true : false) ? (
            <Line593StrokeIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg, {
                [sty.svgsmall]: hasVariant(variants, "small", "small")
              })}
              role={"img"}
            />
          ) : null}
        </p.Stack>
      ) : null}
      {true ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___4Wtop, {
            [sty.freeBoxsmall___4WtopfAueN]: hasVariant(
              variants,
              "small",
              "small"
            )
          })}
        >
          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__w6X4C, {
                [sty.freeBoxsmall__w6X4CfAueN]: hasVariant(
                  variants,
                  "small",
                  "small"
                )
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: "400% up to",
                value: args.bonusLine1,
                className: classNames(sty.slotTargetBonusLine1, {
                  [sty.slotTargetBonusLine1small]: hasVariant(
                    variants,
                    "small",
                    "small"
                  )
                })
              })}

              {p.renderPlasmicSlot({
                defaultContents: "$4,000",
                value: args.bonusLine2,
                className: classNames(sty.slotTargetBonusLine2, {
                  [sty.slotTargetBonusLine2small]: hasVariant(
                    variants,
                    "small",
                    "small"
                  )
                })
              })}
            </p.Stack>
          ) : null}
          {p.renderPlasmicSlot({
            defaultContents: "+ 100 Free Spins",
            value: args.bonusLine3,
            className: classNames(sty.slotTargetBonusLine3, {
              [sty.slotTargetBonusLine3small]: hasVariant(
                variants,
                "small",
                "small"
              )
            })
          })}

          {(hasVariant(variants, "small", "small") ? false : true)
            ? p.renderPlasmicSlot({
                defaultContents: "on Cleopatra???s Gold",
                value: args.bonusLine4,
                className: classNames(sty.slotTargetBonusLine4, {
                  [sty.slotTargetBonusLine4small]: hasVariant(
                    variants,
                    "small",
                    "small"
                  )
                })
              })
            : null}
        </p.Stack>
      ) : null}
      {(hasVariant(variants, "small", "small") ? true : true) ? (
        <GeoBtn
          data-plasmic-name={"geoBtn"}
          data-plasmic-override={overrides.geoBtn}
          className={classNames("__wab_instance", sty.geoBtn, {
            [sty.geoBtnsmall]: hasVariant(variants, "small", "small")
          })}
          small={true}
        />
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg", "geoBtn"],
  svg: ["svg"],
  geoBtn: ["geoBtn"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
  geoBtn: typeof GeoBtn;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBonusProp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBonusProp__VariantsArgs;
    args?: PlasmicBonusProp__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBonusProp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBonusProp__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicBonusProp__ArgProps,
      internalVariantPropNames: PlasmicBonusProp__VariantProps
    });

    return PlasmicBonusProp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBonusProp";
  } else {
    func.displayName = `PlasmicBonusProp.${nodeName}`;
  }
  return func;
}

export const PlasmicBonusProp = Object.assign(
  // Top-level PlasmicBonusProp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    geoBtn: makeNodeComponent("geoBtn"),

    // Metadata about props expected for PlasmicBonusProp
    internalVariantProps: PlasmicBonusProp__VariantProps,
    internalArgProps: PlasmicBonusProp__ArgProps
  }
);

export default PlasmicBonusProp;
/* prettier-ignore-end */
