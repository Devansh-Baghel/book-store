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
    <div>
      {data.results.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          {/* <p>{book.authors[0].name}</p> */}
          <p>{book.id}</p>
          <img src={book.formats["image/jpeg"]} />
          {/* <p>{price}</p> */}
        </div>
      ))}
    </div>
  );
}

export default WishList;
