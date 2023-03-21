import { Center, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Groups: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Center w="100%">
        {(pathname === "/groups" || pathname === '/groups/') && (
          <Heading>Select a group from the menu on the left.</Heading>
        )}
      </Center>
    </>
  );
};

export default Groups;
