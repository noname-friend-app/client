import { Center, Flex, Heading } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import GroupInfoBanner from "../components/GroupInfoBanner";
import LeftNav from "../components/LeftNav";
import MembersBanner from "../components/MembersBanner";

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const isIndexPage = pathname === "/";
  return (
    <>
      <Flex p={5} pr={{ base: 5, md: 8 }} w="100%" h="100vh">
        <LeftNav />
        <Flex flexDir={"column"} w="100%" h="100%">
          {!isIndexPage && <GroupInfoBanner />}
          <Flex
            rounded={5}
            mt={isIndexPage ? 0 : 3}
            ml={3}
            w="100%"
            h="100%"
            bg="purple.200"
          >
            {isIndexPage ? (
              <Center w="100%" h="100%">
                <Heading size="md">
                  Select a group or create a new one on the left
                </Heading>
              </Center>
            ) : (
              <Outlet />
            )}
          </Flex>
          <MembersBanner />
        </Flex>
      </Flex>
    </>
  );
};

export default Layout;
