import { css, styled } from "stitches.config";

import { reset } from "stitches-reset";

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

const Header = styled(`header`, {
  gridArea: "header",
  background: "$mainBg",
  borderBottom: "1px solid $offgray",
  display: "flex",
  justifyContent: "space-between",
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
  height: "100%",
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
      <Header>
        <div>
          <a>Reddit</a>
        </div>
        <div>
          <button>Filter button</button>
        </div>
        <div>
          <input type="search" />
        </div>
        <div>
          <div>
            <a>link</a>
            <a>link2</a>
          </div>
          <div>
            <a></a>
            <a>\</a>
          </div>
        </div>
      </Header>
      <Main>
        <Wrapper>
          <Content>main</Content>
          <SideNav>side</SideNav>
        </Wrapper>
      </Main>
    </Grid>
  );
};
