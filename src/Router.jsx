import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import Store from './Store'
import WishList from './WishList'

function Router() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "cart",
      element: <Cart />
    },
    {
      path: "store",
      element: <Store />
    },
    {
      path: "wish-list",
      element: <WishList />
    }
  ])
 
  return <RouterProvider router={router} />
}

export default Router
