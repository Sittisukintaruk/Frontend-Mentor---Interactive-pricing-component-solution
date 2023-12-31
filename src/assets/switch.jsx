import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    // ...
  },
  thumb: {
    bg: "white",
  },
  track: {
    bg: "gray.100",
    _checked: {
      bg: "primary.soft_cyan",
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
