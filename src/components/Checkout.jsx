function Checkout({ data, cart }) {
  {
    data.results.map((book) => {
      const bookPriceIndex = cart.ids.indexOf(book.id);
      const bookPrice = cart.prices[bookPriceIndex];
      return (
        <div
          key={book.id}
          className=" w-[75vw] sm:w-[60vw] md:w-[40vw] xl:w-[30vw] bg-gray-50 shadow-xl rounded-xl border-main_yellow border-4 flex flex-col p-6 gap-4 justify-between md:grid md:grid-cols-2"
        >
          <div className="flex flex-col gap-1 md:gap-4">
            <h3 className="text-xl">
              {book.title.length > 50
                ? book.title.slice(0, 50) + "..."
                : book.title}
            </h3>
            <h3 className="text-sm">{book.authors[0]?.name}</h3>
            <h3 className="text-lg">${bookPrice}</h3>
            <button>+</button>
            <input type="number" />
            <button>-</button>
          </div>
          <img
            src={book.formats["image/jpeg"]}
            alt={book.title}
            className="md:col-start-1 md:row-start-1 md:row-end-3"
          />
        </div>
      );
    });
  }
}

export default Checkout;
