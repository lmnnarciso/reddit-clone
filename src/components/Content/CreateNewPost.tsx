import { styled } from "stitches.config";
import { Avatar } from "../Header/Avatar";
import { LinkButton } from "../Header/LinkButton.styled";
import { SearchInput } from "../Header/SearchInput.styled";
import { SvgIcon } from "../Header/SvgIcon.styled";

export const DefaultStyleWrapper = styled(`div`, {
  border: "1px solid $offgray",
  background: "$mainBg",
  borderRadius: "0.4rem",
  width: "100%",
});

const NewPostWrapper = styled(DefaultStyleWrapper, {
  padding: "0.8rem",
  display: "flex",
  gap: "0.5rem",
});
const CreateNewPostInput = styled(SearchInput, {
  height: "3.8rem",
  width: "100%",
  borderRadius: "0.4rem",
  padding: "0 1.6rem",
  flex: "1",
  lineHeight: "2.1rem",
  fontSize: "1.4rem",
});

export const NewPostContainer = () => {
  return (
    <NewPostWrapper>
      <Avatar
        style={{
          maxHeight: "38px",
          maxWidth: "38px",
        }}
      />
      <CreateNewPostInput placeholder="Create Post" />
      <LinkButton size="lg"></LinkButton>
      <LinkButton size="lg">
        <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
          <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
        </SvgIcon>
      </LinkButton>
    </NewPostWrapper>
  );
};
