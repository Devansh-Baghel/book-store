import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

function Store() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart, wishList, setCart, setWishList } = useContext(AppContext)

  function getRandPrice() {
    const randomCents = Math.floor(Math.random() * (2100 - 500 + 1)) + 500;
    const randomPrice = (randomCents / 100).toFixed(2);
    return randomPrice
  }

  function getBooks() {
    axios.get("https://gutendex.com/books/").then((res) => {
      console.log(res.data.results);
      console.log(res.data.results[1].formats["image/jpeg"]);
      const reverseBooks = res.data.results.reverse();
      setBooks(reverseBooks);
      setLoading(false);
    });
  }

  useEffect(() => {
    getBooks();
    console.log(getRandPrice())
  }, []);

  function addToCart(id) {
    setCart([...cart, id])
    console.log(cart)
  }

  function addToWishList(id) {
    setWishList([...wishList, id])
    console.log(wishList)
  }

  if (!loading) {
    return (
      <div>
        <h1>This is the store, List of books to buy lie here</h1>
        <Link to={"../cart"}>Go to Cart</Link>
        <h1>{cart + wishList}</h1>

        <div className="grid grid-cols-4">
          {books.map((book) => (
            <div key={book.id} className="m-8">
              <h3>{book.title}</h3>
              <img
                src={book.formats["image/jpeg"]}
                alt={book.title}
              />
              <button onClick={() => {addToCart(book.id)}}>Add to Cart</button>
              <button onClick={() => {addToWishList(book.id)}}>Add to Wish List</button>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please wait books are loading ...</h1>
      </div>
    );
  }
}

export default Store;