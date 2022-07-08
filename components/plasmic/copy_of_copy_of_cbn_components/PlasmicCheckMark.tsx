// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8evnTWPVwZ7FqJMVwJ5kQX
// Component: kVgrwryxuBFYqq
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
import sty from "./PlasmicCheckMark.module.css"; // plasmic-import: kVgrwryxuBFYqq/css

export type PlasmicCheckMark__VariantMembers = {};

export type PlasmicCheckMark__VariantsArgs = {};
type VariantPropType = keyof PlasmicCheckMark__VariantsArgs;
export const PlasmicCheckMark__VariantProps = new Array<VariantPropType>();

export type PlasmicCheckMark__ArgsType = {};
type ArgPropType = keyof PlasmicCheckMark__ArgsType;
export const PlasmicCheckMark__ArgProps = new Array<ArgPropType>();

export type PlasmicCheckMark__OverridesType = {
  root?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultCheckMarkProps {
  className?: string;
}

function PlasmicCheckMark__RenderFunc(props: {
  variants: PlasmicCheckMark__VariantsArgs;
  args: PlasmicCheckMark__ArgsType;
  overrides: PlasmicCheckMark__OverridesType;

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
    <p.PlasmicImg
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      alt={""}
      className={classNames(
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
      displayHeight={"15px" as const}
      displayMaxHeight={"none" as const}
      displayMaxWidth={"100%" as const}
      displayMinHeight={"0" as const}
      displayMinWidth={"0" as const}
      displayWidth={"15px" as const}
      loading={"lazy" as const}
      src={{
        src: "/plasmic/copy_of_copy_of_cbn_components/images/check.svg",
        fullWidth: 15,
        fullHeight: 15,
        aspectRatio: 1
      }}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCheckMark__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCheckMark__VariantsArgs;
    args?: PlasmicCheckMark__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCheckMark__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCheckMark__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicCheckMark__ArgProps,
      internalVariantPropNames: PlasmicCheckMark__VariantProps
    });

    return PlasmicCheckMark__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCheckMark";
  } else {
    func.displayName = `PlasmicCheckMark.${nodeName}`;
  }
  return func;
}

export const PlasmicCheckMark = Object.assign(
  // Top-level PlasmicCheckMark renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicCheckMark
    internalVariantProps: PlasmicCheckMark__VariantProps,
    internalArgProps: PlasmicCheckMark__ArgProps
  }
);

export default PlasmicCheckMark;
/* prettier-ignore-end */