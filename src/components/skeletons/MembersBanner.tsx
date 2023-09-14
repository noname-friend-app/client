import {
  Center,
  Flex,
  Heading,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import MembersLayout from "../../layouts/grid/Members";

const MembersBannerSkeleton = () => {
  return (
    <MembersLayout>
      <Heading display={{ base: "none", md: "flex" }}>Members</Heading>
      <Center>
        <VStack w={"100%"} h={"100%"} spacing={4} mt={4}>
          {Array(5).map((_, i) => (
            <Flex align={"center"} w="100%" key={i}>
              <SkeletonCircle size="10" />
              <Skeleton w="100%" h="20px" ml={2} />
            </Flex>
          ))}
        </VStack>
      </Center>
    </MembersLayout>
  );
};

export default MembersBannerSkeleton;
