import { Flex, Heading } from "@chakra-ui/react";
import GroupNav from "../components/groups/Nav";

const Social: React.FC = () => {
  return (
    <>
      <Flex px={{base: 0, sm: 4}} mt={4} flexDir={'column'} w='100%' h='100%'>
        <GroupNav />
        <Heading mt={5}>Social</Heading>
      </Flex>
    </>
  );
};

export default Social;
