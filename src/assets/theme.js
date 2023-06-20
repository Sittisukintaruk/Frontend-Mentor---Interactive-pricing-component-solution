import { extendTheme } from "@chakra-ui/react";
import Button from "./component.jsx";
import { switchTheme } from "./switch.jsx";

// example theme
const theme = extendTheme({
  components: {
    Button,
    Switch: switchTheme,
  },
  colors: {
    transparent: "transparent",
    black: "#000",
    primary: {
      soft_cyan: "#A5F3EB",
      strong_cyan: "#10D5C2",
      light_grayish_red: "#FEECE7",
      light_red: "#FF8C66",
      pale_blue: "#BDCCFF",
    },
    Neutral: {
      white: "#fff",
      dark_desaturated_blue: "#293356",
      grayish_blue: "#858FAD",
      light_grayish_blue_toggle: "#CDD7EE",
      light_grayish_blue: "#EAEEFB",
      very_pale_blue: "#FAFBFF",
    },
  },
  fonts: {
    body: "Manrope, sans-serif",
  },
  fontSizes: {
    xs: "0.625rem", //10px
    sm: "0.75rem", //12px
    md: "0.938rem", //15px
    lg: "1.25rem", // 20px
    xl: "1.5rem", // 24px
    "2xl": "1.625rem", //26px
    "3xl": "1.75rem", //28px
    "4xl": "2.375rem", //38px
    "5xl": "2.5rem", //40px
    "6xl": "4rem", //64px
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.02em",
    normal: "0",
    wide: "0.01em",
    wider: "0.03em",
    widest: "0.11em",
  },
});

export default theme;
