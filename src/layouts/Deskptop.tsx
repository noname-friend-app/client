import { Stack, Flex } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import GroupInfoBanner from "../components/groups/GroupInfoBanner";
import LeftNav from "../components/LeftNav";

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
          <Flex
            bg="purple.200"
            rounded={10}
            overflowY="scroll"
            w="100%"
            h={"100%"}
          >
            <Outlet />
          </Flex>
        </Stack>
      </Stack>
    </>
  );
};

export default DesktopLayout;
