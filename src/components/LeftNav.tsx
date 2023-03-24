import { VStack } from "@chakra-ui/react";
import { useWindowDimensions } from "../libs/dimensions";
import GroupsBanner from "./groups/GroupsBanner";
import UserBanner from "./UserBanner";

interface Props {
  profileOnly?: boolean;
}
const LeftNav: React.FC<Props> = ({ profileOnly }) => {
  const { width } = useWindowDimensions();
  return (
    <>
      <VStack
        spacing={4}
        w={{ base: width > 569 ? 20 : "100%", md: 250 }}
        h="100%"
      >
        <UserBanner h={profileOnly ? "100%" : width > 569 ? 200 : 120} />
        {!profileOnly && <GroupsBanner />}
      </VStack>
    </>
  );
};

export default LeftNav;
