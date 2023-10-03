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
    cart.ids.length === 0
      ? null
      : `https://gutendex.com/books?ids=${cart.ids.join(",")}`,
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
      <div>
        <h3>Checkout</h3>
        <hr />
        <div>
          <h3>Book Name</h3>
          <h3>Price</h3>
        </div>
        <hr />
        {data.results.map((book) => {
          const bookPriceIndex = cart.ids.indexOf(book.id);
          const bookPrice = cart.prices[bookPriceIndex];
          return (
            <div key={book.id}>
              <span>
                {book.title.length > 20
                  ? book.title.slice(0, 20) + "..."
                  : book.title}
              </span>
              <span>${bookPrice}</span>
            </div>
          );
        })}
        <h3>
          Grand Total: $
          {cart.prices.reduce((acc, curr) => {
            return parseFloat(acc) + parseFloat(curr);
          }, 0)}
        </h3>
        <button>Checkout</button>
      </div>
      <div>
        {data.results.map((book) => {
          const bookPriceIndex = cart.ids.indexOf(book.id);
          const bookPrice = cart.prices[bookPriceIndex];
          return (
            <div key={book.id}>
              <h3>
                {book.title.length > 58
                  ? book.title.slice(0, 58) + "..."
                  : book.title}
              </h3>
              <h3>${bookPrice}</h3>
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
          );
        })}

        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
