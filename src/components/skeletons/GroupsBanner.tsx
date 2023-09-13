import {
  Flex,
  Heading,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import GroupsLayout from "../../layouts/grid/Groups";
import { useWindowDimensions } from "../../libs/dimensions";

const GroupsBannerSkeleton: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <GroupsLayout display="flex" width={width}>
      <Flex flexDir="column">
        <Heading display={{ base: "none", md: "flex" }} alignSelf={"center"}>
          Groups
        </Heading>
        <Flex flexDir={'column'}>
          {[...Array(5)].map((_, index) => (
            <Flex mt={4} key={index}>
              <Skeleton w={8} h={8} size={{ base: "8", md: "10" }} />
              <SkeletonText
                display={{ base: "none", md: "flex" }}
                ml={2}
                alignSelf={"center"}
                w={20}
                noOfLines={1}
              />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </GroupsLayout>
  );
};

export default GroupsBannerSkeleton;
