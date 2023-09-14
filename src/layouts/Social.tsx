import { Flex } from "@chakra-ui/react";
import GroupNav from "../components/groups/Nav";

interface IProps {
  children: React.ReactNode;
}

const SocialLayout: React.FC<IProps> = ({ children }: IProps) => {
  return (
    <Flex
      pb={200}
      px={{ base: 0, sm: 4 }}
      mt={4}
      flexDir={"column"}
      w="100%"
      h="100%"
    >
      <GroupNav />
      {children}
    </Flex>
  );
};

export default SocialLayout;
