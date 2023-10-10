import { Flex } from "@chakra-ui/react";

interface IProps {
  children: React.ReactNode;
}

const GroupInfoLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Flex rounded={5} bg="purple.200" w={"100%"} h={200} p={3}>
        {children}
      </Flex>
    </>
  );
};

export default GroupInfoLayout;
