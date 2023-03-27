import { styled } from "stitches.config";

export const FilterButtonWrapper = styled(`div`, {
  flexBasis: "270px",
  flexShrink: "1",
  height: "3.4rem",
  cursor: "pointer",
  borderRadius: "0.4rem",
  lineHeight: "3.4rem",
  justifyContent: "space-between",
  padding: "0 4.8rem 0 4rem",
  position: "relative",
  "&:hover": {
    outline: "1px solid $offgray",
  },

  "& button": {
    background: "transparent",
    color: "$offwhite",
    border: "none",
  },
});
