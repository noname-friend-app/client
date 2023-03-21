import { Flex, Center, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const SettingsLayout: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isAccountPage =
    pathname === "/settings/account" || pathname === "/settings/account/"
      ? true
      : false;
  const isProfilePage =
    pathname === "/settings/profile" || pathname === "/settings/profile/"
      ? true
      : false;

  useEffect(() => {
    if (pathname === "/settings" || pathname === "/settings/") {
      navigate("/settings/account");
    }
  }, [pathname, navigate]);
  return (
    <>
      <Flex h="100vh" w="100%" p={5}>
        <Flex bg="purple.200" borderRadius={15} h="100%" w="100%" p={10}>
          <Flex flexDir={"column"} w={300}>
            <Heading>Settings</Heading>
            <Text fontWeight={300}>Manage your account settings here.</Text>

            <Text
              textAlign={"left"}
              as="button"
              color={isAccountPage ? "purple.100" : "white"}
              mt={4}
              fontWeight={600}
              w={"120px"}
              onClick={() => navigate("account")}
            >
              Account Settings
            </Text>
            <Text
              textAlign={"left"}
              as="button"
              color={isProfilePage ? "purple.100" : "white"}
              w={"120px"}
              onClick={() => navigate("profile")}
            >
              Profile Settings
            </Text>
          </Flex>
          <Center bg="blue" w={"100%"}>
            {pathname === "/settings" || pathname === "/settings/" ? (
              <Heading>Select an option on the left.</Heading>
            ) : (
              <Outlet />
            )}
          </Center>
        </Flex>
      </Flex>
    </>
  );
};
export default SettingsLayout;
