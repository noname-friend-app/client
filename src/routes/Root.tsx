import { Heading } from "@chakra-ui/react";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const Root = () => {
  return (
    <>
      <Heading>Doink!</Heading>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
};

export default Root;
