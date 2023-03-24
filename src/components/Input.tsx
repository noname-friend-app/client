import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  Box,
  Text,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";

interface InputProps {
  formLabel: string;
  value: string;
  setState: Dispatch<SetStateAction<any>>;
  w?: string | number | object;
  type?: string;
  isRequired?: boolean;
  length?: number;
}

const Input: React.FC<InputProps> = ({
  formLabel,
  value,
  setState,
  w = "100px",
  type = "text",
  isRequired = false,
  length,
  ...rest
}) => {
  const [error, setError] = useState<any>(false);
  return (
    <Box w="100%">
      <FormControl
        color={error ? "red.500" : "white"}
        variant="floating"
        id="first-name"
      >
        <ChakraInput
          {...rest}
          placeholder=""
          onChange={(e) => {
            if (length) {
              if (e.target.value.length <= length) {
                setState(e.target.value);
              }
            } else {
              setState(e.target.value);
            }
            if (isRequired && e.target.value.length < 1) {
              setError(true);
            } else {
              setError(false);
            }
          }}
          variant="flushed"
          w={w}
          value={value}
          type={type}
          isRequired={isRequired}
        />
        <FormLabel>{formLabel}</FormLabel>
        {error && (
          <Text mt={2} color="red.500">
            This field is required
          </Text>
        )}
      </FormControl>
    </Box>
  );
};
export default Input;
