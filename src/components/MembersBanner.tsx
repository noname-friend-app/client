import { Flex, VStack, Text, Heading } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import { useGroup } from "../libs/api";
import Loading from "./Loading";
import ProfilePicture from "./ProfilePicture";

const MembersBanner: React.FC = () => {
  const { pathname } = useLocation();
  const { groupId } = useParams();
  const { data, isLoading } = useGroup({ id: groupId || "" });
  if (isLoading) return <Loading />;

  if (pathname === "/") return null;

  if (!data) return null;
  return (
    <>
      <Flex
        bg="purple.200"
        rounded={10}
        overflowY="scroll"
        w="240px"
        h={"100%"}
        p={4}
        flexDir="column"
        align={"center"}
      >
        <Heading display={{ base: "none", md: "flex" }}>Members</Heading>
        <VStack w={"100%"} h={"100%"} spacing={3} mt={4}>
          {data.group.members.map((member, index: number) => (
            <Flex align={"center"} w="100%" justify={"center"} key={index}>
              <ProfilePicture seed={member.user!.id} size="sm" />
              <Text ml={2}>{member.user!.profile!.name.split(" ")}</Text>
            </Flex>
          ))}
        </VStack>
      </Flex>
    </>
  );
};

export default MembersBanner;
