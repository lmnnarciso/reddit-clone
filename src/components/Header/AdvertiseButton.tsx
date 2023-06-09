import { styled } from "stitches.config";
import { Button } from "./Button.styled";
import { SvgIcon } from "./SvgIcon.styled";

const StyledButton = styled(Button, {
  padding: "0.5rem 1rem 0.5rem 1rem",
  borderRadius: "100rem",

  "&:hover": {
    background: "$offgray",
  },

  [`& ${SvgIcon}`]: {
    marginRight: "1rem",
    transform: "translateY(-1px)",
  },
});

export const AdvertiseButton = () => {
  return (
    <StyledButton style={{}}>
      <SvgIcon
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path d="M20.664 3.478 8 8v7l.748.267-1.127 2.254a1.999 1.999 0 0 0 1.156 2.792l4.084 1.361a2.015 2.015 0 0 0 2.421-1.003l1.303-2.606 4.079 1.457A1 1 0 0 0 22 18.581V4.419a1 1 0 0 0-1.336-.941zm-7.171 16.299L9.41 18.416l1.235-2.471 4.042 1.444-1.194 2.388zM4 15h2V8H4c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2z"></path>
      </SvgIcon>
      <span>Advertise</span>
    </StyledButton>
  );
};
