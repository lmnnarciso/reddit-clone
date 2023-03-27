import { styled } from "stitches.config";

export const SearchInput = styled(`input`, {
  background: "transparent",
  border: "1px solid $offgray",
  height: "100%",
  borderRadius: "100px",
  color: "$offwhite",
  padding: "0 4.8rem",
  flex: "1 1 72px",

  "&:focus": {
    outline: "none",
    borderColor: "$offwhite",
  },
});
