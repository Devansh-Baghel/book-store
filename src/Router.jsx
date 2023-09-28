import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Store from './components/Store'
import WishList from './components/WishList'

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
      path: "shop",
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
