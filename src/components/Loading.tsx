import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  const color = useColorModeValue('#F2F2F2', 'white')
  return (
    <>
      <Flex
        color={color}
        bg="purple.200"
        width="100%"
        h="100%"
        justify={"center"}
        align="center"
      >
        <Heading mr={5} pb={0.5}>
          Loading
        </Heading>
        <ScaleLoader color={color} />
      </Flex>
    </>
  );
};

export default Loading;