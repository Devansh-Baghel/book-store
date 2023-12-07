import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import Loader from "./Loader";
import emptyCart from "../assets/undraw_empty_cart.svg";
import EmptyList from "./EmptyList";
import useSWR from "swr";
import CheckoutBooks from "./CheckoutBooks";
import { toast, ToastContainer } from "react-toastify";

const toastSuccess = (content) => {
  toast.success(content, { autoClose: 4000, position: "top-left" });
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Cart() {
  const { cart } = useContext(AppContext);
  const { data, error, isLoading } = useSWR(
    cart.ids.length === 0
      ? null
      : `https://gutendex.com/books?ids=${cart.ids.join(",")}`,
    fetcher,
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
      <ToastContainer />
      <div className="pb-20 flex flex-col items-center pt-28 sm:pt-14 md:grid md:grid-cols-2 gap-10 md:gap-0 lg:px-[5vw] 2xl:[12vw]">
        <div className="bg-gray-50 flex flex-col shadow-xl rounded-xl border-main_yellow border-4 w-[75vw] md:w-[40vw] max-w-[600px] md:col-start-2 md:self-start md:justify-self-center py-10 px-3 sm:px-8">
          <h3 className="text-xl text-center font-medium mb-2">Checkout</h3>
          <hr className="border-t-[1px] border-stone-900" />
          <div className="flex justify-between text-lg font-medium py-2">
            <h3>Book Name</h3>
            <h3>Price</h3>
          </div>
          <hr className="border-t-[1px] border-stone-900 mb-2" />
          {data.results.map((book) => {
            const bookPriceIndex = cart.ids.indexOf(book.id);
            const bookPrice = cart.prices[bookPriceIndex];
            return (
              <div key={book.id}>
                <div className="flex justify-between gap-3">
                  <span>
                    {book.title.length > 40
                      ? book.title.slice(0, 40) + "..."
                      : book.title}
                  </span>
                  <span>${bookPrice}</span>
                </div>
                <hr />
              </div>
            );
          })}
          <hr className="border-t-[1px] border-stone-900" />
          <div className="flex justify-between font-medium text-lg py-2">
            <h3 className="">Grand Total:</h3>
            <span>
              $
              {Math.round(
                cart.prices.reduce((acc, curr) => {
                  return parseFloat(acc) + parseFloat(curr);
                }, 0) * 100,
              ) / 100}
            </span>
          </div>
          <button
            className="bg-main_yellow rounded-md p-2 text-xl w-[80%] mt-3 max-w-[400px] self-center"
            onClick={() => {
              toastSuccess("Your order has been confirmed!");
            }}
          >
            Checkout
          </button>
        </div>
        <div className="grid grid-col-1 justify-center gap-8 md:row-start-1">
          {data.results.map((book) => {
            const bookPriceIndex = cart.ids.indexOf(book.id);
            const bookPrice = cart.prices[bookPriceIndex];
            return (
              <CheckoutBooks book={book} bookPrice={bookPrice} key={book.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
