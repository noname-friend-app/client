import { Avatar, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { LogOut, Settings } from "react-feather";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useWindowDimensions } from "../libs/dimensions";
import Logout from "./Logout";

interface Props {
  h?: number | string;
}

const UserBanner: React.FC<Props> = ({ h }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  return (
    <>
      <Flex
        justifyContent={width > 569 ? "start" : "center"}
        rounded={5}
        w={"100%"}
        h={h}
        bg={width > 569 ? "purple.200" : "purple.300"}
        p={4}
      >
        <Flex
          h="100%"
          justify={"space-between"}
          flexDir={"column"}
          alignSelf={"start"}
        >
          <Flex>
            <Avatar
              size={{ base: "sm", md: "md" }}
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
              {user!.profile!.name.split(" ")[0]}
            </Heading>
          </Flex>
          <Flex flexDir="column">
            <Flex
              onClick={() => navigate("/settings")}
              _hover={{ cursor: "pointer", color: "purple.100" }}
              mt={4}
              alignSelf={{ base: "center", md: "start" }}
            >
              <Icon as={Settings} />
              <Heading ml={3} display={{ base: "none", md: "flex" }} size="sm">
                Settings
              </Heading>
            </Flex>
            <Flex alignSelf={{ base: "center", md: "start" }} mt={3}>
              <Logout>
                <Flex>
                  <Icon as={LogOut} />
                  <Text
                    display={{ base: "none", md: "flex" }}
                    ml={3}
                    alignSelf={"center"}
                  >
                    Logout
                  </Text>
                </Flex>
              </Logout>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default UserBanner;
