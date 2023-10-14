import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import homeLogo from "../assets/home.svg";
import cartLogo from "../assets/shopping_cart.svg";
import bookmarks from "../assets/bookmarks.svg";
import shoppingBag from "../assets/shopping_bag.svg";

function Navbar() {
  const { cart } = useContext(AppContext);

  return (
    <div className="sm:flex justify-around text-xl py-4 items-center hidden ">
      <Link to={"/"} className="flex items-end">
        <img src={homeLogo} alt="" className="w-8" />
        {/* Home */}
      </Link>
      <div className="flex gap-8 items-center">
        <Link to={"/store"} className="flex gap-1 items-center">
          Shop
          <img src={shoppingBag} alt="" />
        </Link>
        <Link to={"/wish-list"} className="flex gap-1 items-center">
          Wish List
          <img src={bookmarks} alt="" />
        </Link>
        <div className="bg-main_yellow text-whi px-8 py-1 rounded-lg shadow-sm">
          <Link to={"/cart"} className="flex gap-2 items-center">
            <img src={cartLogo} alt="" />
            Basket
            <span className="text-lg">({cart.ids.length})</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
