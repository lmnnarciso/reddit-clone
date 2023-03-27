import { styled } from "stitches.config";

export const IconWrapper = styled(`span`, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    position: {
      left: {
        position: "absolute",
        left: "8px",
      },
      right: {
        position: "absolute",
        right: "8px",
      },
    },
  },
});
