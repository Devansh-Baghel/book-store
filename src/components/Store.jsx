import { useEffect, useContext, useState } from "react";
import { AppContext } from "../App";
import Loader from "./Loader";
import StoreInfoNotificationBar from "./StoreInfoNotificationBar";
import useSWR from "swr";
import { toast, ToastContainer } from "react-toastify";

const autoCloseTime = 4000;

const toastSuccess = (content) => {
  toast.success(content, { autoClose: autoCloseTime, position: "top-left" });
};

const toastError = (content) => {
  toast.error(content, { autoClose: autoCloseTime, position: "top-left", });
};

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Store() {
  // const [pageCount, setPageCount] = useState(1);
  const { cart, wishList, setCart, setWishList } = useContext(AppContext);
  const { data, error, isLoading } = useSWR(
    `https://gutendex.com/books/?page=1`,
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

  function addToCart(id, price) {
    if (cart.ids.includes(id)) {
      toastError("Item is already present in your cart");
      return;
    }
    toastSuccess("Added to Cart");
    setCart({ ids: [...cart.ids, id], prices: [...cart.prices, price] });
  }

  function addToWishList(id, price) {
    if (wishList.ids.includes(id)) {
      toastError("Item is already present in your wish list");
      return;
    }

    setWishList({
      ids: [...wishList.ids, id],
      prices: [...wishList.prices, price],
    });

    toastSuccess("Added to wish list");
  }

  if (error) {
    return <div className="text-2xl text-center mt-20">There was an error</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  console.log(data)

  return (
    <div className="flex justify-center mb-20 flex-col items-center mt-12 gap-8 sm:mt-0">
      <ToastContainer limit={4} />
      <StoreInfoNotificationBar />
      <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-8 ">
        {data.results.map((book) => {
          const randomPrice = getRandPrice();
          return (
            <div
              key={book.id}
              className=" w-[75vw] sm:w-[60vw] md:w-[40vw] xl:w-[30vw] bg-gray-50 shadow-xl rounded-xl border-main_yellow border-4 flex flex-col p-6 gap-4 justify-between md:grid md:grid-cols-2 md:grid-rows-2"
            >
              <div>
                <h3 className="text-xl md:col-start-2">
                  {book.title.length > 50
                    ? book.title.slice(0, 50) + "..."
                    : book.title}
                </h3>
                <h2>${randomPrice}</h2>
              </div>
              <img
                src={book.formats["image/jpeg"]}
                alt={book.title}
                className="md:col-start-1 md:row-start-1 md:row-end-3"
                loading="lazy"
              />
              <div className="flex flex-col gap-4 md:self-center">
                <button
                  className="bg-main_yellow rounded-md p-2"
                  onClick={() => {
                    addToCart(book.id, randomPrice);
                  }}
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    addToWishList(book.id, randomPrice);
                  }}
                >
                  Add to Wish List
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* <button onClick={loadMoreData}>Load More</button> */}
    </div>
  );
}

export default Store;
