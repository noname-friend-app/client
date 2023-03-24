import { Flex, Heading, Icon, Text, Link, Box } from "@chakra-ui/react";
import {
  Link as RouterLink,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";
import { Tool } from "react-feather";
import { useGroup } from "../../libs/api";
import Loading from "../Loading";

const GroupInfoBanner: React.FC = () => {
  const { pathname } = useLocation();
  const { groupId } = useParams();
  const { data, isLoading } = useGroup({ id: groupId || "" });
  if (isLoading) return <Loading />;

  if (pathname === "/") return null;

  if (!data) {
    return <Navigate to="/404" />;
  }

  return (
    <>
      <Flex
        rounded={5}
        // ml={{ base: 0, md: 3 }}
        bg="purple.200"
        w={"100%"}
        h={200}
        justify={"space-between"}
        flexDir={{ base: "column", md: "row" }}
        p={3}
      >
        <Box w="100%">
          <Flex
            w="100%"
            align={"center"}
            justify={{ base: "space-between", md: "start" }}
          >
            <Heading noOfLines={1}>{data!.group.name}</Heading>
            <Link to={"/"} as={RouterLink}>
              <Icon
                mt={2}
                ml={2}
                as={Tool}
                w="20px"
                h="20px"
                borderRadius={5}
                _hover={{ cursor: "pointer", color: "purple.100" }}
              />
            </Link>
          </Flex>
          <Text flexDir="row">
            Invite Code:{" "}
            <span style={{ fontWeight: "bold" }}>{data.group.joinCode}</span>
          </Text>
          <Text color={"gray.400"}>{data.group.description}</Text>
        </Box>
        <Box
          bg="purple.100"
          w={{ base: "60px", md: "150px" }}
          h={{ base: "60px", md: "100%" }}
          borderRadius={5}
          alignSelf={{ base: "end", md: "start" }}
        />
        {/* Add later */}
        {/* <Flex
            justify={"space-evenly"}
            align="center"
            bg="purple.300"
            h="50px"
            w="650px"
            borderRadius={15}
          >
            <Text>12 Members</Text>
            <Text>12 Members</Text>
            <Text>12 Members</Text>
            <Text>12 Members</Text>
          </Flex> */}
      </Flex>
    </>
  );
};

export default GroupInfoBanner;
