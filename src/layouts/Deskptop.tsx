import { Stack, Flex, HStack } from "@chakra-ui/react";
import { useLocation, Outlet } from "react-router-dom";
import GroupInfoBanner from "../components/groups/GroupInfoBanner";
import LeftNav from "../components/LeftNav";
import MembersBanner from "../components/groups/MembersBanner";
import { Suspense } from "react";
import GroupInfoBannerSkeleton from "../components/skeletons/GroupInfoBanner";
import MembersBannerSkeleton from "../components/skeletons/MembersBanner";

const DesktopLayout: React.FC = () => {
  const { pathname } = useLocation();

  let isIndexPage = pathname === "/";
  const profileOnly = pathname === "/groups/new";

  return (
    <>
      <Stack spacing={4} p={4} direction={"row"} w="100%" h="100vh">
        <LeftNav profileOnly={profileOnly} />
        <Stack spacing={4} direction={"column"} w="100%" h="100%">
          {!isIndexPage && !profileOnly ? (
            <Suspense fallback={<GroupInfoBannerSkeleton />}>
              <GroupInfoBanner />
            </Suspense>
          ) : null}
          <HStack overflow="hidden" h={"100%"} w={"100%"} spacing={4}>
            <Flex
              bg="purple.200"
              rounded={10}
              overflowY="scroll"
              w="100%"
              h={"100%"}
            >
              <Outlet />
            </Flex>
            {!isIndexPage && !profileOnly ? (
              <Suspense fallback={<MembersBannerSkeleton />}>
                <MembersBanner />
              </Suspense>
            ) : null}
          </HStack>
        </Stack>
      </Stack>
    </>
  );
};

export default DesktopLayout;
