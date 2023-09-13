import { Flex, Text } from "@chakra-ui/react";


interface Props {
  text: string;
  createdAt: string;
  name: string;
}

const Comment: React.FC<Props> = ({ text, createdAt, name }) => {
  return (
    <Flex
      // bg="green"
      align={"center"}
      justify={"left"}
      ml={5}
    >
      <Text variant={"flushed"} color="white" borderColor={"white"} w={"200px"}>
        {text}
      </Text>
    </Flex>
  );
};
export default Comment;
