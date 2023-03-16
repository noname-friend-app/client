import { Heading } from "@chakra-ui/react";
import { Route } from "@tanstack/router";
import { rootRoute } from "../libs/router";
const Social = () => {
  return (
    <>
      <Heading>Social</Heading>
    </>
  );
};

export const socialRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/social",
  component: Social,
});

export default Social;
