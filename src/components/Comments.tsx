import { Flex, Input } from "@chakra-ui/react";

const Comment = () => {
  return (
    <Flex
      // bg="green"
      align={"center"}
      justify={"left"}
      // bg='red'
      ml={5}
    >
      <Flex
        w={10}
        h={10}
        mr={5}
        mb={5}
        border="1px"
        borderTop={"none"}
        borderRight={"none"}
        borderBottomLeftRadius={"10"}
      ></Flex>
      <Input
        value={"test"}
        variant={"flushed"}
        color="white"
        borderColor={"white"}
        placeholder="Username or Email"
        w={"200px"}
      />
    </Flex>
  );
};
export default Comment;
