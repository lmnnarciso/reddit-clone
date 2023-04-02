import { styled } from "stitches.config";
import { Button } from "../shared/Button";
import { Card } from "../shared/Card";
import { Flex } from "../shared/Flex";

export const Banner = styled(`div`, {
  backgroundImage: `url("/assets/home-banner.png")`,
  height: "3.4rem",
  borderTopRightRadius: "1rem",
  borderTopLeftRadius: "1rem",
  marginLeft: "-$x",
  marginRight: "-$x",
  marginTop: "-$y",
});

const Snoo = styled("div", {
  background: `url("/assets/snoo-home.png") 0% 0% / 40px 68px`,
  height: "6.8rem",
  width: "4rem",
});

export const CommunityCard = () => {
  return (
    <Card
      css={{
        borderTopRightRadius: "1rem",
        borderTopLeftRadius: "1rem",
      }}
    >
      <Banner />
      <Flex
        align="center"
        css={{
          marginTop: "-$y",
        }}
      >
        <Snoo />
        <div
          style={{
            marginTop: "3rem",
            marginLeft: "0.8rem",
            fontSize: "1.6rem",
            fontWeight: 500,
            lineHeight: "2rem",
            display: "inline-block",
          }}
        >
          Home
        </div>
      </Flex>
      <hr style={{ margin: "2rem" }} />
      <Flex
        direction="column"
        css={{
          gap: "1rem",
        }}
      >
        <Button size="full" rounded="full">
          Create Post
        </Button>
        <Button size="full" rounded="full" color="outline">
          Create Community
        </Button>
      </Flex>
    </Card>
  );
};
