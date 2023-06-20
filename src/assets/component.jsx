import { defineStyleConfig } from "@chakra-ui/react";
import { color } from "framer-motion";

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: "extrabold",
    bgColor: "Neutral.dark_desaturated_blue",
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "xl",
      px: "93px", // <-- px is short for paddingLeft and paddingRight
      py: "32px", // <-- py is short for paddingTop and paddingBottom
      borderRadius: "38px", // <-- border radius is same for all variants and sizes
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      color: "Neutral.light_grayish_blue",
      _hover: {
        color: "white",
        bgColor: "Neutral.dark_desaturated_blue",
      },
      _focus: {
        color: "white",
        bgColor: "Neutral.dark_desaturated_blue",
      }
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "sm",
    variant: "outline",
  },
});

export default Button;
