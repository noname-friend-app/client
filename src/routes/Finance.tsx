import { Flex, Heading } from "@chakra-ui/react";
import GroupNav from "./groups/Nav";

const Finance: React.FC = () => {
  return (
    <>
      <Flex mt={4} flexDir={'column'} w='100%' h='100%'>
        <GroupNav />
        <Heading mt={4}>Finance</Heading>
      </Flex>
    </>
  );
};

export default Finance;
