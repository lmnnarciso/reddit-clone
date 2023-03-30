import { styled } from "stitches.config";
import { Header } from "./Header/Header";
import { NewPostContainer } from "./Content/CreateNewPost";
import { FilterContentContainer } from "./Content/FilterContentContainer";

const Grid = styled(`div`, {
  display: `grid`,
  gridTemplateAreas: `
        "header header header"
        "main main main"`,
  background: "$backdrop",
  height: "100%",
  gridTemplateRows: "48px 100%",
  gridTemplateColumns: "repeat(3, 1fr)",
  fontSize: "1.6rem",
  color: "$offwhite",
});

const Main = styled(`main`, {
  gridArea: "main",
  background: "$backdrop",
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
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
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
          <Content>
            <NewPostContainer />
            <FilterContentContainer />
          </Content>
          <SideNav>side</SideNav>
        </Wrapper>
      </Main>
    </Grid>
  );
};
