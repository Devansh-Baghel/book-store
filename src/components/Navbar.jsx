import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/store"}>Shop</Link>
      <Link to={"/cart"}>Cart</Link>
      <Link to={"/wish-list"}>Wish List</Link>
    </div>
  )
}

export default Navbar
