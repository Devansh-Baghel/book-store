import { useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function WishList() {
  const { wishList } = useContext(AppContext);
  const [bookData, setBookData] = useState([]);

  function getCartBooks(books) {
    const bookIds = books.join(",");
    axios.get(`https://gutendex.com/books?ids=${bookIds}`).then((res) => {
      setBookData(res.data.results);
      console.log(res.data.results);
    });
  }

  useEffect(() => {
    getCartBooks(wishList);
  }, []);

  return (
    <div>
      {bookData.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.authors[0].name}</p>
          <p>{book.id}</p>
          <img src={book.formats["image/jpeg"]} />
          {/* <p>{price}</p> */}
        </div>
      ))}
    </div>
  );
}

export default WishList
