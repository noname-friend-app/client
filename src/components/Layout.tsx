import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <Flex w="100%" h="100vh">
        <Outlet />
      </Flex>
    </>
  );
};

export default Layout;
