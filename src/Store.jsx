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

        <div className="grid grid-cols-4">
          {books.map((book) => (
            <div key={book.id} className="m-8">
              <h3>{book.title}</h3>
              <img
                src={book.formats["image/jpeg"]}
                alt={book.title}
              />
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
