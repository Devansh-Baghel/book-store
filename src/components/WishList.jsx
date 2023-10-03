import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import Loader from "./Loader";
import emptyWishList from "../assets/undraw_bookmarks.svg";
import EmptyList from "./EmptyList";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function WishList() {
  const { wishList } = useContext(AppContext);
  const { data, error, isLoading } = useSWR(
    wishList.length === 0
      ? null
      : `https://gutendex.com/books?ids=${wishList.join(",")}`,
    fetcher
  );

  if (error) {
    return <div className="text-2xl text-center mt-20">There was an error</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <EmptyList src={emptyWishList} page={"wish list"} />;
  }

  return (
    <div className="flex justify-center store_page">
      <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 justify-center mt-20 gap-8 ">
        {data.results.map((book) => {
          return (
            <div
              key={book.id}
              className=" w-[75vw] sm:w-[60vw] md:w-[40vw] xl:w-[30vw] bg-gray-50 shadow-xl rounded-xl border-yellow border-4 flex flex-col p-6 gap-4 justify-between md:grid md:grid-cols-2 md:grid-rows-2"
            >
              <div>
                <h3 className="text-xl md:col-start-2">
                  {book.title.length > 50
                    ? book.title.slice(0, 50) + "..."
                    : book.title}
                </h3>
              </div>
              <img
                src={book.formats["image/jpeg"]}
                alt={book.title}
                className="md:col-start-1 md:row-start-1 md:row-end-3"
              />
              <div className="flex flex-col gap-4 md:self-center">
                <button
                  className="bg-yellow rounded-md p-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WishList;
