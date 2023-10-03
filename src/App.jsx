import React from "react";
import { useState, createContext } from "react";
import Router from "./Router";

export const AppContext = createContext();

function App() {
  const [cart, setCart] = useState({ ids: [], prices: [] });
  const [wishList, setWishList] = useState([]);

  return (
    <AppContext.Provider value={{ cart, setCart, wishList, setWishList }}>
      <Router />
    </AppContext.Provider>
  );
}

export default App;
