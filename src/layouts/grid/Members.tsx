import { Flex } from "@chakra-ui/react";

interface IProps {
  children: React.ReactNode;
}

const MembersLayout: React.FC<IProps> = ({children}: IProps) => {
  return (
    <>
      <Flex
        display={{ base: "none", md: "flex" }}
        bg="purple.200"
        rounded={10}
        overflowY="scroll"
        w="240px"
        h={"100%"}
        p={4}
        flexDir="column"
        align={"center"}
      >
        {children}
      </Flex>
    </>
  );
}

export default MembersLayout;