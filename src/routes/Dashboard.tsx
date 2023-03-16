import { Heading } from "@chakra-ui/react";
import { Route } from "@tanstack/router";
import { rootRoute } from "../libs/router";


const Dashboard = () => {
  return (
    <>
      <Heading>Dashboard</Heading>
    </>
  );
};

export const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Dashboard,
})


export default Dashboard;
