"use client";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { styled } from "stitches.config";
import { LinkButton } from "../Header/LinkButton.styled";
import { SvgIcon } from "../Header/SvgIcon.styled";
import { SideNav, Wrapper } from "../Layout";
import { Button } from "../shared/Button";
import { Flex } from "../shared/Flex";
import { Badge } from "../shared/Pill";
import { DownvoteSvg, Post, PostContent, UpvoteSvg, VoteButton } from "./Post";

const Overlay = styled(AlertDialog.Overlay, {
  backgroundColor: "$grayBackdrop",
  position: "fixed",
  inset: 0,
  animation: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
});

const Content = styled(AlertDialog.Content, {
  color: "white",
  backgroundColor: "$mainBg",
  borderRadius: "6px",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "1280px",
  maxHeight: "none",
  padding: "25px",
  animation: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",

  "&:focus": {
    outline: "none",
  },
});

const Title = styled(AlertDialog.Title, {
  margin: 0,
  color: "$mauve12",
  fontSize: "17px",
  fontWeight: "500",
});

const Description = styled(AlertDialog.Description, {
  marginBottom: "20px",
  color: "$mauve11",
  fontSize: "15px",
  lineHeight: 1.5,
});

const TitleBar = styled(Flex, {
  minWidth: "100%",
  marginTop: "-2.5rem",
  marginLeft: "-2.5rem",
  marginRight: "-2.5rem",
  marginBottom: "2.5rem",
  height: "48px",
  padding: "0 3.2rem",
  display: "flex",
  alignItems: "center",
  background: "$backdrop",
  justifyContent: "space-between",
});

const TitleText = styled("h1", {
  display: "block",
  fontSize: "1.4rem",
  fontWeight: 500,
  fontFamily: "'IBM Plex Sans', sans-serif",
});

const PostTitleBar = () => {
  return (
    <TitleBar>
      <Flex>
        <TitleText>
          Night Watch was an absolute masterpiece, even by Pratchett standards
        </TitleText>
      </Flex>
      <Button>Close</Button>
    </TitleBar>
  );
};
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
export const PostModal = () => {
  const buttonStyle = {
    height: "100%",
    padding: "0.8rem",
  };
  return (
    <AlertDialog.Root open={true}>
      <AlertDialog.Trigger asChild>
        <button className="Button violet">Delete account</button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <Overlay />
        <Content className="AlertDialogContent">
          <PostTitleBar />
          <PostContent isViewed={true} />
        </Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
