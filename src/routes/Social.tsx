import { Flex, Heading, VStack } from "@chakra-ui/react";
import GroupNav from "../components/groups/Nav";
import Quote from "../components/Quote";

const Social: React.FC = () => {
  return (
    <>
      <Flex mb={4} px={{base: 0, sm: 4}} mt={4} flexDir={'column'} w='100%' h='100%'>
        <GroupNav />
        <Heading mt={5}>Social</Heading>
        <VStack mt={4} spacing={4}>
        {[...Array(20)].map((_, index) => (
          <Quote />
        ))}
        </VStack>
      </Flex>
    </>
  );
};

export default Social;
