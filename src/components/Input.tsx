import {
  ChakraProvider,
  FormControl,
  // FormErrorMessage,
  // FormHelperText,
  FormLabel,
  Input,
  extendTheme,
  Box,
} from "@chakra-ui/react";
const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};
export const theme = extendTheme({
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

export default function DoinkInput() {
  return (
    <ChakraProvider theme={theme}>
      <Box p={8}>
        <FormControl variant="floating" id="first-name">
          <Input placeholder=" " variant="flushed" />
          <FormLabel>First name</FormLabel>
        </FormControl>
      </Box>
    </ChakraProvider>
  );
}
