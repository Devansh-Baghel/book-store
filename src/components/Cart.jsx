import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import Loader from "./Loader";
import emptyCart from "../assets/undraw_empty_cart.svg";
import EmptyList from "./EmptyList";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Cart() {
  const { cart } = useContext(AppContext);
  const { data, error, isLoading } = useSWR(
    cart.length === 0
      ? null
      : `https://gutendex.com/books?ids=${cart.join(",")}`,
    fetcher
  );

  if (error) {
    return <div className="text-2xl text-center mt-20">There was an error</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <EmptyList src={emptyCart} page={"cart"} />;
  }

  return (
    <div>
      {data.results.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          {/* <p>{book.authors[0].name}</p> */}
          <p>{book.id}</p>
          <img src={book.formats["image/jpeg"]} />
          {/* <p>{price}</p> */}
          <div>
            <button>+</button>
            <span>1</span>
            <button>-</button>
          </div>
        </div>
      ))}

      <button>Checkout</button>
    </div>
  );
}

export default Cart;
