import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Store() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  function getBooks() {
    axios.get("https://gutendex.com/books/").then((res) => {
      console.log(res.data.results);
      console.log(res.data.results[1].formats["image/jpeg"]);
      setBooks(res.data.results);
      setLoading(false);
    });
  }

  useEffect(() => {
    getBooks();
  }, []);

  if (!loading) {
    return (
      <div>
        <h1>This is the store, List of books to buy lie here</h1>
        <img src={books[1].formats["image/jpeg"]} />
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
