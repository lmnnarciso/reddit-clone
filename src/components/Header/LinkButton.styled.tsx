import { styled } from "stitches.config";
import { SvgIcon } from "./SvgIcon.styled";

export const LinkButton = styled("a", {
  height: "3.2rem",
  width: "3.2rem",
  display: "inline-flex",
  borderRadius: "0.4rem",
  // placeItems: "center",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",

  "&:hover": {
    background: "$offgray",
  },

  variants: {
    size: {
      md: {
        height: "3.2rem",
        width: "3.2rem",
      },
      lg: {
        height: "4rem",
        width: "4rem",
        [`& ${SvgIcon}`]: {
          transform: "translateY(0px)",
        },
      },
      flex: {
        width: "100%",
        flex: "1",
        flexShrink: "1",
        fontWeight: "bolder",
        padding: "0.6rem 0.8rem",
        [`& ${SvgIcon}`]: {
          transform: "translateY(0px)",
          marginRight: "0.4rem",
        },
      },
    },
    rounded: {
      md: {
        borderRadius: "0.4rem",
      },
      full: {
        borderRadius: "100rem",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
});
