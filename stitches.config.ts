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
    },
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
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