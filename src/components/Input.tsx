import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  Box,
  Text
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";

interface InputProps {
  formLabel: string;
  value: string;
  setState: Dispatch<SetStateAction<any>>;
  w?: string | number;
  type?: string;
  isRequired?: boolean;
}

const Input: React.FC<InputProps> = ({
  formLabel,
  value,
  setState,
  w = "100px",
  type = "text",
  isRequired = false,
}) => {
  const [error, setError] = useState<any>(false)
  return (
      <Box>
        <FormControl color={error ? 'red.500' : 'white'} variant="floating" id="first-name">
          <ChakraInput
            placeholder=""
            onChange={(e) => {
              setState(e.target.value)
              if (isRequired && e.target.value.length < 1) {
                setError(true)
              } else {
                setError(false)
              }
            }}
            variant="flushed"
            w={w}
            value={value}
            type={type}
            isRequired={isRequired}
          />
          <FormLabel>{formLabel}</FormLabel>
          {error && <Text mt={2} color="red.500">This field is required</Text>}
        </FormControl>
      </Box>
  );
};
export default Input;
