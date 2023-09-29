import { useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function WishList() {
  const { wishList } = useContext(AppContext);
  const [bookData, setBookData] = useState([]);
  const [hasData, setHasData] = useState();

  function getCartBooks(books) {
    const bookIds = books.join(",");
    axios.get(`https://gutendex.com/books?ids=${bookIds}`).then((res) => {
      setBookData(res.data.results);
      console.log(res.data.results);
    });
  }

  useEffect(() => {
    getCartBooks(wishList);
    if (wishList.length !== 0) {
      setHasData(true);
    } else {
      setHasData(false);
    }
  }, []);

  if (hasData) {
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
  } else {
    return (
      <div>
        <h1>Your wish list is empty</h1>
      </div>
    )
  }
}

export default WishList
