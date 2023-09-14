import GroupInfoLayout from "../../layouts/grid/GroupInfo";
import { Flex, Box, Skeleton } from "@chakra-ui/react";

const GroupInfoBannerSkeleton: React.FC = () => {
  return (
    <GroupInfoLayout>
      <Box w="100%">
        <Flex w="100%" align={"center"}>
          <Skeleton w={400} h={8} size={{ base: "8", md: "10" }} />
          <Skeleton w={400} h={8} size={{ base: "8", md: "10" }} />
        </Flex>
      </Box>
    </GroupInfoLayout>
  );
};

export default GroupInfoBannerSkeleton;
