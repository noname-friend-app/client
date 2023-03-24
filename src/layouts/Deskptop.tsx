import { Stack, Flex, HStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import GroupInfoBanner from "../components/groups/GroupInfoBanner";
import LeftNav from "../components/LeftNav";
import MembersBanner from "../components/MembersBanner";

const DesktopLayout: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);
  let isIndexPage = pathname === "/";
  const profileOnly = pathname === "/groups/new";
  return (
    <>
      <Stack spacing={4} p={4} direction={"row"} w="100%" h="100vh">
        <LeftNav profileOnly={profileOnly} />
        <Stack spacing={4} direction={"column"} w="100%" h="100%">
          {!isIndexPage && !profileOnly ? <GroupInfoBanner /> : null}
          <HStack h={"100%"} w={"100%"} spacing={4}>
            <Flex
              bg="purple.200"
              rounded={10}
              overflowY="hidden"
              w="100%"
              h={"100%"}
            >
              <Outlet />
            </Flex>
            <MembersBanner />
          </HStack>
        </Stack>
      </Stack>
    </>
  );
};

export default DesktopLayout;
