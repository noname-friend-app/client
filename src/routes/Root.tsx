import { Heading } from "@chakra-ui/react";
import { Outlet } from "@tanstack/react-router";

const Root = () => {
  return (
    <>
      <Heading>Doink!</Heading>
      <Outlet />
    </>
  );
};

export default Root;
