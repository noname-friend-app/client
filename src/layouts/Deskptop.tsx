import { Stack, Flex } from "@chakra-ui/react";
import { useLocation, Outlet } from "react-router-dom";
import GroupInfoBanner from "../components/groups/GroupInfoBanner";
import LeftNav from "../components/LeftNav";

const DesktopLayout: React.FC = () => {
  const { pathname } = useLocation();
  const isIndexPage = pathname === "/";

  return (
    <>
    <Stack spacing={4} p={4} direction={"row"} w="100%" h="100vh">
      <LeftNav />
      <Stack spacing={4} direction={"column"} w="100%" h="100%">
        {!isIndexPage && <GroupInfoBanner />}
        {/* <VStack spacing={4} w="100%" h="100%"> */}
          <Flex
            bg="purple.200"
            rounded={10}
            overflowY="scroll"
            w="100%"
            h={"100%"}
          >
            <Outlet />
          </Flex>
        {/* </VStack> */}
      </Stack>
    </Stack>
    </>
  )
}

export default DesktopLayout