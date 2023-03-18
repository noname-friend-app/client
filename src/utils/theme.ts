import { extendTheme } from "@chakra-ui/react";
import "@fontsource/akshar";

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const colors = {
  purple: {
    100: "#9D8DF1",
    200: "#31283C",
    300: "#271B2D",
  },
};

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};

// 3. extend the theme
const theme = extendTheme({
  config,
  colors,
  fonts: { body: '"Akshar", sans-serif;', heading: '"Akshar", sans-serif;' },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              pointerEvents: "none",
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

export default theme;
