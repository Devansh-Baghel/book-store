import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../App'

function Navbar() {
  const {cart, wishList} = useContext(AppContext);

  return (
    <div>
      <Link to={"/"}>Home </Link>
      <Link to={"/store"}> Shop </Link>
      <Link to={"/cart"}> Cart ({cart.length})</Link>
      <Link to={"/wish-list"}> Wish List ({wishList.length})</Link>
    </div>
  )
}

export default Navbar
