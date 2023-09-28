import { useContext } from "react";
import { AppContext } from "./App";

function Cart() {
  const { cart } = useContext(AppContext);

  return (
    <div>
      {cart.map((book) => (
        <h1 key={book}>{book}</h1>
      ))}
    </div>
  );
}

export default Cart;
