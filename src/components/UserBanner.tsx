import { Avatar, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Logout from "./Logout";

const UserBanner: React.FC = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
      <Center flexDir={"column"} rounded={5} w={"100%"} h={200} bg="purple.200">
        <Flex>
          <Avatar
            size={{base: 'sm', md: "md"}}
            src={
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
          />
          <Heading
            display={{ base: "none", md: "flex" }}
            size="lg"
            ml={2}
            alignSelf={"center"}
          >
            {user!.profile!.name}
          </Heading>
        </Flex>
        <Flex
          onClick={() => navigate("/settings")}
          _hover={{ cursor: "pointer", color: "purple.100" }}
          mt={4}
        >
          <Heading display={{ base: "none", md: "flex" }} size="sm">
            Settings
          </Heading>
        </Flex>
        <Flex mt={2}>
          <Logout />
        </Flex>
      </Center>
    </>
  );
};

export default UserBanner;
