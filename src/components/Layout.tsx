import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import GroupInfoBanner from "./GroupInfoBanner";
import LeftNav from "./LeftNav";
import MembersBanner from "./MembersBanner";

const Layout: React.FC = () => {
  return (
    <>
      <Flex p={5} w="100%" h="100vh">
        <LeftNav />
        <GroupInfoBanner />
        <Flex>
          <Outlet />
          <MembersBanner />
        </Flex>
      </Flex>
    </>
  );
};

export default Layout;
