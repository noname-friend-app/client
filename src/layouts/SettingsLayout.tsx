import { Flex, Heading, Text, Link } from "@chakra-ui/react";
import { useEffect } from "react";
import {
  Link as RouterLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

interface Route {
  label: string;
  path: string;
}


const routes: Route[] = [
  {
    label: "Profile Settings",
    path: "/settings/profile",
  },
  // {
  //   label: "Account Settings",
  //   path: "/settings/account",
  // },
  // Commented out until route is added to update account info
];

const SettingsLayout: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/settings" || pathname === "/settings/") {
      navigate("/settings/profile");
    }
  }, [pathname, navigate]);
  return (
    <>
      <Flex h="100vh" w="100%" p={5}>
        <Flex bg="purple.200" borderRadius={15} h="100%" w="100%" p={10}>
          <Flex flexDir={"column"} w={300}>
            <Link to={"/"} as={RouterLink}>
              Back
            </Link>

            <Heading mt={5}>Settings</Heading>
            <Text mb={5} fontWeight={300}>
              Manage your account settings here.
            </Text>
            {/* Logic for buttons, add the ability for us to create more settings pages easily */}
            {routes.map((route, index) => (
              <Text
                key={index}
                textAlign={"left"}
                as="button"
                w={"120px"}
                _hover={{ color: "purple.100" }}
                onClick={() => navigate(route.path)}
                // Logic for highlighting the current page and the weight of the text
                color={
                  pathname === route.path || pathname + "/" === route.path
                    ? "purple.100"
                    : "white"
                }
                fontWeight={
                  pathname === route.path || pathname + "/" === route.path
                    ? "500"
                    : "400"
                }
              >
                {route.label}
              </Text>
            ))}
          </Flex>
          {/* Settings for Outlet */}
          <Flex w={"100%"} justify="center" align={"center"}>
            {pathname === "/settings" || pathname === "/settings/" ? (
              <Heading>Select an option on the left.</Heading>
            ) : (
              <Outlet />
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default SettingsLayout;
