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
 
  return (
    <div>
      <h1>::NAVBAR HERE::</h1>
      <RouterProvider router={router} />
    </div>
  )
}

export default Router
