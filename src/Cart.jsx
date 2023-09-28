import { useContext } from "react";
import { AppContext } from "./App";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Cart() {
  const { cart } = useContext(AppContext);
  const [bookImgUrl, setBookImgUrl] = useState([]);

  function getCartBooks(books) {
    const bookIds = books.join(",");
    axios.get(`https://gutendex.com/books?ids=${bookIds}`).then((res) => {
      setBookImgUrl(res.data.results)
      console.log(res.data.results)
    });
  }

  useEffect(() => {
    getCartBooks(cart);
  }, [])

  return (
    <div>
      {cart.map((book) => (
        <h1 key={book}>{book}</h1>
      ))}
      {bookImgUrl.map(book => (
        <h1 key={book.id}>{book.title}</h1>
      ))}
    </div>
  );
}

export default Cart;
