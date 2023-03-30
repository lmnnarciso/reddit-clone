import { styled } from "stitches.config";
import { FlexWrapper } from "../Header/FlexWrapper.styled";
import { LinkButton } from "../Header/LinkButton.styled";
import { SvgIcon } from "../Header/SvgIcon.styled";
import { DefaultStyleWrapper } from "./CreateNewPost";

const FilterFlex = styled(DefaultStyleWrapper, {
  padding: "1rem 1.2rem",
  display: "flex",
  justifyContent: "space-between",
});

export const FilterContentContainer = () => {
  return (
    <FilterFlex>
      <FlexWrapper>
        <LinkButton size="flex" rounded="full">
          <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20.92 2.38A15.72 15.72 0 0 0 17.5 2a8.26 8.26 0 0 0-6 2.06Q9.89 5.67 8.31 7.27c-1.21-.13-4.08-.2-6 1.74a1 1 0 0 0 0 1.41l11.3 11.32a1 1 0 0 0 1.41 0c1.95-2 1.89-4.82 1.77-6l3.21-3.2c3.19-3.19 1.74-9.18 1.68-9.43a1 1 0 0 0-.76-.73zm-2.36 8.75L15 14.67a1 1 0 0 0-.27.9 6.81 6.81 0 0 1-.54 3.94L4.52 9.82a6.67 6.67 0 0 1 4-.5A1 1 0 0 0 9.39 9s1.4-1.45 3.51-3.56A6.61 6.61 0 0 1 17.5 4a14.51 14.51 0 0 1 2.33.2c.24 1.43.62 5.04-1.27 6.93z"></path>
            <circle cx="15.73" cy="8.3" r="2"></circle>
            <path d="M5 16c-2 1-2 5-2 5a7.81 7.81 0 0 0 5-2z"></path>
          </SvgIcon>
          <span>Best</span>
        </LinkButton>
        <LinkButton size="flex" rounded="full">
          <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M16.5 8c0 1.5-.5 3.5-2.9 4.3.7-1.7.8-3.4.3-5-.7-2.1-3-3.7-4.6-4.6-.4-.3-1.1.1-1 .7 0 1.1-.3 2.7-2 4.4C4.1 10 3 12.3 3 14.5 3 17.4 5 21 9 21c-4-4-1-7.5-1-7.5.8 5.9 5 7.5 7 7.5 1.7 0 5-1.2 5-6.4 0-3.1-1.3-5.5-2.4-6.9-.3-.5-1-.2-1.1.3"></path>
          </SvgIcon>
          <span>Hot</span>
        </LinkButton>
        <LinkButton size="flex" rounded="full">
          <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10 11H7.101l.001-.009a4.956 4.956 0 0 1 .752-1.787 5.054 5.054 0 0 1 2.2-1.811c.302-.128.617-.226.938-.291a5.078 5.078 0 0 1 2.018 0 4.978 4.978 0 0 1 2.525 1.361l1.416-1.412a7.036 7.036 0 0 0-2.224-1.501 6.921 6.921 0 0 0-1.315-.408 7.079 7.079 0 0 0-2.819 0 6.94 6.94 0 0 0-1.316.409 7.04 7.04 0 0 0-3.08 2.534 6.978 6.978 0 0 0-1.054 2.505c-.028.135-.043.273-.063.41H2l4 4 4-4zm4 2h2.899l-.001.008a4.976 4.976 0 0 1-2.103 3.138 4.943 4.943 0 0 1-1.787.752 5.073 5.073 0 0 1-2.017 0 4.956 4.956 0 0 1-1.787-.752 5.072 5.072 0 0 1-.74-.61L7.05 16.95a7.032 7.032 0 0 0 2.225 1.5c.424.18.867.317 1.315.408a7.07 7.07 0 0 0 2.818 0 7.031 7.031 0 0 0 4.395-2.945 6.974 6.974 0 0 0 1.053-2.503c.027-.135.043-.273.063-.41H22l-4-4-4 4z"></path>
          </SvgIcon>
          <span>New</span>
        </LinkButton>
        <LinkButton size="flex" rounded="full">
          <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20.92 2.38A15.72 15.72 0 0 0 17.5 2a8.26 8.26 0 0 0-6 2.06Q9.89 5.67 8.31 7.27c-1.21-.13-4.08-.2-6 1.74a1 1 0 0 0 0 1.41l11.3 11.32a1 1 0 0 0 1.41 0c1.95-2 1.89-4.82 1.77-6l3.21-3.2c3.19-3.19 1.74-9.18 1.68-9.43a1 1 0 0 0-.76-.73zm-2.36 8.75L15 14.67a1 1 0 0 0-.27.9 6.81 6.81 0 0 1-.54 3.94L4.52 9.82a6.67 6.67 0 0 1 4-.5A1 1 0 0 0 9.39 9s1.4-1.45 3.51-3.56A6.61 6.61 0 0 1 17.5 4a14.51 14.51 0 0 1 2.33.2c.24 1.43.62 5.04-1.27 6.93z"></path>
            <circle cx="15.73" cy="8.3" r="2"></circle>
            <path d="M5 16c-2 1-2 5-2 5a7.81 7.81 0 0 0 5-2z"></path>
          </SvgIcon>
          <span>Top</span>
        </LinkButton>
        <LinkButton
          size="lg"
          rounded="full"
          style={{
            transform: "translateY(0px)",
          }}
        >
          <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </SvgIcon>
        </LinkButton>
      </FlexWrapper>
      <FlexWrapper>
        <LinkButton
          size="flex"
          rounded="full"
          css={{
            [`& ${SvgIcon}`]: {
              marginRight: "0",
              transform: "translateX(2px)",
            },
          }}
        >
          <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M17.999 17c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-12c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12zm-12-12h12l.002 10H5.999V5zm-2 14h16v2h-16z"></path>
          </SvgIcon>
          <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
          </SvgIcon>
        </LinkButton>
      </FlexWrapper>
    </FilterFlex>
  );
};
