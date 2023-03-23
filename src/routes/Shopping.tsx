import { Flex, Heading } from "@chakra-ui/react";
import GroupNav from "../components/groups/Nav";

const Shopping: React.FC = () => {
  return (
    <>
      <Flex mt={4} flexDir={'column'} w='100%' h='100%'>
        <GroupNav />
        <Heading mt={4}>Shopping</Heading>
      </Flex>
    </>
  );
};

export default Shopping;
