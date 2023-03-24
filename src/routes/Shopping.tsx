import { Center, Flex, Heading } from "@chakra-ui/react";
import GroupNav from "../components/groups/Nav";

const Shopping: React.FC = () => {
  return (
    <>
      <Flex mt={4} flexDir={"column"} w="100%" h="100%">
        <GroupNav />
        <Center mt={4} w="100%">
          <Heading>Coming soon...</Heading>
        </Center>
      </Flex>
    </>
  );
};

export default Shopping;
