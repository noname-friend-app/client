import { Flex, VStack, Text, Heading, Center } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import { useGroup } from "../../libs/api/queries";
import ProfilePicture from "../ProfilePicture";
import { Suspense } from "react";
import MembersBannerSkeleton from "../skeletons/MembersBanner";
import MembersLayout from "../../layouts/grid/Members";

const MembersBanner: React.FC = () => {
  const { pathname } = useLocation();
  const { groupId } = useParams();
  const { data } = useGroup({ id: groupId || "" });

  if (pathname === "/") return null;

  return (
    <>
      <MembersLayout>
        <Heading display={{ base: "none", md: "flex" }}>Members</Heading>
        <Center>
          <VStack w={"100%"} h={"100%"} spacing={4} mt={4}>
            <Suspense fallback={<MembersBannerSkeleton />}>
              {data.group.members.map((member, index: number) => (
                <Flex align={"center"} w="100%" key={index}>
                  <ProfilePicture seed={member.profile!.user!.id} size="sm" />
                  <Text ml={2}>{member.profile.name.split("")}</Text>
                </Flex>
              ))}
            </Suspense>
          </VStack>
        </Center>
      </MembersLayout>
    </>
  );
};

export default MembersBanner;