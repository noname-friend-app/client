import { Center, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserBanner: React.FC = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <Center rounded={5} w="100%" h={120} bg="purple.200">

      </Center>
    </>
  );
};

export default UserBanner;
