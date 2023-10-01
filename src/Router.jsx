import Home from "./components/Home";
import Cart from "./components/Cart";
import Store from "./components/Store";
import WishList from "./components/WishList";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import HamburgerMenu from "./components/HamburgerMenu";

function Router() {

  return (
    <BrowserRouter>
      <Navbar /> 
      <HamburgerMenu /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/shop" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
