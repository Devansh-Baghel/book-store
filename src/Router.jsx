import Home from './components/Home'
import Cart from './components/Cart'
import Store from './components/Store'
import WishList from './components/WishList'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/shop' element={<Store />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wish-list' element={<WishList />} />
      </Routes>
    </BrowserRouter>
  )

}

export default Router
