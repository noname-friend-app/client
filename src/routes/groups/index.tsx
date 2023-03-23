import { Center, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import TabCard from "../../components/TabCard";
import { nav } from "./Nav";

const Groups: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <>
      {(pathname === "/groups" || pathname === "/groups/") && (
        <Heading>Select a group from the menu on the left.</Heading>
      )}
      {/* <Flex flexDir={{base: 'column', md: 'row'}} w='100%' h='100%'>
        {tabs.map((tab, index) => (
            <Center>
              <TabCard
                label={tab.label}
                path={tab.path}
                color={tab.color}
                img={tab.img}
              />
            </Center>
        ))}
      </Flex> */}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
        }}
        px={{base: 4, md: 0}}
        // mt={{base: 4, md: 0}}
        w="100%"
        h="100%"
        columnGap={4}
        rowGap={{base: 4, md: 8}}
        alignContent="center"
      >
        {nav.map((navItem, index) => (
          <GridItem>
            <Center>

            <TabCard
              label={navItem.label}
              path={navItem.path}
              color={navItem.color}
              img={navItem.img}
            />
            </Center>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Groups;
