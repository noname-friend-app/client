import { Center, Heading, HStack } from "@chakra-ui/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useWindowDimensions } from "../../libs/dimensions";

export const nav = [
  {
    label: "Social",
    path: "social",
    color: "#D62246",
    img: require("../../assets/images/social.jpg"),
    secondaryColor: "#CB7083",
  },
  {
    label: "Events",
    path: "events",
    color: "#EFEFEF",
    img: require("../../assets/images/events.jpg"),
    secondaryColor: "#ABABAB",
  },
  {
    label: "Finance",
    path: "finance",
    color: "#95F2D9",
    img: require("../../assets/images/finance.jpg"),
    secondaryColor: "#C5EAE0",
  },
  {
    label: "Shopping List",
    path: "shopping",
    color: "#9D8DF1",
    img: require("../../assets/images/shopping.jpg"),
    secondaryColor: "#B6A9F9",
  },
];

const GroupNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { groupId } = useParams();
  const { width } = useWindowDimensions();
  return (
    <HStack w={{ base: "100%", sm: "auto" }} alignSelf={"center"}>
      {nav.map((navItem, index) => (
        <Center
          w={{ base: "100%", sm: "auto" }}
          color={pathname.includes(navItem.path) ? "purple.200" : "white"}
          key={index}
          _hover={{
            bg: navItem.color,
            cursor: "pointer",
            color: "purple.200",
            marginTop: pathname.includes(navItem.path) || width < 570 ? 0 : -4,
          }}
          p={3}
          h="100%"
          rounded={5}
          bg={
            pathname.includes(navItem.path)
              ? navItem.color
              : navItem.secondaryColor
          }
          onClick={() => navigate(`/groups/${groupId}/${navItem.path}`)}
        >
          <Heading size="sm">{navItem.label}</Heading>
        </Center>
      ))}
    </HStack>
  );
};

export default GroupNav;
