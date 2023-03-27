import { styled } from "stitches.config";

export const LinkButton = styled("a", {
  height: "3.2rem",
  width: "3.2rem",
  display: "grid",
  borderRadius: "0.4rem",
  placeItems: "center",
  cursor: "pointer",

  "&:hover": {
    background: "$offgray",
  },
});
