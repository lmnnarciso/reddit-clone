import { styled } from "stitches.config";
import { LinkButton } from "../Header/LinkButton.styled";
import { SvgIcon } from "../Header/SvgIcon.styled";
import { Button } from "../shared/Button";
import { Card } from "../shared/Card";
import { Flex } from "../shared/Flex";
import { Badge } from "../shared/Pill";

const POST_DATA = {
  title: "Higher Salary or Higher position",
  content: `
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod consequat magna in vulputate. Nunc scelerisque, erat sed dictum sagittis, erat nisi condimentum lorem, vitae sagittis sem mauris ac urna. Duis eu odio elit. Etiam tincidunt ante id ligula aliquet porttitor. Sed rhoncus, neque vitae commodo vehicula, augue nulla dapibus lacus, eu aliquam urna erat a sapien. Phasellus dictum turpis massa. Phasellus tincidunt neque a lectus ullamcorper, in sodales tellus dictum. Aenean ac vulputate justo, in mollis elit. Vivamus mattis condimentum lorem vitae sollicitudin. Morbi et ex in tellus iaculis placerat. Duis metus dolor, sodales vel posuere non, laoreet ac velit. Mauris in augue finibus, lobortis turpis sit amet, accumsan arcu.</p>
  
  <p>Ut dictum turpis vel ipsum feugiat tincidunt. Nam sagittis bibendum hendrerit. Nulla sem sapien, interdum vitae ipsum nec, laoreet tincidunt ipsum. Donec tempor ligula quis diam congue, congue placerat est dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed placerat justo dui, sit amet fringilla odio dictum id. Vestibulum sed arcu ut ligula laoreet sagittis. Nulla ornare aliquet diam, ac suscipit justo vehicula id. Donec orci elit, hendrerit vitae eros eget, dapibus egestas purus. Cras lobortis est ut turpis posuere pellentesque. Duis faucibus felis sit amet orci efficitur, sed molestie massa cursus. Cras mauris orci, egestas at nulla eu, imperdiet hendrerit mauris. Nullam in lectus scelerisque, egestas sapien sit amet, porttitor purus. Donec tellus lacus, condimentum at ipsum vitae, pretium rhoncus sem. Pellentesque et purus at massa faucibus porttitor rhoncus id risus. Nulla facilisi.</p>
  
  <p>Phasellus tempus, diam tempor mollis auctor, nisl lectus venenatis sem, non finibus eros turpis a magna. Sed non lectus nec neque tempus laoreet. Curabitur laoreet, risus euismod gravida hendrerit, felis justo vestibulum dui, vitae commodo nunc elit sit amet odio. Nunc fermentum in arcu ut vestibulum. Fusce laoreet diam et mi ornare rutrum. Praesent finibus orci eros, a volutpat sapien gravida a. Ut maximus leo sit amet risus cursus, sit amet vehicula elit blandit. Quisque nec nisl mattis, luctus augue porttitor, dignissim nisl. Integer semper libero in ornare porttitor. Curabitur vehicula tortor leo, a pellentesque velit feugiat at. Cras a scelerisque sapien. Donec accumsan posuere aliquam. Nulla ut eros felis. Etiam posuere venenatis arcu, et placerat ex placerat condimentum. Suspendisse iaculis vulputate felis in pellentesque.</p> `,
  image: "https://i.redd.it/9a9b1t1k8k421.jpg",
  upvotes: 12,
  downvotes: 2,
  comments: [{}],
};

const VoteButton = ({ children }: { children: React.ReactNode }) => {
  const buttonStyle = {
    background: "none",
    padding: 0,
  };
  const hoverStyle = {
    "&:hover": {
      fill: "$brand",
    },
  };
  return (
    <Button css={buttonStyle}>
      <SvgIcon
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        css={hoverStyle}
      >
        {children}
      </SvgIcon>
    </Button>
  );
};

const UpvoteSvg = () => {
  return (
    <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-15 5 5h-4v5h-2v-5H7l5-5z"></path>
  );
};

const DownvoteSvg = () => {
  return (
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 15-5-5h4V7h2v5h4l-5 5z"></path>
  );
};

const CommunityLink = () => {
  const Link = styled("a", {
    fontWeight: 700,
    fontSize: "1.2rem",
    color: "$offwhite",
    lineHeight: "2rem",
    display: "inline",
    "&:hover": {
      textDecoration: "underline",
    },
  });

  return <Link>r/testlink</Link>;
};

const PostMetaInfo = () => {
  return (
    <Flex
      css={{
        "$space-gap": "0.5rem",
        gap: "$gap",
        marginLeft: "$gap",
        fontSize: "1.2rem",
        color: "$infoGray",
        alignItems: "baseline",
      }}
    >
      <span>Posted by </span>
      <span>u/Migz</span>
      <span>10 hours ago</span>
    </Flex>
  );
};

const PostTitle = ({ title }: { title: string }) => {
  const Title = styled("h3", {
    fontSize: "1.8rem",
    fontWeight: 500,
    lineHeight: "2.2rem",
    color: "$offwhite",
    margin: 0,
    fontStretch: "100%",
    fontKerning: "auto",
  });
  return (
    <Flex css={{ gap: "0.5rem" }}>
      <Title>{title}</Title>
      <Badge>advice</Badge>
    </Flex>
  );
};

export const Post = () => {
  const buttonStyle = {
    height: "100%",
    padding: "0.8rem",
  };
  return (
    <Card
      size="lg"
      css={{
        "&:hover": {
          border: "1px solid $offwhite",
          cursor: "pointer",
        },
      }}
    >
      <Flex css={{ gap: "1rem" }}>
        <Flex direction="column">
          <div>
            <VoteButton>
              <UpvoteSvg />
            </VoteButton>
          </div>
          <div>10</div>
          <div>
            <VoteButton>
              <DownvoteSvg />
            </VoteButton>
          </div>
        </Flex>
        <Flex
          direction="column"
          css={{
            gap: "0.6rem",
          }}
        >
          <Flex direction="row" align="baseline">
            <CommunityLink />
            <PostMetaInfo />
          </Flex>
          <PostTitle title={POST_DATA.title} />
          <div
            style={{
              maxHeight: "250px",
              padding: "0.5rem 0.8rem 1rem 0.8rem",
              overflow: "hidden",
              maskImage: "linear-gradient(180deg,#000 60%,transparent)",
            }}
            dangerouslySetInnerHTML={{ __html: POST_DATA.content }}
          ></div>
          <Flex
            css={{
              marginBottom: "-$y",
              minHeight: "4rem",
            }}
          >
            <div>
              <Button color="gray" css={buttonStyle}>
                <span>2 Comments</span>
              </Button>
            </div>
            <div>
              <Button color="gray" css={buttonStyle}>
                <span>Award</span>
              </Button>
            </div>
            <div>
              <Button color="gray" css={buttonStyle}>
                <span>Share</span>
              </Button>
            </div>
            <div>
              <Button color="gray" css={buttonStyle}>
                <span>Save</span>
              </Button>
            </div>
            <div>
              <Button
                css={buttonStyle}
                color="gray"
                style={{
                  transform: "translateY(0px)",
                }}
              >
                <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                </SvgIcon>
              </Button>
            </div>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};
