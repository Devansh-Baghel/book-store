import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
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
      path: "wish-list",
      element: <WishList />
    }
  ])
 
  return <RouterProvider router={router} />
}

export default Router
