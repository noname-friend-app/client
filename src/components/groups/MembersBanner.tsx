import {
  Flex,
  VStack,
  Text,
  Heading,
  Center,
} from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import { useGroup } from "../../libs/api";
import ProfilePicture from "../ProfilePicture";
import { Suspense } from "react";
import MembersBannerSkeleton from "../skeletons/MembersBannerSkeleton";

const MembersBanner: React.FC = () => {
  const { pathname } = useLocation();
  const { groupId } = useParams();
  const { data } = useGroup({ id: groupId || "" });
  // const toast = useToast();

  // if (isLoading) return <Loading />;

  if (pathname === "/") return null;

  // if (isError){
  //   toast({
  //     title: "Error",
  //     description: "An error has occurred while trying to get group",
  //     status: "error",
  //     duration: 5000,
  //     isClosable: true,
  //   });
  // }
  // if (!data) return null;

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
        <Heading display={{ base: "none", md: "flex" }}>Members</Heading>
        <Center>
          <VStack w={"100%"} h={"100%"} spacing={4} mt={4}>
            {/* <Suspense fallback={<MembersBannerSkeleton />}>
              {data.group.members.map((member, index: number) => (
              <Flex align={"center"} w="100%" key={index}>
                <ProfilePicture seed={member.profile.id} size="sm" />
                <Text ml={2}>{member.profile.name.split(" ")[0]}</Text>
              </Flex>
            ))}
            </Suspense> */}
          </VStack>
        </Center>
      </Flex>
    </>
  );
};

export default MembersBanner;