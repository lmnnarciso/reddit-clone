import { css, styled } from "stitches.config";

import { reset } from "stitches-reset";
import {
  HomeIcon,
  CaretDownIcon,
  MagnifyingGlassIcon,
  DrawingPinFilledIcon,
} from "@radix-ui/react-icons";
import { Header } from "./Header/Header";

const Grid = styled(`div`, {
  display: `grid`,
  gridTemplateAreas: `
        "header header header"
        "main main main"`,
  background: "black",
  height: "100%",
  gridTemplateRows: "48px 100%",
  gridTemplateColumns: "repeat(3, 1fr)",
  fontSize: "1.6rem",
  color: "$offwhite",
});

const Main = styled(`main`, {
  gridArea: "main",
  background: "$blue10",
});

const Wrapper = styled(`div`, {
  display: "grid",
  gridTemplateAreas: `
    "content sidenav"
  `,
  justifyContent: "center",
  gridTemplateColumns: "640px 312px",
  padding: "2rem 2.4rem",
  height: "calc(100%-48px)",
});

const Content = styled(`div`, {
  gridArea: "content",
});

const SideNav = styled(`div`, {
  gridArea: "sidenav",
});

interface Layout {
  children: React.ReactNode;
}

export const Layout = ({ children }: Layout) => {
  return (
    <Grid>
      <Header />
      <Main>
        <Wrapper>
          <Content>main</Content>
          <SideNav>side</SideNav>
        </Wrapper>
      </Main>
    </Grid>
  );
};
