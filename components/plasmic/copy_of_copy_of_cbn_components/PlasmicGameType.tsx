// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8evnTWPVwZ7FqJMVwJ5kQX
// Component: t9FaXeqxhN2U-R
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
import sty from "./PlasmicGameType.module.css"; // plasmic-import: t9FaXeqxhN2U-R/css

import Frame1593Icon from "./icons/PlasmicIcon__Frame1593"; // plasmic-import: 90uvfieAr7FyhJ/icon

export type PlasmicGameType__VariantMembers = {};

export type PlasmicGameType__VariantsArgs = {};
type VariantPropType = keyof PlasmicGameType__VariantsArgs;
export const PlasmicGameType__VariantProps = new Array<VariantPropType>();

export type PlasmicGameType__ArgsType = {
  gameTypePic?: React.ReactNode;
  gameType?: React.ReactNode;
};

type ArgPropType = keyof PlasmicGameType__ArgsType;
export const PlasmicGameType__ArgProps = new Array<ArgPropType>(
  "gameTypePic",
  "gameType"
);

export type PlasmicGameType__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultGameTypeProps {
  gameTypePic?: React.ReactNode;
  gameType?: React.ReactNode;
  className?: string;
}

function PlasmicGameType__RenderFunc(props: {
  variants: PlasmicGameType__VariantsArgs;
  args: PlasmicGameType__ArgsType;
  overrides: PlasmicGameType__OverridesType;

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
      {p.renderPlasmicSlot({
        defaultContents: (
          <Frame1593Icon
            className={classNames(projectcss.all, sty.svg__dhA2K)}
            role={"img"}
          />
        ),

        value: args.gameTypePic
      })}

      {p.renderPlasmicSlot({
        defaultContents: "Slots",
        value: args.gameType,
        className: classNames(sty.slotTargetGameType)
      })}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicGameType__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGameType__VariantsArgs;
    args?: PlasmicGameType__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicGameType__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicGameType__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicGameType__ArgProps,
      internalVariantPropNames: PlasmicGameType__VariantProps
    });

    return PlasmicGameType__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGameType";
  } else {
    func.displayName = `PlasmicGameType.${nodeName}`;
  }
  return func;
}

export const PlasmicGameType = Object.assign(
  // Top-level PlasmicGameType renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicGameType
    internalVariantProps: PlasmicGameType__VariantProps,
    internalArgProps: PlasmicGameType__ArgProps
  }
);

export default PlasmicGameType;
/* prettier-ignore-end */
