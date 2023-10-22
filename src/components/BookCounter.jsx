import { useState } from "react";

function BookCounter() {
  const [orderCount, setOrderCount] = useState(1)

  function increaseCount() {
    if (orderCount === 10) return
    setOrderCount(orderCount + 1);
  }

  function decreaseCount() {
    if (orderCount === 1) return
    setOrderCount(orderCount - 1);
  }

  return (
    <div>
      <button onClick={increaseCount}>+</button>
      <input type="number" min={0} max={10} value={orderCount}/>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
}

export default BookCounter;
