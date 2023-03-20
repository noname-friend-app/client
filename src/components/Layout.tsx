import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import UserBanner from "./UserBanner";

const Layout: React.FC = () => {
  return (
    <>
      <Flex p={5} w="100%" h="100vh">
        <Outlet />
        <Flex>
          <UserBanner />
        </Flex>
      </Flex>
    </>
  );
};

export default Layout;
