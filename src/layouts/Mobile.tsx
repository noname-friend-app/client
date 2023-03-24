import { Center, Flex, Heading, Icon } from "@chakra-ui/react";
import { Menu } from "react-feather";
import { motion } from "framer-motion";
import { useState } from "react";
import LeftNav from "../components/LeftNav";
import { Outlet, useLocation } from "react-router-dom";

const MobileLayout: React.FC = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(pathname === "/" ? true : false);

  return (
    <>
      <Flex w="100%" h="auto">
        <motion.div
          style={{ position: "fixed", left: 0, zIndex: 2, height:'100vh' }}
          animate={{
            width: open ? 80 : 0,
          }}
          transition={{
            ease: "easeInOut",
          }}
        >
          <motion.div
            initial={{ display: "none" }}
            style={{
              width: "100%",
              height: "100%",
            }}
            animate={{
              display: open ? "block" : "none",
            }}
          >
            <Flex bg="purple.300" w={"100%"} h="100%">
              <LeftNav />
            </Flex>
          </motion.div>
        </motion.div>

        <Flex
          onClick={() => {
            if (open) setOpen(false);
          }}
          bg="purple.200"
          p={4}
          w="100%"
          minH="100vh"
          h="auto"
          flexDir={"column"}
        >
          <Icon
            _hover={{ cursor: "pointer", color: "purple.100" }}
            onClick={() => setOpen(!open)}
            w={25}
            h={25}
            as={Menu}
          />
          {pathname === "/" ? (
            <Center w="100%" h="100%">
              <Heading size="sm">Select a group on the left</Heading>
            </Center>
          ) : (
            <Outlet />
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default MobileLayout;
