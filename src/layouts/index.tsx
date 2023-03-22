import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import GroupInfoBanner from "../components/GroupInfoBanner";
import LeftNav from "../components/LeftNav";
import MembersBanner from "../components/MembersBanner";

const Layout: React.FC = () => {
  return (
    <>
      <Flex p={5} pr={8} w="100%" h="100vh">
        <LeftNav />
        <Flex flexDir={"column"} w="100%" h="100%">
          <GroupInfoBanner />
          <Flex rounded={5} mt={3} ml={3} w="100%" h="100%" bg="purple.200">
            <Outlet />
          </Flex>
          <MembersBanner />
        </Flex>
      </Flex>
    </>
  );
};

export default Layout;