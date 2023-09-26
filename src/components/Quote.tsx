import { Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Comments from "./comments/Comments";
import ProfilePicture from "./ProfilePicture";

// For Comments

interface Props {
  userId: string;
  name: string;
  text: string;
  saidAt: string;
  id: string;
}

const Quote: React.FC<Props> = ({
  userId,
  name,
  text,
  saidAt = "06/07/2022",
  id,
}) => {
  const date = `${new Date(saidAt).getMonth()}/${new Date(
    saidAt
  ).getDate()}/${new Date(saidAt).getFullYear()}`;

  return (
    <>
      <Flex
        rounded={10}
        bg="purple.300"
        border="1px solid #4A3754"
        w="100%"
        minH={120}
        h="auto"
        p={3}
        flexDir="column"
      >
        <HStack>
          <ProfilePicture seed={userId} size="sm" />

          <Heading size="sm">{name}</Heading>
        </HStack>
        <Text mt={4}>{text}</Text>
        <HStack color="gray.300" fontSize={"sm"}>
          <Text>Said: </Text>
          <Text>{date}</Text>
          <Text>{id}</Text>
        </HStack>
      </Flex>
      {/* COMMENTS  ---------------- */}
      <Flex w="100%">
        <Comments id={id} />
      </Flex>
    </>
  );
};

export default Quote;
