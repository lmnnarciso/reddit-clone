import { createStitches } from "@stitches/react";
import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
} from "@radix-ui/colors";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: "gainsboro",
      gray500: "lightgray",
      ...gray,
      ...blue,
      ...red,
      ...green,
      backdrop: "rgb(3, 3, 3)",
      mainBg: "rgb(26, 26, 27)",
      offgray: "rgb(52, 53, 54)",
      offwhite: "rgb(215, 218, 220)",
      brand: "#ff4500",
      brandHover: "#ff7f51",
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
  },
});

export const globalStyles = globalCss({
  "#__next, html, body": {
    height: "100%",
    fontSize: "62.5%",
  },
  body: {
    fontSize: "1.6rem",
  },
});

const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
});
