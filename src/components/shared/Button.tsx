import { styled } from "stitches.config";

export const Button = styled("button", {
  display: "inline-block",
  color: "black",
  textDecoration: "none",
  fontWeight: 700,
  fontSize: "1.4rem",
  fontFamily: "sans-serif",
  padding: " 0.4rem 1.6rem",
  cursor: "pointer",
  minHeight: "32px",
  lineHeight: "17px",
  letterSpacing: "unset",
  textTransform: "unset",
  border: "none",

  variants: {
    rounded: {
      md: {
        borderRadius: "0.4rem",
      },
      full: {
        borderRadius: "100rem",
      },
    },
    color: {
      primary: {
        backgroundColor: "$brand",
        color: "white",

        "&:hover": {
          backgroundColor: "$brandHover",
          // lighter version of $brand
        },
      },
    },
  },
  defaultVariants: {
    rounded: "md",
  },
});
