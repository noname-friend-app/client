import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  const color = useColorModeValue('#F2F2F2', '#171923')
  return (
    <>
      <Flex
        color={color}
        bg="purple.100"
        width="100%"
        h="100vh"
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