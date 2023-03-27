import { styled } from "stitches.config";

const AvatarWrapper = styled("div", {
  maxWidth: "24px",
  maxHeight: "24px",
});

export const Avatar = () => {
  return (
    <AvatarWrapper>
      <img
        src="/assets/reddit_profile.webp"
        style={{
          objectFit: "cover",
          width: "100%",
        }}
      />
    </AvatarWrapper>
  );
};
