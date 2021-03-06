// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8evnTWPVwZ7FqJMVwJ5kQX
// Component: n0PXMRjCTSzSo
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_copy_of_copy_of_cbn_components.module.css"; // plasmic-import: 8evnTWPVwZ7FqJMVwJ5kQX/projectcss
import sty from "./PlasmicBadgePlace.module.css"; // plasmic-import: n0PXMRjCTSzSo/css

export type PlasmicBadgePlace__VariantMembers = {
  _2: "_2";
  _3: "_3";
};

export type PlasmicBadgePlace__VariantsArgs = {
  _2?: SingleBooleanChoiceArg<"_2">;
  _3?: SingleBooleanChoiceArg<"_3">;
};

type VariantPropType = keyof PlasmicBadgePlace__VariantsArgs;
export const PlasmicBadgePlace__VariantProps = new Array<VariantPropType>(
  "_2",
  "_3"
);

export type PlasmicBadgePlace__ArgsType = {};
type ArgPropType = keyof PlasmicBadgePlace__ArgsType;
export const PlasmicBadgePlace__ArgProps = new Array<ArgPropType>();

export type PlasmicBadgePlace__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
  property12nd?: p.Flex<"div">;
  _1?: p.Flex<"div">;
  property13rd?: p.Flex<"div">;
  _2?: p.Flex<"div">;
};

export interface DefaultBadgePlaceProps {
  _2?: SingleBooleanChoiceArg<"_2">;
  _3?: SingleBooleanChoiceArg<"_3">;
  className?: string;
}

function PlasmicBadgePlace__RenderFunc(props: {
  variants: PlasmicBadgePlace__VariantsArgs;
  args: PlasmicBadgePlace__ArgsType;
  overrides: PlasmicBadgePlace__OverridesType;

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
      {(
        hasVariant(variants, "_3", "_3")
          ? true
          : hasVariant(variants, "_2", "_2")
          ? true
          : true
      ) ? (
        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img__vAll9, "" as const, {
            [sty.img_2__vAll9UtCd0]: hasVariant(variants, "_2", "_2"),
            [sty.img_3__vAll9VHupk]: hasVariant(variants, "_3", "_3")
          })}
          displayHeight={"38.538px" as const}
          displayMaxHeight={"none" as const}
          displayMaxWidth={"100%" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"30.478px" as const}
          loading={"lazy" as const}
          src={{
            src: "/plasmic/copy_of_copy_of_cbn_components/images/badgeYellow.svg",
            fullWidth: 30.478,
            fullHeight: 38.538,
            aspectRatio: 0.794872
          }}
        />
      ) : null}
      {(
        hasVariant(variants, "_3", "_3")
          ? true
          : hasVariant(variants, "_2", "_2")
          ? true
          : true
      ) ? (
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text,
            {
              [sty.text_2]: hasVariant(variants, "_2", "_2"),
              [sty.text_3]: hasVariant(variants, "_3", "_3")
            }
          )}
        >
          {"1"}
        </div>
      ) : null}
      {(
        hasVariant(variants, "_3", "_3")
          ? true
          : hasVariant(variants, "_2", "_2")
          ? true
          : false
      ) ? (
        <div
          data-plasmic-name={"property12nd"}
          data-plasmic-override={overrides.property12nd}
          className={classNames(projectcss.all, sty.property12nd, {
            [sty.property12nd_2]: hasVariant(variants, "_2", "_2"),
            [sty.property12nd_3]: hasVariant(variants, "_3", "_3")
          })}
        >
          {(hasVariant(variants, "_2", "_2") ? true : true) ? (
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__yfd5Y, {
                [sty.img_2__yfd5YUtCd0]: hasVariant(variants, "_2", "_2")
              })}
              displayHeight={"38.538px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"30.478px" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/copy_of_copy_of_cbn_components/images/badgeYellow2.svg",
                fullWidth: 30.478,
                fullHeight: 38.538,
                aspectRatio: 0.794872
              }}
            />
          ) : null}

          <div
            data-plasmic-name={"_1"}
            data-plasmic-override={overrides._1}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty._1
            )}
          >
            {"2"}
          </div>
        </div>
      ) : null}
      {(hasVariant(variants, "_3", "_3") ? true : false) ? (
        <div
          data-plasmic-name={"property13rd"}
          data-plasmic-override={overrides.property13rd}
          className={classNames(projectcss.all, sty.property13rd, {
            [sty.property13rd_3]: hasVariant(variants, "_3", "_3")
          })}
        >
          {(hasVariant(variants, "_3", "_3") ? true : true) ? (
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__sowdG, {
                [sty.img_3__sowdGvHupk]: hasVariant(variants, "_3", "_3")
              })}
              displayHeight={"38.538px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"30.478px" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/copy_of_copy_of_cbn_components/images/badgeYellow3.svg",
                fullWidth: 30.478,
                fullHeight: 38.538,
                aspectRatio: 0.794872
              }}
            />
          ) : null}

          <div
            data-plasmic-name={"_2"}
            data-plasmic-override={overrides._2}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty._2
            )}
          >
            {"3"}
          </div>
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text", "property12nd", "_1", "property13rd", "_2"],
  text: ["text"],
  property12nd: ["property12nd", "_1"],
  _1: ["_1"],
  property13rd: ["property13rd", "_2"],
  _2: ["_2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
  property12nd: "div";
  _1: "div";
  property13rd: "div";
  _2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBadgePlace__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBadgePlace__VariantsArgs;
    args?: PlasmicBadgePlace__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBadgePlace__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicBadgePlace__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicBadgePlace__ArgProps,
      internalVariantPropNames: PlasmicBadgePlace__VariantProps
    });

    return PlasmicBadgePlace__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBadgePlace";
  } else {
    func.displayName = `PlasmicBadgePlace.${nodeName}`;
  }
  return func;
}

export const PlasmicBadgePlace = Object.assign(
  // Top-level PlasmicBadgePlace renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    property12nd: makeNodeComponent("property12nd"),
    _1: makeNodeComponent("_1"),
    property13rd: makeNodeComponent("property13rd"),
    _2: makeNodeComponent("_2"),

    // Metadata about props expected for PlasmicBadgePlace
    internalVariantProps: PlasmicBadgePlace__VariantProps,
    internalArgProps: PlasmicBadgePlace__ArgProps
  }
);

export default PlasmicBadgePlace;
/* prettier-ignore-end */
