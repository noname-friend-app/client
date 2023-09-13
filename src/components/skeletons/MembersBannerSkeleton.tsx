import { Flex } from "@chakra-ui/react";

const MembersBannerSkeleton = () => {
  return (
    <>
      {Array(5).map((_, i) => (
        <Flex align={"center"} w="100%" key={i}>
          {/* <ProfilePicture seed={member.profile!.user!.id} size="sm" /> */}
          {/* <Text ml={2}>{member.profile.name.split(" ")}</Text> */}
        </Flex>
      ))}
    </>
  );
};

export default MembersBannerSkeleton;
