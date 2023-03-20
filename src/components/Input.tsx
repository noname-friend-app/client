import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  Box,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface InputProps {
  formLabel: string;
  value: string;
  setState: Dispatch<SetStateAction<any>>;
  w?: string | number;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  formLabel,
  value,
  setState,
  w = "100px",
  type = "text",
}) => {
  return (
      <Box p={8}>
        <FormControl variant="floating" id="first-name">
          <ChakraInput
            placeholder=" "
            onChange={(e) => setState(e.target.value)}
            variant="flushed"
            w={w}
            value={value}
            type={type}
          />
          <FormLabel>{formLabel}</FormLabel>
        </FormControl>
      </Box>
  );
};
export default Input;
