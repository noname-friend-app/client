import Root from '../routes/Root'
import {
  Router,
  RootRoute,
} from '@tanstack/router'

//routes 
import { dashboardRoute } from '../routes/Dashboard'
import { socialRoute } from '../routes/Social'

export const rootRoute = new RootRoute({
  component: Root,
})

const routeTree = rootRoute.addChildren([dashboardRoute, socialRoute])

export const router = new Router({routeTree})

declare module '@tanstack/router' {
  interface Register {
    router: typeof router
  }
}

