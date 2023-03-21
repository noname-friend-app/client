import {
  Avatar,
  Flex,
  Heading,
  SkeletonCircle,
  SkeletonText,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGroups } from "../libs/api";

const GroupsBanner: React.FC = () => {
  const { data, isLoading } = useGroups();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isLoading) {
      if (data) {
        if (data.groups) {
          if (data.groups.length === 0 && pathname !== "/create-group") {
            navigate("/create-group");
          }
        }
      }
    }
  }, [data, isLoading, navigate, pathname]);

  return (
    <>
      <Flex
        display={
          !isLoading ? (data!.groups.length === 0 ? "none" : "flex") : "flex"
        }
        rounded={5}
        bg="purple.200"
        w="100%"
        h="100%"
        mt={3}
        justifyContent="space-between"
        flexDir="column"
        p={3}
      >
        <Flex flexDir="column">
          <Heading display={{ base: "none", md: "flex" }} alignSelf={"center"}>
            Groups
          </Heading>
          {isLoading ? (
            <VStack w="100%">
              {[...Array(3)].map((_, index) => (
                <Flex key={index}>
                  <SkeletonCircle size={{ base: "8", md: "10" }} />
                  <SkeletonText
                    display={{ base: "none", md: "flex" }}
                    ml={2}
                    alignSelf={"center"}
                    w={20}
                    noOfLines={1}
                  />
                </Flex>
              ))}
            </VStack>
          ) : (
            <Flex flexDir="column" mt={4}>
              {data!.groups.map((group, index: number) => (
                <Flex onClick={() => navigate(`/groups/${group.id}`)} alignSelf={{base: 'center', md: 'start'}} key={index} _hover={{ color: "purple.100", cursor: "pointer" }}>
                  <Avatar size="sm" />
                  <Text display={{base: 'none', md: 'flex'}} ml={3} size="sm" alignSelf={"center"}>
                    {group.name}
                  </Text>
                </Flex>
              ))}
            </Flex>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default GroupsBanner;
