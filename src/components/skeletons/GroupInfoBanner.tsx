import { Flex, Skeleton, VStack } from "@chakra-ui/react";
import GroupInfoLayout from "../../layouts/grid/GroupInfo";

const GroupInfoBannerSkeleton: React.FC = () => {
  return (
    <GroupInfoLayout>
      <Flex w="100%" justify={"space-between"}>
        <VStack alignSelf={"start"} spacing={4}>
          <Skeleton w={400} h={8} size={{ base: "8", md: "10" }} />
          <Skeleton
            alignSelf={"start"}
            w={100}
            h={3}
            size={{ base: "8", md: "10" }}
          />
          <Skeleton
            alignSelf={"start"}
            w={100}
            h={3}
            size={{ base: "8", md: "10" }}
          />
        </VStack>
        <Skeleton
          w={{ base: "60px", md: "150px" }}
          h={{ base: "60px", md: "100%" }}
          borderRadius={5}
        />
      </Flex>
    </GroupInfoLayout>
  );
};

export default GroupInfoBannerSkeleton;
