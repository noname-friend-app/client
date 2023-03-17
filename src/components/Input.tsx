import {
  ChakraProvider,
  FormControl,
  FormLabel,
  Input as ChakraInput,
  extendTheme,
  Box,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};

interface InputProps {
  formLabel: string;
  value: string;
  onChange: Dispatch<SetStateAction<any>>;
  w?: string | number;
}

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

const Input: React.FC<InputProps> = ({
  formLabel,
  value,
  onChange,
  w = "100px",
}) => {
  return (
    <ChakraProvider theme={theme}>
      <Box p={8}>
        <FormControl variant="floating" id="first-name">
          <ChakraInput
            onChange={(e) => onChange(e.target.value)}
            variant="flushed"
            w={w}
            value={value}
          />
          <FormLabel>{formLabel}</FormLabel>
        </FormControl>
      </Box>
    </ChakraProvider>
  );
};
export default Input;
