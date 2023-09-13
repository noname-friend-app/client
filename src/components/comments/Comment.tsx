import { Divider, Flex, HStack, Text } from "@chakra-ui/react";

interface Props {
  text: string;
  createdAt: string;
  commentName?: string;
}

const Comment: React.FC<Props> = ({ text, createdAt, commentName }) => {
  return (
    <>
      <Flex  ml={5} flexDir="column">
        <Flex>
          <Text fontSize={10}>{createdAt}</Text>
        </Flex>
        <HStack align={"center"} spacing={"4"}>
          <Text >{commentName}</Text>
          <Flex w={2} h={2} bg={"white"} borderRadius={"10"} ></Flex>
          <Text>{text}</Text>
        </HStack>
      </Flex>
      <Divider mb={2} />
    </>
  );
};
export default Comment;
