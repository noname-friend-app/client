import { Avatar, Flex, Heading, HStack, Text } from "@chakra-ui/react";

interface Props {
  profileImg?: string;
  name?: string;
  text?: string;
  createdAt?: string;
}

const Quote: React.FC<Props> = ({
  profileImg = "",
  name = "Alex",
  text = "Quandale Dingle here Quandale Dingle here Quandale Dingle here Quandale Dingle here Quandale Dingle here Quandale Dingle here Quandale Dingle here Quandale Dingle here",
  createdAt = "06/07/2022",
}) => {
  return (
    <Flex
      rounded={10}
      bg="purple.300"
      border="1px solid #4A3754"
      w="100%"
      minH={120}
      h="auto"
      p={3}
      flexDir='column'
    >
      <HStack>
        <Avatar size="sm" src={profileImg} name={name} />
        <Heading size="sm">{name}</Heading>
        <Flex rounded='full' w={1} h={1} bg='white' />
        <Text color='gray.300' size='sm'>{createdAt}</Text>
      </HStack>
      <Text mt={4}>{text}</Text>
    </Flex>
  );
};

export default Quote;
