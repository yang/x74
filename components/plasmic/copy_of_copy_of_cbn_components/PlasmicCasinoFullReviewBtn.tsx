// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8evnTWPVwZ7FqJMVwJ5kQX
// Component: SY0fThONFAWcH0
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
import sty from "./PlasmicCasinoFullReviewBtn.module.css"; // plasmic-import: SY0fThONFAWcH0/css

export type PlasmicCasinoFullReviewBtn__VariantMembers = {};

export type PlasmicCasinoFullReviewBtn__VariantsArgs = {};
type VariantPropType = keyof PlasmicCasinoFullReviewBtn__VariantsArgs;
export const PlasmicCasinoFullReviewBtn__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCasinoFullReviewBtn__ArgsType = {};
type ArgPropType = keyof PlasmicCasinoFullReviewBtn__ArgsType;
export const PlasmicCasinoFullReviewBtn__ArgProps = new Array<ArgPropType>();

export type PlasmicCasinoFullReviewBtn__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultCasinoFullReviewBtnProps {
  className?: string;
}

function PlasmicCasinoFullReviewBtn__RenderFunc(props: {
  variants: PlasmicCasinoFullReviewBtn__VariantsArgs;
  args: PlasmicCasinoFullReviewBtn__ArgsType;
  overrides: PlasmicCasinoFullReviewBtn__OverridesType;

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
        sty.root
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"Casino Full Review"}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCasinoFullReviewBtn__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCasinoFullReviewBtn__VariantsArgs;
    args?: PlasmicCasinoFullReviewBtn__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCasinoFullReviewBtn__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCasinoFullReviewBtn__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCasinoFullReviewBtn__ArgProps,
      internalVariantPropNames: PlasmicCasinoFullReviewBtn__VariantProps
    });

    return PlasmicCasinoFullReviewBtn__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCasinoFullReviewBtn";
  } else {
    func.displayName = `PlasmicCasinoFullReviewBtn.${nodeName}`;
  }
  return func;
}

export const PlasmicCasinoFullReviewBtn = Object.assign(
  // Top-level PlasmicCasinoFullReviewBtn renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicCasinoFullReviewBtn
    internalVariantProps: PlasmicCasinoFullReviewBtn__VariantProps,
    internalArgProps: PlasmicCasinoFullReviewBtn__ArgProps
  }
);

export default PlasmicCasinoFullReviewBtn;
/* prettier-ignore-end */
