// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8evnTWPVwZ7FqJMVwJ5kQX
// Component: 3ANj-HxcqrOyyT
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
import sty from "./PlasmicVideoReviewBtn.module.css"; // plasmic-import: 3ANj-HxcqrOyyT/css

export type PlasmicVideoReviewBtn__VariantMembers = {
  noBrand: "noBrand";
};

export type PlasmicVideoReviewBtn__VariantsArgs = {
  noBrand?: SingleBooleanChoiceArg<"noBrand">;
};

type VariantPropType = keyof PlasmicVideoReviewBtn__VariantsArgs;
export const PlasmicVideoReviewBtn__VariantProps = new Array<VariantPropType>(
  "noBrand"
);

export type PlasmicVideoReviewBtn__ArgsType = {
  casinoVideoReview?: React.ReactNode;
};

type ArgPropType = keyof PlasmicVideoReviewBtn__ArgsType;
export const PlasmicVideoReviewBtn__ArgProps = new Array<ArgPropType>(
  "casinoVideoReview"
);

export type PlasmicVideoReviewBtn__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  text?: p.Flex<"div">;
};

export interface DefaultVideoReviewBtnProps {
  casinoVideoReview?: React.ReactNode;
  noBrand?: SingleBooleanChoiceArg<"noBrand">;
  className?: string;
}

function PlasmicVideoReviewBtn__RenderFunc(props: {
  variants: PlasmicVideoReviewBtn__VariantsArgs;
  args: PlasmicVideoReviewBtn__ArgsType;
  overrides: PlasmicVideoReviewBtn__OverridesType;

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
        { [sty.rootnoBrand]: hasVariant(variants, "noBrand", "noBrand") }
      )}
    >
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"24px" as const}
        displayMaxHeight={"none" as const}
        displayMaxWidth={"100%" as const}
        displayMinHeight={"0" as const}
        displayMinWidth={"0" as const}
        displayWidth={"24px" as const}
        loading={"lazy" as const}
        src={{
          src: "/plasmic/copy_of_copy_of_cbn_components/images/multimediaStart.svg",
          fullWidth: 24,
          fullHeight: 24,
          aspectRatio: 1
        }}
      />

      {(hasVariant(variants, "noBrand", "noBrand") ? false : true)
        ? p.renderPlasmicSlot({
            defaultContents: "True Blue Casino Video Review",
            value: args.casinoVideoReview,
            className: classNames(sty.slotTargetCasinoVideoReview, {
              [sty.slotTargetCasinoVideoReviewnoBrand]: hasVariant(
                variants,
                "noBrand",
                "noBrand"
              )
            })
          })
        : null}
      {(hasVariant(variants, "noBrand", "noBrand") ? true : true) ? (
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text,
            { [sty.textnoBrand]: hasVariant(variants, "noBrand", "noBrand") }
          )}
        >
          {"Video Review"}
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "text"],
  img: ["img"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicVideoReviewBtn__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicVideoReviewBtn__VariantsArgs;
    args?: PlasmicVideoReviewBtn__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicVideoReviewBtn__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicVideoReviewBtn__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicVideoReviewBtn__ArgProps,
      internalVariantPropNames: PlasmicVideoReviewBtn__VariantProps
    });

    return PlasmicVideoReviewBtn__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicVideoReviewBtn";
  } else {
    func.displayName = `PlasmicVideoReviewBtn.${nodeName}`;
  }
  return func;
}

export const PlasmicVideoReviewBtn = Object.assign(
  // Top-level PlasmicVideoReviewBtn renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicVideoReviewBtn
    internalVariantProps: PlasmicVideoReviewBtn__VariantProps,
    internalArgProps: PlasmicVideoReviewBtn__ArgProps
  }
);

export default PlasmicVideoReviewBtn;
/* prettier-ignore-end */
