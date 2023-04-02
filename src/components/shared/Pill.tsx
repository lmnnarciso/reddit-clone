import { styled } from "stitches.config";

const Pill = styled("div", {
  display: "inline-flex",
  minHeight: "2rem",
  borderRadius: "100rem",
  background: "rgb(13, 211, 187)",
  padding: "0 0.6rem",
  textTransform: "lowercase",
  fontWeight: "500",
  fontSize: "1.2rem",
  alignItems: "center",
  color: "black",
});

export const Badge = ({ children }: { children: React.ReactNode }) => {
  const spanStyle = {};
  return (
    <Pill>
      <span style={spanStyle}>{children}</span>
    </Pill>
  );
};
