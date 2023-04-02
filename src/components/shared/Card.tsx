import { styled } from "stitches.config";
import { DefaultStyleWrapper } from "../Content/CreateNewPost";

export const Card = styled(DefaultStyleWrapper, {
  "$space-x": "0.8rem",
  "$space-y": "1.2rem",
  padding: "$y $x",

  variants: {
    size: {
      md: {
        width: "320px",
      },
      lg: {
        width: "640px",
      },
    },
  },
  props: {
    size: "md",
  },
  defaultVariants: {
    size: "md",
  },
});
