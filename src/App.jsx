import React from 'react'
import { useState, createContext } from 'react'
import Router from './Router';

export const AppContext = createContext();

function App() {
  const [cart, setCart] = useState(["metamorphosis", "the book of disquiet"])
  const [wishList, setWishList] = useState(["whole numbers and half truths", "12 rules for life"])

  return (
    <AppContext.Provider value={{cart, setCart, wishList, setWishList}}>
      <Router />
    </AppContext.Provider>
  )
}

export default App
