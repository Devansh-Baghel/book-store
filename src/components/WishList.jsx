import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import axios from "axios";
import Loader from "./Loader";

function WishList() {
  const { wishList } = useContext(AppContext);
  const [bookData, setBookData] = useState([]);
  const [hasData, setHasData] = useState();
  const [loading, setLoading] = useState(true);

  function getCartBooks(books) {
    const bookIds = books.join(",");
    axios.get(`https://gutendex.com/books?ids=${bookIds}`).then((res) => {
      setBookData(res.data.results);
      console.log(res.data.results);
      setLoading(false);
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

  if (hasData && !loading) {
    return (
      <div>
        {bookData.map((book) => (
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
  } else if (!hasData) {
    return (
      <div>
        <h1>Your wish list is empty</h1>
      </div>
    );
  } else if (hasData && loading) {
    return <Loader />;
  }
}

export default WishList;
