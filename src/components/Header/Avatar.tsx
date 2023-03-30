import { HtmlProps } from "next/dist/shared/lib/html-context";
import { styled } from "stitches.config";

const AvatarWrapper = styled("div", {
  maxWidth: "24px",
  maxHeight: "24px",
});

export const Avatar = (props: any) => {
  return (
    <AvatarWrapper
      style={{
        height: "38px",
        width: "38px",
        ...props.style,
      }}
    >
      <img
        src="/assets/reddit_profile.webp"
        style={{
          objectFit: "cover",
          width: "100%",
          transform: "scale(1.3)",
        }}
      />
    </AvatarWrapper>
  );
};
