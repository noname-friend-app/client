import { Center, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import TabCard from "../../components/TabCard";

const tabs = [
  {
    label: "Finannce",
    path: "/finance",
    color: "#95F2D9",
    img: require("../../assets/images/finance.jpg"),
  },
  {
    label: "Shopping List",
    path: "/shopping-list",
    color: "#9D8DF1",
    img: require("../../assets/images/shopping.jpg"),
  },
  {
    label: "Events",
    path: "/events",
    color: "#EFEFEF",
    img: require("../../assets/images/events.jpg"),
  },

  {
    label: "Social",
    path: "/social",
    color: "#D62246",
    img: require("../../assets/images/social.jpg"),
  },
  {
    label: "Finannce",
    path: "/finance",
    color: "#95F2D9",
    img: require("../../assets/images/finance.jpg"),
  },
  {
    label: "Shopping List",
    path: "/shopping-list",
    color: "#9D8DF1",
    img: require("../../assets/images/shopping.jpg"),
  },
  {
    label: "Events",
    path: "/events",
    color: "#EFEFEF",
    img: require("../../assets/images/events.jpg"),
  },

  {
    label: "Social",
    path: "/social",
    color: "#D62246",
    img: require("../../assets/images/social.jpg"),
  },
];

const Groups: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Flex overflowY='scroll' w="100%" h={400}>
        {(pathname === "/groups" || pathname === "/groups/") && (
          <Heading>Select a group from the menu on the left.</Heading>
        )}
        {/* <Center w="100%" h="100%"> */}
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
            }}
            // autoRows={"inherit"}
            // columnGap={{ base: 4, md: 15, lg: 40 }}
            // rowGap={{ base: 5, md: 10 }}
            w="100%"
            // px={{ base: 8, lg: 0 }}
            // py={{ base: 8, md: 4 }}
            // px={{base: 0, sm: 2, md: 0}}
            h="100%"
            // alignContent={"center"}
            // ml={4}
            // mr={4}
          >
            {tabs.map((tab, index) => (
              <GridItem colSpan={1} key={index}>
                {/* <Center> */}
                  <TabCard
                    label={tab.label}
                    path={tab.path}
                    color={tab.color}
                    img={tab.img}
                  />
                {/* </Center> */}
              </GridItem>
            ))}
          </Grid>
        {/* </Center> */}
      </Flex>
    </>
  );
};

export default Groups;
