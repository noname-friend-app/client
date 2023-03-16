import { Route } from "@tanstack/router"
import { rootRoute } from "../libs/router"

const Login = () => {
  return (
    <>
    </>
  )
}

export const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
})
export default Login