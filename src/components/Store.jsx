import { useEffect, useContext, useState } from "react";
import { AppContext } from "../App";
import Loader from "./Loader";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Store() {
  const { cart, wishList, setCart, setWishList } = useContext(AppContext);
  const { data, error, isLoading } = useSWR(
    "https://gutendex.com/books/?page=1",
    fetcher
  );

  function getRandPrice() {
    const randomCents = Math.floor(Math.random() * (2100 - 500 + 1)) + 500;
    const randomPrice = (randomCents / 100).toFixed(2);
    return randomPrice;
  }

  useEffect(() => {
    console.log(getRandPrice());
  }, []);

  function addToCart(id) {
    setCart([...cart, id]);
  }

  function addToWishList(id) {
    setWishList([...wishList, id]);
  }

  if (error) {
    return <div className="text-2xl text-center mt-20">There was an error</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 justify-center mt-20">
        {data.results.reverse().map((book) => (
          <div
            key={book.id}
            className="m-8 w-[80vw] sm:w-[60vw] md:w-[40vw] bg-gray-50 shadow-xl rounded-xl border-yellow border-4 flex flex-col p-6 gap-4"
          >
            <h3 className="text-xl">{book.title}</h3>
            <img src={book.formats["image/jpeg"]} alt={book.title} />
            <button
              className="bg-yellow rounded-md p-2"
              onClick={() => {
                addToCart(book.id);
              }}
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                addToWishList(book.id);
              }}
            >
              Add to Wish List
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
