import {
  CaretDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { styled } from "stitches.config";
import { RedditHeaderLink } from "../RedditHeaderLink";
import { AdvertiseButton } from "./AdvertiseButton";
import { Avatar } from "./Avatar";
import { Button } from "./Button.styled";
import { ChatButton } from "./ChatButton";
import { CoinButton } from "./CoinButton";
import { CreateNewPostButton } from "./CreateNewButton";
import { FilterButtonWrapper } from "./FilterButton.styled";
import { FlexWrapper } from "./FlexWrapper.styled";
import { IconWrapper } from "./IconWrapper.styled";
import { NotificationButton } from "./NotificationButton";
import { OutsideButtonGroup } from "./OutsideButtonGroup.styled";
import { PopularLinkButton } from "./PopularLinkButton";
import { SearchInput } from "./SearchInput.styled";
import { SearchInputWrapper } from "./SearchInputWrapper.styled";
import { UserInfo } from "./UserInfo";

const StyledHeader = styled(`header`, {
  gridArea: "header",
  background: "$mainBg",
  borderBottom: "1px solid $offgray",
  display: "flex",
  alignItems: "center",
  padding: "0 2.4rem",
  width: "100%",
  gap: "0.8rem",
  // justifyContent: "space-between",
});

export const Header = () => {
  return (
    <StyledHeader>
      <RedditHeaderLink />
      <FilterButtonWrapper>
        <Button>
          Home
          <IconWrapper position="left">
            <HomeIcon />
          </IconWrapper>
          <IconWrapper position="right">
            <CaretDownIcon />
          </IconWrapper>
        </Button>
      </FilterButtonWrapper>
      <SearchInputWrapper>
        <IconWrapper position="left">
          <MagnifyingGlassIcon width="24px" height="24px" />
        </IconWrapper>
        <SearchInput type="search" />
      </SearchInputWrapper>
      <FlexWrapper>
        <OutsideButtonGroup>
          <PopularLinkButton />
          <CoinButton />
        </OutsideButtonGroup>
        <FlexWrapper>
          <ChatButton />
          <NotificationButton />
        </FlexWrapper>
        <FlexWrapper>
          <CreateNewPostButton />
        </FlexWrapper>
        <FlexWrapper>
          <AdvertiseButton />
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper
        style={{
          flexBasis: "220px",
        }}
      >
        <FilterButtonWrapper>
          <Button>
            <UserInfo />
            <IconWrapper position="left">
              <Avatar />
            </IconWrapper>
            <IconWrapper position="right">
              <CaretDownIcon />
            </IconWrapper>
          </Button>
        </FilterButtonWrapper>
      </FlexWrapper>
    </StyledHeader>
  );
};
