import { Flex } from "@chakra-ui/react";
import GroupNav from "./groups/Nav";

const Social: React.FC = () => {
  return (
    <>
      <Flex p={4}  flexDir={'column'} w='100%' h='100%'>
        <GroupNav />
      </Flex>
    </>
  );
};

export default Social;
