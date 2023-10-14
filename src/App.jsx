import React from "react";
import { useState, createContext } from "react";
import Router from "./Router";
import "react-toastify/dist/ReactToastify.min.css";

export const AppContext = createContext();

function App() {
  const [cart, setCart] = useState({ ids: [], prices: [] });
  const [wishList, setWishList] = useState({ ids: [], prices: [] });
  const [showNotificationBar, setShowNotificationBar] = useState(true);

  return (
    <AppContext.Provider value={{ cart, setCart, wishList, setWishList, showNotificationBar, setShowNotificationBar }}>
      <Router />
    </AppContext.Provider>
  );
}

export default App;
