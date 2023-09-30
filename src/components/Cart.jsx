import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import Loader from "./Loader";
import emptyCart from "../assets/undraw_empty_cart.svg";
import EmptyList from "./EmptyList";

function Cart() {
  const { cart } = useContext(AppContext);
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
    getCartBooks(cart);
    if (cart.length !== 0) {
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
            <div>
              <button>+</button>
              <span>1</span>
              <button>-</button>
            </div>
          </div>
        ))}

        <button>Checkout</button>
      </div>
    );
  } else if (!hasData) {
    return <EmptyList src={emptyCart} page={"cart"}/>;
  } else if (hasData && loading) {
    return <Loader />;
  }
}

export default Cart;
