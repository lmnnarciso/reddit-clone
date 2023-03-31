import { styled } from "stitches.config";
import { DefaultStyleWrapper } from "../Content/CreateNewPost";
import { SvgIcon } from "../Header/SvgIcon.styled";
import { Button } from "../shared/Button";
import { Flex } from "../shared/Flex";

const RedditPremiumWrapper = styled(DefaultStyleWrapper, {
  width: "320px",
  padding: "0.8rem 1.2rem",
});

const CardTitle = styled("div", {
  fontSize: "1.4rem",
  fontWeight: 500,
  lineHeight: "12px",
  marginTop: "0.2rem",
  marginBottom: "0.4rem",
});

const CardContent = styled("div", {
  fontSize: "1.2rem",
  fontWeight: 400,
  lineHeight: "16px",
});

const Card = styled("div", {
  maxWidth: "250px",
});

export const RedditPremium = () => {
  return (
    <RedditPremiumWrapper>
      <Flex
        direction="column"
        css={{
          "--space-gap": "1.5rem",
        }}
      >
        <Flex>
          <Flex align="center">
            <SvgIcon
              css={{
                fill: "$brand",
                height: "2.4rem",
                width: "2.4rem",
                marginRight: "1.2rem",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897V12H5.51a15.473 15.473 0 0 1-.544-4.365L12 4.118V12h6.46c-.759 2.74-2.498 5.979-6.46 7.897z"></path>
            </SvgIcon>
          </Flex>
          <div>
            <CardTitle>Reddit Premium</CardTitle>
            <CardContent>
              The best Reddit experience, with monthly Coins
            </CardContent>
          </div>
        </Flex>
        <Button color="primary" rounded="full">
          Try Now
        </Button>
      </Flex>
    </RedditPremiumWrapper>
  );
};
