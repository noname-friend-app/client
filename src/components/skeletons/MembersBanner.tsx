import {
  HStack,
  Heading,
  SkeletonCircle,
  SkeletonText,
  VStack,
} from "@chakra-ui/react";
import MembersLayout from "../../layouts/grid/Members";

const MembersBannerSkeleton = () => {
  return (
    <MembersLayout>
      <Heading display={{ base: "none", md: "flex" }}>Members</Heading>
      <VStack w={"100%"} h={"100%"} spacing={4} mt={4}>
        {[...Array(5)].map((_, i) => (
          <HStack w="100%" key={i}>
            <SkeletonCircle size="8" />
            <SkeletonText
                display={{ base: "none", md: "flex" }}
                ml={2}
                alignSelf={"center"}
                w={20}
                noOfLines={1}
              />
          </HStack>
        ))}
      </VStack>
    </MembersLayout>
  );
};

export default MembersBannerSkeleton;
